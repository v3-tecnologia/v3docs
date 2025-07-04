import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "webhook/notification/notification-service",
    },
    {
      type: "category",
      label: "Webhook",
      items: [
        {
          type: "doc",
          id: "webhook/notification/webhook",
          label: "Webhook",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
