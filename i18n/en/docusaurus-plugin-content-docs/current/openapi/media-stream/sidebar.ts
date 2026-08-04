import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "Media-Stream",
      items: [
        {
          type: "doc",
          id: "current/openapi/media-stream/baixar-segmento-ou-manifesto-hls",
          label: "Download HLS segment or manifest",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "current/openapi/media-stream/listar-transmissoes-ativas",
          label: "List active streams",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "current/openapi/media-stream/obter-pagina-do-player-de-transmissao",
          label: "Get stream player page",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
