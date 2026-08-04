import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const openapiDir = join(root, "docs/openapi");

const replacements = [
  [/children=\{"Request"\}/g, 'children={"Requisição"}'],
  [/title=\{"Body"\}/g, 'title={"Corpo"}'],
  [/children=\{"Authentication"\}/g, 'children={"Autenticação"}'],
  [/children=\{"Version: 0\.0\.1"\}/g, 'children={"Versão: 0.0.1"}'],
  [/children=\{"Version: ([^"]+)"\}/g, 'children={"Versão: $1"}'],
  [
    /label=\{undefined\}\s*\n\s*responses=/g,
    'label={"Respostas"}\n  responses=',
  ],
  [/Security Scheme Type:/g, "Tipo de esquema de segurança:"],
  [/Header parameter name:/g, "Nome do parâmetro no header:"],
  [/sidebar_label: Introduction/g, "sidebar_label: Introdução"],
];

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) {
      walk(path);
      continue;
    }
    if (!path.endsWith(".mdx")) continue;
    let content = readFileSync(path, "utf8");
    let changed = false;
    for (const [pattern, replacement] of replacements) {
      const next = content.replace(pattern, replacement);
      if (next !== content) {
        content = next;
        changed = true;
      }
    }
    if (changed) {
      writeFileSync(path, content);
      console.log(`localized: ${path.replace(root, "")}`);
    }
  }
}

walk(openapiDir);
