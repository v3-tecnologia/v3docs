---
sidebar_position: 3
---

# .NET SDK

In the V3 .NET ecosystem, there are currently two main SDKs: Orders SDK and Webhook SDK.

## Official repositories

- Orders: [v3-tecnologia/v3-dotnet-sdk](https://github.com/v3-tecnologia/v3-dotnet-sdk)
- Webhook: [v3-tecnologia/v3-webhook-dotnet-sdk](https://github.com/v3-tecnologia/v3-webhook-dotnet-sdk)

## 1) .NET Orders SDK

Modern SDK for integration with the orders API, focused on fluency and resilience.

### Installation

```bash
dotnet add package V3.Sdk
```

### DI registration

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

### Quick example

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

Transport-agnostic SDK for processing IoT webhooks with strongly typed Protobuf models.

### Installation

Currently, the official README recommends use via direct project reference:

```bash
dotnet add reference V3.WebhookSdk/V3.WebhookSdk.csproj
```

### Quick example

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

### HMAC signature (optional)

```csharp
var processor = new WebhookEventProcessorBuilder()
	.WithHmacSha256("your-secret-key")
	.Build();
```

## Useful references

- [.NET Orders README](https://github.com/v3-tecnologia/v3-dotnet-sdk/blob/main/README.md)
- [.NET Webhook README](https://github.com/v3-tecnologia/v3-webhook-dotnet-sdk/blob/main/README.md)
