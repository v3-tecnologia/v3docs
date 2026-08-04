import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "openapi/media/vision-media-api",
    },
    {
      type: "category",
      label: "Media-API",
      items: [
        {
          type: "doc",
          id: "openapi/media/baixar-arquivo-com-chave-segura",
          label: "Baixar arquivo com chave segura",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
