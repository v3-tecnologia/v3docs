---
sidebar_position: 10
---

# Orders

O Sistema de Orders é uma ferramenta que permite enviar comandos e configurações para dispositivos em campo de forma simples e eficiente. É como um "controle remoto" que permite gerenciar e monitorar seus dispositivos remotamente.

:::info[Procurando a API?]

Caso queira acessar diretamente a documentação da API de Orders, [clique aqui](/docs/category/order-api).

:::

## Para que serve?

- Enviar comandos para dispositivos (como reiniciar, solicitar imagens ou vídeos)
- Configurar dispositivos remotamente
- Gerenciar conexões WiFi
- Monitorar o status das operações
- Receber notificações quando as operações são concluídas

## Antes de Começar

É importante entender que na V3 nós trabalhamos com alguns tipos de comandos.

Um comando `CONFIG` será utilizado para "alterar" diretamente um comportamento de um módulo na implementação do Firmware. Isso é bastante poderoso, pois conseguimos ter um controle quase que total do dispositivo. Mas exige um conhecimento avançado de como está implementado o nosso Firmware, por isso, caso seja necessário utilizar este comando, possivlemente você será instruído pelo nosso time de desenvolvedores para fazer isso da melhor maneira.

Existe ainda um comando especial do tipo `INTERNAL` que permite que se execute comandos diretamente no sistema operacional do dispositivo. Este comando pode ser importante para ajudar na investigação de problemas e para buscar por dados no dispositivo. Para que estes comandos sejam executados, nós validamos uma permissão especial, chamada de `admin_role` (mais informações em [Níveis de Permissão](08-permissionamento.md#n%C3%ADveis-de-permiss%C3%A3o)).

Por fim, existem os comandos mais "amigáveis" que provavelmente serão os mais comuns de se utilizar. Este comandos, internamente, agrupam uma série de instruções do tipo `CONFIG` que fazem uma ação maior. Estamos sempre melhorando a nossa lista de comandos, e podemos "encapsular" novos comandos na medida do necessário.

:::info[Entre em contato com os nossos Devs]

Entre em contato diretamente com os nossos Devs, para entender melhor como utilizar o comando do tipo `CONFIG`. Envie um e-mail para [dev@v3.com.br](mailto:dev@v3.com.br)

:::

## Comandos Avançados

### 1. Configurações do Dispositivo (CONFIG)
Permite configurar parâmetros específicos do dispositivo:
- Configurar módulos do sistema
- Ajustar parâmetros de conexão
- Definir configurações específicas

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

### 2. Configurações Internas (INTERNAL)
Os comandos internos são operações especiais que requerem permissões administrativas. Estes comandos são usados para configurações mais sensíveis do sistema.

#### Como Usar Comandos Internos

Para enviar um comando interno:
1. Certifique-se de ter permissões de `admin_tenant`
2. Use o endpoint específico: `/devices/{deviceId}/order/internal`
3. Configure o tipo como `INTERNAL`

Exemplo de comando interno:
```json
{
    "orders": [
        {
            "type": "INTERNAL",
            "parameters": [
                {
                    "module": "downloaderd",
                    "key": "S3_REGION",
                    "value": "us-east-1",
                    "type": "string"
                }
            ]
        }
    ]
}
```

## Comandos

### 1. Gerenciamento de WiFi
#### Adicionar WiFi (ADD_WIFI)
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

#### Remover WiFi (DELETE_WIFI)
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

### 2. Ações no Dispositivo
#### Reiniciar Dispositivo (REBOOT)
Reinicia o dispositivo:
```json
{
    "type": "REBOOT",
    "parameters": []
}
```

#### Solicitar Imagem (REQUEST_IMAGE)
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

#### Solicitar Vídeo (REQUEST_VIDEO)
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

#### Estado do Dispositivo (DEVICE_STATE)
Força uma atualização do estado do dispositivo:
```json
{
    "type": "DEVICE_STATE",
    "parameters": []
}
```

### 3. ‍Driver Coach
#### Monitoramento Inercial (DRIVER_COACH_INERTIAL)
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

#### Telemetria (DRIVER_COACH_TELEMETRY)
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

#### Rastreamento (DRIVER_COACH_TRACKING)
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

## Como Usar

### Enviando Comandos
Para enviar um comando para um dispositivo:
1.  Identifique o ID do dispositivo
2.  Escolha o tipo de comando desejado
3.  Prepare os parâmetros necessários
4.  Envie a requisição para o endpoint `/devices/{deviceId}/orders`

### Enviando Múltiplos Comandos
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

## Monitoramento

### Status das Orders
As orders podem ter os seguintes status:
- `PENDING`: Aguardando processamento
- `SENT`: Enviada para o dispositivo
- `PROCESSED`: Processada com sucesso
- `FAILED`: Falha no processamento
- `DELETED`: Order excluída

### Consultando Orders
Você pode consultar:
- Orders de um dispositivo específico
- Status de uma order específica
- Detalhes completos de uma order

## Gerenciamento de Orders

### Excluindo Orders
Você pode excluir orders de três formas:
1. Uma order específica: DELETE `/devices/{deviceId}/orders/{orderId}`
2. Múltiplas orders: DELETE `/devices/{deviceId}/orders?ids=id1,id2,id3`
3. Todas as orders de um dispositivo: DELETE `/devices/{deviceId}/orders`

:::warning[Quando posso excluir?]

Uma order permite a sua exclusão enquanto ainda não foi enviada para o Dispositivo, ou seja, o seu status ainda é `PENDING`. Qualquer status depois de `PENDING` impede a exclusão de uma order.

:::

## Boas Práticas

1. **Verifique o Status**: Sempre verifique o status das orders antes de enviar novas
2. **Limpeza Regular**: Remova orders antigas ou desnecessárias
3. **Monitoramento**: Acompanhe as notificações para garantir que as operações foram concluídas
4. **Testes**: Teste novas configurações em um dispositivo antes de aplicar em vários

## Limitações

- Algumas operações podem levar tempo para serem concluídas
- Certas configurações podem requerer reinicialização do dispositivo
- É importante lembrar que trabalhamos em um cenário de IoT, no qual sempre há a possibilidade da perda de informação trafegada entre a núvem e o dispositivo. Por isso, o sistema de orders está preparado para inferir se o comando não foi executado depois que o dispositivo não traga a resposta depois de certo tempo.

## Ferramenta CLI para Execução de Orders

A V3 oferece ainda uma ferramenta de CLI escrita em Python que pode te ajudar a executar estes e outros comandos mais avançados.

:::info[Entre em contato com os nossos Devs]

Caso queira agilizar a sua operação utilizando a nossa ferramenta de CLI, Envie um e-mail para [dev@v3.com.br](mailto:dev@v3.com.br)

:::

## Exemplos de Uso

### Exemplo 1: Adicionando uma Rede WiFi
```json
{
    "ssid": "NomeDaRede",
    "password": "SenhaDaRede"
}
```

### Exemplo 2: Solicitando uma Imagem
```json
{
    "timeStamp": "2024-05-07T08:46:00Z",
    "selectedCam": "driver"
}
```

### Exemplo 3: Reiniciando um Dispositivo
```json
{
    "type": "REBOOT"
}
```