"use strict";
(self.webpackChunkv3_docs = self.webpackChunkv3_docs || []).push([
  [8995],
  {
    1136: (o, e, s) => {
      s.r(e),
        s.d(e, {
          assets: () => r,
          contentTitle: () => d,
          default: () => p,
          frontMatter: () => n,
          metadata: () => i,
          toc: () => c,
        });
      const i = JSON.parse(
        '{"id":"docs/solucao-v3/03.01-v3hw/03.01.04-roadmap-de-compatibilidade","title":"\ud83d\uddfa\ufe0f Roadmap de Compatibilidade","description":"A V3 est\xe1 em constante expans\xe3o de sua compatibilidade com diferentes dispositivos de hardware. Nossa equipe trabalha continuamente para integrar novos modelos de dashcams e outros dispositivos IoT ao nosso ecossistema.","source":"@site/docs/docs/03-solucao-v3/03.01-v3hw/03.01.04-roadmap-de-compatibilidade.md","sourceDirName":"docs/03-solucao-v3/03.01-v3hw","slug":"/docs/solucao-v3/03.01-v3hw/03.01.04-roadmap-de-compatibilidade","permalink":"/docs/docs/solucao-v3/03.01-v3hw/03.01.04-roadmap-de-compatibilidade","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"\ud83d\udcf1 Modelos Compat\xedveis","permalink":"/docs/docs/solucao-v3/03.01-v3hw/03.01.03-modelos-compativeis"},"next":{"title":"\ud83d\udcbb V3CORE","permalink":"/docs/category/-v3core"}}'
      );
      var t = s(74848),
        a = s(28453);
      const n = { sidebar_position: 3 },
        d = "\ud83d\uddfa\ufe0f Roadmap de Compatibilidade",
        r = {},
        c = [
          {
            value: "\ud83d\udd1c Pr\xf3ximos Dispositivos",
            id: "-pr\xf3ximos-dispositivos",
            level: 2,
          },
        ];
      function m(o) {
        const e = {
          a: "a",
          h1: "h1",
          h2: "h2",
          header: "header",
          li: "li",
          p: "p",
          strong: "strong",
          ul: "ul",
          ...(0, a.R)(),
          ...o.components,
        };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(e.header, {
              children: (0, t.jsx)(e.h1, {
                id: "\ufe0f-roadmap-de-compatibilidade",
                children: "\ud83d\uddfa\ufe0f Roadmap de Compatibilidade",
              }),
            }),
            "\n",
            (0, t.jsx)(e.p, {
              children:
                "A V3 est\xe1 em constante expans\xe3o de sua compatibilidade com diferentes dispositivos de hardware. Nossa equipe trabalha continuamente para integrar novos modelos de dashcams e outros dispositivos IoT ao nosso ecossistema.",
            }),
            "\n",
            (0, t.jsx)(e.h2, {
              id: "-pr\xf3ximos-dispositivos",
              children: "\ud83d\udd1c Pr\xf3ximos Dispositivos",
            }),
            "\n",
            (0, t.jsxs)(e.p, {
              children: [
                "Nosso roadmap conta com o porting da nossa solu\xe7\xe3o ",
                (0, t.jsx)(e.strong, { children: "V3FW" }),
                " para os seguintes dispositivos:",
              ],
            }),
            "\n",
            (0, t.jsxs)(e.ul, {
              children: [
                "\n",
                (0, t.jsxs)(e.li, {
                  children: [
                    "\ud83d\udcf9 ",
                    (0, t.jsx)(e.a, {
                      href: "https://br.jimiiot.com/products/jc400d-aivision-cam.html",
                      children: "JC400D",
                    }),
                  ],
                }),
                "\n",
                (0, t.jsxs)(e.li, {
                  children: [
                    "\ud83d\udcf9 ",
                    (0, t.jsx)(e.a, {
                      href: "https://br.jimiiot.com/product/jc450-ai-dashcam.html",
                      children: "JC450",
                    }),
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function p(o = {}) {
        const { wrapper: e } = { ...(0, a.R)(), ...o.components };
        return e
          ? (0, t.jsx)(e, { ...o, children: (0, t.jsx)(m, { ...o }) })
          : m(o);
      }
    },
    28453: (o, e, s) => {
      s.d(e, { R: () => n, x: () => d });
      var i = s(96540);
      const t = {},
        a = i.createContext(t);
      function n(o) {
        const e = i.useContext(a);
        return i.useMemo(
          function () {
            return "function" == typeof o ? o(e) : { ...e, ...o };
          },
          [e, o]
        );
      }
      function d(o) {
        let e;
        return (
          (e = o.disableParentContext
            ? "function" == typeof o.components
              ? o.components(t)
              : o.components || t
            : n(o.components)),
          i.createElement(a.Provider, { value: e }, o.children)
        );
      }
    },
  },
]);
