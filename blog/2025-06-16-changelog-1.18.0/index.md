---
slug: changelog-1.18.0
title: Atualizações da Versão 1.18.0
authors: [diogo]
tags: [changelog]
---

Olá, desenvolvedores e entusiastas da tecnologia!

Estamos empolgados em anunciar nossa primeira entrada no blog de changelogs! A partir de agora, você encontrará aqui todas as novidades e melhorias que estamos implementando no nosso firmware. E para começar com o pé direito, trouxemos uma versão com foco especial em otimizações do DMS, GPS e sistema de reboot.

## Destaque da Versão

### Processamento Inteligente de Eventos DMS
- Implementamos um novo sistema de [**agrupamento de eventos DMS**](/docs/docs/solucao-v3/03.02-core/03.02.01-v3fw/03.02.01.05-dms/03.02.01.05.02-deteccao-inteligente), que:
  - Reduz significativamente a quantidade de eventos gerados
  - Otimiza o processamento e consumo de recursos
  - Melhora a precisão na detecção de eventos
- Criamos novos testes automatizados específicos para validar as regras de negócio do DMS

### Sistema de Reboot Inteligente

Melhoramos o sistema de reboot recorrento do dispositivo para incorporar novas regras que viram melhorar de forma geral o funcionamento do dispositivo.

### Melhorias no GPS
- Implementamos um novo sistema de tratamento de coordenadas inválidas:
  - Mescla dados da localização atual com a última posição válida quando coordenadas são (0.0, 0.0)
  - Servidores recebem atualizações contínuas mesmo com falhas pontuais no GPS
- Correção na lógica de precisão:
  - Ignora atualizações se accuracy > 10m ou se a precisão não estiver disponível
  - Uso de valores atualizados de satélites e HDOP do parser NMEA para decisões em tempo real
- Implementação de uso estratégico da FusedLocation API:
  - Ativação automática quando GPS está degradado
  - Combinação de sinais de GPS, rede e Wi-Fi para maior confiabilidade
- Melhorias na persistência de dados:
  - Validação de coordenadas durante a recuperação
  - Correção de perda de precisão devido a tipo de dados incorreto
- Implementação de logs detalhados para debug

### Geração de Eventos de Identificação Facial

Agora garantimos que um evento sempre seja emitido, seja ele face detectada ou face não detectada

## Outras Melhorias Importantes

### Estabilidade e Manutenção
- Corrigimos a dependência do **ffmpeg-kit** que estava causando problemas na build
- Adicionamos logs mais descritivos e melhoramos a documentação interna
- Corrigimos pequenos bugs que afetavam a estabilidade do aplicativo em produção
- Melhoramos o desempenho do sistema ao otimizar o armazenamento temporário de dados

### Qualidade e Testes
- Implementamos testes unitários e de integração para o DMS
- Adicionamos testes NMEA para validação de dados de GPS
- Realizamos uma limpeza geral no código, removendo atributos não utilizados
- Melhoramos a nomenclatura e organização do código

### Processamento de Imagens
- Realizamos correções no módulo de reconhecimento de faces:
  - Ajustes de lógica no processamento de faces
  - Correção de erros de concorrência em ambientes multi-thread

## O que isso significa para você?

Esta versão traz melhorias significativas em quatro áreas principais:

1. **Processamento de Eventos DMS**: Com o novo sistema de agrupamento, reduzimos significativamente a quantidade de eventos gerados, otimizando o processamento e melhorando a precisão na detecção.

2. **Sistema de Reboot Inteligente**: As novas regras de reboot melhoram o funcionamento geral do dispositivo, garantindo que ele permaneça operacional quando necessário e reinicie apenas em situações apropriadas.

3. **Melhorias no GPS**: Implementamos um sistema mais robusto de tratamento de coordenadas, com fallback automático para FusedLocation quando necessário. Isso resulta em maior confiabilidade na localização e melhor tratamento de falhas pontuais.

4. **Identificação Facial**: A geração sistemática de eventos de identificação facial, independentemente do resultado da detecção, melhora a rastreabilidade e análise dos condutores.

Estas melhorias trabalham em conjunto para proporcionar um sistema mais estável, confiável e eficiente, com melhor uso de recursos e maior precisão nas operações.

:::info[Contato]

Ficou com alguma dúvida? Entre em contato com nossa equipe de desenvolvimento!

Envie um [e-mail](mailto:dev@v3.com.br) para os nossos Devs ou entre na nossa comunidade do [Discord](https://discord.gg/e69avYVnzG).

:::

Até a próxima atualização!
