import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "yaml";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = resolve(
  process.argv[2] ??
    process.env.ORDER_OPENAPI_SOURCE ??
    "../Cloud/Orders/order-api/api/docs/public/swagger.yaml",
);
const destinationPath = resolve(root, "examples/source/order.yaml");
const source = readFileSync(sourcePath, "utf8");
const document = YAML.parse(source);

if (!document?.definitions || !document?.paths) {
  throw new Error(`Expected a Swagger document with definitions and paths: ${sourcePath}`);
}

mkdirSync(dirname(destinationPath), { recursive: true });
copyFileSync(sourcePath, destinationPath);
console.log(`Imported ${sourcePath} -> ${destinationPath}`);
