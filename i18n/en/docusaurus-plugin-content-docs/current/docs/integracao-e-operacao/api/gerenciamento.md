---
sidebar_position: 9
---

# Management

The management API organizes the essential information of the operation: who drives, how teams are structured, which fleets exist, and which devices are associated with each context.

:::info[API Reference]

To consult available operations, parameters, and responses, access the [Management documentation](/docs/category/management-api).

:::

## Organizational structure

The platform organizes data in complementary levels:

```
Account
  └── Teams
       ├── Drivers
       └── Fleets
            └── Devices
```

### Main relationships

- A driver can be linked to more than one team, and a team can have multiple drivers
- A device belongs to a fleet; a fleet can include multiple devices
- Fleets and drivers connect to teams, which represent the operational unit within the account

## What can be managed

### Teams

Group day-to-day operations. They are the starting point for organizing drivers, fleets, and visibility permissions on the platform.

### Fleets

Represent sets of vehicles or equipment under the same management. Each device must be associated with a fleet.

### Drivers

Identify who drives or is related to the operation. They can be associated with one or more teams according to business rules.

### Devices

Register field equipment: identification, fleet association, contact data, and operational settings. They can also display recent connectivity and location information when available.

## Device information

In addition to registration, the platform can provide an up-to-date snapshot of the equipment, such as last communication, approximate position, and connection indicators. This data helps determine whether the device is active before sending orders or querying events.

Not every device will have all information filled in at all times — this depends on recent communication with the platform.

## Queries and filters

It is possible to list devices in a paginated way or locate specific records by known identifiers, such as the equipment number or integration codes defined by your operation.

When combining incompatible filters in the same query, the platform may reject the request. Use one criterion at a time, as described in the API reference.

## Registration and updates

There are operations to create, query, update, and remove entities in the organizational structure. Device changes may involve both registration data and operational information received automatically by the platform.

External integrations typically use registration and query operations. Real-time automatic status updates are usually handled by V3's internal flows.

## Integration with orders

To send an instruction to a device, you must first identify it in management. The usual flow is:

1. Locate the desired device
2. Send the corresponding order
3. Track the result in the orders API

See [Orders](./ordens.md) for more details on remote instructions.

## Best practices

1. Keep fleets and devices aligned with the actual operation structure
2. Use consistent integration identifiers to facilitate reconciliation with external systems
3. Before bulk commands, validate device registration and recent communication
4. For specific organization models, contact the V3 team at [dev@v3.com.br](mailto:dev@v3.com.br)
