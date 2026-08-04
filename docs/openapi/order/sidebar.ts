import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "openapi/order/orders-api",
    },
    {
      type: "category",
      label: "Order",
      items: [
        {
          type: "doc",
          id: "openapi/order/buscar-ordens-com-filtros-opcionais",
          label: "Buscar ordens com filtros opcionais",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/order/excluir-multiplas-ordens",
          label: "Excluir múltiplas ordens",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi/order/criar-nova-ordem",
          label: "Criar nova ordem",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/order/excluir-ordem-especifica",
          label: "Excluir ordem específica",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi/order/obter-ordem-especifica",
          label: "Obter ordem específica",
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
          id: "openapi/order/verificar-se-a-aplicacao-esta-pronta",
          label: "Verificar se a aplicação está pronta",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
