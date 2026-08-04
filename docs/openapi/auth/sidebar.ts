import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "openapi/auth/auth-api",
    },
    {
      type: "category",
      label: "Auth",
      items: [
        {
          type: "doc",
          id: "openapi/auth/validar-token-de-autenticacao",
          label: "Validar token de autenticação",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/auth/gerar-token",
          label: "Gerar token",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/auth/renovar-token-de-autenticacao",
          label: "Renovar token de autenticação",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
