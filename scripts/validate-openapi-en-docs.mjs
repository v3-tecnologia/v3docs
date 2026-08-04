import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const enOpenapiDir = join(
  root,
  "i18n/en/docusaurus-plugin-content-docs/current/openapi",
);

const ptPatterns = [
  /\bServiço\b/,
  /\bRetorna a lista\b/,
  /\bRetorna os dados\b/,
  /\bCadastra um\b/,
  /\bAtualiza os dados\b/,
  /\bPermite baixar\b/,
  /\bRecupera a lista\b/,
  /\bRecupera uma lista\b/,
  /\bEm caso de sucesso\b/,
  /\bPara mais informações\b/,
  /\bQuando um token\b/,
  /\bdispositivos em campo\b/,
  /\borganizar e manter\b/,
  /\binstruções remotas\b/,
  /\bacompanhamento de cada solicitação\b/,
  /\bIntrodução\b/,
  /children=\{"Versão:/,
  /children=\{"Requisição"\}/,
  /children=\{"Autenticação"\}/,
  /label=\{"Respostas"\}/,
];

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) {
      walk(path, files);
      continue;
    }
    if (path.endsWith(".mdx")) files.push(path);
  }
  return files;
}

const issues = [];

for (const file of walk(enOpenapiDir)) {
  const content = readFileSync(file, "utf8");
  for (const pattern of ptPatterns) {
    if (pattern.test(content)) {
      issues.push(`${file.replace(root, "")}: ${pattern}`);
    }
  }
}

if (issues.length > 0) {
  console.error("Portuguese content found in EN OpenAPI docs:");
  for (const issue of issues) console.error(`  - ${issue}`);
  process.exit(1);
}

console.log("EN OpenAPI docs look good.");
