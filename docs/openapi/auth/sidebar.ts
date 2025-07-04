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
          id: "openapi/auth/validate-an-authentication-token",
          label: "Validate an Authentication Token",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/auth/generate-token-for-use-ours-services",
          label: "Generate token for use ours services",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/auth/refresh-an-authentication-token",
          label: "Refresh an Authentication Token",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
