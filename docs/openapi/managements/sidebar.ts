import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "openapi/managements/management-api",
    },
    {
      type: "category",
      label: "Account",
      items: [
        {
          type: "doc",
          id: "openapi/managements/list-accounts-with-pagination",
          label: "List accounts with pagination",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/managements/create-a-new-account",
          label: "Create a new account",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/managements/delete-an-account",
          label: "Delete an account",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi/managements/get-an-account-by-id",
          label: "Get an account by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/managements/update-an-account",
          label: "Update an account",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "openapi/managements/get-an-account-by-ulid",
          label: "Get an account by ULID",
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
          id: "openapi/managements/create-a-new-device",
          label: "Create a new device",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/managements/delete-a-device",
          label: "Delete a device",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi/managements/get-a-device-by-id",
          label: "Get a device by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/managements/update-a-device",
          label: "Update a device",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "openapi/managements/list-devices-by-fleet",
          label: "List devices by fleet",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/managements/get-a-device-by-imei",
          label: "Get a device by IMEI",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/managements/list-devices-with-pagination",
          label: "List devices with pagination",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Driver",
      items: [
        {
          type: "doc",
          id: "openapi/managements/create-a-new-driver",
          label: "Create a new driver",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/managements/delete-a-driver",
          label: "Delete a driver",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi/managements/get-a-driver-by-id",
          label: "Get a driver by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/managements/update-a-driver",
          label: "Update a driver",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "openapi/managements/assign-driver-to-team",
          label: "Assign driver to team",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/managements/remove-driver-from-team",
          label: "Remove driver from team",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi/managements/list-drivers-with-pagination",
          label: "List drivers with pagination",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Fleet",
      items: [
        {
          type: "doc",
          id: "openapi/managements/list-fleets-with-pagination",
          label: "List fleets with pagination",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/managements/create-a-new-fleet",
          label: "Create a new fleet",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/managements/delete-a-fleet",
          label: "Delete a fleet",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi/managements/get-a-fleet-by-id",
          label: "Get a fleet by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/managements/update-a-fleet",
          label: "Update a fleet",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "openapi/managements/list-fleets-by-team",
          label: "List fleets by team",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/managements/get-a-fleet-by-ulid",
          label: "Get a fleet by ULID",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Health Check",
      items: [
        {
          type: "doc",
          id: "openapi/managements/check-if-application-is-alive",
          label: "Check if application is alive",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/managements/check-if-application-is-ready",
          label: "Check if application is ready",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Team",
      items: [
        {
          type: "doc",
          id: "openapi/managements/list-teams-with-pagination",
          label: "List teams with pagination",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/managements/create-a-new-team",
          label: "Create a new team",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/managements/delete-a-team",
          label: "Delete a team",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi/managements/get-a-team-by-id",
          label: "Get a team by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/managements/update-a-team",
          label: "Update a team",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "openapi/managements/list-teams-by-account",
          label: "List teams by account",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
