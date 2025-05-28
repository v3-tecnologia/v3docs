"use strict";
(self.webpackChunkv3_docs = self.webpackChunkv3_docs || []).push([
  [6622],
  {
    28453: (e, n, i) => {
      i.d(n, { R: () => r, x: () => l });
      var s = i(96540);
      const a = {},
        o = s.createContext(a);
      function r(e) {
        const n = s.useContext(o);
        return s.useMemo(
          function () {
            return "function" == typeof e ? e(n) : { ...n, ...e };
          },
          [n, e]
        );
      }
      function l(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(a)
              : e.components || a
            : r(e.components)),
          s.createElement(o.Provider, { value: n }, e.children)
        );
      }
    },
    28769: (e, n, i) => {
      i.r(n),
        i.d(n, {
          assets: () => t,
          contentTitle: () => l,
          default: () => u,
          frontMatter: () => r,
          metadata: () => s,
          toc: () => d,
        });
      const s = JSON.parse(
        '{"id":"docs/solucao-v3/03.03-view/03.03.04-web","title":"\ud83c\udf10 V3WEB","description":"A V3 Web \xe9 a plataforma web completa e intuitiva fornecida pela V3 para visualiza\xe7\xe3o e gerenciamento dos dados coletados.","source":"@site/docs/docs/03-solucao-v3/03.03-view/03.03.04-web.md","sourceDirName":"docs/03-solucao-v3/03.03-view","slug":"/docs/solucao-v3/03.03-view/03.03.04-web","permalink":"/docs/docs/solucao-v3/03.03-view/03.03.04-web","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"\ud83d\udcf1 V3APP","permalink":"/docs/docs/solucao-v3/03.03-view/03.03.03-app"},"next":{"title":"\ud83d\ude80 Configura\xe7\xe3o Inicial","permalink":"/docs/docs/configuracao-inicial"}}'
      );
      var a = i(74848),
        o = i(28453);
      const r = { sidebar_position: 4 },
        l = "\ud83c\udf10 V3WEB",
        t = {},
        d = [
          {
            value: "\u2728 Funcionalidades Principais",
            id: "-funcionalidades-principais",
            level: 2,
          },
          { value: "\ud83d\udcca Dashboards", id: "-dashboards", level: 3 },
          {
            value: "\ud83d\udcd1 Relat\xf3rios",
            id: "-relat\xf3rios",
            level: 3,
          },
          {
            value: "\ud83d\udc65 Gerenciamento de Usu\xe1rios",
            id: "-gerenciamento-de-usu\xe1rios",
            level: 3,
          },
          {
            value: "\u2699\ufe0f Configura\xe7\xf5es",
            id: "\ufe0f-configura\xe7\xf5es",
            level: 3,
          },
          {
            value: "\ud83d\udcf1 Interface Responsiva",
            id: "-interface-responsiva",
            level: 2,
          },
          { value: "\ud83d\udd12 Seguran\xe7a", id: "-seguran\xe7a", level: 2 },
        ];
      function c(e) {
        const n = {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          header: "header",
          li: "li",
          p: "p",
          strong: "strong",
          ul: "ul",
          ...(0, o.R)(),
          ...e.components,
        };
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(n.header, {
              children: (0, a.jsx)(n.h1, {
                id: "-v3web",
                children: "\ud83c\udf10 V3WEB",
              }),
            }),
            "\n",
            (0, a.jsxs)(n.p, {
              children: [
                "A ",
                (0, a.jsx)(n.strong, { children: "V3 Web" }),
                " \xe9 a plataforma web completa e intuitiva fornecida pela ",
                (0, a.jsx)(n.strong, { children: "V3" }),
                " para visualiza\xe7\xe3o e gerenciamento dos dados coletados.",
              ],
            }),
            "\n",
            (0, a.jsx)(n.h2, {
              id: "-funcionalidades-principais",
              children: "\u2728 Funcionalidades Principais",
            }),
            "\n",
            (0, a.jsx)(n.h3, {
              id: "-dashboards",
              children: "\ud83d\udcca Dashboards",
            }),
            "\n",
            (0, a.jsxs)(n.ul, {
              children: [
                "\n",
                (0, a.jsx)(n.li, {
                  children:
                    "\ud83d\udcc8 Visualiza\xe7\xe3o em tempo real dos dados",
                }),
                "\n",
                (0, a.jsx)(n.li, {
                  children:
                    "\ud83d\udcca Gr\xe1ficos interativos e personaliz\xe1veis",
                }),
                "\n",
                (0, a.jsx)(n.li, {
                  children: "\ud83c\udfaf Widgets configur\xe1veis",
                }),
                "\n",
                (0, a.jsx)(n.li, {
                  children: "\ud83d\udd0d Filtros din\xe2micos",
                }),
                "\n",
              ],
            }),
            "\n",
            (0, a.jsx)(n.h3, {
              id: "-relat\xf3rios",
              children: "\ud83d\udcd1 Relat\xf3rios",
            }),
            "\n",
            (0, a.jsxs)(n.ul, {
              children: [
                "\n",
                (0, a.jsx)(n.li, {
                  children:
                    "\ud83d\udcdd Gera\xe7\xe3o de relat\xf3rios personalizados",
                }),
                "\n",
                (0, a.jsx)(n.li, {
                  children:
                    "\ud83d\udce4 Exporta\xe7\xe3o em m\xfaltiplos formatos (PDF, Excel, CSV)",
                }),
                "\n",
                (0, a.jsx)(n.li, {
                  children: "\u23f0 Agendamento de relat\xf3rios",
                }),
                "\n",
                (0, a.jsx)(n.li, {
                  children: "\ud83d\udccb Templates pr\xe9-configurados",
                }),
                "\n",
              ],
            }),
            "\n",
            (0, a.jsx)(n.h3, {
              id: "-gerenciamento-de-usu\xe1rios",
              children: "\ud83d\udc65 Gerenciamento de Usu\xe1rios",
            }),
            "\n",
            (0, a.jsxs)(n.ul, {
              children: [
                "\n",
                (0, a.jsx)(n.li, {
                  children: "\ud83d\udd10 Controle de acesso granular",
                }),
                "\n",
                (0, a.jsx)(n.li, {
                  children:
                    "\ud83d\udc64 Perfis de usu\xe1rio personaliz\xe1veis",
                }),
                "\n",
                (0, a.jsx)(n.li, {
                  children: "\ud83d\udd11 Autentica\xe7\xe3o em dois fatores",
                }),
                "\n",
                (0, a.jsx)(n.li, {
                  children: "\ud83d\udcdc Hist\xf3rico de atividades",
                }),
                "\n",
              ],
            }),
            "\n",
            (0, a.jsx)(n.h3, {
              id: "\ufe0f-configura\xe7\xf5es",
              children: "\u2699\ufe0f Configura\xe7\xf5es",
            }),
            "\n",
            (0, a.jsxs)(n.ul, {
              children: [
                "\n",
                (0, a.jsx)(n.li, {
                  children: "\ud83c\udfa8 Personaliza\xe7\xe3o de interface",
                }),
                "\n",
                (0, a.jsx)(n.li, {
                  children: "\ud83d\udd14 Configura\xe7\xf5es de alertas",
                }),
                "\n",
                (0, a.jsx)(n.li, {
                  children: "\ud83d\udcf1 Prefer\xeancias de notifica\xe7\xe3o",
                }),
                "\n",
                (0, a.jsx)(n.li, {
                  children:
                    "\ud83d\udd04 Integra\xe7\xf5es com sistemas externos",
                }),
                "\n",
              ],
            }),
            "\n",
            (0, a.jsx)(n.h2, {
              id: "-interface-responsiva",
              children: "\ud83d\udcf1 Interface Responsiva",
            }),
            "\n",
            (0, a.jsxs)(n.p, {
              children: [
                "A plataforma ",
                (0, a.jsx)(n.strong, { children: "V3 Web" }),
                " \xe9 totalmente responsiva, oferecendo uma experi\xeancia otimizada em:",
              ],
            }),
            "\n",
            (0, a.jsxs)(n.ul, {
              children: [
                "\n",
                (0, a.jsx)(n.li, {
                  children: "\ud83d\udcbb Computadores desktop",
                }),
                "\n",
                (0, a.jsx)(n.li, { children: "\ud83d\udcf1 Tablets" }),
                "\n",
                (0, a.jsx)(n.li, { children: "\ud83d\udcf1 Smartphones" }),
                "\n",
                (0, a.jsx)(n.li, {
                  children: "\ud83c\udf10 Diferentes navegadores",
                }),
                "\n",
              ],
            }),
            "\n",
            (0, a.jsx)(n.h2, {
              id: "-seguran\xe7a",
              children: "\ud83d\udd12 Seguran\xe7a",
            }),
            "\n",
            (0, a.jsxs)(n.ul, {
              children: [
                "\n",
                (0, a.jsx)(n.li, {
                  children:
                    "\ud83d\udd10 Criptografia de dados em tr\xe2nsito e em repouso",
                }),
                "\n",
                (0, a.jsx)(n.li, {
                  children:
                    "\ud83d\udee1\ufe0f Prote\xe7\xe3o contra ataques comuns",
                }),
                "\n",
                (0, a.jsx)(n.li, {
                  children:
                    "\u2705 Conformidade com padr\xf5es de seguran\xe7a",
                }),
                "\n",
                (0, a.jsx)(n.li, {
                  children:
                    "\ud83d\udcbe Backup autom\xe1tico de configura\xe7\xf5es",
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function u(e = {}) {
        const { wrapper: n } = { ...(0, o.R)(), ...e.components };
        return n
          ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(c, { ...e }) })
          : c(e);
      }
    },
  },
]);
