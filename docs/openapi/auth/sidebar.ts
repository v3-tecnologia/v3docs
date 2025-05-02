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
          id: "openapi/auth/generate-token-from-keycloak",
          label: "Generate token from Keycloak",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/auth/verify-auth-token",
          label: "Verify auth token",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
