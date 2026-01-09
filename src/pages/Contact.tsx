import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/home/HeroSection";
import SectionWrapper from "@/components/common/SectionWrapper";
import ContactForm from "@/components/contact/ContactForm/ContactForm";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      value: "contato@iemarketing.com.br",
      href: "mailto:contato@iemarketing.com.ao",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Telefone",
      value: "+244 943585590",
      href: "tel:+244943585590",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Localização",
      value: "Cidade Baixa, Huambo",
      href: "#",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Horário",
      value: "Seg-Sex: 8h às 19h",
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          subtitle="Fale Conosco"
          title="Vamos Conversar Sobre Seu Projeto"
          description="Estamos prontos para ajudar sua empresa a crescer no ambiente digital. Entre em contato e descubra como podemos transformar seu negócio."
        />

        {/* Contact Info Cards */}
        <SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-secondary transition-all group"
              >
                <div className="text-secondary mb-4 group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {info.title}
                </h3>
                <p className="text-foreground/70 group-hover:text-secondary transition-colors">
                  {info.value}
                </p>
              </a>
            ))}
          </div>
        </SectionWrapper>

        {/* Contact Form Section */}
        <SectionWrapper
          subtitle="Formulário"
          title="Envie Sua Mensagem"
          description="Preencha o formulário abaixo e entraremos em contacto em até 24 horas."
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <Dialog>
                <ContactForm />
              </Dialog>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Resposta Rápida
                </h3>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Valorizamos seu tempo. Nossa equipe se compromete a responder
                  todas as mensagens em até 24 horas, mesmo nos finais de
                  semana.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Consultoria Gratuita
                </h3>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Oferecemos uma consulta inicial gratuita para entender suas
                  necessidades e apresentar soluções personalizadas para seu
                  negócio.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Próximos Passos
                </h3>
                <ol className="space-y-3 text-foreground/70">
                  <li className="flex gap-3">
                    <span className="font-bold text-secondary">1.</span>
                    <span>Envie sua mensagem ou ligue</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-secondary">2.</span>
                    <span>Agende uma consulta inicial</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-secondary">3.</span>
                    <span>Receba uma proposta personalizada</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-secondary">4.</span>
                    <span>Comece a transformar seu negócio</span>
                  </li>
                </ol>
              </div>

              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6">
                <p className="text-sm text-foreground/70">
                  <strong>Dica:</strong> Para uma resposta mais rápida, inclua
                  informações sobre seu negócio e objectivos na mensagem.
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* FAQ Section */}
        <SectionWrapper
          dark
          subtitle="Dúvidas"
          title="Perguntas Frequentes"
          description="Respostas para as dúvidas mais comuns sobre nossos serviços."
          className="bg-primary text-primary-foreground"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Quanto tempo leva para ver resultados?",
                answer:
                  "Resultados iniciais geralmente aparecem em 4-8 semanas, dependendo da estratégia. Otimizações contínuas garantem melhorias progressivas.",
              },
              {
                question: "Qual é o investimento mínimo?",
                answer:
                  "Oferecemos planos a partir de R$ 1.500/mês. Cada projeto é customizado conforme seu orçamento e objetivos.",
              },
              {
                question: "Vocês trabalham com qual tipo de empresa?",
                answer:
                  "Trabalhamos com PMEs, startups e negócios locais em diversos segmentos: varejo, serviços, tecnologia, saúde e muito mais.",
              },
              {
                question: "Como é o acompanhamento do projeto?",
                answer:
                  "Fornecemos relatórios mensais detalhados, reuniões de revisão e otimizações contínuas baseadas em dados e resultados.",
              },
              {
                question: "Posso cancelar o contrato?",
                answer:
                  "Sim, com 30 dias de aviso prévio. Preferimos manter relacionamentos duradouros baseados em resultados reais.",
              },
              {
                question: "Vocês oferecem suporte técnico?",
                answer:
                  "Sim, incluído em todos os planos. Suporte prioritário está disponível nos planos Professional e Enterprise.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 rounded-lg p-6"
              >
                <h3 className="font-bold mb-3 text-lg">{faq.question}</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Final CTA */}
        <SectionWrapper
          title="Não Deixe Para Depois"
          description="Quanto mais cedo começarmos, mais rápido você verá resultados. Agende sua consulta gratuita hoje mesmo!"
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contato@iemarketing.com.br"
              className="px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Enviar Email
            </a>
            <a
              href="tel:+5511999999999"
              className="px-8 py-3 border-2 border-secondary text-secondary font-semibold rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              Ligar Agora
            </a>
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}
