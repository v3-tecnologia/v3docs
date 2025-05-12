import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "webhook/notifications/notification-service",
    },
    {
      type: "category",
      label: "Event",
      items: [
        {
          type: "doc",
          id: "webhook/notifications/post-to-receive-event-notification",
          label: "Post to receive event notification",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
