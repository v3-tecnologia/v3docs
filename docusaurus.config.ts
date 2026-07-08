import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";
import { themes as prismThemes } from "prism-react-renderer";

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
      title: "Home",
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
      ],
    },
    footer: {
      links: [
        {
          title: "DESENVOLVEDOR",
          items: [
            {
              label: "Home",
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
              to: "docs/category/order-api",
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
          order: {
            specPath: "examples/order.yaml",
            outputDir: "docs/openapi/order",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        } satisfies Plugin.PluginOptions,
      },
    ],
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "management-open-api",
        docsPluginId: "classic",
        config: {
          management: {
            specPath: "examples/management.yaml",
            outputDir: "docs/openapi/management",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        } satisfies Plugin.PluginOptions,
      },
    ],
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "auth-open-api",
        docsPluginId: "classic",
        config: {
          management: {
            specPath: "examples/auth.yaml",
            outputDir: "docs/openapi/auth",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        } satisfies Plugin.PluginOptions,
      },
    ],
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "event-open-api",
        docsPluginId: "classic",
        config: {
          event: {
            specPath: "examples/event.yaml",
            outputDir: "docs/openapi/event",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        } satisfies Plugin.PluginOptions,
      },
    ],
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "subscription-open-webhook",
        docsPluginId: "classic",
        config: {
          notifications: {
            specPath: "examples/webhook/subscription.yaml",
            outputDir: "docs/webhook/subscription",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        } satisfies Plugin.PluginOptions,
      },
    ],
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "notification-open-api",
        docsPluginId: "classic",
        config: {
          notifications: {
            specPath: "examples/notification.yaml",
            outputDir: "docs/openapi/notification",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        } satisfies Plugin.PluginOptions,
      },
    ],
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "vision-open-api",
        docsPluginId: "classic",
        config: {
          vision: {
            specPath: "examples/vision.yaml",
            outputDir: "docs/openapi/vision",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        } satisfies Plugin.PluginOptions,
      },
    ],
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "media-open-api",
        docsPluginId: "classic",
        config: {
          media: {
            specPath: "examples/media.yaml",
            outputDir: "docs/openapi/media",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        } satisfies Plugin.PluginOptions,
      },
    ],
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "media-stream-open-api",
        docsPluginId: "classic",
        config: {
          mediaStream: {
            specPath: "examples/media-stream.yaml",
            outputDir: "docs/openapi/media-stream",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        } satisfies Plugin.PluginOptions,
      },
    ],
  ],
  themes: ["docusaurus-theme-openapi-docs"],
};

export default config;
