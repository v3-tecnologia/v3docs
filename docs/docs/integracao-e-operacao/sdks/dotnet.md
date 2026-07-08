---
sidebar_position: 3
---

# SDK .NET

No ecossistema .NET da V3, hoje há dois SDKs principais: Orders SDK e Webhook SDK.

## Repositórios oficiais

- Orders: [v3-tecnologia/v3-dotnet-sdk](https://github.com/v3-tecnologia/v3-dotnet-sdk)
- Webhook: [v3-tecnologia/v3-webhook-dotnet-sdk](https://github.com/v3-tecnologia/v3-webhook-dotnet-sdk)

## 1) .NET Orders SDK

SDK moderno para integração com API de ordens, com foco em fluidez e resiliência.

### Instalação

```bash
dotnet add package V3.Sdk
```

### Registro com DI

```csharp
using Microsoft.Extensions.DependencyInjection;
using V3.Sdk.Configuration;
using V3.Sdk.Extensions;
using V3.Sdk.Api.Orders;

var services = new ServiceCollection();

services.AddOrdersSdk(
	tenantId: "golfleet",
	environment: V3Environment.Sandbox,
	clientId: "your-client-id",
	clientSecret: "your-client-secret");

using var provider = services.BuildServiceProvider();
var client = provider.GetRequiredService<IOrdersClient>();
```

### Exemplo rápido

```csharp
var result = await CommandsFactory
	.Reboot()
	.ForDevice("device-001")
	.WithMetadata("source", "backend")
	.Build()
	.Bind(order => client.SendOrderAsync(order));

result.Match(
	onSuccess: response => Console.WriteLine($"Order sent: {response.Id}"),
	onFailure: error => Console.WriteLine($"Error: {error}"),
	onValidationFailure: errors => Console.WriteLine($"Validation: {string.Join(", ", errors)}"));
```

## 2) .NET Webhook SDK

SDK agnóstico de transporte para processar webhooks IoT com modelos fortemente tipados em Protobuf.

### Instalação

Atualmente, o README oficial orienta uso por referência direta de projeto:

```bash
dotnet add reference V3.WebhookSdk/V3.WebhookSdk.csproj
```

### Exemplo rápido

```csharp
var processor = new WebhookEventProcessorBuilder()
	.OnEvent(
		EventSelector
			.Of()
			.Group("SYSTEM")
			.EventName("UPLOAD"),
		async (EventContext ctx, UploadEvent evt) =>
		{
			Console.WriteLine($"Upload event received: {evt.Id}");
			await Task.CompletedTask;
		}
	)
	.Build();

await processor.ProcessWebhookAsync(jsonPayload, signature);
```

### Assinatura HMAC (opcional)

```csharp
var processor = new WebhookEventProcessorBuilder()
	.WithHmacSha256("your-secret-key")
	.Build();
```

## Referências úteis

- [.NET Orders README](https://github.com/v3-tecnologia/v3-dotnet-sdk/blob/main/README.md)
- [.NET Webhook README](https://github.com/v3-tecnologia/v3-webhook-dotnet-sdk/blob/main/README.md)
