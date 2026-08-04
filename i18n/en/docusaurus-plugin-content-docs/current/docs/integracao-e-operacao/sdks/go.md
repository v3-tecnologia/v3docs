---
sidebar_position: 4
---

# Go SDK

Currently, the official Go codebase is the webhook/event processing SDK.

Official repository: [v3-tecnologia/v3-webhook-go-sdk](https://github.com/v3-tecnologia/v3-webhook-go-sdk)

## About the SDK

- IoT event processing with `protojson`
- Protocol Buffers-based validation
- HTTP server-agnostic architecture
- Handlers by domain (orders, connection, vision, telemetry, dms, etc.)

## Installation

The current README uses the example module below. To avoid import path discrepancies, follow the official repository and validate the path adopted by the version you will use:

```bash
go get github.com/your-org/go-eventlib
```

## Quick example

```go
processor := webhook.NewEventProcessorBuilder().
	WithEventHandler(eventHandler).
	WithConnectionHandler(connectionHandler).
	Build()

event, err := processor.ProcessEvent(ctx, jsonBytes)
if err != nil {
	// handle error
}

_ = event
```

## Supported event types

Among the main supported groups:

- ORDER
- CONNECTION
- DMS
- DRIVER_BEHAVIOR
- HEALTH/HARDWARE
- SYSTEM
- TELEMETRY
- VISION
- VEHICLE
- ALERT

## Useful references

- [README](https://github.com/v3-tecnologia/v3-webhook-go-sdk/blob/main/README.md)
- [Webhook example](https://github.com/v3-tecnologia/v3-webhook-go-sdk/tree/main/examples)
