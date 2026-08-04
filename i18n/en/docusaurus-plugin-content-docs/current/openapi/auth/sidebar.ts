import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "current/openapi/auth/auth-api",
    },
    {
      type: "category",
      label: "Auth",
      items: [
        {
          type: "doc",
          id: "current/openapi/auth/validar-token-de-autenticacao",
          label: "Validate authentication token",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "current/openapi/auth/gerar-token",
          label: "Generate token",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "current/openapi/auth/renovar-token-de-autenticacao",
          label: "Renew authentication token",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
