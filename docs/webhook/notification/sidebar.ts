import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "Subscriptions",
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
