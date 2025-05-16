import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="Bem-vindo ao V3 Docs - A documentação oficial da V3">
      <main>
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <div className={styles.introText}>
                <img src="/img/logo-destaque.png" alt="V3 Logo" />
                <h2>Bem-vindo ao portal do desenvolvedor da V3</h2>
                <p>
                  Este é o ambiente de desenvolvimento da V3, onde você
                  encontrará todas as informações necessárias para integrar e
                  utilizar nossos serviços.
                </p>
                <p>Nosso portal está organizado em três principais seções:</p>
                <ul>
                  <li>
                    <strong>
                      <a href="/blog">Blog</a> -
                    </strong>{" "}
                    É o espaço onde nosso time de tecnologia compartilha
                    conhecimentos sobre as tecnologias que utilizamos,
                    tendências de mercado, inovações que estamos acompanhando, e
                    como solucionamos os desafios técnicos da V3, incluindo
                    projetos experimentais e provas de conceito.
                  </li>
                  <li>
                    <strong>
                      <a href="/docs/tutorials/intro">Tutoriais</a> -
                    </strong>{" "}
                    Guia estruturado em módulos sequenciais para compreender e
                    implementar o ecossistema V3. A jornada inclui: conhecendo a
                    V3, nossa solução, configuração inicial, autenticação e
                    tokens, permissionamento, gestão de dispositivos, webhooks e
                    integrações, e ferramentas operacionais para sua operação
                    diária.
                  </li>
                  <li>
                    <strong>
                      <a href="docs/category/orders-api">API</a> -
                    </strong>{" "}
                    Documentação técnica detalhada de todas as APIs disponíveis
                    para integração com a V3, incluindo autenticação,
                    gerenciamento de pedidos, eventos e recursos
                    administrativos. Cada endpoint é apresentado com exemplos
                    práticos, parâmetros necessários e respostas esperadas.
                  </li>
                </ul>
                <p>
                  Nossa API foi projetada para ser intuitiva, segura e
                  escalável, permitindo que você desenvolva soluções robustas e
                  eficientes. Explore nossa documentação e descubra como a V3
                  pode impulsionar seus projetos.
                </p>
                <h2>Ficou com alguma dúvida?</h2>
                <p>
                  Entre em contato conosco através do e-mail:{" "}
                  <a href="mailto:suporte@v3.com.br">suporte@v3.com.br</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
