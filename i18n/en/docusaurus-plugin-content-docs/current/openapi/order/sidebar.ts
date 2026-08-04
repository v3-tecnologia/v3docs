import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "current/openapi/order/orders-api",
    },
    {
      type: "category",
      label: "Order",
      items: [
        {
          type: "doc",
          id: "current/openapi/order/buscar-ordens-com-filtros-opcionais",
          label: "Find orders with optional filtering",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "current/openapi/order/excluir-multiplas-ordens",
          label: "Delete multiple orders",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "current/openapi/order/criar-nova-ordem",
          label: "Create new order",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "current/openapi/order/excluir-ordem-especifica",
          label: "Delete a specific order",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "current/openapi/order/obter-ordem-especifica",
          label: "Get a specific order",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Health Check",
      items: [
        {
          type: "doc",
          id: "current/openapi/order/verificar-se-a-aplicacao-esta-pronta",
          label: "Check if application is ready",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
