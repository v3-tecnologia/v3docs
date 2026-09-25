import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import kebabCase from "lodash/kebabCase.js";

const root = new URL("..", import.meta.url).pathname;
const examplesDir = join(root, "examples");
const enExamplesDir = join(examplesDir, "en");
const i18nPath = join(
  root,
  "i18n/en/docusaurus-plugin-content-docs/current.json",
);

function loadEnSummaries() {
  const map = new Map();
  const i18n = JSON.parse(readFileSync(i18nPath, "utf8"));
  for (const [key, entry] of Object.entries(i18n)) {
    if (!key.startsWith("sidebar.apiSidebar.doc.")) continue;
    map.set(key.replace("sidebar.apiSidebar.doc.", ""), entry.message);
  }
  return map;
}

function slugFromSummary(summary) {
  return kebabCase(summary.trim());
}

function processYaml(content, { translateSummary } = {}) {
  const lines = content.split("\n");
  const result = [];
  const methodLine = /^    (get|post|put|patch|delete|head|options):$/;
  const nextMethodLine = /^    (get|post|put|patch|delete|head|options):$/;
  const nextPathLine = /^  \S.*:$/;

  for (let index = 0; index < lines.length; index += 1) {
    const operationMatch = lines[index].match(methodLine);
    if (!operationMatch) {
      result.push(lines[index]);
      continue;
    }

    let end = index + 1;
    while (
      end < lines.length &&
      !nextMethodLine.test(lines[end]) &&
      !nextPathLine.test(lines[end])
    ) {
      end += 1;
    }

    const operationLines = lines.slice(index + 1, end);
    const hasOperationId = operationLines.some((line) => /^      operationId:/.test(line));
    result.push(lines[index]);

    for (const line of operationLines) {
      const summaryMatch = line.match(/^      summary: (.+)$/);
      if (!summaryMatch) {
        result.push(line);
        continue;
      }

      const rawSummary = summaryMatch[1].trim();
      if (!hasOperationId) {
        result.push(`      operationId: ${slugFromSummary(rawSummary)}`);
      }
      const translatedSummary = translateSummary?.get(rawSummary);
      result.push(
        translatedSummary ? `      summary: ${translatedSummary}` : line,
      );
    }

    index = end - 1;
  }

  return result.join("\n");
}

const enSummaries = loadEnSummaries();

for (const file of readdirSync(examplesDir).filter((f) => f.endsWith(".yaml"))) {
  const path = join(examplesDir, file);
  writeFileSync(path, processYaml(readFileSync(path, "utf8")));
  console.log(`operationId: examples/${file}`);
}

for (const file of readdirSync(enExamplesDir).filter((f) => f.endsWith(".yaml"))) {
  const path = join(enExamplesDir, file);
  writeFileSync(
    path,
    processYaml(readFileSync(path, "utf8"), { translateSummary: enSummaries }),
  );
  console.log(`operationId + EN summary: examples/en/${file}`);
}
