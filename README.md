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

Cada API possui **duas specs OpenAPI** — uma por locale — geradas pelo plugin `docusaurus-plugin-openapi-docs`:

| Locale | Spec (fonte) | MDX gerado |
|---|---|---|
| PT | `examples/{api}.yaml` | `docs/openapi/{api}/` |
| EN | `examples/en/{api}.yaml` | `i18n/en/docusaurus-plugin-content-docs/current/openapi/{api}/` |

APIs disponíveis: `order`, `management`, `auth`, `event`, `notification`, `vision`, `media`, `media-stream`.

### Fluxo completo de geração

```bash
npm run clean && npm run docs-all && npm run clear && npm run build
```

| Script | O que faz |
|---|---|
| `npm run clean` | Remove MDX/sidebars OpenAPI gerados (PT + EN) |
| `npm run docs-all` | Regenera MDX a partir das specs, localiza labels PT e valida EN |
| `npm run clear` | Limpa cache interno do Docusaurus |
| `npm run build` | Build final com os dois locales |

O `docs-all` executa, nesta ordem:

1. `gen-api-docs all` para cada plugin OpenAPI (gera PT **e** EN por plugin)
2. `scripts/localize-openapi-docs.mjs` — traduz labels de UI nos MDX **PT** (`Request` → `Requisição`, etc.)
3. `scripts/validate-openapi-en-docs.mjs` — falha se detectar texto em português nos MDX **EN**

### Adicionar ou alterar endpoints

1. Edite a spec PT em `examples/{api}.yaml`
2. Edite a spec EN correspondente em `examples/en/{api}.yaml` com **descrições e summaries em inglês**
3. Mantenha o mesmo `operationId` (slug kebab) nos dois arquivos para preservar URLs entre locales
4. Se for um endpoint novo, adicione a tradução do summary na sidebar EN em `i18n/en/docusaurus-plugin-content-docs/current.json` (chave `sidebar.apiSidebar.doc.{summary PT}`)
5. Sincronize `operationId` e summaries EN:

```bash
npm run sync-openapi-ids
```

6. Regenere a documentação:

```bash
npm run clean && npm run docs-all && npm run clear && npm run build
```

### Regras importantes

- **`examples/en/*.yaml` é a fonte de verdade do conteúdo EN** — descrições de API, operações e parâmetros devem estar em inglês no YAML, não nos MDX gerados
- **`operationId` define o slug da URL** — use o mesmo valor em PT e EN (ex: `criar-nova-ordem` → `/docs/openapi/order/criar-nova-ordem` e `/en/docs/openapi/order/criar-nova-ordem`)
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
3. Adicione a seção em `sidebars.ts` (`require("./docs/openapi/{api}/sidebar")`)
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