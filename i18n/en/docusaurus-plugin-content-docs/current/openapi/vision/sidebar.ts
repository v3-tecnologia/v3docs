import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "current/openapi/vision/vision-api",
    },
    {
      type: "category",
      label: "Datasets",
      items: [
        {
          type: "doc",
          id: "current/openapi/vision/criar-novo-conjunto-de-dados",
          label: "Create new dataset",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "current/openapi/vision/excluir-conjunto-de-dados-por-id",
          label: "Delete dataset by ID",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "current/openapi/vision/obter-conjunto-de-dados-por-id",
          label: "Get dataset by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "current/openapi/vision/atualizar-conjunto-de-dados-por-id",
          label: "Update dataset by ID",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
