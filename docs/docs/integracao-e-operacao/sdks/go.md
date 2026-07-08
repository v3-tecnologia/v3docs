---
sidebar_position: 4
---

# SDK Go

Atualmente, a base oficial em Go é o SDK de processamento de webhooks/eventos.

Repositório oficial: [v3-tecnologia/v3-webhook-go-sdk](https://github.com/v3-tecnologia/v3-webhook-go-sdk)

## Sobre o SDK

- Processamento de eventos IoT com `protojson`
- Validação baseada em Protocol Buffers
- Arquitetura agnóstica de servidor HTTP
- Handlers por domínio (orders, connection, vision, telemetry, dms, etc.)

## Instalação

O README atual usa o módulo de exemplo abaixo. Para evitar divergência de import path, siga o repositório oficial e valide o path adotado pela versão que você for usar:

```bash
go get github.com/your-org/go-eventlib
```

## Exemplo rápido

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

## Tipos de evento suportados

Entre os grupos principais suportados:

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

## Referências úteis

- [README](https://github.com/v3-tecnologia/v3-webhook-go-sdk/blob/main/README.md)
- [Exemplo de webhook](https://github.com/v3-tecnologia/v3-webhook-go-sdk/tree/main/examples)
