import { Link } from "wouter";
import { Globe, TrendingUp, Share2, Users, Zap, Award } from "lucide-react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/home/HeroSection";
import SectionWrapper from "@/components/common/SectionWrapper";
import CardServico from "@/components/home/Services/CardServicos";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import CardDepoimento from "@/components/contact/TestmonialCard/CardDepoimento";

export default function Home() {
  const servicos = [
    {
      icon: <Globe className="w-8 h-8" />,
      titulo: "Desenvolvimento Web",
      descricao:
        "Websites corporativos modernos e e-commerces de alta performance, optimizados para conversão e SEO.",
      funcionalidades: [
        "Design responsivo e acessível",
        "Otimização de velocidade",
        "Integração com sistemas",
        "Suporte técnico contínuo",
      ],
      href: "#",
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      titulo: "Gestão de Redes Sociais",
      descricao:
        "Estratégia de conteúdo, criação de posts e gerenciamento completo de suas redes sociais.",
      funcionalidades: [
        "Planejamento de conteúdo",
        "Criação de posts e stories",
        "Análise de métricas",
        "Engajamento com comunidade",
      ],
      href: "#",
      highlighted: true,
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      titulo: "Tráfego Pago (Google & Meta)",
      descricao:
        "Campanhas estratégicas em Google Ads e Meta Ads para gerar leads e vendas qualificadas.",
      funcionalidades: [
        "Pesquisa de palavras-chave",
        "Criação de campanhas",
        "Otimização de ROI",
        "Relatórios detalhados",
      ],
      href: "#",
    },
  ];

  const itemsPortfolio = [
    {
      imagem:
        "https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=600&h=400&fit=crop",
      titulo: "Website para venda de bilhetes online",
      categoria: "Desenvolvimento Web",
      descricao:
        "Website desenvolvido para uma empresa de eventos, focado na venda de bilhetes online.",
      resultados: [
        "Aumento de 110% em vendas online",
        "Redução de 40% no tempo de carregamento",
      ],
      href: "#",
    },
    {
      imagem:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      titulo: "Campanha de Tráfego Pago",
      categoria: "Google & Meta Ads",
      descricao:
        "Campanha integrada em Google Ads e Meta Ads para uma clínica de estética.",
      resultados: [
        "ROI de 450% em 3 meses",
        "2.500+ leads qualificados",
        "Custo por lead reduzido em 35%",
      ],
      href: "#",
    },
    {
      imagem:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop",
      titulo: "Gestão de Redes Sociais",
      categoria: "Social Media",
      descricao:
        "Estratégia completa de redes sociais para restaurante com foco em engajamento e vendas.",
      resultados: [
        "Crescimento de 500% em seguidores",
        "Taxa de engajamento de 8.5%",
        "30% das vendas via redes sociais",
      ],
      href: "#",
    },
  ];

  const tetemunhos = [
    {
      declaracao:
        "A IE Marketing transformou completamente nossa presença online. Em 3 meses, nossas vendas cresceram 300%!",
      autor: "Ana Silva",
      cargo: "Proprietária",
      empresa: "Loja de Moda Online",
      classificacao: 5,
    },
    {
      declaracao:
        "Profissionais incríveis, muito atenciosos e com resultados reais. Recomendo para qualquer negócio!",
      autor: "Carlos Santos",
      cargo: "Gerente de Marketing",
      empresa: "Clínica Odontológica",
      classificacao: 5,
    },
    {
      declaracao:
        "Melhor investimento em marketing que já fizemos. O ROI das campanhas foi muito além do esperado.",
      autor: "Marina Costa",
      cargo: "Diretora Executiva",
      empresa: "Startup de Tecnologia",
      classificacao: 5,
    },
  ];

  const estados = [
    { numero: "3+", label: "Projectos Realizados" },
    { numero: "70%", label: "Taxa de Satisfação" },
    { numero: "2+", label: "Anos de Experiência" },
    { numero: "20M+", label: "Impressões em Anúncios" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Secção Hero */}
        <HeroSection
          subtitle="Transforme seu negócio"
          title="Crescimento Digital que Gera Resultados"
          description="Na IE Marketing, unimos estratégia, criatividade e tecnologia para impulsionar o crescimento digital de sua empresa. Cada projecto é pensado para gerar impacto real no seu negócio."
          primaryCTA={{
            label: "Começar Agora",
            href: "/contato",
          }}
          secondaryCTA={{
            label: "Ver Portfólio",
            href: "/portfolio",
          }}
        />

        {/* Secção Estados */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {estados.map((estado, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                    {estado.numero}
                  </p>
                  <p className="text-sm md:text-base text-primary-foreground/80">
                    {estado.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Secção Serviços */}
        <SectionWrapper
          subtitle="Nossas Soluções"
          title="Serviços Completos para seu Negócio"
          description="Oferecemos soluções integradas de marketing digital que transformam empresas em referências no mercado."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {servicos.map((servico, index) => (
              <CardServico
                key={index}
                icone={servico.icon}
                titulo={servico.titulo}
                descricao={servico.descricao}
                funcionalidades={servico.funcionalidades}
                href={servico.href}
                highlighted={servico.highlighted}
              />
            ))}
          </div>
        </SectionWrapper>

        {/*Secção Por que Escolher Nós */}
        <SectionWrapper
          dark
          title="Por Que Escolher a IE Marketing?"
          className="bg-primary text-primary-foreground"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                titulo: "Resultados Mensuráveis",
                descricao:
                  "Acompanhamos cada métrica e optimizamos constantemente para maximizar seu ROI.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                titulo: "Atendimento Personalizado",
                descricao:
                  "Cada cliente é único. Desenvolvemos estratégias customizadas para seu negócio.",
              },
              {
                icon: <Award className="w-8 h-8" />,
                titulo: "Expertise Comprovada",
                descricao:
                  "Mais de 1 ano ajudando empresas a crescer no ambiente digital.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-secondary/20 rounded-lg text-secondary">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.titulo}</h3>
                <p className="text-primary-foreground/80">{item.descricao}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Secção Portfolio */}
        <SectionWrapper
          subtitle="Nosso Trabalho"
          title="Casos de Sucesso"
          description="Veja alguns dos projectos que transformaram negócios e geraram resultados reais."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {itemsPortfolio.map((item, index) => (
              <PortfolioCard
                key={index}
                imagem={item.imagem}
                titulo={item.titulo}
                categoria={item.categoria}
                descricao={item.descricao}
                resultados={item.resultados}
                href={item.href}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/portfolio">
              <a className="inline-block px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
                Ver Todos os Casos
              </a>
            </Link>
          </div>
        </SectionWrapper>

        {/* Secção de Testemunhos */}
        <SectionWrapper
          subtitle="Depoimentos"
          title="O Que Nossos Clientes Dizem"
          description="Conheça os resultados que geramos para empresas como a sua."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tetemunhos.map((testemunho, index) => (
              <CardDepoimento
                key={index}
                declaracao={testemunho.declaracao}
                autor={testemunho.autor}
                funcao={testemunho.cargo}
                empresa={testemunho.empresa}
                classificacao={testemunho.classificacao}
              />
            ))}
          </div>
        </SectionWrapper>

        {/* Secção CTA */}
        <SectionWrapper
          dark
          title="Pronto para Impulsionar seu Negócio?"
          description="Entre em contacto connosco e descubra como podemos ajudar sua empresa a crescer no ambiente digital."
          className="bg-primary text-primary-foreground text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato">
              <a className="px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
                Agendar Consulta
              </a>
            </Link>
            <Link href="/servicos">
              <a className="px-8 py-3 border-2 border-secondary text-secondary font-semibold rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-colors">
                Conhecer Serviços
              </a>
            </Link>
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}
