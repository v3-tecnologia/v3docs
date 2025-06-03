---
sidebar_position: 12
---

# Vision

O contexto de visão se propõe a ser a central de processamento dos eventos que chegam até a **V3CLOUD**, para inferência de visão computacional.

Visão computacional é uma área da inteligência artificial que permite que computadores "enxerguem", ou seja, interpretem e extraiam informações de imagens e vídeos, simulando a visão humana.

Nossa solução foi projetada para atuar como um motor de processamento para os eventos que chegam até a Cloud e precisam de uma operação de Visão.

:::info[Procurando a API?]

Caso queira acessar diretamente a documentação da API de Visão, [clique aqui](/docs/category/vision-api).

:::

Todos os eventos que chegam são monitorados por um agente que possui algumas fases:

## 1. Consolidação

Todos os eventos que chegarem até a estrutura V3, passarão por uma análise. Para isso, se verifica qual o tipo do evento e se ele possui media associada, pois o motor precisa descartar eventos que não possuem um contexto de visão. Por exemplo, um evento de posição (que não tenha uma media associada), não precisa passar pelo fluxo.

Na sequência, aguarda-se até que a media esteja disponível.

:::info[Por que a media ainda não chegou?]

Nós trabalhamos com um sistema desacoplado de envio de eventos e medias.

No dispositivo, no momento em que um evento acontece, a media já existe, mas o processo de envio do evento e da media ocorrem de forma separada e assíncrona. Isso pois o tempo para se realizar upload de uma mídia é naturalmente maior que o de um evento (que contém apenas texto), e por isso é possível a TSP obter os eventos primeiro e optar por já mostrá-los em sua plataforma, ou optar por esperar que as mídias cheguem para mostrar apenas os eventos com mídias já disponíveis.

:::

## 2. Preparação

É neste momento que o fluxo coleta todos os dados necessário para preparar um contrato com todas as informações.

Resgata-se neste momento:

1. **Política de Processamento de Visão** - É a definição de quais devem ser as inferência de visão computacional para um Tenant, Time, Frota ou Dispositivo. Isso permite que se tenham heranças de configurações de acordo com a granuridade desejada;
2. **Informações consolidadas** - Todos os dados do evento que originaram a media a ser analisada;
3. **Informações de gerenciamento** - Detalhes sobre Drivers, Teams ou Devices, que podem ajudar a compor a tarefa de visão computacional. Por exemplo, posso precisar dos dados de todos os drivers que poderiam estar dirigindo o veículo, para buscar estes dados em uma base de treinamento.
4. **Dados de treinamento** - É uma coleção de dados treinados para as situações de visão computacional. Por exemplo, podemos ter todos os motoristas treinados para que possam ser comparados com um evento que acabou de chegar.

## 3. Pipeline

É neste momento que o motor de visão computacional é executado de fato. Com base em um contrato que contém todas as informações necessárias para o processamento este módulo será o responsável por:

1. **Validar a entrada** - Verifica se todos os dados estão em conformidade para seguir o processamento;
2. **Preparação** - Realiza uma série de pré-processamentos para o evento em questão. Por exemplo, fazer o CROP de uma face específica na media ou gerar um thumbnail que será disponibilizado.
3. **Processamento** - É o momento em que o o motor de visão computacional é acionado. Ele pode ser composto por um ou mais submódulos que realização a inferência do que está na media. De acordo com a política de processamento um ou mais submódulos podem ser acionados para uma mesma media.
4. **Resultado** - É o momento em que se consolida o resultado gerado, salvando as informações e as tornando disponíveis para os Clientes.

## Quais processamentos existem?

Neste momento, utilizamos este motor para o **reconhecimento do condutor**. Mas essa estrutura nos permite incluir outros fluxos de visão computacional que podem incluir, por exemplo:

- Reconhecimento de Passageiros
- Utilização do Cinto de Segurança
- Deteção de Obstáculos na Via
- Deteção do uso de EPIs

:::info[E que tal modelos personalizados?]

Na V3 estamos sempre em busca de parcerias para novas implementações, que tal nos contar um pouco da sua necessidade? Fale diretamente com o nosso contato [comercial](mailto:comercial@v3.com.br).

:::

## API de Visão

A API do módulo de visão computacional é bastante direta e oferece recursos para:

1. **Treinamento dos datasets**
   -  Motoristas
2. **Recuperação das media** (de eventos ou transformadas pelo fluxo de vision)
   - Medias associadas à um evento (Como uma imagem ou vídeo)
   - Medias transformadas pelo fluxo de Visão:
     -  Thumbnails
     -  Crop
     -  Vídeos Editados (Com legenda ou marca d'agua)

## Como consumir os dados de visão?

Para os eventos de Vision, todas as inferências serão retornadas através de Webhooks.

:::info[Veja como configurar e utilizar o Webhook]

Caso queira entender como configurar e utilizar o sistema de notificações via WebHook, acesse [aqui](./13-webhooks.md).

:::

## Fluxo de Exemplo (Ponta a Ponta)

Setup: Um dispositivo com a política de reconhecimento facial de motorista ativada para que o motor de visão processe a identificação e retorne quem foi o motorista que estava dirigindo.

1. No automóvel, um evento de `IGNITION_ON` (ignição ligado) foi disparado;
2. Este evento "carrega" uma foto com o motorista dirigindo o veículo;
3. Este evento chega até a **V3CLOUD** pelo contexto de `Events`;
   O contexto de `Events` publica este evento para o contexto de `Vision`;
5. Processa-se a **Fase 1 - Consolidação**;
6. Processa-se a **Fase 2 - Preparação**;
7. Processa-se a **Fase 3 - Pipeline**;
8. Neste momento, têm-se a a inferência de quem é o motorista (caso ele esteja treinado);
9. Publica-se uma mensagem via Webhook para o cliente, avisando que o Evento X teve uma inferência de visão computacional de reconhecimento do Driver X.