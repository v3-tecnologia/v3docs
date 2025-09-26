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
          id: "openapi/event/list-events-for-a-specific-device",
          label: "List events for a specific device",
          className: "api-method get",
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
