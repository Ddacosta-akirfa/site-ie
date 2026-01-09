import { Link } from "wouter";
import { CheckCircle2, Target, Lightbulb, Heart } from "lucide-react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/home/HeroSection";
import SectionWrapper from "@/components/common/SectionWrapper";
import { useEffect, useState } from "react";

export default function About() {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Foco em Resultados",
      description:
        "Cada estratégia é desenvolvida com métricas claras e objetivos mensuráveis para seu negócio.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Inovação Constante",
      description:
        "Acompanhamos as tendências do mercado digital e adaptamos nossas soluções continuamente.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Paixão pelo Cliente",
      description:
        "Tratamos cada cliente como parceiro, investindo tempo e energia em seu sucesso.",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Excelência Operacional",
      description:
        "Processos bem definidos, equipe qualificada e entrega consistente de qualidade.",
    },
  ];

  const [companyInfo, setCompanyInfo] = useState<{
    mission: string;
    vision: string;
    values: string;
  } | null>(null);

  useEffect(() => {
    async function fetchCompanyInfo() {
      try {
        const response = await fetch("http://localhost:3001/api/v1/company");
        const json = await response.json();
        if (json.success) {
          const data = json.data;
          setCompanyInfo({
            mission: data.mission,
            vision: data.vision,
            values: data.values,
          });
        }
      } catch (error) {
        console.error("Erro ao buscar missão, visão e valores:", error);
      }
    }
    fetchCompanyInfo();
  }, []);

  const equipa = [
    {
      name: "Isilvano Mussungo",
      role: "Fundador & Estrategista Digital",
      bio: "Com mais de 7 anos em marketing digital, lidera a estratégia geral e crescimento da agência.",
      photo: "./assets/uploads/team/isilvano.png",
      linkedin: "",
    },
    {
      name: "Ernesto Faustino",
      role: "Gestor Comercial",
      bio: "Especialista em gestão comercial e desenvolvimento de estratégias de vendas.",
      photo: "./assets/uploads/team/ernesto-faustino.png",
      linkedin: "",
    },
    {
      name: "Liedson Sousa",
      role: "Especialista em Tráfego Pago",
      bio: "Gerencia campanhas em Google Ads e Meta Ads com foco em ROI e conversão.",
      photo: "/assets/uploads/team/wy.png",
      linkedin: "",
    },
    {
      name: "Daniel dacosta",
      role: "Desenvolvedor Web",
      bio: "Cria websites modernos e otimizados, garantindo experiência excepcional ao usuário.",
      photo: "/assets/uploads/team/ddacosta.png",
      linkedin: "",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Secção Hero */}
        <HeroSection
          subtitle="Nossa História"
          title="Transformando Negócios Através do Marketing Digital"
          description="Fundada em 2024, a IE Marketing nasceu da paixão por ajudar pequenas e médias empresas a crescer no ambiente digital. Hoje, somos referência em estratégia, criatividade e tecnologia."
        />

        {/* Sessão estória */}
        <SectionWrapper
          title="Nossa Jornada"
          description="Como começamos e o que nos motiva a continuar crescendo"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                A IE Marketing é uma empresa jovem e formada por uma equipe de 4
                profissionais dedicados, com a missão de levar serviços de
                marketing digital de qualidade para o mercado nacional de
                Angola. Até o momento, concentramos nossos esforços em projetos
                sociais, buscando sempre gerar impacto positivo na comunidade.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Sabemos que muitas pequenas e médias empresas em Angola
                enfrentam desafios para acessar soluções de marketing que
                realmente compreendam suas necessidades e limitações. Por isso,
                queremos crescer junto com o mercado local, oferecendo
                atendimento personalizado, criatividade e inovação.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Embora sejamos uma equipe pequena, temos grandes sonhos e
                trabalhamos com muita paixão para construir uma agência que faça
                a diferença. Nosso compromisso é acompanhar cada cliente de
                perto, ajudando a alcançar seus objetivos e fortalecendo a
                presença digital no país.
              </p>
            </div>
            <div className="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <p className="text-5xl font-bold text-secondary mb-4">3+</p>
                <p className="text-xl text-foreground/70">
                  Projectos Transformados
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Missão e Visão */}
        <SectionWrapper
          dark
          title="Missão, Visão e Valores"
          className="bg-primary text-primary-foreground"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-primary-foreground/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Missão</h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                {companyInfo?.mission || "Carregando a missão..."}
              </p>
            </div>
            <div className="bg-primary-foreground/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Visão</h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                {companyInfo?.vision || "Carregando a visão..."}
              </p>
            </div>
            <div className="bg-primary-foreground/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Valores</h3>
              {companyInfo?.values ? (
                <ul className="space-y-2 text-primary-foreground/90">
                  {companyInfo.values.split(",").map((values, i) => (
                    <li key={i}>✓ {values.trim()}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-primary-foreground/90 leading-relaxed">
                  Carregando os valores...
                </p>
              )}
            </div>
          </div>
        </SectionWrapper>

        {/* Secção Valores */}
        <SectionWrapper
          subtitle="Nossos Valores"
          title="O Que Nos Guia"
          description="Estes princípios orientam todas as nossas decisões e relacionamentos com clientes."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-secondary/20 text-blue-600">
                    {value.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary">
                    {value.title}
                  </h3>
                  <p className="text-foreground/70">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Secção Equipa */}
        <SectionWrapper
          subtitle="Nosso Time"
          title="Profissionais Apaixonados por Marketing"
          description="Conheça a equipe que trabalha para transformar seu negócio."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipa.map((membro, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-full h-64 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center group overflow-hidden relative">
                  {/* Avatar */}
                  <div className="relative w-41 h-50 rounded-full overflow-hidden transition-transform duration-300 ease-out group-hover:scale-100">
                    {membro.photo ? (
                      <img
                        src={membro.photo}
                        alt={membro.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full rounded-full bg-yellow-400 flex items-center justify-center">
                        <span className="text-5xl font-bold text-gray-900">
                          {membro.name.charAt(0)}
                        </span>
                      </div>
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center px-4">
                      <p className="text-white text-lg font-bold leading-tight">
                        {membro.name}
                      </p>
                      <p className="text-white/80 text-sm mt-1">
                        {membro.role}
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-primary mb-1">
                  {membro.name}
                </h3>
                <p className="text-sm text-primary font-semibold mb-3">
                  {membro.role}
                </p>
                <p className="text-sm text-foreground/70">{membro.bio}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Secção CTA */}
        <SectionWrapper
          dark
          title="Vamos Trabalhar Juntos?"
          description="Conheça como podemos ajudar sua empresa a crescer no ambiente digital."
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
