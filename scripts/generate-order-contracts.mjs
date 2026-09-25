import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "yaml";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = join(root, "examples/source/order.yaml");
const ptPath = join(root, "examples/order.yaml");
const enPath = join(root, "examples/en/order.yaml");
const ptOutputDir = join(root, "docs/openapi/order/contracts");
const enOutputDir = join(root, "i18n/en/docusaurus-plugin-content-docs/current/openapi/order/contracts");
const sidebarOutputPath = join(root, "sidebars/order-contracts.generated.json");
const enTranslationsPath = join(
  root,
  "i18n/en/docusaurus-plugin-content-docs/current.json",
);
const generatedMarker = "generated: order-contract";
const labels = {
  pt: { field: "Campo", type: "Tipo", required: "Obrigatório", description: "Descrição", yes: "Sim", no: "Não", values: "Valores" },
  en: { field: "Field", type: "Type", required: "Required", description: "Description", yes: "Yes", no: "No", values: "Values" },
};
const fallbackTitles = {
  CAM_BEHAVIOR: { pt: "Comportamento da câmera", en: "Camera behavior" },
};
const englishTitles = {
  ADD_WIFI: "Add Wi-Fi",
  CONFIG_AUDIO: "Configure audio",
  CONFIG_AUDIO_EVENT: "Configure audio event",
  DELETE_WIFI: "Delete Wi-Fi",
  DEVICE_STATE: "Device state",
  REQUEST_IMAGE: "Request image",
  REQUEST_VIDEO: "Request video",
  REBOOT: "Reboot",
  VISION_CONFIG: "Vision configuration",
  PERIODIC: "Periodic",
  DATAPLAN_CONFIG: "Data plan configuration",
  OPEN_STREAM: "Open stream",
  CLOSE_STREAM: "Close stream",
  CAM_BEHAVIOR: "Camera behavior",
  CARD_DRIVER: "Driver card",
  FIRMWARE_UPDATE: "Firmware update",
};

function readYaml(path) {
  const document = YAML.parse(readFileSync(path, "utf8"));
  if (!document?.definitions || !document?.paths) {
    throw new Error(`Expected Swagger definitions and paths in ${path}`);
  }
  return document;
}

function refName(ref) {
  return ref?.split("/").at(-1);
}

function normalize(value) {
  return value.toUpperCase().replace(/[^A-Z0-9]/g, "");
}

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function fieldType(schema = {}) {
  if (schema.type === "array") {
    return schema.items?.$ref
      ? `array of ${refName(schema.items.$ref).replace(/^dto\./, "").replace(/DTO$/, "")}`
      : "array";
  }
  if (schema.type) return schema.type;
  if (schema.$ref) return refName(schema.$ref).replace(/^dto\./, "").replace(/DTO$/, "");
  if (schema.allOf?.length) return fieldType(schema.allOf[0]);
  return "object";
}

function cell(value) {
  return String(value ?? "").replaceAll("|", "&#124;").replaceAll("\n", "<br />");
}

function quote(value) {
  return JSON.stringify(String(value));
}

function generatedPage({ locale, type, title, definition }) {
  const language = labels[locale];
  const required = new Set(definition.required ?? []);
  const rows = Object.entries(definition.properties ?? {}).map(([name, schema]) => {
    const description = [
      schema.description ?? "",
      schema.enum?.length
        ? `${language.values}: ${schema.enum.map((value) => `\`${value}\``).join(", ")}`
        : "",
    ]
      .filter(Boolean)
      .join(" ");
    return `| \`${name}\` | \`${fieldType(schema)}\` | ${required.has(name) ? language.yes : language.no} | ${cell(description)} |`;
  });
  const intro = locale === "pt"
    ? `Contrato do tipo de ordem \`${type}\`.`
    : `Contract for the \`${type}\` order type.`;
  const table = rows.length
    ? [
        `| ${language.field} | ${language.type} | ${language.required} | ${language.description} |`,
        "| --- | --- | --- | --- |",
        ...rows,
      ].join("\n")
    : locale === "pt"
      ? "Este tipo de ordem não possui campos de parâmetros documentados."
      : "This order type has no documented parameter fields.";

  return [
    "---",
    `title: ${quote(title)}`,
    `description: ${quote(intro)}`,
    `sidebar_label: ${quote(title)}`,
    generatedMarker,
    "---",
    "",
    intro,
    "",
    table,
    "",
  ].join("\n");
}

function findDefinition(document, ref) {
  const name = refName(ref);
  return document.definitions?.[name];
}

const source = readYaml(sourcePath);
const pt = readYaml(ptPath);
const en = readYaml(enPath);
const orderTypes = source.definitions?.["model.OrderType"]?.enum;
if (!Array.isArray(orderTypes)) {
  throw new Error("Could not find model.OrderType.enum");
}

const ptOneOf = pt.definitions?.["dto.OrderDTO"]?.properties?.parameters?.items?.oneOf ?? [];
const enOneOf = en.definitions?.["dto.OrderDTO"]?.properties?.parameters?.items?.oneOf ?? [];
const contracts = [];

for (const orderType of orderTypes) {
  if (["CONFIG", "INTERNAL"].includes(orderType)) continue;
  const sourceDefinitionEntry = Object.entries(source.definitions).find(([name]) =>
    name.startsWith("dto.") &&
      normalize(name.replace(/^dto\./, "").replace(/DTO$/, "")) === normalize(orderType),
  );
  if (!sourceDefinitionEntry) {
    throw new Error(`No DTO schema found for order type ${orderType}`);
  }
  const [definitionKey] = sourceDefinitionEntry;
  const ref = `#/definitions/${definitionKey}`;
  const identifier = slug(orderType);
  const ptVariant = ptOneOf.find((item) => item.$ref === ref);
  const enVariant = enOneOf.find((item) => item.$ref === ref);
  const definitionName = definitionKey.replace(/^dto\./, "").replace(/DTO$/, "");
  const ptTitle = ptVariant?.title ?? fallbackTitles[orderType]?.pt ?? definitionName;
  const enTitle = englishTitles[orderType] ?? enVariant?.title ?? fallbackTitles[orderType]?.en ?? definitionName;
  const ptDefinition = findDefinition(pt, ref);
  const enDefinition = findDefinition(en, ref);
  if (!ptDefinition || !enDefinition) {
    throw new Error(`Missing localized definition for ${ref}`);
  }

  const ptFile = join(ptOutputDir, `${identifier}.mdx`);
  const enFile = join(enOutputDir, `${identifier}.mdx`);
  const ptApiFile = join(ptOutputDir, `${identifier}.api.mdx`);
  const enApiFile = join(enOutputDir, `${identifier}.api.mdx`);
  const existingPage = existsSync(ptFile) ? readFileSync(ptFile, "utf8") : "";
  const isManaged = existingPage.includes(generatedMarker);

  if (isManaged || (!existsSync(ptFile) && !existsSync(ptApiFile))) {
    const sourceVariant = source.definitions?.["dto.OrderDTO"]?.properties?.parameters?.items?.oneOf?.find((item) => item.$ref === ref);
    if (
      !fallbackTitles[orderType]?.pt &&
      (!ptVariant?.title || ptVariant.title === sourceVariant?.title)
    ) {
      throw new Error(`Add a Portuguese title translation for order type ${orderType} in examples/order.yaml`);
    }

    const sourceProperties = source.definitions[definitionKey]?.properties ?? {};
    for (const [propertyName, sourceProperty] of Object.entries(sourceProperties)) {
      const sourceDescription = sourceProperty.description;
      const localizedDescription = ptDefinition.properties?.[propertyName]?.description;
      if (sourceDescription && localizedDescription === sourceDescription) {
        throw new Error(
          `Translate ${definitionKey}.${propertyName} in examples/order.yaml before generating Portuguese contract pages`,
        );
      }
    }

    mkdirSync(dirname(ptFile), { recursive: true });
    mkdirSync(dirname(enFile), { recursive: true });
    writeFileSync(ptFile, generatedPage({ locale: "pt", type: orderType, title: ptTitle, definition: ptDefinition }));
    writeFileSync(enFile, generatedPage({ locale: "en", type: orderType, title: enTitle, definition: enDefinition }));
    console.log(`Generated PT/EN contract: ${orderType}`);
  }

  const ptPageExists = existsSync(ptFile) || existsSync(ptApiFile);
  const enPageExists = existsSync(enFile) || existsSync(enApiFile);
  if (!ptPageExists || !enPageExists) {
    throw new Error(`Missing PT/EN contract page for ${orderType}`);
  }
  contracts.push({ id: `openapi/order/contracts/${identifier}`, label: ptTitle, enLabel: enTitle });
}

const sidebarItems = contracts.map(({ id, label }) => ({
  type: "doc",
  id,
  label,
  className: "api-method post",
}));
writeFileSync(sidebarOutputPath, `${JSON.stringify(sidebarItems, null, 2)}\n`);

const translations = JSON.parse(readFileSync(enTranslationsPath, "utf8"));
for (const { id, label, enLabel } of contracts) {
  translations[`sidebar.apiSidebar.doc.${label}`] = {
    message: enLabel,
    description: `Generated sidebar label for ${id}`,
  };
}
writeFileSync(enTranslationsPath, `${JSON.stringify(translations, null, 2)}\n`);
console.log(`Updated generated contract sidebar: ${contracts.length} item(s)`);
