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

function readOperationPageMetadata(locale) {
  const operationPage = locale === "pt"
    ? join(root, "docs/openapi/order/create-new-order.api.mdx")
    : join(
        root,
        "i18n/en/docusaurus-plugin-content-docs/current/openapi/order/create-new-order.api.mdx",
      );
  const content = readFileSync(operationPage, "utf8");
  const api = content.match(/^api: (.+)$/m)?.[1];
  const infoPath = content.match(/^info_path: (.+)$/m)?.[1];
  const sidebarClassName = content.match(/^sidebar_class_name: (.+)$/m)?.[1];

  if (!api || !infoPath) {
    throw new Error(`Missing OpenAPI page metadata in ${operationPage}`);
  }
  return { api, infoPath, sidebarClassName };
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

function quote(value) {
  return JSON.stringify(String(value));
}

function exampleValue(name, schema = {}) {
  if (schema.enum?.length) return schema.enum[0];
  if (schema.type === "boolean") return false;
  if (schema.type === "integer" || schema.type === "number") return 1;
  if (schema.type === "array") return [];
  if (schema.type === "object") return {};
  const examples = {
    action: "register_driver",
    cam_behavior: "recording_and_stream",
    card_number: "CARD-12345",
    driver_id: "driver-001",
    driver_name: "Alex Morgan",
    version: "2.4.0",
  };
  return examples[name] ?? "example";
}

function operationExample(type, definition) {
  const parameters = Object.fromEntries(
    Object.entries(definition.properties ?? {}).map(([name, schema]) => [
      name,
      exampleValue(name, schema),
    ]),
  );
  if (type === "CARD_DRIVER") parameters.action = "register_driver";
  return {
    orders: [
      {
        type,
        correlation_id: `CMD_${type}_001`,
        parameters: [parameters],
      },
    ],
  };
}

function requestSchema(type, title, definition, locale) {
  const pt = locale === "pt";
  return {
    type: "object",
    required: ["orders"],
    properties: {
      orders: {
        type: "array",
        description: pt ? "Lista de ordens a serem processadas." : "List of orders to be processed.",
        items: {
          type: "object",
          required: ["type", "parameters"],
          properties: {
            type: {
              type: "string",
              description: pt ? "Tipo da ordem solicitada." : "Requested order type.",
              enum: [type],
            },
            correlation_id: {
              type: "string",
              description: pt
                ? "Identificador opcional para rastrear a ordem."
                : "Optional identifier used to track the order.",
            },
            parameters: {
              type: "array",
              description: pt
                ? "Parâmetros específicos deste tipo de ordem."
                : "Parameters specific to this order type.",
              items: {
                type: "object",
                title,
                required: definition.required ?? [],
                properties: definition.properties ?? {},
              },
              example: [operationExample(type, definition).orders[0].parameters[0]],
            },
          },
        },
      },
    },
  };
}

function generatedPage({ locale, type, title, definition }) {
  const pt = locale === "pt";
  const operationMetadata = readOperationPageMetadata(locale);
  const intro = locale === "pt"
    ? `Contrato do tipo de ordem \`${type}\`.`
    : `Contract for the \`${type}\` order type.`;
  const requestHeading = pt ? "Requisição" : "Request";
  const requestBodyTitle = pt ? "Corpo" : "Body";
  const responseLabel = pt ? "Respostas" : "Responses";
  const responseDescriptions = pt
    ? {
        "202": "Ordem enviada para criação",
        "400": "Requisição inválida",
        "401": "Não autorizado",
        "500": "Erro interno do servidor",
      }
    : {
        "202": "Order sent for creation",
        "400": "Invalid request",
        "401": "Unauthorized",
        "500": "Internal server error",
      };
  const body = {
    description: pt ? "Payload para criação de ordens" : "Payload for order creation",
    required: true,
    content: {
      "application/json": {
        schema: requestSchema(type, title, definition, locale),
        example: operationExample(type, definition),
      },
    },
  };
  const responses = Object.fromEntries(
    Object.entries(responseDescriptions).map(([status, description]) => [
      status,
      { description, content: { "application/json": { schema: { type: "object" } } } },
    ]),
  );

  return [
    "---",
    `id: ${slug(type)}`,
    `title: ${quote(title)}`,
    `description: ${quote(intro)}`,
    `sidebar_label: ${quote(title)}`,
    "hide_title: true",
    "hide_table_of_contents: true",
    `api: ${operationMetadata.api}`,
    `sidebar_class_name: ${operationMetadata.sidebarClassName ?? '"post api-method"'}`,
    `info_path: ${operationMetadata.infoPath}`,
    "custom_edit_url: null",
    generatedMarker,
    "---",
    "",
    'import MethodEndpoint from "@theme/ApiExplorer/MethodEndpoint";',
    'import ParamsDetails from "@theme/ParamsDetails";',
    'import RequestSchema from "@theme/RequestSchema";',
    'import StatusCodes from "@theme/StatusCodes";',
    'import Heading from "@theme/Heading";',
    "",
    "<Heading",
    '  as={"h1"}',
    '  className={"openapi__heading"}',
    `  children={${quote(title)}}`,
    ">",
    "</Heading>",
    "",
    "<MethodEndpoint",
    '  method={"post"}',
    '  path={"/devices/{device_id}/orders"}',
    '  context={"endpoint"}',
    ">",
    "</MethodEndpoint>",
    "",
    intro,
    "",
    "<Heading",
    '  id={"request"}',
    '  as={"h2"}',
    '  className={"openapi-tabs__heading"}',
    `  children={${quote(requestHeading)}}`,
    ">",
    "</Heading>",
    "",
    "<ParamsDetails",
    `  parameters={[${JSON.stringify({ description: pt ? "ID do dispositivo" : "Device ID", in: "path", name: "device_id", required: true, schema: { type: "string" } })}]}`,
    ">",
    "</ParamsDetails>",
    "",
    "<RequestSchema",
    `  title={${quote(requestBodyTitle)}}`,
    `  body={${JSON.stringify(body)}}`,
    ">",
    "</RequestSchema>",
    "",
    "<StatusCodes",
    "  id={undefined}",
    `  label={${quote(responseLabel)}}`,
    `  responses={${JSON.stringify(responses)}}`,
    ">",
    "</StatusCodes>",
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
