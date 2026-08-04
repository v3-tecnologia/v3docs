import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "current/openapi/media/vision-media-api",
    },
    {
      type: "category",
      label: "Media-API",
      items: [
        {
          type: "doc",
          id: "current/openapi/media/baixar-arquivo-com-chave-segura",
          label: "Download file with secure key",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
