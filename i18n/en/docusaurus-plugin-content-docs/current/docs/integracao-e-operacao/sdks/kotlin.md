---
sidebar_position: 2
---

# Kotlin SDK

The V3 Kotlin SDK is independent from the Java SDK and covers Orders, Media, Vision, and Management APIs.

Official repository: [v3-tecnologia/v3-kotlin-sdk](https://github.com/v3-tecnologia/v3-kotlin-sdk)

## Prerequisites

- JDK 11+ (project toolchain: JDK 17, with JVM target 11)
- Gradle

## Basic configuration

```kotlin
val client = V3ClientFactory.create(
	tenant = System.getenv("V3_TENANT"),
	secret = System.getenv("V3_SECRET"),
	environment = V3Environment.SANDBOX
)
```

## Quick example: Orders

```kotlin
val result = client.device("device-001") {
	orders {
		
		addWifi {
			ssid = "Office-WiFi"
			password = "Secret123"
			correlationId = "wifi-setup-1"
		}

        reboot {
			autoGenerateCorrelationId = true
		}
	}
}

result.match(
	onSuccess = { println("Order: ${it.idOrFirst()} status=${it.statusOrFirst()}") },
	onFailure = { println("Error: $it") }
)
```

## Quick example: Management (Devices)

```kotlin
val listDevicesResult = client.devices {
	list(page = 1, pageSize = 10)
}

listDevicesResult.match(
	onSuccess = { page -> println("Devices: ${page.data.size}") },
	onFailure = { error -> println("List devices error: $error") }
)

val createDeviceResult = client.devices {
	create {
		imei = "123456789012345"
		model = "GPS Tracker Pro"
		correlationId = "device-create-1"
	}
}

createDeviceResult.match(
	onSuccess = { device -> println("Created device id: ${device.id}") },
	onFailure = { error -> println("Create device error: $error") }
)
```

## Quick example: Management (Drivers)

```kotlin
val getDriverResult = client.driver("driver-xyz") { get() }

val updateDriverResult = client.driver("driver-xyz") {
	update {
		name = "John Doe"
		teamId = "team-789"
	}
}

client.drivers {
	create {
		name = "John Doe"
		correlationId = "driver-create-1"
		teamId = "team-789"
	}

	list(pageSize = 10).match(
		onSuccess = { page ->
			println("Total drivers: ${page.data.size}")
		},
		onFailure = { error ->
			println("List drivers error: $error")
		}
	)
}

val assignDriverResult = client.driver("driver-xyz") { assignToTeam("team-789") }
val removeDriverFromTeamResult = client.driver("driver-xyz") { removeFromTeam("team-789") }
```

## Return pattern

All operations return `Result<T>`, with handling via `match(...)`.

## Useful references

- [README](https://github.com/v3-tecnologia/v3-kotlin-sdk/blob/main/README.md)
- [Examples](https://github.com/v3-tecnologia/v3-kotlin-sdk/tree/main/examples)
