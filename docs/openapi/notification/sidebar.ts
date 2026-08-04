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
          id: "openapi/notification/listar-webhooks-do-tenant",
          label: "Listar webhooks do tenant",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/notification/criar-webhook-para-o-tenant",
          label: "Criar webhook para o tenant",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/notification/remover-webhook",
          label: "Remover webhook",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi/notification/obter-webhook-por-id",
          label: "Obter webhook por ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/notification/atualizar-webhook",
          label: "Atualizar webhook",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
