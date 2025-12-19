import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "openapi/media/vision-media-api",
    },
    {
      type: "category",
      label: "Media-API",
      items: [
        {
          type: "doc",
          id: "openapi/media/download-a-file-from-s-3-using-secure-key",
          label: "Download a file from S3 using secure key",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
