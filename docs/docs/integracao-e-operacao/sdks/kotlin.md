---
sidebar_position: 2
---

# SDK Kotlin

O SDK Kotlin da V3 é independente do SDK Java e cobre APIs de Orders, Media, Vision e Management.

Repositório oficial: [v3-tecnologia/v3-kotlin-sdk](https://github.com/v3-tecnologia/v3-kotlin-sdk)

## Pré-requisitos

- JDK 11+ (toolchain no projeto: JDK 17, com target JVM 11)
- Gradle

## Configuração básica

```kotlin
val client = V3ClientFactory.create(
	tenant = System.getenv("V3_TENANT"),
	secret = System.getenv("V3_SECRET"),
	environment = V3Environment.SANDBOX
)
```

## Exemplo rápido: Orders

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

## Exemplo rápido: Management (Devices)

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

## Exemplo rápido: Management (Drivers)

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

## Padrão de retorno

Todas as operações retornam `Result<T>`, com tratamento via `match(...)`.

## Referências úteis

- [README](https://github.com/v3-tecnologia/v3-kotlin-sdk/blob/main/README.md)
- [Exemplos](https://github.com/v3-tecnologia/v3-kotlin-sdk/tree/main/examples)
