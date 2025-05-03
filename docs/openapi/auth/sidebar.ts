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
          id: "openapi/auth/request-an-authentication-token",
          label: "Request an Authentication Token",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
