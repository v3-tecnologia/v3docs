"use strict";
(self.webpackChunkv3_docs = self.webpackChunkv3_docs || []).push([
  [4101],
  {
    28453: (e, o, s) => {
      s.d(o, { R: () => i, x: () => t });
      var n = s(96540);
      const r = {},
        a = n.createContext(r);
      function i(e) {
        const o = n.useContext(a);
        return n.useMemo(
          function () {
            return "function" == typeof e ? e(o) : { ...o, ...e };
          },
          [o, e]
        );
      }
      function t(e) {
        let o;
        return (
          (o = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(r)
              : e.components || r
            : i(e.components)),
          n.createElement(a.Provider, { value: o }, e.children)
        );
      }
    },
    42063: (e, o, s) => {
      s.r(o),
        s.d(o, {
          assets: () => d,
          contentTitle: () => t,
          default: () => u,
          frontMatter: () => i,
          metadata: () => n,
          toc: () => c,
        });
      const n = JSON.parse(
        '{"id":"docs/solucao-v3/03.02-core/03.02.01-v3fw/02.02.01.01-introducao","title":"\ud83d\udcf1 Introdu\xe7\xe3o","description":"O V3FW \xe9 o software embarcado nos dispositivos V3, respons\xe1vel por coletar, processar e enviar os dados captados pelos sensores para a nuvem.","source":"@site/docs/docs/03-solucao-v3/03.02-core/03.02.01-v3fw/02.02.01.01-introducao.md","sourceDirName":"docs/03-solucao-v3/03.02-core/03.02.01-v3fw","slug":"/docs/solucao-v3/03.02-core/03.02.01-v3fw/02.02.01.01-introducao","permalink":"/docs/docs/solucao-v3/03.02-core/03.02.01-v3fw/02.02.01.01-introducao","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"\ud83d\udcf1 V3FW","permalink":"/docs/category/-v3fw"},"next":{"title":"\ud83d\udcca Telemetria","permalink":"/docs/docs/solucao-v3/03.02-core/03.02.01-v3fw/02.02.01.02-telemetria"}}'
      );
      var r = s(74848),
        a = s(28453);
      const i = { sidebar_position: 1 },
        t = "\ud83d\udcf1 Introdu\xe7\xe3o",
        d = {},
        c = [
          {
            value: "\u2699\ufe0f Principais Funcionalidades",
            id: "\ufe0f-principais-funcionalidades",
            level: 2,
          },
        ];
      function l(e) {
        const o = {
          h1: "h1",
          h2: "h2",
          header: "header",
          li: "li",
          p: "p",
          strong: "strong",
          ul: "ul",
          ...(0, a.R)(),
          ...e.components,
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(o.header, {
              children: (0, r.jsx)(o.h1, {
                id: "-introdu\xe7\xe3o",
                children: "\ud83d\udcf1 Introdu\xe7\xe3o",
              }),
            }),
            "\n",
            (0, r.jsxs)(o.p, {
              children: [
                "O ",
                (0, r.jsx)(o.strong, { children: "V3FW" }),
                " \xe9 o software embarcado nos dispositivos V3, respons\xe1vel por coletar, processar e enviar os dados captados pelos sensores para a nuvem.",
              ],
            }),
            "\n",
            (0, r.jsxs)(o.p, {
              children: [
                "O ",
                (0, r.jsx)(o.strong, { children: "V3FW" }),
                " foi projetado para operar em diferentes condi\xe7\xf5es, com foco em efici\xeancia e confiabilidade. Sua arquitetura modular permite adaptabilidade a diversos tipos de hardware, mantendo a consist\xeancia das funcionalidades e a qualidade do processamento de dados.",
              ],
            }),
            "\n",
            (0, r.jsx)(o.h2, {
              id: "\ufe0f-principais-funcionalidades",
              children: "\u2699\ufe0f Principais Funcionalidades",
            }),
            "\n",
            (0, r.jsxs)(o.ul, {
              children: [
                "\n",
                (0, r.jsxs)(o.li, {
                  children: [
                    "\ud83d\udcca ",
                    (0, r.jsx)(o.strong, { children: "Telemetria" }),
                    ": Coleta de dados de sensores para monitoramento em tempo real",
                  ],
                }),
                "\n",
                (0, r.jsxs)(o.li, {
                  children: [
                    "\ud83d\udcf9 ",
                    (0, r.jsx)(o.strong, { children: "MDVR" }),
                    ": Grava\xe7\xe3o e recupera\xe7\xe3o remota de arquivos de m\xeddia",
                  ],
                }),
                "\n",
                (0, r.jsxs)(o.li, {
                  children: [
                    "\ud83d\udc68\u200d\u2708\ufe0f ",
                    (0, r.jsx)(o.strong, {
                      children: "Comportamento do Condutor",
                    }),
                    ": Detec\xe7\xe3o de padr\xf5es de condu\xe7\xe3o e situa\xe7\xf5es de risco",
                  ],
                }),
                "\n",
                (0, r.jsxs)(o.li, {
                  children: [
                    "\ud83d\udc41\ufe0f ",
                    (0, r.jsx)(o.strong, { children: "DMS" }),
                    ": Monitoramento dos movimentos faciais do condutor para detec\xe7\xe3o de fadiga, distra\xe7\xe3o entre outros",
                  ],
                }),
                "\n",
                (0, r.jsxs)(o.li, {
                  children: [
                    "\ud83e\udd16 ",
                    (0, r.jsx)(o.strong, {
                      children: "Vis\xe3o Computacional",
                    }),
                    ": S\xe3o sistemas que entendem o mundo registrado pelas c\xe2meras do dispositivo e inferem informa\xe7\xf5es das c\xe2meras. O reconhecimento facil \xe9 um exemplo de vis\xe3o.",
                  ],
                }),
                "\n",
                (0, r.jsxs)(o.li, {
                  children: [
                    "\ud83d\udd04 ",
                    (0, r.jsx)(o.strong, { children: "Portabilidade" }),
                    ": Arquitetura adapt\xe1vel para instala\xe7\xe3o em diversos modelos de hardware",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function u(e = {}) {
        const { wrapper: o } = { ...(0, a.R)(), ...e.components };
        return o
          ? (0, r.jsx)(o, { ...e, children: (0, r.jsx)(l, { ...e }) })
          : l(e);
      }
    },
  },
]);
