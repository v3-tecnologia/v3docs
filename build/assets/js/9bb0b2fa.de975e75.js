"use strict";
(self.webpackChunkv3_docs = self.webpackChunkv3_docs || []).push([
  [4359],
  {
    28453: (e, o, a) => {
      a.d(o, { R: () => t, x: () => i });
      var n = a(96540);
      const s = {},
        r = n.createContext(s);
      function t(e) {
        const o = n.useContext(r);
        return n.useMemo(
          function () {
            return "function" == typeof e ? e(o) : { ...o, ...e };
          },
          [o, e]
        );
      }
      function i(e) {
        let o;
        return (
          (o = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(s)
              : e.components || s
            : t(e.components)),
          n.createElement(r.Provider, { value: o }, e.children)
        );
      }
    },
    34977: (e, o, a) => {
      a.r(o),
        a.d(o, {
          assets: () => c,
          contentTitle: () => i,
          default: () => u,
          frontMatter: () => t,
          metadata: () => n,
          toc: () => d,
        });
      const n = JSON.parse(
        '{"id":"docs/solucao-v3/03.02-core/03.02.01-v3cloud/02.02.01.01-introducao","title":"\u2601\ufe0f Introdu\xe7\xe3o","description":"O V3CLOUD \xe9 respons\xe1vel por toda a infraestrutura para receber, tratar e armazenar os dados provenientes dos dispositivos V3FW, tornando-os dispon\xedveis na camada de visualiza\xe7\xe3o de forma segura e eficiente.","source":"@site/docs/docs/03-solucao-v3/03.02-core/03.02.01-v3cloud/02.02.01.01-introducao.md","sourceDirName":"docs/03-solucao-v3/03.02-core/03.02.01-v3cloud","slug":"/docs/solucao-v3/03.02-core/03.02.01-v3cloud/02.02.01.01-introducao","permalink":"/docs/docs/solucao-v3/03.02-core/03.02.01-v3cloud/02.02.01.01-introducao","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"\u2601\ufe0f V3CLOUD","permalink":"/docs/category/\ufe0f-v3cloud"},"next":{"title":"\ud83c\udfe2 Sistema Multi-Tenant","permalink":"/docs/docs/solucao-v3/03.02-core/03.02.01-v3cloud/02.02.01.02-multi-tenant"}}'
      );
      var s = a(74848),
        r = a(28453);
      const t = { sidebar_position: 1 },
        i = "\u2601\ufe0f Introdu\xe7\xe3o",
        c = {},
        d = [
          {
            value: "\ud83d\udcda O que voc\xea encontrar\xe1 nesta se\xe7\xe3o",
            id: "-o-que-voc\xea-encontrar\xe1-nesta-se\xe7\xe3o",
            level: 2,
          },
          {
            value: "\u2728 Principais caracter\xedsticas",
            id: "-principais-caracter\xedsticas",
            level: 3,
          },
        ];
      function l(e) {
        const o = {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          header: "header",
          li: "li",
          p: "p",
          strong: "strong",
          ul: "ul",
          ...(0, r.R)(),
          ...e.components,
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(o.header, {
              children: (0, s.jsx)(o.h1, {
                id: "\ufe0f-introdu\xe7\xe3o",
                children: "\u2601\ufe0f Introdu\xe7\xe3o",
              }),
            }),
            "\n",
            (0, s.jsxs)(o.p, {
              children: [
                "O ",
                (0, s.jsx)(o.strong, { children: "V3CLOUD" }),
                " \xe9 respons\xe1vel por toda a infraestrutura para receber, tratar e armazenar os dados provenientes dos dispositivos ",
                (0, s.jsx)(o.strong, { children: "V3FW" }),
                ", tornando-os dispon\xedveis na camada de visualiza\xe7\xe3o de forma segura e eficiente.",
              ],
            }),
            "\n",
            (0, s.jsxs)(o.p, {
              children: [
                "A plataforma ",
                (0, s.jsx)(o.strong, { children: "V3CLOUD" }),
                " foi projetada com foco em robustez, seguran\xe7a e escalabilidade, oferecendo uma solu\xe7\xe3o completa para o gerenciamento de frotas e monitoramento veicular.",
              ],
            }),
            "\n",
            (0, s.jsx)(o.h2, {
              id: "-o-que-voc\xea-encontrar\xe1-nesta-se\xe7\xe3o",
              children:
                "\ud83d\udcda O que voc\xea encontrar\xe1 nesta se\xe7\xe3o",
            }),
            "\n",
            (0, s.jsxs)(o.p, {
              children: [
                "Esta se\xe7\xe3o apresenta a arquitetura e os componentes do ",
                (0, s.jsx)(o.strong, { children: "V3CLOUD" }),
                ", detalhando como ele integra e processa os dados recebidos dos dispositivos.",
              ],
            }),
            "\n",
            (0, s.jsx)(o.h3, {
              id: "-principais-caracter\xedsticas",
              children: "\u2728 Principais caracter\xedsticas",
            }),
            "\n",
            (0, s.jsxs)(o.ul, {
              children: [
                "\n",
                (0, s.jsxs)(o.li, {
                  children: [
                    "\ud83c\udfe2 ",
                    (0, s.jsx)(o.strong, { children: "Sistema Multi-Tenant" }),
                    ": Preparado para atender m\xfaltiplos clientes com isolamento de dados",
                  ],
                }),
                "\n",
                (0, s.jsxs)(o.li, {
                  children: [
                    "\ud83d\udee1\ufe0f ",
                    (0, s.jsx)(o.strong, {
                      children: "Seguran\xe7a e Escalabilidade",
                    }),
                    ": Arquitetura baseada em Kubernetes com mecanismos avan\xe7ados de prote\xe7\xe3o e escalabilidade",
                  ],
                }),
                "\n",
                (0, s.jsxs)(o.li, {
                  children: [
                    "\ud83d\udd12 ",
                    (0, s.jsx)(o.strong, {
                      children: "Comunica\xe7\xe3o Segura",
                    }),
                    ": Recebimento das informa\xe7\xf5es dos dispositivos atrav\xe9s de protocolos eficientes e seguros",
                  ],
                }),
                "\n",
                (0, s.jsxs)(o.li, {
                  children: [
                    "\ud83d\udcbe ",
                    (0, s.jsx)(o.strong, {
                      children: "Armazenamento Confi\xe1vel",
                    }),
                    ": Utiliza\xe7\xe3o de infraestrutura AWS para garantir disponibilidade e durabilidade dos dados",
                  ],
                }),
                "\n",
                (0, s.jsxs)(o.li, {
                  children: [
                    "\ud83e\udd16 ",
                    (0, s.jsx)(o.strong, {
                      children: "Processamento Inteligente",
                    }),
                    ": P\xf3s-processamento de eventos e m\xeddias com capacidades de vis\xe3o computacional",
                  ],
                }),
                "\n",
              ],
            }),
            "\n",
            (0, s.jsx)(o.p, {
              children:
                "Explore os t\xf3picos no menu lateral para obter informa\xe7\xf5es detalhadas sobre cada componente.",
            }),
          ],
        });
      }
      function u(e = {}) {
        const { wrapper: o } = { ...(0, r.R)(), ...e.components };
        return o
          ? (0, s.jsx)(o, { ...e, children: (0, s.jsx)(l, { ...e }) })
          : l(e);
      }
    },
  },
]);
