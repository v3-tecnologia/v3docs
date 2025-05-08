<p align="center">
    <img src="./.github/logo.png" width="200px">
</p>

<h1 align="center" style="font-weight: bold;">V3 Docs</h1>

<p align="center">
  <a href="#tech-stack">Tech Stack</a> • 
  <a href="#requirements">Pré-requisitos</a> • 
  <a href="#get-started">Como Executar</a> • 
  <a href="#contribute">Como Contribuir</a> • 
  <a href="#informações-úteis">Informações Úteis</a>
</p>

<p align="center">
<b>Este é um repositório para a documentação das APIs de acesso externo da V3 Tecnologia</b>
</p>

<h2 id="tech-stack">💻 Tech Stack</h2>

Este projeto utiliza as seguintes tecnologias:

- [Docusaurus](https://docusaurus.io/pt-BR/) para renderizar
- [Docusaurus OpenApi Docs](https://www.npmjs.com/package/docusaurus-plugin-openapi-docs) plugin para renderizar a partir do yaml

<h2 id="requirements">❗ Pré-requisitos</h2>

Para executar este projeto, você precisará ter instalado em sua máquina:

Um dos gerenciadores de pacotes abaixo:
- [Node](https://nodejs.org/en/download/) Versão 18 ou superior

<h2 id="get-started">🚀 Como executar?</h2>

0. Clonar repositório:

```bash
git clone git@github.com:v3-tecnologia/v3docs.git
cd v3docs
```

1. Baixar dependências da aplicação:

```bash
npm init
```

2. Fazer o build and run:

```bash
make build-run
```

`
Verifique o arquivo [Makefile](/Makefile) para os demais comandos
`

A aplicação estará disponível em `http://localhost:3000`

<h2 id="contribute">📫 Como contribuir</h2>

1. Faça um fork do projeto
2. Crie uma branch para sua feature
   ```bash
   git checkout -b feature/nome-da-feature
   ```
3. Siga o padrão de commits convencional:
   - `feat:` para novas features
   - `fix:` para correção de bugs
   - `docs:` para atualização de documentação
   - `test:` para adição ou modificação de testes
   - `refactor:` para refatoração de código
   
4. Faça commit das suas alterações seguindo o padrão:
   ```bash
   git commit -m "feat: adiciona nova funcionalidade"
   ```
   
5. Faça push para sua branch:
   ```bash
   git push origin feature/nome-da-feature
   ```
   
6. Abra um Pull Request explicando o problema resolvido ou feature implementada, e aguarde a revisão

7. O build é feito de forma manual, portanto é preciso fazer o build e subir em um PR

# Estrutura do Projeto

O projeto segue uma arquitetura limpa:

```
blog/                   # Postagens do Blog
build/                  # Arquivos estáticos de build
docs/
  ├── openapi/
    ├── auth/           # Documentação Gerada via plugin da Auth API
    ├── managements/    # Documentação Gerada via plugin da Auth API
    ├── orders/         # Documentação Gerada via plugin da Auth API
  ├── tutorials/
    ├── auth/           # Tutoriais da Auth API
    ├── management/     # Tutoriais da Management API
    ├── order/          # Tutoriais da Order API
examples/               # Arquivos .yaml gerados nas respectivas API
src/                    # Source do Docusaurus
static/                 # Medias para utilizar na documentação
```

## Informações úteis

Em geral temos dois arquivos importantes para incluir novas features

1. [docusaurus.config.ts](/docusaurus.config.ts)
2. [sidebars.ts](/sidebars.ts)

Em [docusaurus.config.ts](/docusaurus.config.ts) temos as configurações da NavBar e suas opções e organização.

Em [sidebars.ts](/sidebars.ts) temos as configurações da barra lateral, caso for adicionar uma nova API é importante acrescentar essa configuração, conforme os exemplos dentro deste arquivo

### Das APIs
Os arquivos .yaml dentro do diretório examples/ são renderizados diretamente na pasta docs/openapi

### Dos tutoriais
Cada pasta possui um arquivo de configuração _category_.json
contendo o seguinte conteúdo:

``` json
{
    "label": "Auth Tutorials",
    "position": 1,
    "link": {
        "type": "generated-index"
    }
}
```

a configuração de position é relativa a posição na sidebar, deve-se ter atenção ao adicionar um novo diretório de tutoriais

Dentro de um arquivo .md de tutorial podese usar o cabeçalho conforme abaixo:

``` md
---
sidebar_position: 1
---
```

Utilizado para travar o tutorial em uma determinada posição, quando não informado, é gerado automaticamente pelo Docusaurus

### Dos blogs

Para os blogs é importante ter informado o cabeçalho:
``` md
---
slug: bem-vindo
title: Bem vindo
authors: [author]
tags: [tag]
---
```

Essas configurações como [author] e [tag] são configuradas nos arquivos [authors.yml](/blog/authors.yml) e [tags.yml](/blog/tags.yml)