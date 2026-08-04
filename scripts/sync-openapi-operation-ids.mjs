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
  let inOperation = false;
  let hasOperationId = false;

  for (const line of lines) {
    if (/^  \/|^  \w/.test(line) && !/^    /.test(line) && line.endsWith(":")) {
      inOperation = false;
      hasOperationId = false;
    }

    if (/^    (get|post|put|patch|delete|head|options):$/.test(line)) {
      inOperation = true;
      hasOperationId = false;
      result.push(line);
      continue;
    }

    if (/^      operationId:/.test(line)) {
      hasOperationId = true;
      result.push(line);
      continue;
    }

    const summaryMatch = line.match(/^      summary: (.+)$/);
    if (summaryMatch && inOperation) {
      const rawSummary = summaryMatch[1].trim();
      if (!hasOperationId) {
        result.push(`      operationId: ${slugFromSummary(rawSummary)}`);
        hasOperationId = true;
      }
      if (translateSummary) {
        const enSummary = translateSummary.get(rawSummary);
        if (enSummary) {
          result.push(`      summary: ${enSummary}`);
          continue;
        }
      }
      result.push(line);
      continue;
    }

    result.push(line);
  }

  return `${result.join("\n")}\n`;
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
