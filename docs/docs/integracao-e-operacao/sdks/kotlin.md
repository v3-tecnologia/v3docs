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

## Exemplo rápido: Media

```kotlin
client.media {
	val fileResult = downloadFile(
		key = "encrypted-file-key",
		download = true,
		filename = "snapshot.jpg"
	)

	fileResult.match(
		onSuccess = { bytes -> println("Downloaded bytes: ${bytes.size}") },
		onFailure = { error -> println("Download error: $error") }
	)
}
```

## Padrão de retorno

Todas as operações retornam `Result<T>`, com tratamento via `match(...)`.

## Referências úteis

- [README](https://github.com/v3-tecnologia/v3-kotlin-sdk/blob/main/README.md)
- [Exemplos](https://github.com/v3-tecnologia/v3-kotlin-sdk/tree/main/examples)
