import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import { Title, SubTitle } from "../components/Headers";
import { Paragraph } from "../components/Paragraph";
import { Card, CardSuport } from "../components/Card";

export default function Home(): ReactNode {
  return (
    <Layout>
      <main>
        <div className="mt-5 lg:mt-20">
          <div className="container">
            <section className="flex flex-col lg:flex-row gap-8">
              <div className="!w-full lg:!w-[55%]">
                <Title>Bem vindo ao portal do desenvolvedor V3</Title>
                <Paragraph className="!mt-12">
                  Este é o ambiente de desenvolvimento da V3, onde você
                  encontrará todas as informações necessárias para integrar e
                  utilizar nossos serviços.
                </Paragraph>
                <Paragraph className="!mt-20 !text-2xl" variant="bold">
                  Nosso portal está organizado em três seções:
                </Paragraph>
              </div>
              <div className="!w-full lg:!w-[45%] !flex !items-center !justify-center">
                <img
                  src="/img/home/top.svg"
                  alt="V3 Logo"
                  className="!w-full !h-auto"
                />
              </div>
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center !mt-15">
              <Card
                title="Blog"
                bgColor="bg-white"
                textColor="text-black"
                href="/blog"
              >
                É o espaço onde nosso time de tecnologia compartilha
                conhecimentos sobre as tecnologias que utilizamos, tendências de
                mercado, inovações que estamos acompanhando, e como solucionamos
                os desafios técnicos da V3, incluindo projetos experimentais e
                provas de conceito.
              </Card>

              <Card
                title="Documentação"
                bgColor="bg-white"
                textColor="text-black"
                href="/docs/docs"
              >
                Guia estruturado em módulos sequenciais para compreender e
                implementar o ecossistema V3. A jornada inclui: Sobre a V3,
                Nossa Solução, Configuração Inicial, Manual de Instalação,
                Ferramenta de Configuração, Autenticação, Permissionamento,
                Gestão de Dispositivos, Orders, Events, Vision e Webhooks.
              </Card>

              <Card
                title="API"
                bgColor="bg-white"
                textColor="text-black"
                href="docs/category/orders-api"
              >
                Conheça os detalhes das nossas APIS, que são intuitivas, seguras
                e escaláveis, permitindo que você desenvolva soluções robustas e
                eficientes. Veja exemplos de implementações, detalhes dos
                Payloads e muito mais.
              </Card>
            </section>
            <section className="flex flex-row gap-8 !mt-35 justify-center">
              <div className="text-center max-w-[80%]">
                <SubTitle>
                  Explore nossa documentação e descubra como a V3 pode
                  impulsionar seus projetos.
                </SubTitle>
                <Paragraph className="!mt-10">
                  Nossa API foi projetada para ser intuitiva, segura e
                  escalável, permitindo que você desenvolva soluções robustas e
                  eficientes. Explore nossa documentação e descubra como a V3
                  pode impulsionar seus projetos.
                </Paragraph>
              </div>
            </section>
            <section className="flex flex-col lg:flex-row gap-8 !mt-10 items-center">
              <div className="w-[80%] lg:w-[35%]">
                <CardSuport title="Ficou com alguma dúvida?">
                  Entre em contato conosco através do e-mail{" "}
                  <a href="mailto:suporte@v3.com.br">suporte@v3.com.br</a>
                </CardSuport>
              </div>
              <div className="w-[65%] flex items-center justify-center">
                <img
                  src="/img/home/bottom.svg"
                  alt="V3 Logo"
                  className="w-full h-auto"
                />
              </div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
