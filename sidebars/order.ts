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
          label: "Buscar ordens com filtros opcionais",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/order/delete-multiple-orders",
          label: "Excluir múltiplas ordens",
          className: "api-method delete",
        },
        {
          type: "category",
          label: "Criar nova ordem",
          link: {
            type: "doc",
            id: "openapi/order/create-new-order",
          },
          className: "api-method post",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "openapi/order/contracts/config",
              label: "Configuração avançada",
              className: "api-method post",
            },
            ...require("./order-contracts.generated.json"),
          ],
        },
        {
          type: "doc",
          id: "openapi/order/delete-a-specific-order",
          label: "Excluir ordem específica",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi/order/get-a-specific-order",
          label: "Obter ordem específica",
          className: "api-method get",
        },
      ],
    },
    {
      type: "doc",
      id: "openapi/order/create-new-order-by-fleet",
      label: "Criar ordem para frota",
      className: "api-method post",
    },
  ],
};

export default sidebar.apisidebar;
