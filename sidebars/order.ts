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
          type: "category",
          label: "Criar nova ordem",
          link: {
            type: "doc",
            id: "openapi/order/criar-nova-ordem",
          },
          className: "api-method post",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "openapi/order/contracts/add-wifi",
              label: "Adicionar Wi-Fi",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "openapi/order/contracts/delete-wifi",
              label: "Excluir Wi-Fi",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "openapi/order/contracts/device-state",
              label: "Estado do dispositivo",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "openapi/order/contracts/request-image",
              label: "Solicitar imagem",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "openapi/order/contracts/request-video",
              label: "Solicitar vídeo",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "openapi/order/contracts/reboot",
              label: "Reiniciar",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "openapi/order/contracts/periodic",
              label: "Periódico",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "openapi/order/contracts/vision-config",
              label: "Configuração de visão",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "openapi/order/contracts/dataplan-config",
              label: "Configuração de plano de dados",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "openapi/order/contracts/config-audio",
              label: "Configurar áudio",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "openapi/order/contracts/config-audio-event",
              label: "Configurar evento de áudio",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "openapi/order/contracts/open-stream",
              label: "Abrir transmissão",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "openapi/order/contracts/close-stream",
              label: "Fechar transmissão",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "openapi/order/contracts/config",
              label: "Configuração avançada",
              className: "api-method post",
            },
          ],
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
