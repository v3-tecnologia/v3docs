<p align="center">
    <img src="./.github/logo.png" width="200px">
</p>

<h1 align="center" style="font-weight: bold;">V3 Docs</h1>

<p align="center">
  <a href="#tech-stack">Tech Stack</a> • 
  <a href="#requirements">Pré-requisitos</a> • 
  <a href="#get-started">Como Executar</a> • 
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
- **[Docusaurus API Docs](https://www.npmjs.com/package/docusaurus-plugin-api-docs)**: Plugin para renderização de documentação OpenAPI/Swagger

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

3. Execute o projeto:
```bash
make build-run
```

A aplicação estará disponível em `http://localhost:3000`

> 💡 Verifique o arquivo [Makefile](/Makefile) para mais comandos disponíveis

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
├── blog/                   # Postagens do Blog
│   ├── authors.yml        # Configuração dos autores
│   ├── tags.yml          # Configuração das tags
│   └── YYYY-MM-DD-*      # Posts do blog
├── docs/
│   ├── docs/             # Documentação geral
│   │   ├── conheca-a-v3/                 # Quem somos, tecnologia e público
│   │   ├── visao-geral-da-plataforma/    # Missão/visão/valores + solução
│   │   │   └── solucao-v3/               # Detalhes da solução
│   │   ├── implantacao-e-setup/          # Configuração, instalação e ferramentas
│   │   │   └── manual-de-instalacao/
│   │   └── integracao-e-operacao/        # APIs e SDKs
│   │       ├── api/
│   │       └── sdks/
│   ├── openapi/          # Documentação OpenAPI
│   └── webhook/          # Documentação de Webhooks
├── examples/             # Exemplos e especificações
│   ├── auth.yaml        # Especificação da Auth API
│   ├── management.yaml  # Especificação da Management API
│   ├── orders.yaml      # Especificação da Orders API
│   ├── event.yaml       # Especificação de Eventos
│   └── webhook/         # Exemplos de Webhooks
├── src/                  # Código fonte do Docusaurus
├── static/              # Arquivos estáticos (imagens, etc.)
├── docusaurus.config.ts # Configuração principal
├── sidebars.ts         # Configuração da barra lateral
└── Makefile            # Comandos de build e execução
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

Os arquivos `.yaml` no diretório `examples/` são automaticamente renderizados na seção de API (OpenAPI) em `docs/openapi/`. Para adicionar uma nova API:

1. Adicione o arquivo `.yaml` em `examples/`
2. Configure o plugin no `docusaurus.config.ts`
3. Atualize o `sidebars.ts` com a nova seção

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