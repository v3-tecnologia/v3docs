import type { ReactNode } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="Bem-vindo ao V3 Docs - A documentação oficial da V3">
      <HomepageHeader />
      <main>
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <div className={styles.introText}>
                <img src="/img/logo-destaque.png" alt="V3 Logo" />
                <h2>Bem-vindo à Documentação da API V3</h2>
                <p>
                  Esta é a documentação oficial da API V3, onde você encontrará
                  todas as informações necessárias para integrar e utilizar
                  nossos serviços. Aqui você terá acesso a guias detalhados,
                  exemplos de código e referências completas para todas as
                  funcionalidades disponíveis.
                </p>
                <p>
                  Nossa API foi projetada para ser intuitiva, segura e
                  escalável, permitindo que você desenvolva soluções robustas e
                  eficientes. Explore nossa documentação e descubra como a V3
                  pode impulsionar seus projetos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
