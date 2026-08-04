---
sidebar_position: 10
---

# Orders

The orders system allows you to send instructions and adjustments to field devices remotely, track the progress of each request, and know when it has been completed.

:::info[API Reference]

To consult available operations, parameters, and responses, access the [Orders documentation](/docs/category/order-api).

:::

## Purpose

- Request actions on the device, such as reboot or information updates
- Request images or video clips from cameras
- Configure connectivity, alerts, audio, and other operational preferences
- Start or stop image streaming when applicable
- Track whether each request was received, processed, or completed

## How it works

Each request generates one or more orders. The platform records progress until the device confirms execution or reports that it could not be completed.

In general terms, the flow is:

1. Identify the desired device
2. Send the instruction with the required parameters
3. Track order progress
4. Use the result or handle pending items, if any

Multiple instructions can be sent in the same operation. When the action involves more than one camera, the platform may handle each one independently.

## Instruction types

The platform offers ready-made instructions for the most common operation scenarios:

| Category | What it allows |
|----------|----------------|
| Device | Reboot the device or request a status update |
| Media | Request a photo or video for a period, by camera |
| Connectivity | Add or remove wireless networks |
| Vision | Enable or disable detection features |
| Communication | Adjust message intervals and behavior |
| Mobile data | Set limits, cycles, and usage rules |
| Audio | Configure global or event-type sound alerts |
| Streaming | Open or close live image transmission |
| Advanced | Specific adjustments guided by the V3 team |

Cameras are usually identified as **driver** and **road**. The technical reference details the names and accepted values in each case.

## Advanced instructions

Some settings require deeper knowledge of the equipment and operational environment. They are generally used under guidance from the V3 team.

There are also instructions reserved for administrative profiles, intended for diagnostics and special operations. Access to this type of resource depends on the permissions granted to your integration.

## Order statuses

During its lifecycle, an order can be:

- **Pending** — not yet processed
- **In progress** — already forwarded or being executed
- **Completed** — the device confirmed execution
- **Not completed** — there was a refusal, failure, or the order was removed

Consult the API reference for the complete list of statuses and the meaning of each one.

## Cancellation

An order can only be cancelled while it has not yet been forwarded to the device. After that, you must wait for the result or send a new instruction, as appropriate.

## Best practices

1. Confirm the status before repeating the same request
2. Test on one device before applying to the entire fleet
3. Consider that field equipment may be temporarily unavailable
4. Keep a tracking identifier per request when your operation requires auditing or reconciliation
5. For advanced scenarios or custom integrations, contact [dev@v3.com.br](mailto:dev@v3.com.br)

## Relationship with other APIs

Orders depend on correct device registration on the platform. Before sending an instruction, make sure the equipment is registered and linked to the desired organizational structure. See also [Management](./gerenciamento.md).
