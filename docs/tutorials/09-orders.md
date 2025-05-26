---
sidebar_position: 9
---

# 📝 Orders

O Sistema de Orders é uma ferramenta que permite enviar comandos e configurações para dispositivos em campo de forma simples e eficiente. É como um "controle remoto" que permite gerenciar e monitorar seus dispositivos remotamente.

## 🎯 Para que serve?

- 📤 Enviar comandos para dispositivos (como reiniciar, solicitar imagens ou vídeos)
- ⚙️ Configurar dispositivos remotamente
- 📶 Gerenciar conexões WiFi
- 📊 Monitorar o status das operações
- 🔔 Receber notificações quando as operações são concluídas

## 🛠️ Comandos Disponíveis

### 1. ⚙️ Configurações do Dispositivo (CONFIG)
Permite configurar parâmetros específicos do dispositivo:
- ⚙️ Configurar módulos do sistema
- 🔧 Ajustar parâmetros de conexão
- 📝 Definir configurações específicas

Exemplo:
```json
{
    "type": "CONFIG",
    "parameters": [
        {
            "module": "downloaderd",
            "key": "S3_REGION",
            "value": "us-east-1",
            "type": "string"
        }
    ]
}
```

### 2. 📶 Gerenciamento de WiFi
#### ➕ Adicionar WiFi (ADD_WIFI)
Adiciona uma nova rede WiFi ao dispositivo:
```json
{
    "type": "ADD_WIFI",
    "parameters": [
        {
            "ssid": "NomeDaRede",
            "password": "SenhaDaRede"
        }
    ]
}
```

#### ➖ Remover WiFi (DELETE_WIFI)
Remove uma rede WiFi existente:
```json
{
    "type": "DELETE_WIFI",
    "parameters": [
        {
            "ssid": "NomeDaRede"
        }
    ]
}
```

### 3. 🔄 Comandos Básicos
#### 🔄 Reiniciar Dispositivo (REBOOT)
Reinicia o dispositivo:
```json
{
    "type": "REBOOT",
    "parameters": []
}
```

#### 📸 Solicitar Imagem (REQUEST_IMAGE)
Solicita uma imagem do dispositivo:
```json
{
    "type": "REQUEST_IMAGE",
    "parameters": [
        {
            "start": "2024-03-20T10:00:00Z",
            "cam": "1"  // 1 = Câmera da Estrada, 0 = Câmera do Motorista
        }
    ]
}
```

#### 🎥 Solicitar Vídeo (REQUEST_VIDEO)
Solicita um vídeo do dispositivo:
```json
{
    "type": "REQUEST_VIDEO",
    "parameters": [
        {
            "start": "2024-03-20T10:00:00Z",
            "end": "2024-03-20T11:00:00Z",
            "cam": "1"  // 1 = Câmera da Estrada, 0 = Câmera do Motorista
        }
    ]
}
```

#### 📊 Estado do Dispositivo (DEVICE_STATE)
Força uma atualização do estado do dispositivo:
```json
{
    "type": "DEVICE_STATE",
    "parameters": []
}
```

### 4. 👨‍✈️ Driver Coach
#### 📱 Monitoramento Inercial (DRIVER_COACH_INERTIAL)
Ativa/desativa o monitoramento inercial:
```json
{
    "type": "DRIVER_COACH_INERTIAL",
    "parameters": [
        {
            "active": true
        }
    ]
}
```

#### 📊 Telemetria (DRIVER_COACH_TELEMETRY)
Ativa/desativa a telemetria:
```json
{
    "type": "DRIVER_COACH_TELEMETRY",
    "parameters": [
        {
            "active": true
        }
    ]
}
```

#### 📍 Rastreamento (DRIVER_COACH_TRACKING)
Ativa/desativa o rastreamento:
```json
{
    "type": "DRIVER_COACH_TRACKING",
    "parameters": [
        {
            "active": true
        }
    ]
}
```

## 🚀 Como Usar

### 📤 Enviando Comandos
Para enviar um comando para um dispositivo:
1. 🔍 Identifique o ID do dispositivo
2. 🎯 Escolha o tipo de comando desejado
3. ⚙️ Prepare os parâmetros necessários
4. 📤 Envie a requisição para o endpoint `/devices/{deviceId}/orders`

### 📦 Enviando Múltiplos Comandos
Você pode enviar vários comandos de uma vez:
```json
{
    "orders": [
        {
            "type": "CONFIG",
            "parameters": [...]
        },
        {
            "type": "ADD_WIFI",
            "parameters": [...]
        }
    ]
}
```

## 📊 Monitoramento

### 📈 Status das Orders
As orders podem ter os seguintes status:
- ⏳ PENDING: Aguardando processamento
- 📤 SENT: Enviada para o dispositivo
- ✅ PROCESSED: Processada com sucesso
- ❌ FAILED: Falha no processamento
- 🗑️ DELETED: Order excluída

### 🔍 Consultando Orders
Você pode consultar:
- 📱 Orders de um dispositivo específico
- 📊 Status de uma order específica
- 📋 Detalhes completos de uma order

## ⚙️ Gerenciamento de Orders

### 🗑️ Excluindo Orders
Você pode excluir orders de três formas:
1. 🎯 Uma order específica: DELETE `/devices/{deviceId}/orders/{orderId}`
2. 📦 Múltiplas orders: DELETE `/devices/{deviceId}/orders?ids=id1,id2,id3`
3. 🧹 Todas as orders de um dispositivo: DELETE `/devices/{deviceId}/orders`

## 💡 Boas Práticas

1. ✅ **Verifique o Status**: Sempre verifique o status das orders antes de enviar novas
2. 🧹 **Limpeza Regular**: Remova orders antigas ou desnecessárias
3. 📊 **Monitoramento**: Acompanhe as notificações para garantir que as operações foram concluídas
4. 🧪 **Testes**: Teste novas configurações em um dispositivo antes de aplicar em vários

## ⚠️ Limitações

- 🚫 Orders não podem ser canceladas após serem enviadas ao dispositivo
- ⏱️ Algumas operações podem levar tempo para serem concluídas
- 🔄 Certas configurações podem requerer reinicialização do dispositivo
- 🚫 Orders em status diferente de PENDING não podem ser excluídas

## 🆘 Suporte

Se você encontrar problemas ou tiver dúvidas:
1. 📊 Verifique o status da order
2. 📝 Consulte os logs do dispositivo
3. 📧 Entre em contato com o suporte técnico

## 💻 Ferramenta CLI

A V3 oferece ainda uma ferramenta de CLI escrita em Python que pode te ajudar a executar estes e outros comandos mais avançados.

Entre em contato com o nosso suporte através do e-mail suporte@v3.com.br para obter acesso a esta ferramenta.

## 📝 Exemplos de Uso

### 📶 Exemplo 1: Adicionando uma Rede WiFi
```json
{
    "ssid": "NomeDaRede",
    "password": "SenhaDaRede"
}
```

### 📸 Exemplo 2: Solicitando uma Imagem
```json
{
    "timeStamp": "2024-05-07T08:46:00Z",
    "selectedCam": "driver"
}
```

### 📸 Exemplo 3: Reiniciando um Dispositivo
```json
{
    "type": "REBOOT"
}
```

## Conclusão

O Sistema de Orders é uma ferramenta poderosa para gerenciar seus dispositivos remotamente. Com ele, você pode realizar diversas operações de forma simples e eficiente, mantendo o controle total sobre seus dispositivos em campo. 