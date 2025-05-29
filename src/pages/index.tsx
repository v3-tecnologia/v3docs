import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import { Title, SubTitle } from "../components/Headers";
import { Paragraph } from "../components/Paragraph";
import { Card, CardSuport } from "../components/Card";

export default function Home(): ReactNode {
  return (
    <Layout>
      <main>
        <div className="container !mt-5 lg:!mt-20">
          <section className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-[45%]">
              <Title>Bem vindo ao portal do desenvolvedor V3</Title>
              <Paragraph className="!mt-10">
                Este é o ambiente de desenvolvimento da V3, onde você encontrará
                todas as informações necessárias para integrar e utilizar nossos
                serviços.
              </Paragraph>
              <Paragraph className="!mt-10 !text-2xl" variant="bold">
                Nosso portal está organizado em três seções:
              </Paragraph>
            </div>
            <div className="w-full lg:w-[55%] flex items-center justify-center">
              <img
                src="/img/home/top.svg"
                alt="V3 Logo"
                className="w-full h-auto"
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
              É o espaço onde nosso time de tecnologia compartilha conhecimentos
              sobre as tecnologias que utilizamos, tendências de mercado,
              inovações que estamos acompanhando, e como solucionamos os
              desafios técnicos da V3, incluindo projetos experimentais e provas
              de conceito.
            </Card>

            <Card
              title="Documentação"
              bgColor="bg-white"
              textColor="text-black"
              href="/docs/docs"
            >
              Guia estruturado em módulos sequenciais para compreender e
              implementar o ecossistema V3. A jornada inclui: conhecendo a V3,
              nossa solução, configuração inicial, autenticação e tokens,
              permissionamento, gestão de dispositivos, webhooks e integrações,
              e ferramentas operacionais para sua operação diária.
            </Card>

            <Card
              title="API"
              bgColor="bg-white"
              textColor="text-black"
              href="docs/category/orders-api"
            >
              Nossa API foi projetada para ser intuitiva, segura e escalável,
              permitindo que você desenvolva soluções robustas e eficientes.
              Explore nossa documentação e descubra como a V3 pode impulsionar
              seus projetos.
            </Card>
          </section>
          <section className="flex flex-row gap-8 !mt-35 justify-center">
            <div className="text-center max-w-[80%]">
              <SubTitle>
                Explore nossa documentação e descubra como a V3 pode impulsionar
                seus projetos.
              </SubTitle>
              <Paragraph className="!mt-10">
                Nossa API foi projetada para ser intuitiva, segura e escalável,
                permitindo que você desenvolva soluções robustas e eficientes.
                Explore nossa documentação e descubra como a V3 pode impulsionar
                seus projetos.
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
      </main>
    </Layout>
  );
}
