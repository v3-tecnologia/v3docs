import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "webhook/notification/notification-service",
    },
    {
      type: "category",
      label: "Webhooks",
      items: [
        {
          type: "doc",
          id: "webhook/notification/eventos",
          label: "Eventos",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
