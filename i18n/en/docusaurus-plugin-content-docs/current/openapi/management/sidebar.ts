import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "current/openapi/management/management-api",
    },
    {
      type: "category",
      label: "Team",
      items: [
        {
          type: "doc",
          id: "current/openapi/management/find-teams-by-card-number",
          label: "Find teams by card number",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "current/openapi/management/find-teams-by-device-imei",
          label: "Find teams by device IMEI",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "current/openapi/management/list-teams-with-pagination",
          label: "List teams with pagination",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "current/openapi/management/create-a-new-team",
          label: "Create a new team",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "current/openapi/management/delete-a-team",
          label: "Delete a team",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "current/openapi/management/get-a-team-by-id",
          label: "Get a team by Id",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "current/openapi/management/update-a-team",
          label: "Update a team",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "current/openapi/management/get-drivers-by-team-id",
          label: "Get drivers by team Id",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Device",
      items: [
        {
          type: "doc",
          id: "current/openapi/management/list-devices-with-pagination",
          label: "List devices with pagination",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "current/openapi/management/create-a-new-device",
          label: "Create a new device",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "current/openapi/management/delete-a-device",
          label: "Delete a device",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "current/openapi/management/get-a-device-by-id",
          label: "Get a device by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "current/openapi/management/patch-device-status",
          label: "Patch device status",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "current/openapi/management/update-a-device",
          label: "Update a device",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Driver",
      items: [
        {
          type: "doc",
          id: "current/openapi/management/list-drivers-with-pagination",
          label: "List drivers with pagination",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "current/openapi/management/create-a-new-driver",
          label: "Create a new driver",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "current/openapi/management/delete-a-driver",
          label: "Delete a driver",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "current/openapi/management/get-a-driver-by-id",
          label: "Get a driver by Id",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "current/openapi/management/update-a-driver",
          label: "Update a driver",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "current/openapi/management/list-cards-from-a-driver",
          label: "List cards from a driver",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "current/openapi/management/create-a-card-for-a-driver",
          label: "Create a card for a driver",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "current/openapi/management/delete-a-card-from-a-driver",
          label: "Delete a card from a driver",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "current/openapi/management/get-a-card-from-a-driver",
          label: "Get a card from a driver",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "current/openapi/management/update-a-card-from-a-driver",
          label: "Update a card from a driver",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "current/openapi/management/remove-driver-from-team",
          label: "Remove driver from team",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "current/openapi/management/assign-driver-to-team",
          label: "Assign driver to team",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Fleet",
      items: [
        {
          type: "doc",
          id: "current/openapi/management/list-fleets-with-pagination",
          label: "List fleets with pagination",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "current/openapi/management/create-a-new-fleet",
          label: "Create a new fleet",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "current/openapi/management/delete-a-fleet",
          label: "Delete a fleet",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "current/openapi/management/get-a-fleet-by-id",
          label: "Get a fleet by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "current/openapi/management/update-a-fleet",
          label: "Update a fleet",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "current/openapi/management/get-fleets-by-team-id",
          label: "Get fleets by team ID",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
