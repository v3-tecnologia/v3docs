"use strict";
(self.webpackChunkv3_docs = self.webpackChunkv3_docs || []).push([
  [1255],
  {
    28453: (e, o, n) => {
      n.d(o, { R: () => i, x: () => d });
      var s = n(96540);
      const r = {},
        t = s.createContext(r);
      function i(e) {
        const o = s.useContext(t);
        return s.useMemo(
          function () {
            return "function" == typeof e ? e(o) : { ...o, ...e };
          },
          [o, e]
        );
      }
      function d(e) {
        let o;
        return (
          (o = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(r)
              : e.components || r
            : i(e.components)),
          s.createElement(t.Provider, { value: o }, e.children)
        );
      }
    },
    41070: (e, o, n) => {
      n.r(o),
        n.d(o, {
          assets: () => a,
          contentTitle: () => d,
          default: () => m,
          frontMatter: () => i,
          metadata: () => s,
          toc: () => c,
        });
      const s = JSON.parse(
        '{"id":"docs/solucao-v3/03.02-core/03.02.01-v3fw/02.02.01.04-comportamento-condutor","title":"\ud83d\udc68\u200d\u2708\ufe0f Comportamento do Condutor","description":"O sistema de monitoramento de comportamento do condutor utiliza dados do aceler\xf4metro para identificar padr\xf5es de condu\xe7\xe3o e detectar eventos que possam representar riscos \xe0 seguran\xe7a.","source":"@site/docs/docs/03-solucao-v3/03.02-core/03.02.01-v3fw/02.02.01.04-comportamento-condutor.md","sourceDirName":"docs/03-solucao-v3/03.02-core/03.02.01-v3fw","slug":"/docs/solucao-v3/03.02-core/03.02.01-v3fw/02.02.01.04-comportamento-condutor","permalink":"/docs/docs/solucao-v3/03.02-core/03.02.01-v3fw/02.02.01.04-comportamento-condutor","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"\ud83d\udcf9 MDVR (Mobile Digital Video Recorder)","permalink":"/docs/docs/solucao-v3/03.02-core/03.02.01-v3fw/02.02.01.03-mdvr"},"next":{"title":"\ud83d\udc41\ufe0f DMS (Driver Monitoring System)","permalink":"/docs/docs/solucao-v3/03.02-core/03.02.01-v3fw/02.02.01.05-dms"}}'
      );
      var r = n(74848),
        t = n(28453);
      const i = { sidebar_position: 4 },
        d = "\ud83d\udc68\u200d\u2708\ufe0f Comportamento do Condutor",
        a = {},
        c = [
          {
            value: "\ud83d\udcca Aceler\xf4metro",
            id: "-aceler\xf4metro",
            level: 2,
          },
          {
            value: "\ud83d\udcd0 Eixos de Medi\xe7\xe3o",
            id: "-eixos-de-medi\xe7\xe3o",
            level: 3,
          },
          {
            value: "\ud83c\udfaf Eventos Mapeados",
            id: "-eventos-mapeados",
            level: 2,
          },
          {
            value: "\ud83e\udd16 Sistema de Detec\xe7\xe3o",
            id: "-sistema-de-detec\xe7\xe3o",
            level: 2,
          },
          {
            value: "\u2728 Benef\xedcios do Monitoramento",
            id: "-benef\xedcios-do-monitoramento",
            level: 2,
          },
          {
            value: "\ud83d\udd04 Integra\xe7\xe3o com Outras Funcionalidades",
            id: "-integra\xe7\xe3o-com-outras-funcionalidades",
            level: 2,
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
          table: "table",
          tbody: "tbody",
          td: "td",
          th: "th",
          thead: "thead",
          tr: "tr",
          ul: "ul",
          ...(0, t.R)(),
          ...e.components,
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(o.header, {
              children: (0, r.jsx)(o.h1, {
                id: "\ufe0f-comportamento-do-condutor",
                children:
                  "\ud83d\udc68\u200d\u2708\ufe0f Comportamento do Condutor",
              }),
            }),
            "\n",
            (0, r.jsx)(o.p, {
              children:
                "O sistema de monitoramento de comportamento do condutor utiliza dados do aceler\xf4metro para identificar padr\xf5es de condu\xe7\xe3o e detectar eventos que possam representar riscos \xe0 seguran\xe7a.",
            }),
            "\n",
            (0, r.jsx)(o.h2, {
              id: "-aceler\xf4metro",
              children: "\ud83d\udcca Aceler\xf4metro",
            }),
            "\n",
            (0, r.jsxs)(o.p, {
              children: [
                "Um ",
                (0, r.jsx)(o.strong, { children: "aceler\xf4metro" }),
                " \xe9 um dispositivo eletromec\xe2nico que mede for\xe7as de acelera\xe7\xe3o, sejam est\xe1ticas (como a gravidade) ou din\xe2micas (resultantes de movimentos e vibra\xe7\xf5es). No contexto do V3FW, o aceler\xf4metro permite identificar altera\xe7\xf5es na dirigibilidade do condutor e detectar eventos significativos.",
              ],
            }),
            "\n",
            (0, r.jsx)(o.h3, {
              id: "-eixos-de-medi\xe7\xe3o",
              children: "\ud83d\udcd0 Eixos de Medi\xe7\xe3o",
            }),
            "\n",
            (0, r.jsx)(o.p, {
              children:
                "As medi\xe7\xf5es do aceler\xf4metro s\xe3o orientadas em tr\xeas eixos:",
            }),
            "\n",
            (0, r.jsxs)(o.ul, {
              children: [
                "\n",
                (0, r.jsxs)(o.li, {
                  children: [
                    "\u27a1\ufe0f ",
                    (0, r.jsx)(o.strong, { children: "Longitudinal (X)" }),
                    ": Respons\xe1vel por detectar movimentos para frente e para tr\xe1s (acelera\xe7\xf5es e frenagens)",
                  ],
                }),
                "\n",
                (0, r.jsxs)(o.li, {
                  children: [
                    "\u2194\ufe0f ",
                    (0, r.jsx)(o.strong, { children: "Lateral (Y)" }),
                    ": Respons\xe1vel por detectar movimentos laterais (curvas)",
                  ],
                }),
                "\n",
                (0, r.jsxs)(o.li, {
                  children: [
                    "\u2b06\ufe0f ",
                    (0, r.jsx)(o.strong, { children: "Vertical (Z)" }),
                    ": Respons\xe1vel por detectar movimentos para cima e para baixo (capotamentos)",
                  ],
                }),
                "\n",
              ],
            }),
            "\n",
            (0, r.jsx)(o.h2, {
              id: "-eventos-mapeados",
              children: "\ud83c\udfaf Eventos Mapeados",
            }),
            "\n",
            (0, r.jsx)(o.p, {
              children:
                "O sistema \xe9 capaz de identificar diversos padr\xf5es de comportamento do condutor:",
            }),
            "\n",
            (0, r.jsxs)(o.table, {
              children: [
                (0, r.jsx)(o.thead, {
                  children: (0, r.jsxs)(o.tr, {
                    children: [
                      (0, r.jsx)(o.th, {
                        children: (0, r.jsx)(o.strong, { children: "Evento" }),
                      }),
                      (0, r.jsx)(o.th, {
                        children: (0, r.jsx)(o.strong, {
                          children: "Descri\xe7\xe3o",
                        }),
                      }),
                      (0, r.jsx)(o.th, {
                        children: (0, r.jsx)(o.strong, {
                          children: "Eixo Principal",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, r.jsxs)(o.tbody, {
                  children: [
                    (0, r.jsxs)(o.tr, {
                      children: [
                        (0, r.jsxs)(o.td, {
                          children: [
                            "\ud83d\ude80 ",
                            (0, r.jsx)(o.strong, {
                              children: "Acelera\xe7\xe3o Brusca",
                            }),
                          ],
                        }),
                        (0, r.jsx)(o.td, {
                          children: "Acelera\xe7\xe3o r\xe1pida em linha reta",
                        }),
                        (0, r.jsx)(o.td, { children: "Longitudinal (X)" }),
                      ],
                    }),
                    (0, r.jsxs)(o.tr, {
                      children: [
                        (0, r.jsxs)(o.td, {
                          children: [
                            "\ud83d\uded1 ",
                            (0, r.jsx)(o.strong, {
                              children: "Frenagem Brusca",
                            }),
                          ],
                        }),
                        (0, r.jsx)(o.td, {
                          children:
                            "Desacelera\xe7\xe3o r\xe1pida em linha reta",
                        }),
                        (0, r.jsx)(o.td, { children: "Longitudinal (X)" }),
                      ],
                    }),
                    (0, r.jsxs)(o.tr, {
                      children: [
                        (0, r.jsxs)(o.td, {
                          children: [
                            "\ud83c\udfce\ufe0f ",
                            (0, r.jsx)(o.strong, {
                              children: "Curva Inadequada",
                            }),
                          ],
                        }),
                        (0, r.jsx)(o.td, {
                          children:
                            "Curvas perigosas para a esquerda ou direita",
                        }),
                        (0, r.jsx)(o.td, { children: "Lateral (Y)" }),
                      ],
                    }),
                    (0, r.jsxs)(o.tr, {
                      children: [
                        (0, r.jsxs)(o.td, {
                          children: [
                            "\ud83d\udca5 ",
                            (0, r.jsx)(o.strong, {
                              children: "Suspeita de Impacto",
                            }),
                          ],
                        }),
                        (0, r.jsx)(o.td, {
                          children: "Qualquer impacto detectado",
                        }),
                        (0, r.jsx)(o.td, { children: "M\xfaltiplos eixos" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, r.jsx)(o.h2, {
              id: "-sistema-de-detec\xe7\xe3o",
              children: "\ud83e\udd16 Sistema de Detec\xe7\xe3o",
            }),
            "\n",
            (0, r.jsx)(o.p, {
              children:
                "Para identificar com precis\xe3o estes eventos, o sistema utiliza uma combina\xe7\xe3o de:",
            }),
            "\n",
            (0, r.jsxs)(o.ul, {
              children: [
                "\n",
                (0, r.jsxs)(o.li, {
                  children: [
                    "\ud83d\uddfa\ufe0f ",
                    (0, r.jsx)(o.strong, { children: "Dados do GPS" }),
                    ": Determinam a localiza\xe7\xe3o exata e a velocidade do ve\xedculo",
                  ],
                }),
                "\n",
                (0, r.jsxs)(o.li, {
                  children: [
                    "\ud83d\udcca ",
                    (0, r.jsx)(o.strong, {
                      children: "Dados do Aceler\xf4metro",
                    }),
                    ": Fornecem medi\xe7\xf5es precisas de acelera\xe7\xe3o nos tr\xeas eixos",
                  ],
                }),
                "\n",
                (0, r.jsxs)(o.li, {
                  children: [
                    "\u26a1 ",
                    (0, r.jsx)(o.strong, {
                      children: "Algoritmos de Processamento",
                    }),
                    ": Analisam as leituras e aplicam filtros para reduzir falsos positivos",
                  ],
                }),
                "\n",
              ],
            }),
            "\n",
            (0, r.jsx)(o.h2, {
              id: "-benef\xedcios-do-monitoramento",
              children: "\u2728 Benef\xedcios do Monitoramento",
            }),
            "\n",
            (0, r.jsx)(o.p, {
              children:
                "O monitoramento do comportamento do condutor oferece m\xfaltiplas vantagens:",
            }),
            "\n",
            (0, r.jsxs)(o.ul, {
              children: [
                "\n",
                (0, r.jsxs)(o.li, {
                  children: [
                    "\ud83d\udee1\ufe0f ",
                    (0, r.jsx)(o.strong, {
                      children: "Melhoria da Seguran\xe7a",
                    }),
                    ": Identifica\xe7\xe3o de condutores com padr\xf5es de condu\xe7\xe3o arriscados",
                  ],
                }),
                "\n",
                (0, r.jsxs)(o.li, {
                  children: [
                    "\ud83d\udcb0 ",
                    (0, r.jsx)(o.strong, {
                      children: "Redu\xe7\xe3o de Custos",
                    }),
                    ": Menor desgaste dos ve\xedculos devido \xe0 condu\xe7\xe3o mais suave",
                  ],
                }),
                "\n",
                (0, r.jsxs)(o.li, {
                  children: [
                    "\u26fd ",
                    (0, r.jsx)(o.strong, {
                      children: "Economia de Combust\xedvel",
                    }),
                    ": Condu\xe7\xe3o mais eficiente resulta em menor consumo",
                  ],
                }),
                "\n",
                (0, r.jsxs)(o.li, {
                  children: [
                    "\ud83d\udcda ",
                    (0, r.jsx)(o.strong, {
                      children: "Treinamento Direcionado",
                    }),
                    ": Possibilidade de oferecer treinamento espec\xedfico com base nos dados coletados",
                  ],
                }),
                "\n",
                (0, r.jsxs)(o.li, {
                  children: [
                    "\u26a0\ufe0f ",
                    (0, r.jsx)(o.strong, {
                      children: "Preven\xe7\xe3o de Acidentes",
                    }),
                    ": Alertas em tempo real para comportamentos de risco",
                  ],
                }),
                "\n",
              ],
            }),
            "\n",
            (0, r.jsx)(o.h2, {
              id: "-integra\xe7\xe3o-com-outras-funcionalidades",
              children:
                "\ud83d\udd04 Integra\xe7\xe3o com Outras Funcionalidades",
            }),
            "\n",
            (0, r.jsx)(o.p, {
              children:
                "Os dados de comportamento do condutor se integram com outras funcionalidades do V3FW:",
            }),
            "\n",
            (0, r.jsxs)(o.ul, {
              children: [
                "\n",
                (0, r.jsx)(o.li, {
                  children:
                    "\ud83d\udcca Gera\xe7\xe3o de eventos de telemetria",
                }),
                "\n",
                (0, r.jsx)(o.li, {
                  children:
                    "\ud83d\udcf9 Ativa\xe7\xe3o do MDVR para captura de v\xeddeo em situa\xe7\xf5es de risco",
                }),
                "\n",
                (0, r.jsx)(o.li, {
                  children:
                    "\ud83d\udc41\ufe0f Complemento \xe0s informa\xe7\xf5es do DMS para uma vis\xe3o completa do condutor",
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function m(e = {}) {
        const { wrapper: o } = { ...(0, t.R)(), ...e.components };
        return o
          ? (0, r.jsx)(o, { ...e, children: (0, r.jsx)(l, { ...e }) })
          : l(e);
      }
    },
  },
]);
