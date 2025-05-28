"use strict";
(self.webpackChunkv3_docs = self.webpackChunkv3_docs || []).push([
  [602],
  {
    28453: (e, n, o) => {
      o.d(n, { R: () => r, x: () => t });
      var s = o(96540);
      const a = {},
        i = s.createContext(a);
      function r(e) {
        const n = s.useContext(i);
        return s.useMemo(
          function () {
            return "function" == typeof e ? e(n) : { ...n, ...e };
          },
          [n, e]
        );
      }
      function t(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(a)
              : e.components || a
            : r(e.components)),
          s.createElement(i.Provider, { value: n }, e.children)
        );
      }
    },
    43077: (e, n, o) => {
      o.r(n),
        o.d(n, {
          assets: () => d,
          contentTitle: () => t,
          default: () => u,
          frontMatter: () => r,
          metadata: () => s,
          toc: () => c,
        });
      const s = JSON.parse(
        '{"id":"docs/webhooks","title":"\ud83e\ude9d Webhooks","description":"Este documento descreve o sistema de notifica\xe7\xf5es via webhook, uma solu\xe7\xe3o que permite a comunica\xe7\xe3o em tempo real entre diferentes sistemas atrav\xe9s de notifica\xe7\xf5es HTTP. O sistema foi projetado para ser seguro, confi\xe1vel e f\xe1cil de integrar.","source":"@site/docs/docs/13-webhooks.md","sourceDirName":"docs","slug":"/docs/webhooks","permalink":"/docs/docs/webhooks","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"sidebar_position":13},"sidebar":"docsSidebar","previous":{"title":"\ud83d\udc41\ufe0f Vision","permalink":"/docs/docs/vision"}}'
      );
      var a = o(74848),
        i = o(28453);
      const r = { sidebar_position: 13 },
        t = "\ud83e\ude9d Webhooks",
        d = {},
        c = [
          {
            value: "\ud83e\udd14 O que s\xe3o Webhooks?",
            id: "-o-que-s\xe3o-webhooks",
            level: 2,
          },
          {
            value: "\u2728 Vantagens dos Webhooks",
            id: "-vantagens-dos-webhooks",
            level: 3,
          },
          {
            value: "\u2699\ufe0f Como Funciona o Sistema",
            id: "\ufe0f-como-funciona-o-sistema",
            level: 2,
          },
          {
            value: "1. \ud83d\udd27 Configura\xe7\xe3o do Cliente",
            id: "1--configura\xe7\xe3o-do-cliente",
            level: 3,
          },
          {
            value: "2. \ud83d\udd12 Autentica\xe7\xe3o e Seguran\xe7a",
            id: "2--autentica\xe7\xe3o-e-seguran\xe7a",
            level: 3,
          },
          {
            value: "\ud83d\udd0d Como Validar a Assinatura (Lado do Cliente)",
            id: "-como-validar-a-assinatura-lado-do-cliente",
            level: 4,
          },
          {
            value: "3. \ud83d\udce6 Formato das Notifica\xe7\xf5es",
            id: "3--formato-das-notifica\xe7\xf5es",
            level: 3,
          },
          {
            value: "4. \ud83d\udce8 Respostas e Confirma\xe7\xf5es",
            id: "4--respostas-e-confirma\xe7\xf5es",
            level: 3,
          },
          {
            value: "\ud83d\udccb Boas Pr\xe1ticas para Implementa\xe7\xe3o",
            id: "-boas-pr\xe1ticas-para-implementa\xe7\xe3o",
            level: 2,
          },
          {
            value: "\ud83d\udcbb Lado do Cliente",
            id: "-lado-do-cliente",
            level: 3,
          },
          {
            value: "\ud83d\udca1 Exemplo de Implementa\xe7\xe3o (Python)",
            id: "-exemplo-de-implementa\xe7\xe3o-python",
            level: 3,
          },
          {
            value: "\ud83d\udd27 Troubleshooting",
            id: "-troubleshooting",
            level: 2,
          },
          {
            value: "\ud83d\udea8 Problemas Comuns",
            id: "-problemas-comuns",
            level: 3,
          },
          { value: "\ud83c\udd98 Suporte", id: "-suporte", level: 2 },
          { value: "\ud83c\udfaf Conclus\xe3o", id: "-conclus\xe3o", level: 2 },
        ];
      function l(e) {
        const n = {
          a: "a",
          code: "code",
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          header: "header",
          li: "li",
          ol: "ol",
          p: "p",
          pre: "pre",
          strong: "strong",
          ul: "ul",
          ...(0, i.R)(),
          ...e.components,
        };
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(n.header, {
              children: (0, a.jsx)(n.h1, {
                id: "-webhooks",
                children: "\ud83e\ude9d Webhooks",
              }),
            }),
            "\n",
            (0, a.jsx)(n.p, {
              children:
                "Este documento descreve o sistema de notifica\xe7\xf5es via webhook, uma solu\xe7\xe3o que permite a comunica\xe7\xe3o em tempo real entre diferentes sistemas atrav\xe9s de notifica\xe7\xf5es HTTP. O sistema foi projetado para ser seguro, confi\xe1vel e f\xe1cil de integrar.",
            }),
            "\n",
            (0, a.jsx)(n.h2, {
              id: "-o-que-s\xe3o-webhooks",
              children: "\ud83e\udd14 O que s\xe3o Webhooks?",
            }),
            "\n",
            (0, a.jsx)(n.p, {
              children:
                'Webhooks s\xe3o uma forma de comunica\xe7\xe3o entre sistemas onde um sistema (o remetente) envia automaticamente uma notifica\xe7\xe3o HTTP para outro sistema (o destinat\xe1rio) quando um evento espec\xedfico ocorre. \xc9 como um "callback" na web - quando algo acontece no sistema remetente, ele "chama" o sistema destinat\xe1rio para informar sobre o evento.',
            }),
            "\n",
            (0, a.jsx)(n.h3, {
              id: "-vantagens-dos-webhooks",
              children: "\u2728 Vantagens dos Webhooks",
            }),
            "\n",
            (0, a.jsxs)(n.ul, {
              children: [
                "\n",
                (0, a.jsxs)(n.li, {
                  children: [
                    "\u26a1 ",
                    (0, a.jsx)(n.strong, { children: "Tempo Real" }),
                    ": As notifica\xe7\xf5es s\xe3o enviadas instantaneamente quando um evento ocorre",
                  ],
                }),
                "\n",
                (0, a.jsxs)(n.li, {
                  children: [
                    "\ud83d\ude80 ",
                    (0, a.jsx)(n.strong, { children: "Efici\xeancia" }),
                    ": N\xe3o \xe9 necess\xe1rio fazer polling constante para verificar por novas informa\xe7\xf5es",
                  ],
                }),
                "\n",
                (0, a.jsxs)(n.li, {
                  children: [
                    "\ud83c\udfaf ",
                    (0, a.jsx)(n.strong, { children: "Simplicidade" }),
                    ": Implementa\xe7\xe3o simples usando HTTP, um protocolo amplamente suportado",
                  ],
                }),
                "\n",
                (0, a.jsxs)(n.li, {
                  children: [
                    "\ud83d\udd04 ",
                    (0, a.jsx)(n.strong, { children: "Flexibilidade" }),
                    ": Pode ser integrado com qualquer sistema que suporte HTTP",
                  ],
                }),
                "\n",
              ],
            }),
            "\n",
            (0, a.jsx)(n.h2, {
              id: "\ufe0f-como-funciona-o-sistema",
              children: "\u2699\ufe0f Como Funciona o Sistema",
            }),
            "\n",
            (0, a.jsx)(n.h3, {
              id: "1--configura\xe7\xe3o-do-cliente",
              children: "1. \ud83d\udd27 Configura\xe7\xe3o do Cliente",
            }),
            "\n",
            (0, a.jsx)(n.p, {
              children:
                "Para come\xe7ar a receber notifica\xe7\xf5es, o cliente precisa:",
            }),
            "\n",
            (0, a.jsxs)(n.ol, {
              children: [
                "\n",
                (0, a.jsx)(n.li, {
                  children:
                    "\ud83c\udf10 Fornecer um endpoint HTTP que receber\xe1 as notifica\xe7\xf5es",
                }),
                "\n",
                (0, a.jsx)(n.li, {
                  children:
                    "\ud83d\udd11 Configurar um secret key para autentica\xe7\xe3o",
                }),
                "\n",
                (0, a.jsx)(n.li, {
                  children:
                    "\u23f1\ufe0f Definir um timeout para as requisi\xe7\xf5es",
                }),
                "\n",
              ],
            }),
            "\n",
            (0, a.jsx)(n.h3, {
              id: "2--autentica\xe7\xe3o-e-seguran\xe7a",
              children: "2. \ud83d\udd12 Autentica\xe7\xe3o e Seguran\xe7a",
            }),
            "\n",
            (0, a.jsxs)(n.p, {
              children: [
                "O sistema utiliza autentica\xe7\xe3o ",
                (0, a.jsx)(n.code, { children: "HMAC-SHA256" }),
                " para garantir a seguran\xe7a das notifica\xe7\xf5es:",
              ],
            }),
            "\n",
            (0, a.jsxs)(n.ol, {
              children: [
                "\n",
                (0, a.jsx)(n.li, {
                  children:
                    "\u270d\ufe0f Cada notifica\xe7\xe3o \xe9 assinada usando o secret key do cliente",
                }),
                "\n",
                (0, a.jsxs)(n.li, {
                  children: [
                    "\ud83d\udcdd A assinatura \xe9 enviada no header ",
                    (0, a.jsx)(n.code, { children: "X-V3-Signature" }),
                  ],
                }),
                "\n",
                (0, a.jsx)(n.li, {
                  children:
                    "\u2705 O cliente deve validar a assinatura para garantir que a notifica\xe7\xe3o \xe9 leg\xedtima",
                }),
                "\n",
              ],
            }),
            "\n",
            (0, a.jsx)(n.h4, {
              id: "-como-validar-a-assinatura-lado-do-cliente",
              children:
                "\ud83d\udd0d Como Validar a Assinatura (Lado do Cliente)",
            }),
            "\n",
            (0, a.jsx)(n.pre, {
              children: (0, a.jsx)(n.code, {
                className: "language-python",
                children:
                  "import hmac\nimport hashlib\n\ndef verify_signature(payload, signature, secret):\n    # Remove o prefixo 'sha256=' se presente\n    if signature.startswith('sha256='):\n        signature = signature[7:]\n    \n    # Calcula a assinatura esperada\n    expected_signature = hmac.new(\n        secret.encode('utf-8'),\n        payload,\n        hashlib.sha256\n    ).hexdigest()\n    \n    # Compara as assinaturas\n    return hmac.compare_digest(signature, expected_signature)\n",
              }),
            }),
            "\n",
            (0, a.jsx)(n.h3, {
              id: "3--formato-das-notifica\xe7\xf5es",
              children: "3. \ud83d\udce6 Formato das Notifica\xe7\xf5es",
            }),
            "\n",
            (0, a.jsx)(n.p, {
              children:
                "As notifica\xe7\xf5es s\xe3o enviadas como requisi\xe7\xf5es HTTP POST com o seguinte formato:",
            }),
            "\n",
            (0, a.jsx)(n.pre, {
              children: (0, a.jsx)(n.code, {
                className: "language-json",
                children:
                  '{\n  "tenant_id": "seu-tenant-id",\n  "timestamp": "2024-03-21T10:00:00Z",\n  "payload": {\n    "event": "tipo_do_evento",\n    "data": {\n      // Dados espec\xedficos do evento\n    }\n  }\n}\n',
              }),
            }),
            "\n",
            (0, a.jsx)(n.h3, {
              id: "4--respostas-e-confirma\xe7\xf5es",
              children: "4. \ud83d\udce8 Respostas e Confirma\xe7\xf5es",
            }),
            "\n",
            (0, a.jsx)(n.p, {
              children: "O sistema espera uma resposta HTTP do cliente:",
            }),
            "\n",
            (0, a.jsxs)(n.ul, {
              children: [
                "\n",
                (0, a.jsxs)(n.li, {
                  children: [
                    "\u2705 ",
                    (0, a.jsx)(n.strong, { children: "200 OK" }),
                    ": Notifica\xe7\xe3o recebida e processada com sucesso",
                  ],
                }),
                "\n",
                (0, a.jsxs)(n.li, {
                  children: [
                    "\u274c ",
                    (0, a.jsx)(n.strong, { children: "Outros c\xf3digos" }),
                    ": Indica que houve um problema no processamento",
                  ],
                }),
                "\n",
              ],
            }),
            "\n",
            (0, a.jsx)(n.p, {
              children:
                "O sistema registra todas as tentativas de entrega e suas respostas para auditoria e troubleshooting.",
            }),
            "\n",
            (0, a.jsx)(n.h2, {
              id: "-boas-pr\xe1ticas-para-implementa\xe7\xe3o",
              children:
                "\ud83d\udccb Boas Pr\xe1ticas para Implementa\xe7\xe3o",
            }),
            "\n",
            (0, a.jsx)(n.h3, {
              id: "-lado-do-cliente",
              children: "\ud83d\udcbb Lado do Cliente",
            }),
            "\n",
            (0, a.jsxs)(n.ol, {
              children: [
                "\n",
                (0, a.jsxs)(n.li, {
                  children: [
                    "\ud83d\udd04 ",
                    (0, a.jsx)(n.strong, { children: "Idempot\xeancia" }),
                    ": Implemente seu endpoint para ser idempotente, pois a mesma notifica\xe7\xe3o pode ser enviada mais de uma vez",
                  ],
                }),
                "\n",
                (0, a.jsxs)(n.li, {
                  children: [
                    "\u23f1\ufe0f ",
                    (0, a.jsx)(n.strong, { children: "Timeout" }),
                    ": Configure um timeout adequado para processar a notifica\xe7\xe3o",
                  ],
                }),
                "\n",
                (0, a.jsxs)(n.li, {
                  children: [
                    "\u2705 ",
                    (0, a.jsx)(n.strong, { children: "Valida\xe7\xe3o" }),
                    ": Sempre valide a assinatura antes de processar a notifica\xe7\xe3o",
                  ],
                }),
                "\n",
                (0, a.jsxs)(n.li, {
                  children: [
                    "\u26a1 ",
                    (0, a.jsx)(n.strong, { children: "Resposta R\xe1pida" }),
                    ": Responda o mais r\xe1pido poss\xedvel, mesmo que o processamento completo demore mais tempo",
                  ],
                }),
                "\n",
                (0, a.jsxs)(n.li, {
                  children: [
                    "\ud83d\udcdd ",
                    (0, a.jsx)(n.strong, { children: "Logging" }),
                    ": Mantenha logs de todas as notifica\xe7\xf5es recebidas",
                  ],
                }),
                "\n",
              ],
            }),
            "\n",
            (0, a.jsx)(n.h3, {
              id: "-exemplo-de-implementa\xe7\xe3o-python",
              children: "\ud83d\udca1 Exemplo de Implementa\xe7\xe3o (Python)",
            }),
            "\n",
            (0, a.jsx)(n.pre, {
              children: (0, a.jsx)(n.code, {
                className: "language-python",
                children:
                  "from flask import Flask, request, jsonify\nimport hmac\nimport hashlib\n\napp = Flask(__name__)\n\n@app.route('/webhook', methods=['POST'])\ndef webhook():\n    # Obt\xe9m a assinatura do header\n    signature = request.headers.get('X-V3-Signature')\n    if not signature:\n        return jsonify({'error': 'No signature provided'}), 401\n    \n    # Obt\xe9m o payload\n    payload = request.get_data()\n    \n    # Valida a assinatura\n    if not verify_signature(payload, signature, 'seu-secret-key'):\n        return jsonify({'error': 'Invalid signature'}), 401\n    \n    # Processa a notifica\xe7\xe3o\n    try:\n        # Seu c\xf3digo de processamento aqui\n        return jsonify({'status': 'success'}), 200\n    except Exception as e:\n        return jsonify({'error': str(e)}), 500\n\nif __name__ == '__main__':\n    app.run(port=8080)\n",
              }),
            }),
            "\n",
            (0, a.jsx)(n.h2, {
              id: "-troubleshooting",
              children: "\ud83d\udd27 Troubleshooting",
            }),
            "\n",
            (0, a.jsx)(n.h3, {
              id: "-problemas-comuns",
              children: "\ud83d\udea8 Problemas Comuns",
            }),
            "\n",
            (0, a.jsxs)(n.ol, {
              children: [
                "\n",
                (0, a.jsxs)(n.li, {
                  children: [
                    "\n",
                    (0, a.jsxs)(n.p, {
                      children: [
                        "\ud83d\udced ",
                        (0, a.jsx)(n.strong, {
                          children: "Notifica\xe7\xf5es n\xe3o recebidas",
                        }),
                      ],
                    }),
                    "\n",
                    (0, a.jsxs)(n.ul, {
                      children: [
                        "\n",
                        (0, a.jsx)(n.li, {
                          children:
                            "\ud83c\udf10 Verifique se o endpoint est\xe1 acess\xedvel",
                        }),
                        "\n",
                        (0, a.jsx)(n.li, {
                          children:
                            "\ud83d\udd11 Confirme se o secret key est\xe1 correto",
                        }),
                        "\n",
                        (0, a.jsx)(n.li, {
                          children: "\ud83d\udcdd Verifique os logs do sistema",
                        }),
                        "\n",
                      ],
                    }),
                    "\n",
                  ],
                }),
                "\n",
                (0, a.jsxs)(n.li, {
                  children: [
                    "\n",
                    (0, a.jsxs)(n.p, {
                      children: [
                        "\ud83d\udd12 ",
                        (0, a.jsx)(n.strong, {
                          children: "Erros de Autentica\xe7\xe3o",
                        }),
                      ],
                    }),
                    "\n",
                    (0, a.jsxs)(n.ul, {
                      children: [
                        "\n",
                        (0, a.jsx)(n.li, {
                          children:
                            "\ud83d\udd11 Confirme se o secret key est\xe1 correto",
                        }),
                        "\n",
                        (0, a.jsx)(n.li, {
                          children:
                            "\u270d\ufe0f Verifique se a assinatura est\xe1 sendo calculada corretamente",
                        }),
                        "\n",
                        (0, a.jsxs)(n.li, {
                          children: [
                            "\ud83d\udcdd Certifique-se de que o header ",
                            (0, a.jsx)(n.code, { children: "X-V3-Signature" }),
                            " est\xe1 sendo enviado",
                          ],
                        }),
                        "\n",
                      ],
                    }),
                    "\n",
                  ],
                }),
                "\n",
                (0, a.jsxs)(n.li, {
                  children: [
                    "\n",
                    (0, a.jsxs)(n.p, {
                      children: [
                        "\u23f1\ufe0f ",
                        (0, a.jsx)(n.strong, { children: "Timeouts" }),
                      ],
                    }),
                    "\n",
                    (0, a.jsxs)(n.ul, {
                      children: [
                        "\n",
                        (0, a.jsx)(n.li, {
                          children:
                            "\u2699\ufe0f Aumente o timeout na configura\xe7\xe3o se necess\xe1rio",
                        }),
                        "\n",
                        (0, a.jsx)(n.li, {
                          children:
                            "\ud83d\ude80 Otimize o processamento do webhook para ser mais r\xe1pido",
                        }),
                        "\n",
                        (0, a.jsx)(n.li, {
                          children:
                            "\ud83d\udd04 Considere processar a notifica\xe7\xe3o de forma ass\xedncrona",
                        }),
                        "\n",
                      ],
                    }),
                    "\n",
                  ],
                }),
                "\n",
              ],
            }),
            "\n",
            (0, a.jsx)(n.h2, {
              id: "-suporte",
              children: "\ud83c\udd98 Suporte",
            }),
            "\n",
            (0, a.jsxs)(n.p, {
              children: [
                "Para suporte t\xe9cnico ou d\xfavidas sobre a implementa\xe7\xe3o, entre em contato com a equipe de suporte atrav\xe9s do e-mail ",
                (0, a.jsx)(n.a, {
                  href: "mailto:suporte@v3.com.br",
                  children: "suporte@v3.com.br",
                }),
                ".",
              ],
            }),
            "\n",
            (0, a.jsx)(n.h2, {
              id: "-conclus\xe3o",
              children: "\ud83c\udfaf Conclus\xe3o",
            }),
            "\n",
            (0, a.jsx)(n.p, {
              children:
                "O sistema de notifica\xe7\xf5es via webhook oferece uma maneira eficiente e segura de receber atualiza\xe7\xf5es em tempo real. Com a implementa\xe7\xe3o correta e seguindo as boas pr\xe1ticas, voc\xea pode criar uma integra\xe7\xe3o robusta e confi\xe1vel.",
            }),
          ],
        });
      }
      function u(e = {}) {
        const { wrapper: n } = { ...(0, i.R)(), ...e.components };
        return n
          ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(l, { ...e }) })
          : l(e);
      }
    },
  },
]);
