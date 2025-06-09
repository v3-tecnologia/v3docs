---
slug: changelog-1.17.57
title: Atualizações da Versão 1.17.57
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

#### Regras
- Com conectividade e GPS: Não rebootar
- Com conectividade e sem GPS: Rebootar
- Sem conectividade e com GPS: Não rebootar
- Sem conectividade e sem GPS: Reagendar reboot para quando houver conectividade
- Mantido o reboot semanal programado

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

Esta versão traz melhorias significativas em três áreas principais: GPS, sistema de reboot e processamento de eventos. O novo sistema de reboot otimiza a disponibilidade do dispositivo com regras inteligentes baseadas em conectividade e GPS. As melhorias no GPS garantem maior confiabilidade na localização, com tratamento inteligente de falhas e fallback automático. O processamento de eventos DMS e a geração sistemática de eventos de identificação facial melhoram a eficiência e rastreabilidade do sistema.

Ficou com alguma dúvida? Entre em contato com nossa equipe de desenvolvimento!

Até a próxima atualização!
