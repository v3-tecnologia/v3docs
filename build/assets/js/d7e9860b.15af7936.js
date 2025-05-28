"use strict";
(self.webpackChunkv3_docs = self.webpackChunkv3_docs || []).push([
  [4270],
  {
    28453: (o, e, s) => {
      s.d(e, { R: () => a, x: () => r });
      var n = s(96540);
      const t = {},
        i = n.createContext(t);
      function a(o) {
        const e = n.useContext(i);
        return n.useMemo(
          function () {
            return "function" == typeof o ? o(e) : { ...e, ...o };
          },
          [e, o]
        );
      }
      function r(o) {
        let e;
        return (
          (e = o.disableParentContext
            ? "function" == typeof o.components
              ? o.components(t)
              : o.components || t
            : a(o.components)),
          n.createElement(i.Provider, { value: e }, o.children)
        );
      }
    },
    49433: (o, e, s) => {
      s.r(e),
        s.d(e, {
          assets: () => d,
          contentTitle: () => r,
          default: () => l,
          frontMatter: () => a,
          metadata: () => n,
          toc: () => c,
        });
      const n = JSON.parse(
        '{"id":"docs/solucao-v3/03.01-v3hw/03.01.01-introducao","title":"\ud83d\udd27 Introdu\xe7\xe3o","description":"O m\xf3dulo V3HW compreende os dispositivos f\xedsicos respons\xe1veis pela captura de v\xeddeo e dados telem\xe9tricos dos ve\xedculos. Cada dispositivo recebe o firmware personalizado da V3, transformando-o em um componente inteligente do nosso ecossistema de videotelemetria.","source":"@site/docs/docs/03-solucao-v3/03.01-v3hw/03.01.01-introducao.md","sourceDirName":"docs/03-solucao-v3/03.01-v3hw","slug":"/docs/solucao-v3/03.01-v3hw/03.01.01-introducao","permalink":"/docs/docs/solucao-v3/03.01-v3hw/03.01.01-introducao","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"\ud83d\udd27 V3HW","permalink":"/docs/category/-v3hw"},"next":{"title":"\ud83d\udcb0 Op\xe7\xf5es de Aquisi\xe7\xe3o","permalink":"/docs/docs/solucao-v3/03.01-v3hw/03.01.02-opcoes-de-aquisicao"}}'
      );
      var t = s(74848),
        i = s(28453);
      const a = { sidebar_position: 1 },
        r = "\ud83d\udd27 Introdu\xe7\xe3o",
        d = {},
        c = [];
      function u(o) {
        const e = {
          h1: "h1",
          header: "header",
          li: "li",
          p: "p",
          strong: "strong",
          ul: "ul",
          ...(0, i.R)(),
          ...o.components,
        };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(e.header, {
              children: (0, t.jsx)(e.h1, {
                id: "-introdu\xe7\xe3o",
                children: "\ud83d\udd27 Introdu\xe7\xe3o",
              }),
            }),
            "\n",
            (0, t.jsxs)(e.p, {
              children: [
                "O m\xf3dulo ",
                (0, t.jsx)(e.strong, { children: "V3HW" }),
                " compreende os dispositivos f\xedsicos respons\xe1veis pela captura de v\xeddeo e dados telem\xe9tricos dos ve\xedculos. Cada dispositivo recebe o firmware personalizado da V3, transformando-o em um componente inteligente do nosso ecossistema de videotelemetria.",
              ],
            }),
            "\n",
            (0, t.jsx)(e.p, {
              children:
                "Nas p\xe1ginas a seguir, voc\xea encontrar\xe1 informa\xe7\xf5es detalhadas sobre:",
            }),
            "\n",
            (0, t.jsxs)(e.ul, {
              children: [
                "\n",
                (0, t.jsx)(e.li, {
                  children:
                    "\ud83d\udcf9 Modelos de dashcams compat\xedveis com nosso sistema",
                }),
                "\n",
                (0, t.jsx)(e.li, {
                  children:
                    "\ud83d\uddfa\ufe0f Roadmap de compatibilidade para futuros dispositivos",
                }),
                "\n",
                (0, t.jsx)(e.li, {
                  children:
                    "\ud83d\udcb0 Op\xe7\xf5es dispon\xedveis para aquisi\xe7\xe3o de hardware atrav\xe9s da V3",
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function l(o = {}) {
        const { wrapper: e } = { ...(0, i.R)(), ...o.components };
        return e
          ? (0, t.jsx)(e, { ...o, children: (0, t.jsx)(u, { ...o }) })
          : u(o);
      }
    },
  },
]);
