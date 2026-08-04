import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "current/openapi/notification/notifications-api",
    },
    {
      type: "category",
      label: "Webhook",
      items: [
        {
          type: "doc",
          id: "current/openapi/notification/listar-webhooks-do-tenant",
          label: "List tenant webhooks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "current/openapi/notification/criar-webhook-para-o-tenant",
          label: "Create webhook for tenant",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "current/openapi/notification/remover-webhook",
          label: "Remove webhook",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "current/openapi/notification/obter-webhook-por-id",
          label: "Get webhook by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "current/openapi/notification/atualizar-webhook",
          label: "Update webhook",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
