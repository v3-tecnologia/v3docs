import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "Media-Stream",
      items: [
        {
          type: "doc",
          id: "openapi/media-stream/download-hls-segment-or-manifest-file",
          label: "Download HLS segment or manifest file",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/media-stream/list-all-active-streams",
          label: "List all active streams",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/media-stream/get-stream-player-page",
          label: "Get stream player page",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/media-stream/get-segments-status-and-cleanup-configuration",
          label: "Get segments status and cleanup configuration",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/media-stream/force-segment-cleanup",
          label: "Force segment cleanup",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
