# V3Tutorial

# Bem vindo a V3
- Quando foi criada?
- Por que chamamos V3?

## O que você vai encontrar?
- Um passo a passo para entender como a V3 oferece suas soluções de tecnologia.
- Índice para todos as próximas páginas.

## O que é a V3
- O que fazemos?
- Quem é o nosso público alvo?
- Qual a nossa missão, visão e valores?
- Link para o nosso site oficial

# Solução V3
- Nossa solução envolve Hardware e Software
- Imagem com a solução V3 - `static/img/solucao_v3.png`

## V3 Hardware

É o dispositivo - hardware - onde será embarcado o V3FW. Você pode optar por comprar o hardware homologado diretamente da V3 (V3HW), ou através de nossa rede de parceiros. 

Atualmente trabalhamos com a  Smart DashCam JC400P que possui uma câmera frontal de 1080P e uma sub câmera de 720P. 

As imagens geradas por essas câmeras podem ser arquivadas internamente em seu cartão de memória com capacidade de 64GB. 

Além disso, a capacidade 4G do dispositivo possibilita alertas de áudio em tempo real, recebimento de novas configurações e upload de arquivos de eventos para V3Cloud. 

### Como adquiriar meu hardware
  - Parceria
  - Comodato
  - Compra
### Modelos disponíveis
  - JC400P
  - Link para as especificações do fabricante
### Futuros portings
  - Listar os dispositivos que queremos realizar o porting

## V3 Core

### V3 Firmware
O V3FW é o software embarcado no dispositivo, responsável por coletar, processar e enviar os dados captados pelos sensores para a nuvem.

Telemetria - Dados de sensores para monitoramento
MDVR - Gravação e recuperação de medias (remotamente)
Comportamento do Condutor
DMS - Monitoramento dos movimentos faciais do condutor
Face ID - Reconhecimento Facial
Portabilidade - Conseguimos instalar nossa solução em outros dispositivos

### V3 Cloud

O V3CLOUD é responsável por toda a infraestrutura para receber, tratar e armazenar esses dados, tornando-os disponíveis na camada de visualização.

- Sistema preparado para múltiplos clientes
- Mecanismos de segurança e escalabilidade
- Recebimento das informações de forma segura
- Armazenamento das informações
- Pós-processamento de eventos e medias
- Disponibilização das informações via API

## V3 View

A V3VIEW é a plataforma de visualização das informações coletadas pelo V3FW e armazenadas na V3CLOUD.

### V3 APIs
- API de integração personalizável para a plataforma do cliente, permitindo integração com sistemas existentes. (Roadmap)
- Este tutorial te apoia a entender essas APIs

### V3 APP
- Aplicativo móvel (iOS/Android) como alternativa para visualizar as informações da plataforma V3Web; (Roadmap)
- Links para o aplicativo na loja

### V3 WEB
- Plataforma web completa e intuitiva fornecida pela V3;

## Ambientes Disponíveis

### Staging
- É o nosso ambiente padrão para homologação de novos clientes
- URL: `https://v3sandbox.com`

### Production
- É o nosso ambiente produtivo
- Solicite ao nosso time os cadastros e receberá as urls

# Setup Inicial
- Você deve informar alguns ítens cadastrais;
`payload de onboarding` - solicitar estes campos
- Nós vamos lhe passar credenciais de acesso;
`informações de credenciais`
{
  `tenant_id`
  `client_secret`
  `webhook_secret`
}

# Token de Autenticação

- Com as suas credenciais, você deverá acessar o `sso.v3sandbox.com`
- Você receberá um token de autenticação.
  - Qual é o tempo de expiração?
  - Como eu faço para renovar este token?

# Níveis de Permissão

- Trabalhamos com 2 níveis de permissionamento
  - `TENANT` - Níveis comuns de permissão
  - `TENANT_ADMIN` - Níveis de adminsitração
- O que cada um destes níveis concede?

# Cadastrar dispositivo

- Usando o token de autenticação
- Registro dos dispositivos via `management-api`
- Para detalhes da API, veja o link

## Frotas
- Explicação do que são frotas
- Diagrama com o relacionamento de frotas <> times <> motoristas
  
## Times
- Explicação do que são times

## Motoristas
- Explicação do que são motoristas

# Configurando o dispositivo

## Comprei com a V3
- Como comprar?

### Dispositivo já vai configurado
- O que você vai receber?

### Reconfiguração
- Caso seja necessário reconfigurar os dispositivos lhe forneceremos uma aplicação preparada para a sua empresa.

## Já tenho um Dispositivo

### Preparamos uma ferramenta para que você configure os seus dispositivos
- É necessário que você já tenha cadastrado o dispositivo
- Entre em contato com o nosso time de suporte através...

# Pronto para começar

## Usando via V3WEB

## Usando via APP

## Usando via APIs

### Obtendo um evento do dispositivo

#### Tipos de Eventos

- DMS

### Enviar um comando pro dispositivo

#### CLI para enviar comandos

#### O que faz cada tipo de order?

ADD_WIFI, DELETE_WIFI, DEVICE_STATE, REQUEST_IMAGE, REQUEST_VIDEO, CONFIG, REBOOT, DRIVER_COACH_INERTIAL, DRIVER_COACH_TELEMETRY, DRIVER_COACH_TRACKING, INTERNAL

#### Funcionalidades avançadas

- Existem outras possibilidades de utilixzação diretamente com o CONFIG (isso traz uma customização dos comandos a serem enviados para o dispositivo). Consulte nosso time para mais detalhes.

## Consumindo Eventos da V3

- Como funciona nossa a segurança via HMAC
- Como cadastrar as suas URLs