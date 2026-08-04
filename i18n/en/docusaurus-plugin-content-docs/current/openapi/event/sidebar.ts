import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "current/openapi/event/event-api",
    },
    {
      type: "category",
      label: "Event",
      items: [
        {
          type: "doc",
          id: "current/openapi/event/listar-eventos-de-um-dispositivo",
          label: "List device events",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "current/openapi/event/obter-evento-por-ulid",
          label: "Get event by ULID",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
