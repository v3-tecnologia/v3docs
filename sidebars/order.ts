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
            {
              type: "doc",
              id: "openapi/order/contracts/card-driver",
              label: "Cartão de motorista",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "openapi/order/contracts/firmware-update",
              label: "Atualização de firmware",
              className: "api-method post",
            },
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
