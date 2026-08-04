import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "current/openapi/management/management-api",
    },
    {
      type: "category",
      label: "Health Check",
      items: [
        {
          type: "doc",
          id: "current/openapi/management/verificar-se-a-aplicacao-esta-ativa",
          label: "Check if application is alive",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "current/openapi/management/verificar-se-a-aplicacao-esta-pronta",
          label: "Check if application is ready",
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
          id: "current/openapi/management/listar-dispositivos-com-paginacao",
          label: "List devices with pagination",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "current/openapi/management/criar-novo-dispositivo",
          label: "Create new device",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "current/openapi/management/excluir-dispositivo",
          label: "Delete device",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "current/openapi/management/obter-dispositivo-por-id",
          label: "Get device by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "current/openapi/management/atualizar-status-do-dispositivo",
          label: "Update device status",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "current/openapi/management/atualizar-dispositivo",
          label: "Update device",
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
          id: "current/openapi/management/listar-motoristas-com-paginacao",
          label: "List drivers with pagination",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "current/openapi/management/criar-novo-motorista",
          label: "Create new driver",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "current/openapi/management/excluir-motorista",
          label: "Delete driver",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "current/openapi/management/obter-motorista-por-id",
          label: "Get driver by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "current/openapi/management/atualizar-motorista",
          label: "Update driver",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "current/openapi/management/remover-motorista-do-time",
          label: "Remove driver from team",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "current/openapi/management/associar-motorista-ao-time",
          label: "Associate driver to team",
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
          id: "current/openapi/management/listar-frotas-com-paginacao",
          label: "List fleets with pagination",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "current/openapi/management/criar-nova-frota",
          label: "Create new fleet",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "current/openapi/management/excluir-frota",
          label: "Delete fleet",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "current/openapi/management/obter-frota-por-id",
          label: "Get fleet by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "current/openapi/management/atualizar-frota",
          label: "Update fleet",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "current/openapi/management/obter-frotas-por-time",
          label: "Get fleets by team ID",
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
          id: "current/openapi/management/listar-times-com-paginacao",
          label: "List teams with pagination",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "current/openapi/management/criar-novo-time",
          label: "Create new team",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "current/openapi/management/excluir-time",
          label: "Delete team",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "current/openapi/management/obter-time-por-id",
          label: "Get team by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "current/openapi/management/atualizar-time",
          label: "Update team",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "current/openapi/management/obter-motoristas-por-time",
          label: "Get drivers by team ID",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
