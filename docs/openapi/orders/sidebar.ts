import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "openapi/orders/go-template-api",
    },
    {
      type: "category",
      label: "Orders",
      items: [
        {
          type: "doc",
          id: "openapi/orders/delete-orders-in-batch",
          label: "Delete orders in batch",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi/orders/create-new-order",
          label: "Create new order",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/orders/delete-order",
          label: "Delete order",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi/orders/get-order",
          label: "Get order",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/orders/create-new-order-internal",
          label: "Create new order internal",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Health Check",
      items: [
        {
          type: "doc",
          id: "openapi/orders/check-if-application-is-alive",
          label: "Check if application is alive",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/orders/check-if-application-is-ready",
          label: "Check if application is ready",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
