import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "openapi/notification/notifications-api",
    },
    {
      type: "category",
      label: "Webhook",
      items: [
        {
          type: "doc",
          id: "openapi/notification/lists-all-webhooks-for-a-tenant",
          label: "Lists all webhooks for a tenant",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/notification/creates-a-new-webhook-for-the-tenant",
          label: "Creates a new webhook for the tenant",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/notification/removes-a-webhook",
          label: "Removes a webhook",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi/notification/get-a-webhook-by-id",
          label: "Get a webhook by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/notification/updates-a-webhook",
          label: "Updates a webhook",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
