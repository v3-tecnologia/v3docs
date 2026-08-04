import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "openapi/event/event-api",
    },
    {
      type: "category",
      label: "Event",
      items: [
        {
          type: "doc",
          id: "openapi/event/listar-eventos-de-um-dispositivo",
          label: "Listar eventos de um dispositivo",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/event/obter-evento-por-ulid",
          label: "Obter evento por ULID",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
