---
slug: conectividade-iot-parte-2
title: "Conectividade IoT sem mistério (Parte 2): rede celular, SIM M2M e APN"
authors: [adriano]
tags: [v3-tecnologia, engenharia]
---

Na [Parte 1](/blog/conectividade-iot-parte-1), discutimos os fundamentos para decisões de conectividade e o desafio das áreas de sombra. Agora vamos aprofundar os aspectos técnicos da conectividade celular para IoT.

## Como a rede celular funciona para um dispositivo IoT

Quando um dispositivo IoT com modem celular envia dados, o caminho simplificado é:

1. Dispositivo + SIM fazem autenticação na rede da operadora.
2. O tráfego é encapsulado no core móvel ([Evolved Packet Core (EPC)](https://en.wikipedia.org/wiki/Evolved_Packet_Core) no 4G ou [5G Core (5GC)](https://en.wikipedia.org/wiki/5G#Core_network_architecture) no 5G).
3. A operadora aplica políticas de roteamento, QoS e segurança.
4. O dado sai para Internet pública ou para rede privada corporativa.
5. A aplicação de IoT recebe, processa e responde.

Em termos práticos, a operadora não oferece apenas cobertura de rádio. Ela oferece controle de sessão, autenticação, roteamento e políticas de tráfego.

<img src="https://upload.wikimedia.org/wikipedia/commons/4/44/GSM_ArchitecturePL.svg" alt="Visão simplificada de arquitetura de rede celular." style={{ maxWidth: "780px", width: "100%", height: "auto" }} />

Fonte: [Wikimedia Commons - File:GSM_ArchitecturePL.svg](https://commons.wikimedia.org/wiki/File:GSM_ArchitecturePL.svg)

## SIM tradicional x SIM M2M/IoT

Um chip M2M/IoT costuma trazer características importantes para operação em escala:

- Perfil tarifário orientado a baixo consumo de dados por dispositivo.
- Maior previsibilidade contratual para conexões permanentes.
- Recursos de gerenciamento em lote (ativação, bloqueio, diagnóstico).
- Opções multi-operadora ou roaming permanente em alguns modelos.
- Formatos industriais (2FF/3FF/4FF) e eSIM/eUICC para troca remota de perfil.

Para operações massivas, gestão remota de SIM é tão importante quanto cobertura.

## APN: o que é e por que existe

APN (Access Point Name) é o identificador lógico que diz ao core da operadora qual rede de dados o dispositivo quer alcançar e quais políticas devem ser aplicadas nessa sessão.

Na prática, o APN influencia diretamente:

- Endereçamento IP do dispositivo (privado, público, estático ou dinâmico, conforme política).
- Perfil de roteamento (Internet pública, rede privada corporativa ou ambiente híbrido).
- Regras de segurança (ACL, portas permitidas, inspeção e segmentação).
- Política de QoS e charging (prioridade de tráfego, franquia e tarifação).

Sem APN, todo tráfego cairia em uma política padrão da operadora. Com APN, você transforma conectividade em controle de serviço.

## Como uma APN funciona

Quando o dispositivo sobe sessão de dados, o APN participa do fluxo de ponta a ponta:

1. O dispositivo solicita uma sessão de dados informando o APN.
2. O core valida SIM, assinatura e permissões para aquele APN.
3. A sessão é associada a funções de controle e encaminhamento (no 4G, tipicamente [MME](https://www.sharetechnote.com/html/Handbook_LTE_MME.html)/[SGW](https://www.sharetechnote.com/html/Handbook_LTE_SGW.html)/[PGW](https://www.sharetechnote.com/html/Handbook_LTE_PGW.html); no 5G, funções equivalentes no 5GC).
4. O tráfego do usuário passa a seguir o caminho e as políticas do APN selecionado.
5. O backend recebe esse tráfego conforme o modelo definido: Internet, VPN/IPsec, MPLS ou interconexão dedicada.

Em termos de transporte, o plano de usuário em redes móveis usa encapsulamento em túneis (como GTP-U no contexto 3GPP), o que permite separar sessões por dispositivo e aplicar política por bearer/sessão.

<img src="https://commons.wikimedia.org/wiki/Special:FilePath/Evolved_Packet_Core.svg" alt="Arquitetura EPC com principais funções de core usadas para sessão de dados e política de APN." style={{ maxWidth: "780px", width: "100%", height: "auto" }} />

Fonte: [Wikimedia Commons - File:Evolved_Packet_Core.svg](https://commons.wikimedia.org/wiki/File:Evolved_Packet_Core.svg)

## APN pública x APN privada

A diferença técnica mais importante está no domínio de roteamento e na exposição de rede.

- APN pública: geralmente usa saída compartilhada para Internet, com [NAT](https://en.wikipedia.org/wiki/Network_address_translation) e controles padrão.
- APN privada: encaminha tráfego para domínios restritos do cliente, com isolamento de rota e maior governança.
- APN híbrida: combina fluxos por criticidade, separando telemetria comum e dados sensíveis.

Em IoT, isso permite desenhar políticas diferentes para tipos de payload, classes de dispositivo e níveis de risco operacional.

## Quando usar APN pública ou privada

APN pública costuma funcionar bem quando:

- O dado não é sensível a ponto de exigir rede segregada.
- O backend já está preparado para Internet pública com TLS forte.
- O projeto precisa de entrada rápida em produção e custo menor.

APN privada tende a ser melhor quando:

- Existe exigência de isolamento de tráfego por compliance.
- O cliente demanda acesso restrito a endpoints internos.
- Há políticas corporativas rígidas de segurança de rede.

Em muitos cenários, uma arquitetura híbrida resolve: APN pública para telemetria não crítica e APN privada para operações sensíveis.

## Banda larga no contexto IoT

Quando o dispositivo IoT fica instalado sempre no mesmo local (por exemplo, uma loja, fábrica, escola ou condomínio), ele pode usar banda larga fixa (fibra, cabo ou rádio) como conectividade principal:

- Vantagens: alta capacidade, estabilidade, menor custo por megabyte.
- Riscos: indisponibilidade local, dependência de energia e infraestrutura do site.
- Uso ideal: gateways locais, video analytics em borda e ambientes com tráfego elevado.

Para ativos móveis, a banda larga fixa do local costuma ser usada como [backhaul](https://en.wikipedia.org/wiki/Backhaul_(telecommunications)) (o "caminho de saída" que liga a rede interna do site à internet), enquanto a conectividade do dispositivo em movimento continua no celular.

## Padrões e normas relevantes

Se a ideia é escalar com previsibilidade, vale mapear cada decisão de arquitetura a uma referência técnica:

- 3GPP: arquitetura de sistema, mobilidade, QoS, perfis IoT (incluindo evoluções de LTE-M/NB-IoT e 5G).
- GSMA: diretrizes operacionais para ciclo de vida de SIM/eSIM, roaming e gestão em escala.
- ETSI EN 303 645: baseline de segurança para dispositivos conectados e cadeia IoT.
- Regulação local: homologação, espectro e requisitos de operação (ex.: Anatel no Brasil).

Esse alinhamento evita decisões ad hoc e melhora auditoria técnica, segurança e interoperabilidade entre operadoras e fornecedores.

## Próximo post da série

Na [Parte 3](/blog/conectividade-iot-parte-3), vamos subir o nível técnico na comparação entre Mesh, LoRa, LoRaWAN e Zigbee, explorando topologia, capacidade, latência, consumo energético e limites práticos de cada tecnologia.
