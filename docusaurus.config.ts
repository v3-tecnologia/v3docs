import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";
import { themes as prismThemes } from "prism-react-renderer";

const openapiEnOutputBase =
  "i18n/en/docusaurus-plugin-content-docs/current/openapi";

const openapiSidebarOptions = {
  groupPathsBy: "tag",
  categoryLinkSource: "tag",
} as const;

function openapiLocaleConfigs(
  id: string,
  specFile: string,
): Record<string, OpenApiPlugin.Options> {
  return {
    [id]: {
      specPath: `examples/${specFile}`,
      outputDir: `docs/openapi/${id}`,
      sidebarOptions: openapiSidebarOptions,
    },
    [`${id}En`]: {
      specPath: `examples/en/${specFile}`,
      outputDir: `${openapiEnOutputBase}/${id}`,
      sidebarOptions: openapiSidebarOptions,
    },
  };
}

const config: Config = {
  title: "Portal do Desenvolvedor V3",
  tagline: "Bem-vindo ao portal do desenvolvedor que quer integrar com a V3",
  url: "https://developer.v3control.com",
  projectName: "v3docs",
  organizationName: "v3-tecnologia",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/shared/favicon.png",
  trailingSlash: false,
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en"],
    localeConfigs: {
      pt: {
        label: "Português",
        htmlLang: "pt-BR",
      },
      en: {
        label: "English",
        htmlLang: "en",
      },
    },
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
          docItemComponent: "@theme/ApiItem",
        },
        blog: {
          showReadingTime: true,
          onInlineAuthors: "ignore",
          onUntruncatedBlogPosts: "ignore",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    docs: {
      sidebar: {
        hideable: false,
      },
    },
    navbar: {
      title: "Início",
      logo: {
        alt: "Logo",
        src: "img/shared/logo/logo-v3.svg",
      },
      items: [
        {
          position: "left",
          label: "Blog",
          to: "/blog",
        },
        {
          position: "left",
          label: "Documentação",
          to: "/docs/docs",
        },
        {
          label: "API",
          position: "left",
          to: "/docs/category/order-api",
        },
        {
          href: "https://github.com/v3-tecnologia",
          label: "GitHub",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "DESENVOLVEDOR",
          items: [
            {
              label: "Início",
              to: "/",
            },
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "Documentação",
              to: "/docs/docs",
            },
            {
              label: "API",
              to: "/docs/category/order-api",
            },
          ],
        },
        {
          title: "TRABALHE CONOSCO",
          items: [
            {
              label: "Vagas Abertas",
              to: "https://github.com/v3-tecnologia/join-our-team",
            },
            {
              label: "Descrições das Vagas",
              to: "https://github.com/v3-tecnologia/job-descriptions",
            },
            {
              label: "Desafio Técnico V3",
              to: "https://github.com/v3-tecnologia/challenge",
            },
          ],
        },
        {
          title: "LINKS",
          items: [
            {
              label: "Site",
              href: "https://www.v3.com.br",
            },
            {
              label: "GitHub",
              href: "https://github.com/v3-tecnologia",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/v3-tecnologia",
            },
            {
              label: "Discord",
              href: "https://discord.gg/e69avYVnzG",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} V3 Tecnologia.`,
    },
    prism: {
      theme: prismThemes.github,
      additionalLanguages: [
        "ruby",
        "csharp",
        "php",
        "java",
        "powershell",
        "json",
        "bash",
        "dart",
        "objectivec",
        "r",
      ],
    },
    languageTabs: [
      {
        highlight: "python",
        language: "python",
        logoClass: "python",
      },
      {
        highlight: "bash",
        language: "curl",
        logoClass: "curl",
      },
      {
        highlight: "csharp",
        language: "csharp",
        logoClass: "csharp",
      },
      {
        highlight: "go",
        language: "go",
        logoClass: "go",
      },
      {
        highlight: "javascript",
        language: "nodejs",
        logoClass: "nodejs",
      },
      {
        highlight: "ruby",
        language: "ruby",
        logoClass: "ruby",
      },
      {
        highlight: "php",
        language: "php",
        logoClass: "php",
      },
      {
        highlight: "java",
        language: "java",
        logoClass: "java",
        variant: "unirest",
      },
      {
        highlight: "powershell",
        language: "powershell",
        logoClass: "powershell",
      },
      {
        highlight: "dart",
        language: "dart",
        logoClass: "dart",
      },
      {
        highlight: "javascript",
        language: "javascript",
        logoClass: "javascript",
      },
      {
        highlight: "c",
        language: "c",
        logoClass: "c",
      },
      {
        highlight: "objective-c",
        language: "objective-c",
        logoClass: "objective-c",
      },
      {
        highlight: "ocaml",
        language: "ocaml",
        logoClass: "ocaml",
      },
      {
        highlight: "r",
        language: "r",
        logoClass: "r",
      },
      {
        highlight: "swift",
        language: "swift",
        logoClass: "swift",
      },
      {
        highlight: "kotlin",
        language: "kotlin",
        logoClass: "kotlin",
      },
      {
        highlight: "rust",
        language: "rust",
        logoClass: "rust",
      },
    ],
  } satisfies Preset.ThemeConfig,

  plugins: [
    "./src/plugins/tailwind-config.js",
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "order-open-api",
        docsPluginId: "classic",
        config: {
          ...openapiLocaleConfigs("order", "order.yaml"),
        } satisfies Plugin.PluginOptions,
      },
    ],
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "management-open-api",
        docsPluginId: "classic",
        config: {
          ...openapiLocaleConfigs("management", "management.yaml"),
        } satisfies Plugin.PluginOptions,
      },
    ],
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "auth-open-api",
        docsPluginId: "classic",
        config: {
          ...openapiLocaleConfigs("auth", "auth.yaml"),
        } satisfies Plugin.PluginOptions,
      },
    ],
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "event-open-api",
        docsPluginId: "classic",
        config: {
          ...openapiLocaleConfigs("event", "event.yaml"),
        } satisfies Plugin.PluginOptions,
      },
    ],
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "notification-open-api",
        docsPluginId: "classic",
        config: {
          ...openapiLocaleConfigs("notification", "notification.yaml"),
        } satisfies Plugin.PluginOptions,
      },
    ],
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "vision-open-api",
        docsPluginId: "classic",
        config: {
          ...openapiLocaleConfigs("vision", "vision.yaml"),
        } satisfies Plugin.PluginOptions,
      },
    ],
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "media-open-api",
        docsPluginId: "classic",
        config: {
          ...openapiLocaleConfigs("media", "media.yaml"),
        } satisfies Plugin.PluginOptions,
      },
    ],
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "media-stream-open-api",
        docsPluginId: "classic",
        config: {
          ...openapiLocaleConfigs("media-stream", "media-stream.yaml"),
        } satisfies Plugin.PluginOptions,
      },
    ],
  ],
  themes: ["docusaurus-theme-openapi-docs"],
};

export default config;
