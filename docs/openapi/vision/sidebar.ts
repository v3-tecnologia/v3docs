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
          id: "openapi/vision/create-new-dataset",
          label: "Create new dataset",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/vision/delete-dataset-by-id",
          label: "Delete dataset by ID",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi/vision/get-dataset-by-id",
          label: "Get dataset by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/vision/update-dataset-by-id",
          label: "Update dataset by ID",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Media",
      items: [
        {
          type: "doc",
          id: "openapi/vision/get-media-by-id",
          label: "Get media by ID",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
