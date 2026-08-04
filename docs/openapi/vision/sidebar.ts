import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "openapi/vision/vision-api",
    },
    {
      type: "category",
      label: "Datasets",
      items: [
        {
          type: "doc",
          id: "openapi/vision/criar-novo-conjunto-de-dados",
          label: "Criar novo conjunto de dados",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/vision/excluir-conjunto-de-dados-por-id",
          label: "Excluir conjunto de dados por ID",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi/vision/obter-conjunto-de-dados-por-id",
          label: "Obter conjunto de dados por ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/vision/atualizar-conjunto-de-dados-por-id",
          label: "Atualizar conjunto de dados por ID",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
