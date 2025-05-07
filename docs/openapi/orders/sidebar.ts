import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "openapi/orders/orders-api",
    },
    {
      type: "category",
      label: "Orders",
      items: [
        {
          type: "doc",
          id: "openapi/orders/delete-multiple-orders",
          label: "Delete multiple orders",
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
          id: "openapi/orders/delete-a-specific-order",
          label: "Delete a specific order",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi/orders/get-a-specific-order",
          label: "Get a specific order",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
