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
          id: "openapi/event/create-a-new-event",
          label: "Create a new event",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/event/get-an-event-by-ulid",
          label: "Get an event by ULID",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
