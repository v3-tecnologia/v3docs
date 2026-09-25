import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import kebabCase from "lodash/kebabCase.js";
import YAML from "yaml";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const canonicalPath = join(root, "examples/source/order.yaml");
const localizedSpecs = [
  join(root, "examples/order.yaml"),
  join(root, "examples/en/order.yaml"),
];
const translatedKeys = new Set(["description", "summary", "title"]);
const methods = new Set(["get", "post", "put", "patch", "delete", "head", "options"]);

function identity(value) {
  if (!value || typeof value !== "object") return undefined;
  if (value.$ref) return `$ref:${value.$ref}`;
  if (value.operationId) return `operationId:${value.operationId}`;
  if (value.name && value.in) return `parameter:${value.in}:${value.name}`;
  return undefined;
}

function mergeLocale(source, existing, key) {
  if (Array.isArray(source)) {
    if (key === "tags" && Array.isArray(existing)) return existing;

    return source.map((sourceValue, index) => {
      const sourceIdentity = identity(sourceValue);
      const existingValue = sourceIdentity
        ? existing?.find((value) => identity(value) === sourceIdentity)
        : existing?.[index];
      return mergeLocale(sourceValue, existingValue, key);
    });
  }

  if (source && typeof source === "object") {
    const result = {};
    for (const [childKey, sourceValue] of Object.entries(source)) {
      result[childKey] = mergeLocale(sourceValue, existing?.[childKey], childKey);
    }
    return result;
  }

  if (
    translatedKeys.has(key) &&
    typeof existing === "string" &&
    typeof source === "string"
  ) {
    return existing;
  }

  return source;
}

const sourceDocument = YAML.parse(readFileSync(canonicalPath, "utf8"));
if (!sourceDocument?.definitions || !sourceDocument?.paths) {
  throw new Error(`Expected a Swagger document with definitions and paths: ${canonicalPath}`);
}

let generatedOperationIds = 0;
for (const pathItem of Object.values(sourceDocument.paths)) {
  for (const [method, operation] of Object.entries(pathItem)) {
    if (!methods.has(method) || operation.operationId || !operation.summary) continue;
    operation.operationId = kebabCase(operation.summary.trim());
    generatedOperationIds += 1;
  }
}

console.log(`Generated ${generatedOperationIds} stable operationId(s) from the source summaries.`);
console.log(`Using versioned Swagger source: ${canonicalPath}`);

for (const localizedPath of localizedSpecs) {
  const existingDocument = YAML.parse(readFileSync(localizedPath, "utf8"));
  const mergedDocument = mergeLocale(sourceDocument, existingDocument);
  writeFileSync(localizedPath, YAML.stringify(mergedDocument, { lineWidth: 0 }));
  console.log(`Updated localized spec: ${localizedPath.replace(`${root}/`, "")}`);
}
