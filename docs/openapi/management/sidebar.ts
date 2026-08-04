import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "openapi/management/management-api",
    },
    {
      type: "category",
      label: "Health Check",
      items: [
        {
          type: "doc",
          id: "openapi/management/verificar-se-a-aplicacao-esta-ativa",
          label: "Verificar se a aplicação está ativa",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/management/verificar-se-a-aplicacao-esta-pronta",
          label: "Verificar se a aplicação está pronta",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Device",
      items: [
        {
          type: "doc",
          id: "openapi/management/listar-dispositivos-com-paginacao",
          label: "Listar dispositivos com paginação",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/management/criar-novo-dispositivo",
          label: "Criar novo dispositivo",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/management/excluir-dispositivo",
          label: "Excluir dispositivo",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi/management/obter-dispositivo-por-id",
          label: "Obter dispositivo por ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/management/atualizar-status-do-dispositivo",
          label: "Atualizar status do dispositivo",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "openapi/management/atualizar-dispositivo",
          label: "Atualizar dispositivo",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Driver",
      items: [
        {
          type: "doc",
          id: "openapi/management/listar-motoristas-com-paginacao",
          label: "Listar motoristas com paginação",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/management/criar-novo-motorista",
          label: "Criar novo motorista",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/management/excluir-motorista",
          label: "Excluir motorista",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi/management/obter-motorista-por-id",
          label: "Obter motorista por ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/management/atualizar-motorista",
          label: "Atualizar motorista",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "openapi/management/remover-motorista-do-time",
          label: "Remover motorista do time",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi/management/associar-motorista-ao-time",
          label: "Associar motorista ao time",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Fleet",
      items: [
        {
          type: "doc",
          id: "openapi/management/listar-frotas-com-paginacao",
          label: "Listar frotas com paginação",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/management/criar-nova-frota",
          label: "Criar nova frota",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/management/excluir-frota",
          label: "Excluir frota",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi/management/obter-frota-por-id",
          label: "Obter frota por ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/management/atualizar-frota",
          label: "Atualizar frota",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "openapi/management/obter-frotas-por-time",
          label: "Obter frotas por time",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Team",
      items: [
        {
          type: "doc",
          id: "openapi/management/listar-times-com-paginacao",
          label: "Listar times com paginação",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/management/criar-novo-time",
          label: "Criar novo time",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/management/excluir-time",
          label: "Excluir time",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi/management/obter-time-por-id",
          label: "Obter time por ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/management/atualizar-time",
          label: "Atualizar time",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "openapi/management/obter-motoristas-por-time",
          label: "Obter motoristas por time",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
