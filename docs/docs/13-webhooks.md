---
sidebar_position: 13
---

# Webhooks

Este documento descreve o sistema de notificações via webhook, uma solução que permite a comunicação em tempo real entre diferentes sistemas através de notificações HTTP. O sistema foi projetado para ser seguro, confiável e fácil de integrar.

:::info[Procurando a API?]

Caso queira acessar diretamente a documentação da API de Notificações, [clique aqui](/docs/category/notification-webhook).

:::

## O que são Webhooks?

Webhooks são uma forma de comunicação entre sistemas onde um sistema (o remetente) envia automaticamente uma notificação HTTP para outro sistema (o destinatário) quando um evento específico ocorre. É como um "callback" na web - quando algo acontece no sistema remetente, ele "chama" o sistema destinatário para informar sobre o evento.

### Vantagens dos Webhooks

- **Tempo Real**: As notificações são enviadas instantaneamente quando um evento ocorre
- **Eficiência**: Não é necessário fazer polling constante para verificar por novas informações
- **Simplicidade**: Implementação simples usando HTTP, um protocolo amplamente suportado
- **Flexibilidade**: Pode ser integrado com qualquer sistema que suporte HTTP

## Como Funciona o Sistema

### 1. Configuração do Cliente

Para começar a receber notificações, o cliente precisa:

1. Fornecer um endpoint HTTP que receberá as notificações
2. Configurar um secret key para autenticação
3. Definir um timeout para as requisições

### 2. Autenticação e Segurança

O sistema utiliza autenticação `HMAC-SHA256` para garantir a segurança das notificações:

1. Cada notificação é assinada usando o secret key do cliente
2. A assinatura é enviada no header `X-V3-Signature`
3. O cliente deve validar a assinatura para garantir que a notificação é legítima

####  Como Validar a Assinatura (Lado do Cliente)

```python
import hmac
import hashlib

def verify_signature(payload, signature, secret):
    # Remove o prefixo 'sha256=' se presente
    if signature.startswith('sha256='):
        signature = signature[7:]
    
    # Calcula a assinatura esperada
    expected_signature = hmac.new(
        secret.encode('utf-8'),
        payload,
        hashlib.sha256
    ).hexdigest()
    
    # Compara as assinaturas
    return hmac.compare_digest(signature, expected_signature)
```

### 3. Formato das Notificações

As notificações são enviadas como requisições HTTP POST com os seguintes formatos, podendo ser:

1. Order Status
1. Order Ack
1. Upload

#### 3.1. Payload do Webhook de Evento de Order Status
```json
{
    "id":"ULID do Webhook",
    "created_at":"2024-03-21T10:00:00Z", // Data da criação do webhook
    "type":"ORDER_STATUS",
    "attributes":[
        {
            "id":"ULID do Evento",
			"created_at":"2024-03-21T10:00:00Z", // Data da criação do evento no Firmeware
            "attributes":{
                "device":{
					"id":"ULID do Dispositivo", // Id do dispositivo na API
					"correlation_id": "ULID relacional do Dispositivo (opcional)",
                    "imei":"IMEI do Dispositivo"
                },
                "order":{
                    "id":"ULID da Order que originou o evento de upload (opcional)",
					"correlation_id":"ULID relacional da Order (opcional)",
                    "group":"COMMAND | CONFIG",
                    "status":"DELETED | PROCESSED | FAILED | SENT | PENDING",
                    "type":"ADD_WIFI | DELETE_WIFI | DEVICE_STATE | REQUEST_IMAGE | REQUEST_VIDEO | CONFIG | REBOOT | DRIVER_COACH_INERTIAL | DRIVER_COACH_TELEMETRY | DRIVER_COACH_TRACKING | INTERNAL",
                    "source_request":"Aqui será retornado o campo `source_request`",
					"created_at":"2024-03-21T10:00:00Z", // Data da criação da Order
		            "updated_at":"2024-03-21T10:00:00Z", // Data da última atualização da Order
					"deleted_at":"2024-03-21T10:00:00Z" // Data da deleção da Order
                }
            },
        }
    ]
}
```

#### 3.2. Payload do Webhook do Event ORDER_ACK

```json
{
    "id":"ULID do Webhook",
    "created_at":"2024-03-21T10:00:00Z", // Data da criação do webhook
    "type":"ORDER_ACK",
    "attributes":[
        {
            "id":"ULID do Evento",
			"created_at":"2024-03-21T10:00:00Z", // Data da criação do evento no Firmeware
            "attributes":{
                "device":{
					"id":"ULID do Dispositivo", // Id do dispositivo na API
					"correlation_id": "ULID relacional do Dispositivo (opcional)",
                    "imei":"string"
                },
                "order":{
                    "id":"ULID da Order que originou o evento de upload (opcional)",
					"correlation_id":"ULID relacional da Order (opcional)",
                    "status":"PROCESSED | FAILED",
					"created_at":"2024-03-21T10:00:00Z", // Data da criação da Order
		            "updated_at":"2024-03-21T10:00:00Z", // Data da última atualização da Order
					"deleted_at":"2024-03-21T10:00:00Z" // Data da deleção da Order
                },
            },
        }
    ]
}
```

#### 3.3. UPLOAD

```json
{
    "id":"ULID do Webhook",
    "created_at":"2024-03-21T10:00:00Z", // Data da criação do webhook
    "type":"UPLOAD",
    "attributes":[
        {
            "id":"ULID do Evento",
			"created_at":"2024-03-21T10:00:00Z", // Data da criação do evento no Firmeware
            "attributes":{
                "device":{
					"id":"ULID do Dispositivo", // Id do dispositivo na API
					"correlation_id": "ULID relacional do Dispositivo (opcional)",
                    "imei":"string"
                },
                "order":{
                    "id":"ULID da Order que originou o evento de upload (opcional)",
					"created_at":"2024-03-21T10:00:00Z", // Data da criação da Order
		            "updated_at":"2024-03-21T10:00:00Z", // Data da última atualização da Order
					"deleted_at":"2024-03-21T10:00:00Z" // Data da deleção da Order
                },
                "media":[
                    {
                        "id":"ULID da Mídia",
                        "url":"https://s3.amazonaws.com/01GY8D9P/862798050832837/07PWF2JT2E_image0.jpg",
                        "metadata":{
                            "width":1920,
                            "height":1080,
                            "compression":"JPEG",
                            "quality":85,
                            "cam_channel":"1",
                            "content_type":"image/jpeg",
                            "file_size":245678
                        }
                    }
                ]
            },
        }
    ]
}
```

### 4. Respostas e Confirmações

O sistema espera uma resposta HTTP do cliente:

- **200 OK**: Notificação recebida e processada com sucesso
- **Outros códigos**: Indica que houve um problema no processamento

O sistema registra todas as tentativas de entrega e suas respostas para auditoria e troubleshooting.

## Boas Práticas para Implementação

### Lado do Cliente

1. **Idempotência**: Implemente seu endpoint para ser idempotente, pois a mesma notificação pode ser enviada mais de uma vez
2. **Timeout**: Configure um timeout adequado para processar a notificação
3. **Validação**: Sempre valide a assinatura antes de processar a notificação
4. **Resposta Rápida**: Responda o mais rápido possível, mesmo que o processamento completo demore mais tempo
5. **Logging**: Mantenha logs de todas as notificações recebidas

### Exemplo de Implementação (Python)

```python
from flask import Flask, request, jsonify
import hmac
import hashlib

app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def webhook():
    # Obtém a assinatura do header
    signature = request.headers.get('X-V3-Signature')
    if not signature:
        return jsonify({'error': 'No signature provided'}), 401
    
    # Obtém o payload
    payload = request.get_data()
    
    # Valida a assinatura
    if not verify_signature(payload, signature, 'seu-secret-key'):
        return jsonify({'error': 'Invalid signature'}), 401
    
    # Processa a notificação
    try:
        # Seu código de processamento aqui
        return jsonify({'status': 'success'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=8080)
```

## Troubleshooting

### Problemas Comuns

1. **Notificações não recebidas**
   -  Verifique se o endpoint está acessível
   -  Confirme se o secret key está correto
   -  Verifique os logs do sistema

2. **Erros de Autenticação**
   -  Confirme se o secret key está correto
   -  Verifique se a assinatura está sendo calculada corretamente
   -  Certifique-se de que o header `X-V3-Signature` está sendo enviado

3. **Timeouts**
   -  Aumente o timeout na configuração se necessário
   -  Otimize o processamento do webhook para ser mais rápido
   -  Considere processar a notificação de forma assíncrona