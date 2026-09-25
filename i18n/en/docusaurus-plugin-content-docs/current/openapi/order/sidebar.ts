import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "current/openapi/order/orders-api",
    },
    {
      type: "category",
      label: "Order",
      items: [
        {
          type: "doc",
          id: "current/openapi/order/find-orders-with-optional-filtering",
          label: "Find orders with optional filtering",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "current/openapi/order/delete-multiple-orders",
          label: "Delete multiple orders",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "current/openapi/order/create-new-order",
          label: "Create new order",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "current/openapi/order/delete-a-specific-order",
          label: "Delete a specific order",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "current/openapi/order/get-a-specific-order",
          label: "Get a specific order",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "current/openapi/order/create-new-order-by-fleet",
          label: "Create new order by fleet",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
