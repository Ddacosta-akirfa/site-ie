import { Link } from "wouter";
import { Globe, Share2, TrendingUp, CheckCircle2 } from "lucide-react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/home/HeroSection";
import SectionWrapper from "@/components/common/SectionWrapper";
import ServiceCard from "@/components/home/Services/ServiceCard";

export default function Services() {
  const services = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Desenvolvimento de Websites",
      description:
        "Criamos websites corporativos modernos, responsivos e otimizados para conversão. Cada projeto é desenvolvido com as melhores práticas de UX/UI, SEO e performance.",
      features: [
        "Design moderno e responsivo",
        "Otimização para SEO",
        "Velocidade de carregamento otimizada",
        "Integração com sistemas e APIs",
        "Suporte técnico contínuo",
        "Certificado SSL e segurança",
      ],
      href: "/servicos/desenvolvimento-web",
    },
    {
      icon: <Share2 className="w-10 h-10" />,
      title: "Gestão de Redes Sociais",
      description:
        "Desenvolvemos estratégias completas de social media, desde planejamento de conteúdo até análise de resultados. Aumentamos seu engajamento e construímos comunidades leais.",
      features: [
        "Planejamento estratégico de conteúdo",
        "Criação de posts e stories",
        "Gestão de comentários e mensagens",
        "Análise de métricas e relatórios",
        "Campanhas sazonais e promoções",
        "Influencer marketing",
      ],
      href: "/servicos/redes-sociais",
      highlighted: true,
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Tráfego Pago (Google & Meta Ads)",
      description:
        "Campanhas estratégicas em Google Ads e Meta Ads que geram leads e vendas qualificadas. Otimizamos cada centavo investido para maximizar seu ROI.",
      features: [
        "Pesquisa e seleção de palavras-chave",
        "Criação de campanhas segmentadas",
        "Otimização contínua de performance",
        "A/B testing de anúncios",
        "Relatórios detalhados e insights",
        "Gestão de orçamento inteligente",
      ],
      href: "/servicos/trafego-pago",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Descoberta & Análise",
      description:
        "Entendemos seu negócio, mercado, concorrentes e objetivos para criar uma estratégia personalizada.",
    },
    {
      number: "02",
      title: "Planejamento Estratégico",
      description:
        "Desenvolvemos um plano detalhado com metas, KPIs e timeline clara para execução.",
    },
    {
      number: "03",
      title: "Implementação",
      description:
        "Executamos a estratégia com qualidade, criatividade e atenção aos detalhes.",
    },
    {
      number: "04",
      title: "Monitoramento & Otimização",
      description:
        "Acompanhamos resultados, fazemos ajustes e otimizações contínuas para melhor performance.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          subtitle="Nossas Soluções"
          title="Serviços Completos de Marketing Digital"
          description="Oferecemos soluções integradas que transformam sua presença digital e geram resultados mensuráveis para seu negócio."
        />

        {/* Services Grid */}
        <SectionWrapper
          subtitle="Serviços"
          title="O Que Oferecemos"
          description="Soluções completas para impulsionar seu crescimento digital"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                href={service.href}
                highlighted={service.highlighted}
              />
            ))}
          </div>
        </SectionWrapper>

        {/* Process Section */}
        <SectionWrapper
          dark
          subtitle="Metodologia"
          title="Nosso Processo"
          description="Seguimos uma metodologia comprovada que garante resultados consistentes e duradouros."
          className="bg-primary text-primary-foreground"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Number Badge */}
                <div className="mb-6">
                  <div className="text-5xl font-bold text-secondary opacity-70">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-primary-foreground/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-8 h-0.5 bg-secondary/30" />
                )}
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Why Choose Section */}
        <SectionWrapper
          subtitle="Diferencial"
          title="Por Que Escolher a IE Marketing?"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-secondary mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">
                    Atendimento Personalizado
                  </h3>
                  <p className="text-foreground/70">
                    Cada cliente é único. Desenvolvemos estratégias customizadas
                    que se alinham perfeitamente com seus objetivos e orçamento.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-secondary mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">
                    Resultados Mensuráveis
                  </h3>
                  <p className="text-foreground/70">
                    Acompanhamos cada métrica importante e otimizamos
                    continuamente para maximizar seu ROI e crescimento.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-secondary mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">
                    Equipe Especializada
                  </h3>
                  <p className="text-foreground/70">
                    Profissionais experientes em suas áreas, sempre atualizados
                    com as últimas tendências e melhores práticas do mercado.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-secondary mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Suporte Contínuo</h3>
                  <p className="text-foreground/70">
                    Não apenas implementamos, mas acompanhamos seu projeto
                    continuamente, fazendo ajustes e otimizações conforme
                    necessário.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg p-8 flex flex-col justify-center">
              <div className="space-y-8">
                <div>
                  <p className="text-5xl font-bold text-secondary mb-2">97%</p>
                  <p className="text-lg text-foreground/70">
                    Taxa de Satisfação dos Clientes
                  </p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-accent mb-2">2+</p>
                  <p className="text-lg text-foreground/70">
                    Anos de Experiência no Mercado
                  </p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-secondary mb-2">7+</p>
                  <p className="text-lg text-foreground/70">
                    Projetos Transformados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Pricing Section */}
        <SectionWrapper
          dark
          subtitle="Investimento"
          title="Planos Flexíveis para Seu Orçamento"
          description="Oferecemos diferentes pacotes que podem ser customizados conforme suas necessidades."
          className="bg-primary text-primary-foreground"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "A partir de",
                amount: "R$ 1.500",
                description: "Perfeito para começar",
                features: [
                  "Diagnóstico digital",
                  "Planejamento estratégico",
                  "Implementação inicial",
                  "Relatório mensal",
                ],
              },
              {
                name: "Professional",
                price: "A partir de",
                amount: "R$ 3.500",
                description: "Mais completo e eficaz",
                features: [
                  "Tudo do Starter +",
                  "Gestão completa",
                  "Otimizações contínuas",
                  "Suporte prioritário",
                  "Relatórios detalhados",
                ],
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "Customizado",
                amount: "Sob consulta",
                description: "Solução completa",
                features: [
                  "Tudo do Professional +",
                  "Equipe dedicada",
                  "Estratégia integrada",
                  "Consultoria estratégica",
                  "Suporte 24/7",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`rounded-lg p-8 ${
                  plan.highlighted
                    ? "bg-secondary text-secondary-foreground scale-105"
                    : "bg-primary-foreground/10"
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm opacity-80 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <p className="text-sm opacity-80">{plan.price}</p>
                  <p className="text-3xl font-bold">{plan.amount}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-lg">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2 rounded-lg font-semibold transition-colors ${
                    plan.highlighted
                      ? "bg-secondary-foreground text-secondary hover:opacity-90"
                      : "border-2 border-current hover:bg-primary-foreground/20"
                  }`}
                >
                  Começar
                </button>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* CTA Section */}
        <SectionWrapper
          title="Pronto para Transformar Seu Negócio?"
          description="Entre em contato conosco e descubra qual solução é ideal para sua empresa."
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contato">
              <a className="px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center min-h-[52px]">
                Agendar Consulta
              </a>
            </Link>
            <a
              href="mailto:contato@iemarketing.com.br"
              className="px-8 py-3 border-2 border-secondary text-secondary font-semibold rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-colors "
            >
              Enviar Email
            </a>
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}
