import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "openapi/order/orders-api",
    },
    {
      type: "category",
      label: "Order",
      items: [
        {
          type: "doc",
          id: "openapi/order/delete-multiple-orders",
          label: "Delete multiple orders",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi/order/get-a-list-of-orders-from-a-device",
          label: "Get a list of orders from a device",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/order/create-new-order",
          label: "Create new order",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/order/delete-a-specific-order",
          label: "Delete a specific order",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi/order/get-a-specific-order",
          label: "Get a specific order",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
