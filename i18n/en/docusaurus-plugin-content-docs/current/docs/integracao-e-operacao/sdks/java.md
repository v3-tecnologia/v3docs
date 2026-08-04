---
sidebar_position: 1
---

# Java SDK

The V3 Java SDK provides a fluent, typed API for integration with Orders, Management, and Media.

Official repository: [v3-tecnologia/v3-java-sdk](https://github.com/v3-tecnologia/v3-java-sdk)

## Prerequisites

- Java 11+
- Maven 3.6+

## Installation

Add the dependency to `pom.xml`:

```xml
<dependency>
	<groupId>br.com.v3.sdk</groupId>
	<artifactId>v3-java-sdk</artifactId>
	<version>1.0.0</version>
</dependency>
```

## Basic configuration

```java
import br.com.v3.sdk.core.V3ClientFactory;
import br.com.v3.sdk.core.V3Environment;

var client = V3ClientFactory.create(
	System.getenv("V3_TENANT"),
	System.getenv("V3_SECRET"),
	V3Environment.PRODUCTION
);
```

Recommended variables:

- `V3_TENANT`
- `V3_SECRET`

## Quick example: sending an order

```java
import br.com.v3.sdk.api.device.Device;
import br.com.v3.sdk.api.orders.commands.RebootCommand;
import br.com.v3.sdk.api.orders.models.Order;

var rebootCmd = new RebootCommand.Builder()
	.delay(10)
	.build();

var order = new Order.Builder()
	.command(rebootCmd)
	.build();

Device.of(client, "device-001")
	.orders()
	.apply(order)
	.match(
		response -> System.out.println("Created: " + response.getId()),
		error -> System.err.println("Error: " + error),
		errors -> System.err.println("Validation: " + errors)
	);
```

## Key concepts

- Typed commands (`RebootCommand`, `AddWifiCommand`, etc.)
- `Result<T>` pattern for success/error flow without using exceptions for control flow
- Unified public API based on entities (`Device`, `Driver`, `Fleet`, `Team`)

## Useful references

- [README](https://github.com/v3-tecnologia/v3-java-sdk/blob/main/README.md)
- [Usage guide](https://github.com/v3-tecnologia/v3-java-sdk/blob/main/docs/GUIDE.md)
- [Quick Reference](https://github.com/v3-tecnologia/v3-java-sdk/blob/main/QUICK_REFERENCE.md)
- [Architecture](https://github.com/v3-tecnologia/v3-java-sdk/blob/main/docs/ARCHITECTURE.md)
