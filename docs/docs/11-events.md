---
sidebar_position: 11
---

# Events

O Contexto de events é o coração do sistema de video-telemetria da V3. Ela é responsável por gerenciar todos os eventos que acontecem com os dispositivos em campo, como posição GPS, dados do acelerômetro, identificação do condutor e comportamentos inadequados.

## Link da API

Caso queira acessar diretamente a documentação da API de Eventos, [clique aqui](/docs/category/event-api).

## O que são Events?

Events são registros de tudo o que acontece com um dispositivo em campo. Eles podem ser classificados em três categorias principais:

1. **Hardware**: Eventos relacionados ao automóvel (ex: ignição)
2. **Vision**: Eventos capturados pelas câmeras
3. **Telemetry**: Eventos obtidos via sensores do dispositivo (ex: Giroscópio, GPS)

## Estrutura de um Evento

Cada evento contém as seguintes informações principais:

### Informações Básicas
- **ULID**: Identificador único do evento
- **Device ID**: ID do dispositivo que gerou o evento
- **Event Type**: Tipo do evento (Hardware, Vision ou Telemetry)
- **Hardware Event Type**: Subtipo do evento (quando aplicável)
- **Hardware Model**: Modelo do dispositivo
- **Correlation ID**: ID para correlacionar eventos relacionados

### Timestamps
- **Sourced Created At**: Data/hora de criação do evento
- **Hook Delivered At**: Data/hora em que o webhook foi entregue
- **Tenant Delivered At**: Data/hora em que o evento foi consumido pelo cliente

### Payload
O payload contém todas as informações específicas do evento e é estruturado da seguinte forma:

#### Message Info
- **Message Type**: Tipo da mensagem
- **Sequence Number**: Número sequencial da mensagem

####⏳ Timestamps
- **Event Date**: Data do evento (formato YYYY-MM-DD)
- **Event Time**: Hora do evento (formato HH:mm:ss)
- **Timestamp**: Timestamp Unix do evento
- **Last Timestamp of Fix**: Último timestamp de fixação GPS
- **Received Timestamp**: Timestamp de recebimento
- **Process Timestamp**: Timestamp de processamento
- **TTL Timestamp**: Timestamp de expiração
- **Time Since Boot**: Tempo desde o último boot do dispositivo

#### Dados de GPS
- **Latitude**: Latitude da posição
- **Longitude**: Longitude da posição
- **Altitude**: Altitude em metros
- **GPS Heading**: Direção em graus
- **Speed**: Velocidade em km/h
- **Satellites**: Número de satélites conectados
- **Is Fixed**: Indica se o GPS está fixado
- **HDOP**: Horizontal Dilution of Precision
- **VDOP**: Vertical Dilution of Precision

#### Dados do Veículo
- **Is Ignition On**: Estado da ignição
- **Odometer**: Quilometragem atual
- **Vehicle Battery Voltage**: Tensão da bateria do veículo
- **Backup Battery Voltage**: Tensão da bateria de backup
- **Is Vehicle Battery Connected**: Indica se a bateria do veículo está conectada

#### Dados de Conexão
- **Connection Type**: Tipo de conexão
- **Signal Strength**: Força do sinal em dBm
- **MCC**: Mobile Country Code
- **MNC**: Mobile Network Code
- **Cell ID**: ID da célula
- **Location Area Code**: Código da área
- **Timing Advance**: Avanço de timing
- **ICCID**: Número do chip SIM

#### Dados de Mídia (quando aplicável)
- **ULID**: Identificador único da mídia
- **Object Name**: Nome do objeto no bucket
- **Bucket Name**: Nome do bucket de armazenamento
- **Content Type**: Tipo do conteúdo (ex: image/jpeg)
- **File Size**: Tamanho do arquivo em bytes
- **Media Type**: Tipo de mídia (RECORD, EVENT, INDEXED, THUMBNAIL)
- **Cam Channel**: Canal da câmera (1 ou 2)
- **Metadata**: Metadados adicionais da mídia
  - Width: Largura da imagem
  - Height: Altura da imagem
  - Compression: Tipo de compressão
  - Quality: Qualidade da compressão

#### Metadata
- **Firmware Version**: Versão do firmware
- **PID**: Identificadores do processo
  - Main: PID principal
  - Sub: PID secundário
- **Version**: Versão do software
  - Major: Versão maior
  - Minor: Versão menor
  - Patch: Versão de patch
- **Details**: Detalhes adicionais do evento

## Como os Eventos são Criados?

Os eventos podem ser criados de duas formas:

1. **Automaticamente pelo Sistema**:
   - Através do MQTT (para eventos de Hardware e Telemetria)
   - Através do S3 (para eventos de Vision)

2. **Manualmente via API**:
   - Endpoint: `POST /devices/{deviceId}/events`
   - Requer permissão de admin ou tenant_admin
   - Permite criar eventos de forma manual para testes ou correções

## Como Consumir Eventos?

Existem duas formas de consumir eventos:

1. **Via Webhook**:
   - O sistema notifica automaticamente quando um novo evento é criado
   - O cliente deve implementar um endpoint para receber estas notificações
   - O evento é marcado como consumido quando o webhook retorna sucesso (2xx)

2. **Via API**:
   - Endpoint: `GET /devices/{deviceId}/events`
   - Suporta paginação
   - Permite filtrar eventos por período
   - Após consumir, o cliente deve marcar o evento como processado usando:
     - `PATCH /devices/{deviceId}/events/{ulid}` (evento único)
     - `PATCH /devices/{deviceId}/events` (múltiplos eventos)

## Recuperando Mídias dos Eventos

Para eventos que possuem mídias associadas (como fotos ou vídeos):

1. O evento contém informações sobre a mídia no campo `media` do payload
2. Para obter a URL de acesso à mídia:
   - Endpoint: `GET /vision/media`
   - Retorna URLs para acesso aos arquivos

## Segurança

- Todos os endpoints requerem autenticação via token JWT
- Acesso baseado em roles (admin, tenant_admin, etc.)
- URLs de mídia são temporárias e expiram automaticamente
- Suporte a idempotência para evitar duplicação de eventos