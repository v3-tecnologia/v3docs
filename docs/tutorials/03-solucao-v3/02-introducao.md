---
sidebar_position: 0
---

# Introdução

## Visão Geral

A V3 oferece uma solução dividida em módulos que se integram para formar um ecossistema completo de videotelemetria. Cada módulo abriga uma etapa específica do nosso processo, desde a captura de dados até a visualização e integração.

## Arquitetura Modular

Nossa arquitetura é composta por três módulos principais:

- **V3HW**: Responsável pela aquisição dos equipamentos necessários para a captura de dados. Estes equipamentos podem ser adquiridos diretamente via V3, via contato direto com os fabricantes ou através de parcerias estratégicas.

- **V3CORE**: Plataforma central composta por dois submódulos essenciais:
  - **V3FW**: Nossa solução de software embarcado que é instalada dentro dos dispositivos físicos.
  - **V3CLOUD**: Nossa solução tecnológica em nuvem responsável por se comunicar com os dispositivos através do firmware, preparar, processar e armazenar os dados para disponibilizá-los para a camada V3View.

- **V3VIEW**: Camada de disponibilização das informações, que pode ser acessada de três formas diferentes:
  - **V3API**: Conjunto de APIs documentadas neste portal que permitem obter as informações já processadas e organizadas geradas pelos dispositivos.
  - **V3WEB**: Aplicação web desktop WhiteLabel que oferece funcionalidades básicas sem a necessidade de consumir, processar e exibir os dados. Solução ideal para empresas em estágio inicial sem time de desenvolvimento próprio. Permite customização da aparência conforme a identidade visual da sua empresa ou dos seus clientes.
  - **V3APP**: Aplicação para dispositivos Android e iOS que oferece os mesmos recursos disponíveis na plataforma desktop web.

A imagem a seguir ilustra a visão geral desta arquitetura e como os módulos se relacionam:

![Solução V3](/img/solucao_v3.png)

## Próximas Seções

Nas próximas seções, exploraremos em detalhes cada um destes módulos, suas funcionalidades específicas e como eles se integram para formar uma solução completa e eficiente.