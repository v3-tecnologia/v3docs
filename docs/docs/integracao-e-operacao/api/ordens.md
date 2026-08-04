---
sidebar_position: 10
---

# Ordens

O sistema de ordens permite enviar instruções e ajustes para dispositivos em campo de forma remota, acompanhar o andamento de cada solicitação e saber quando ela foi concluída.

:::info[Referência da API]

Para consultar operações, parâmetros e respostas disponíveis, acesse a [documentação de Ordens](/docs/category/order-api).

:::

## Para que serve

- Solicitar ações no dispositivo, como reinício ou atualização de informações
- Pedir imagens ou trechos de vídeo das câmeras
- Configurar conectividade, alertas, áudio e outras preferências operacionais
- Iniciar ou encerrar transmissões de imagem quando aplicável
- Acompanhar se cada solicitação foi recebida, processada ou concluída

## Como funciona

Cada solicitação gera uma ou mais ordens. A plataforma registra o progresso até que o dispositivo confirme a execução ou informe que não foi possível concluir.

Em termos gerais, o fluxo é:

1. Identificar o dispositivo desejado
2. Enviar a instrução com os parâmetros necessários
3. Acompanhar o andamento da ordem
4. Utilizar o resultado ou tratar pendências, se houver

Várias instruções podem ser enviadas na mesma operação. Quando a ação envolve mais de uma câmera, a plataforma pode tratar cada uma de forma independente.

## Tipos de instrução

A plataforma oferece instruções prontas para os cenários mais comuns da operação:

| Categoria | O que permite |
|-----------|----------------|
| Dispositivo | Reiniciar o aparelho ou solicitar uma atualização de status |
| Mídia | Pedir foto ou vídeo de um período, por câmera |
| Conectividade | Incluir ou remover redes sem fio |
| Visão | Ativar ou desativar recursos de detecção |
| Comunicação | Ajustar intervalos e comportamento de mensagens |
| Dados móveis | Definir limites, ciclos e regras de uso |
| Áudio | Configurar alertas sonoros globais ou por tipo de ocorrência |
| Transmissão | Abrir ou fechar envio de imagem ao vivo |
| Avançado | Ajustes específicos orientados pelo time V3 |

As câmeras costumam ser identificadas como **motorista** e **estrada**. A referência técnica detalha os nomes e valores aceitos em cada caso.

## Instruções avançadas

Algumas configurações exigem conhecimento mais profundo do equipamento e do ambiente operacional. Em geral, são utilizadas sob orientação do time V3.

Há também instruções reservadas a perfis administrativos, destinadas a diagnóstico e operações especiais. O acesso a esse tipo de recurso depende das permissões concedidas à sua integração.

## Situações da ordem

Durante o ciclo de vida, a ordem pode estar:

- **Aguardando** — ainda não foi processada
- **Em andamento** — já foi encaminhada ou está sendo executada
- **Concluída** — o dispositivo confirmou a execução
- **Não concluída** — houve recusa, falha ou a ordem foi removida

Consulte a referência da API para ver a lista completa de situações e o significado de cada uma.

## Cancelamento

Uma ordem só pode ser cancelada enquanto ainda não foi encaminhada ao dispositivo. Depois disso, é necessário aguardar o resultado ou enviar uma nova instrução, conforme o caso.

## Boas práticas

1. Confirme o status antes de repetir a mesma solicitação
2. Teste em um dispositivo antes de aplicar em toda a frota
3. Considere que equipamentos em campo podem estar temporariamente indisponíveis
4. Mantenha um identificador de rastreio por solicitação quando sua operação exigir auditoria ou conciliação
5. Para cenários avançados ou integrações customizadas, entre em contato com [dev@v3.com.br](mailto:dev@v3.com.br)

## Relação com outras APIs

Ordens dependem do cadastro correto de dispositivos na plataforma. Antes de enviar uma instrução, certifique-se de que o equipamento está registrado e vinculado à estrutura organizacional desejada. Veja também [Gerenciamento](./gerenciamento.md).
