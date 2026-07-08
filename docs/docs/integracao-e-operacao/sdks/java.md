---
sidebar_position: 1
---

# SDK Java

O SDK Java da V3 oferece uma API fluente e tipada para integração com Orders, Management e Media.

Repositório oficial: [v3-tecnologia/v3-java-sdk](https://github.com/v3-tecnologia/v3-java-sdk)

## Pré-requisitos

- Java 11+
- Maven 3.6+

## Instalação

Adicione a dependência no `pom.xml`:

```xml
<dependency>
	<groupId>br.com.v3.sdk</groupId>
	<artifactId>v3-java-sdk</artifactId>
	<version>1.0.0</version>
</dependency>
```

## Configuração básica

```java
import br.com.v3.sdk.core.V3ClientFactory;
import br.com.v3.sdk.core.V3Environment;

var client = V3ClientFactory.create(
	System.getenv("V3_TENANT"),
	System.getenv("V3_SECRET"),
	V3Environment.PRODUCTION
);
```

Variáveis recomendadas:

- `V3_TENANT`
- `V3_SECRET`

## Exemplo rápido: envio de ordem

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

## Conceitos importantes

- Comandos tipados (`RebootCommand`, `AddWifiCommand`, etc.)
- Padrão `Result<T>` para fluxo de sucesso/erro sem exceções como controle de fluxo
- API pública unificada baseada em entidades (`Device`, `Driver`, `Fleet`, `Team`)

## Referências úteis

- [README](https://github.com/v3-tecnologia/v3-java-sdk/blob/main/README.md)
- [Guia de uso](https://github.com/v3-tecnologia/v3-java-sdk/blob/main/docs/GUIDE.md)
- [Quick Reference](https://github.com/v3-tecnologia/v3-java-sdk/blob/main/QUICK_REFERENCE.md)
- [Arquitetura](https://github.com/v3-tecnologia/v3-java-sdk/blob/main/docs/ARCHITECTURE.md)
