import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "openapi/order/orders-api",
    },
    {
      type: "category",
      label: "Ordens",
      items: [
        {
          type: "doc",
          id: "openapi/order/find-orders-with-optional-filtering",
          label: "Listar ordens com filtros opcionais",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/order/delete-multiple-orders",
          label: "Excluir múltiplas ordens",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi/order/create-new-order",
          label: "Criar nova ordem",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/order/delete-a-specific-order",
          label: "Excluir uma ordem específica",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi/order/get-a-specific-order",
          label: "Obter uma ordem específica",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/order/create-new-order-by-fleet",
          label: "Criar novas ordens para uma frota",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
