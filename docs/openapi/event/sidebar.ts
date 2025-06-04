import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "openapi/event/event-api",
    },
    {
      type: "category",
      label: "event",
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
    {
      type: "category",
      label: "health-check",
      items: [
        {
          type: "doc",
          id: "openapi/event/check-if-application-is-alive",
          label: "Check if application is alive",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/event/check-if-application-is-ready",
          label: "Check if application is ready",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
