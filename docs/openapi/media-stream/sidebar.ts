import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "Media-Stream",
      items: [
        {
          type: "doc",
          id: "openapi/media-stream/baixar-segmento-ou-manifesto-hls",
          label: "Baixar segmento ou manifesto HLS",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/media-stream/listar-transmissoes-ativas",
          label: "Listar transmissões ativas",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/media-stream/obter-pagina-do-player-de-transmissao",
          label: "Obter página do player de transmissão",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
