import { Link } from 'wouter';
import { Globe, TrendingUp, Share2, Users, Zap, Award } from 'lucide-react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from '@/components/home/HeroSection';
import SectionWrapper from '@/components/common/SectionWrapper';
import ServiceCard from '@/components/home/Services/ServiceCard';
import PortfolioCard from '@/components/portfolio/PortfolioCard';
import TestimonialCard from '@/components/contact/TestmonialCard/TestimonialCard';
//  import { Button } from '@/components/ui/button';

export default function Home() {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Desenvolvimento Web',
      description:
        'Websites corporativos modernos e e-commerces de alta performance, otimizados para conversão e SEO.',
      features: [
        'Design responsivo e acessível',
        'Otimização de velocidade',
        'Integração com sistemas',
        'Suporte técnico contínuo',
      ],
      href: '/servicos/web',
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: 'Gestão de Redes Sociais',
      description:
        'Estratégia de conteúdo, criação de posts e gerenciamento completo de suas redes sociais.',
      features: [
        'Planejamento de conteúdo',
        'Criação de posts e stories',
        'Análise de métricas',
        'Engajamento com comunidade',
      ],
      href: '/servicos/redes-sociais',
      highlighted: true,
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Tráfego Pago (Google & Meta)',
      description:
        'Campanhas estratégicas em Google Ads e Meta Ads para gerar leads e vendas qualificadas.',
      features: [
        'Pesquisa de palavras-chave',
        'Criação de campanhas',
        'Otimização de ROI',
        'Relatórios detalhados',
      ],
      href: '/servicos/trafego-pago',
    },
  ];

  const portfolioItems = [
    {
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=600&h=400&fit=crop',
      title: 'E-commerce de Moda',
      category: 'Desenvolvimento Web',
      description:
        'Plataforma de e-commerce completa com sistema de pagamento integrado e gestão de inventário.',
      results: [
        'Aumento de 250% em vendas online',
        'Redução de 40% no tempo de carregamento',
        'Integração com 5 fornecedores',
      ],
      href: '/portfolio/ecommerce-moda',
    },
    {
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      title: 'Campanha de Tráfego Pago',
      category: 'Google & Meta Ads',
      description:
        'Campanha integrada em Google Ads e Meta Ads para uma clínica de estética.',
      results: [
        'ROI de 450% em 3 meses',
        '2.500+ leads qualificados',
        'Custo por lead reduzido em 35%',
      ],
      href: '/portfolio/clinica-estetica',
    },
    {
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop',
      title: 'Gestão de Redes Sociais',
      category: 'Social Media',
      description:
        'Estratégia completa de redes sociais para restaurante com foco em engajamento e vendas.',
      results: [
        'Crescimento de 500% em seguidores',
        'Taxa de engajamento de 8.5%',
        '30% das vendas via redes sociais',
      ],
      href: '/portfolio/restaurante',
    },
  ];

  const testimonials = [
    {
      quote:
        'A IE Marketing transformou completamente nossa presença online. Em 3 meses, nossas vendas cresceram 300%!',
      author: 'Ana Silva',
      role: 'Proprietária',
      company: 'Loja de Moda Online',
      rating: 5,
    },
    {
      quote:
        'Profissionais incríveis, muito atenciosos e com resultados reais. Recomendo para qualquer negócio!',
      author: 'Carlos Santos',
      role: 'Gerente de Marketing',
      company: 'Clínica Odontológica',
      rating: 5,
    },
    {
      quote:
        'Melhor investimento em marketing que já fizemos. O ROI das campanhas foi muito além do esperado.',
      author: 'Marina Costa',
      role: 'Diretora Executiva',
      company: 'Startup de Tecnologia',
      rating: 5,
    },
  ];

  const stats = [
    { number: '150+', label: 'Projetos Realizados' },
    { number: '98%', label: 'Taxa de Satisfação' },
    { number: '5+', label: 'Anos de Experiência' },
    { number: '50M+', label: 'Impressões em Anúncios' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          subtitle="Transforme seu negócio"
          title="Crescimento Digital que Gera Resultados"
          description="Na IE Marketing, unimos estratégia, criatividade e tecnologia para impulsionar o crescimento digital de sua empresa. Cada projeto é pensado para gerar impacto real no seu negócio."
          primaryCTA={{
            label: 'Começar Agora',
            href: '/contato',
          }}
          secondaryCTA={{
            label: 'Ver Portfólio',
            href: '/portfolio',
          }}
        />

        {/* Stats Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                    {stat.number}
                  </p>
                  <p className="text-sm md:text-base text-primary-foreground/80">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <SectionWrapper
          subtitle="Nossas Soluções"
          title="Serviços Completos para seu Negócio"
          description="Oferecemos soluções integradas de marketing digital que transformam empresas em referências no mercado."
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

        {/* Why Choose Us Section */}
        <SectionWrapper
          dark
          title="Por Que Escolher a IE Marketing?"
          className="bg-primary text-primary-foreground"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Resultados Mensuráveis',
                description:
                  'Acompanhamos cada métrica e otimizamos constantemente para maximizar seu ROI.',
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Atendimento Personalizado',
                description:
                  'Cada cliente é único. Desenvolvemos estratégias customizadas para seu negócio.',
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Expertise Comprovada',
                description:
                  'Mais de 5 anos ajudando empresas a crescer no ambiente digital.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-secondary/20 rounded-lg text-secondary">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-primary-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Portfolio Section */}
        <SectionWrapper
          subtitle="Nosso Trabalho"
          title="Cases de Sucesso"
          description="Veja alguns dos projetos que transformaram negócios e geraram resultados reais."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <PortfolioCard
                key={index}
                image={item.image}
                title={item.title}
                category={item.category}
                description={item.description}
                results={item.results}
                href={item.href}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/portfolio">
              <a className="inline-block px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
                Ver Todos os Cases
              </a>
            </Link>
          </div>
        </SectionWrapper>

        {/* Testimonials Section */}
        <SectionWrapper
          subtitle="Depoimentos"
          title="O Que Nossos Clientes Dizem"
          description="Conheça os resultados que geramos para empresas como a sua."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </SectionWrapper>

        {/* CTA Section */}
        <SectionWrapper
          dark
          title="Pronto para Impulsionar seu Negócio?"
          description="Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer no ambiente digital."
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
