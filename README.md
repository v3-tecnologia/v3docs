<p align="center">
    <img src="./.github/logo.png" width="200px">
</p>

<h1 align="center" style="font-weight: bold;">V3 Docs</h1>

<p align="center">
  <a href="#tech-stack">Tech Stack</a> • 
  <a href="#requirements">Pré-requisitos</a> • 
  <a href="#get-started">Como Executar</a> • 
  <a href="#i18n">Internacionalização (PT/EN)</a> • 
  <a href="#openapi-workflow">Documentação OpenAPI</a> • 
  <a href="#contribute">Como Contribuir</a> • 
  <a href="#project-structure">Estrutura do Projeto</a> • 
  <a href="#useful-info">Informações Úteis</a>
</p>

<p align="center">
<b>Este é o portal de documentação oficial da V3 Tecnologia, desenvolvido para fornecer uma experiência completa e intuitiva para desenvolvedores que desejam integrar com nossas APIs.</b>
</p>

<h2 id="tech-stack">💻 Tech Stack</h2>

Este projeto utiliza as seguintes tecnologias:

- **[Docusaurus](https://docusaurus.io/)**: Framework moderno para documentação estática, oferecendo:
  - Suporte a MDX para conteúdo dinâmico
  - Versionamento de documentação
  - Internacionalização
  - Busca inteligente
  - Tema escuro
  - Layout responsivo
- **[GitHub Pages](https://pages.github.com/)**: Hospedagem da documentação
- **[Docusaurus OpenAPI Docs](https://github.com/PaloAltoNetworks/docusaurus-openapi-docs)**: Plugin para renderização de documentação OpenAPI/Swagger

<h2 id="requirements">❗ Pré-requisitos</h2>

Para executar este projeto, você precisará ter instalado em sua máquina:

- [Node.js](https://nodejs.org/en/download/) Versão 18 ou superior
- [Git](https://git-scm.com/downloads) para controle de versão

<h2 id="get-started">🚀 Como executar?</h2>

1. Clone o repositório:
```bash
git clone git@github.com:v3-tecnologia/v3docs.git
cd v3docs
```

2. Instale as dependências:
```bash
npm install
```

3. Gere a documentação OpenAPI e execute o projeto:

```bash
npm run clean && npm run docs-all && npm run build && npm run serve
```

A aplicação estará disponível em `http://localhost:3000` (PT) e `http://localhost:3000/en` (EN).

### Comandos de desenvolvimento

| Comando | Descrição |
|---|---|
| `npm run start` | Dev server em **português** (locale padrão) |
| `npm run start:en` | Dev server em **inglês** |
| `npm run start:pt` | Dev server em **português** |
| `npm run build` | Build de produção com **PT + EN** |
| `npm run serve` | Serve o build de produção (necessário para testar a troca de idioma) |
| `npm run clear` | Limpa cache do Docusaurus (`.docusaurus`) |

> **Importante:** no modo dev (`npm run start`), o Docusaurus carrega **um locale por vez**. Para testar a troca PT ↔ EN com fidelidade ao ambiente de produção, use `npm run build && npm run serve`. Para trabalhar só em inglês no dev, use `npm run start:en`.

> 💡 O [Makefile](/Makefile) ainda expõe targets por API, mas o fluxo recomendado para PT + EN é via scripts npm descritos em [Documentação OpenAPI](#openapi-workflow).

<h2 id="i18n">🌐 Internacionalização (PT/EN)</h2>

O portal suporta dois locales configurados em [`docusaurus.config.ts`](/docusaurus.config.ts):

| Locale | Código | URLs | Conteúdo |
|---|---|---|---|
| Português (padrão) | `pt` | `/`, `/docs/...` | `docs/` + `docs/openapi/` |
| Inglês | `en` | `/en`, `/en/docs/...` | `i18n/en/docusaurus-plugin-content-docs/current/` |

### Documentação narrativa (guides)

- **PT:** arquivos em `docs/docs/`
- **EN:** traduções em `i18n/en/docusaurus-plugin-content-docs/current/docs/`
- **Labels da sidebar EN:** `i18n/en/docusaurus-plugin-content-docs/current.json`

Para extrair novas strings de tradução da sidebar após alterações em `sidebars.ts`:

```bash
npm run write-translations
```

<h2 id="openapi-workflow">📘 Documentação OpenAPI (PT + EN)</h2>

Cada API gera e versiona seu Swagger no próprio repositório. O `v3docs` consome esses artefatos como fonte técnica e mantém specs localizados para alimentar o plugin `docusaurus-plugin-openapi-docs`:

| Locale | Spec (fonte) | MDX gerado |
|---|---|---|
| Swagger canônico de Orders | `examples/source/order.yaml` (importado do repositório `order-api`) | Fonte técnica versionada |
| PT | `examples/order.yaml` | `docs/openapi/order/` |
| EN | `examples/en/order.yaml` | `i18n/en/docusaurus-plugin-content-docs/current/openapi/order/` |

APIs disponíveis: `order`, `management`, `auth`, `event`, `notification`, `vision`, `media`, `media-stream`.

### Fluxo completo de geração

Quando o Swagger de Orders mudar no repositório da API, importe e revise o artefato:

```bash
npm run docs:import-order-swagger
git diff -- examples/source/order.yaml
```

Após versionar `examples/source/order.yaml`, o refresh e o build do portal não precisam acessar o repositório da API:

```bash
npm run docs-all
npm run clear && npm run build
```

`npm run docs:refresh-order` pode ser usado isoladamente quando apenas Orders mudar.

| Script | O que faz |
|---|---|
| `npm run clean` | Remove MDX/sidebars OpenAPI gerados (PT + EN) |
| `npm run docs:import-order-swagger` | Copia o Swagger já gerado no repositório da API para a fonte versionada do portal |
| `npm run docs:refresh-order` | Atualiza specs localizados PT/EN e gera páginas de operações e contratos de Orders |
| `npm run docs-all` | Atualiza Orders, gera as outras APIs, localiza labels PT e valida EN |
| `npm run clear` | Limpa cache interno do Docusaurus |
| `npm run build` | Build final com os dois locales |

O `docs-all` executa, nesta ordem:

1. `docs:refresh-order` sincroniza os specs PT/EN com o Swagger canônico e regenera Orders
2. `gen-api-docs all` para os demais plugins OpenAPI
3. `scripts/localize-openapi-docs.mjs` — traduz labels de UI nos MDX **PT** (`Request` → `Requisição`, etc.)
4. `scripts/validate-openapi-en-docs.mjs` — falha se detectar texto em português nos MDX **EN**

### Contratos de ordem

Os contratos de Orders são descobertos pelo cruzamento de `dto.OrderDTO.parameters.oneOf` com `model.OrderType.enum` no Swagger. O gerador cria páginas PT/EN com propriedades, tipos, obrigatoriedade e descrições; páginas manuais existentes continuam preservadas. Páginas contendo `generated: order-contract` são atualizadas automaticamente.

| Locale | Páginas |
|---|---|
| PT | `docs/openapi/order/contracts/*.api.mdx` |
| EN | `i18n/en/docusaurus-plugin-content-docs/current/openapi/order/contracts/*.api.mdx` |

A sidebar de endpoints é gerada pelo plugin. `scripts/generate-order-contracts.mjs` mantém a lista de páginas de contratos em `sidebars/order-contracts.generated.json`, consumida pela sidebar de Orders.

### Adicionar ou alterar endpoints

1. Gere e versiona o Swagger no repositório da API
2. Importe o artefato para `examples/source/{api}.yaml` no repositório `v3docs`
3. Revise as traduções em `examples/{api}.yaml` e `examples/en/{api}.yaml`; textos existentes são preservados pela sincronização
4. Mantenha os mesmos `operationId`s PT/EN; para Orders eles são criados a partir dos summaries canônicos em inglês
5. Atualize a documentação:

```bash
npm run docs:refresh-order
```

6. Regenere a documentação:

```bash
npm run clean && npm run docs-all && npm run clear && npm run build
```

### Regras importantes

- **O Swagger versionado em `examples/source/` é a fonte dos dados técnicos**; os specs em `examples/` contêm as traduções e os MDX são saída gerada
- **`operationId` define o slug da URL** — Orders deriva um ID canônico do summary inglês e o compartilha entre PT e EN
- **Não edite MDX gerados manualmente** — alterações serão sobrescritas no próximo `docs-all`
- **Após `docs-all`, rode `clear` + `build`** antes de validar EN em produção ou via `serve`

<h2 id="contribute">📫 Como contribuir</h2>

1. Faça um fork do projeto
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b feature/nome-da-feature
   ```
3. Siga o padrão de commits convencional:
   - `feat:` para novas features
   - `fix:` para correção de bugs
   - `docs:` para atualização de documentação
   - `test:` para adição ou modificação de testes
   - `refactor:` para refatoração de código
   
4. Faça commit das suas alterações:
   ```bash
   git commit -m "feat: adiciona nova funcionalidade"
   ```
   
5. Faça push para sua branch:
   ```bash
   git push origin feature/nome-da-feature
   ```
   
6. Abra um Pull Request explicando as alterações realizadas
7. Aguarde a revisão e aprovação

<h2 id="project-structure">📁 Estrutura do Projeto</h2>

```
.
├── blog/                          # Postagens do Blog
│   ├── authors.yml
│   ├── tags.yml
│   └── YYYY-MM-DD-*/
├── docs/
│   ├── docs/                      # Documentação narrativa (PT)
│   │   ├── conheca-a-v3/
│   │   ├── visao-geral-da-plataforma/
│   │   ├── implantacao-e-setup/
│   │   └── integracao-e-operacao/
│   └── openapi/                   # MDX OpenAPI gerados (PT)
│       ├── order/
│       ├── management/
│       ├── auth/
│       ├── event/
│       ├── notification/
│       ├── vision/
│       ├── media/
│       └── media-stream/
├── examples/                      # Specs OpenAPI (fonte)
│   ├── order.yaml                 # PT
│   ├── management.yaml
│   ├── auth.yaml
│   ├── event.yaml
│   ├── notification.yaml
│   ├── vision.yaml
│   ├── media.yaml
│   ├── media-stream.yaml
│   └── en/                        # Specs OpenAPI (EN)
│       ├── order.yaml
│       └── ...
├── i18n/
│   └── en/
│       └── docusaurus-plugin-content-docs/
│           ├── current.json       # Traduções da sidebar EN
│           ├── current/docs/      # Documentação narrativa EN
│           └── current/openapi/   # MDX OpenAPI gerados (EN)
├── scripts/
│   ├── localize-openapi-docs.mjs  # Localiza labels PT nos MDX gerados
│   ├── sync-openapi-operation-ids.mjs  # Sincroniza operationId + summaries EN
│   └── validate-openapi-en-docs.mjs    # Valida ausência de PT nos MDX EN
├── src/                           # Código fonte do Docusaurus
├── static/                        # Arquivos estáticos (imagens, etc.)
├── docusaurus.config.ts           # Configuração principal + plugins OpenAPI i18n
├── sidebars.ts                    # Configuração da barra lateral
├── sidebars/
│   └── order.ts                   # Sidebar manual da Order API (contratos)
└── Makefile                       # Targets legados por API (build parcial)
```

<h2 id="useful-info">ℹ️ Informações Úteis</h2>

### Configuração Principal

Os arquivos principais de configuração são:

1. **[docusaurus.config.ts](/docusaurus.config.ts)**
   - Configurações gerais do Docusaurus
   - Configuração da NavBar
   - Plugins e temas
   - Configurações de internacionalização

2. **[sidebars.ts](/sidebars.ts)**
   - Configuração da barra lateral
   - Organização da documentação
   - Links e categorias

### Documentação de APIs

As specs OpenAPI em `examples/` são a **fonte de verdade**. Os MDX em `docs/openapi/` (PT) e `i18n/en/.../openapi/` (EN) são **gerados automaticamente** — não edite manualmente.

Para adicionar uma nova API:

1. Crie `examples/{api}.yaml` (PT) e `examples/en/{api}.yaml` (EN)
2. Registre o plugin em `docusaurus.config.ts` usando `openapiLocaleConfigs("{api}", "{api}.yaml")`
3. Adicione a seção em `sidebars.ts` (`require("./docs/openapi/{api}/sidebar")`). Para Order, edite `sidebars/order.ts`
4. Adicione traduções de sidebar EN em `i18n/en/docusaurus-plugin-content-docs/current.json`
5. Regenere: `npm run clean && npm run docs-all && npm run clear && npm run build`

Veja o fluxo completo em [Documentação OpenAPI](#openapi-workflow).

### Tutoriais

Para adicionar um novo tutorial:

1. Crie um arquivo `_category_.json` no diretório do tutorial:
```json
{
    "label": "Nome do Tutorial",
    "position": 1,
    "link": {
        "type": "generated-index"
    }
}
```

2. Crie os arquivos `.md` com o cabeçalho:
```markdown
---
sidebar_position: 1
---
```

### Blog Posts

Para criar um novo post no blog:

1. Crie uma pasta em `blog/YYYY-MM-DD-titulo/` com um arquivo `index.md` dentro
2. Adicione o cabeçalho:
```markdown
---
slug: titulo
title: Título do Post
authors: [author]
tags: [tag]
---
```

3. Configure os autores em `blog/authors.yml` e tags em `blog/tags.yml`