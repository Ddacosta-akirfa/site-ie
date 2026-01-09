import { Link } from "wouter";
import { Check, Star, ArrowRight } from "lucide-react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/home/HeroSection";
import SectionWrapper from "@/components/common/SectionWrapper";
import { Button } from "@/components/ui/button/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfeito para pequenos negócios começando no digital",
      monthlyPrice: "R$ 1.500",
      annualPrice: "R$ 1.350",
      savings: "Economize 10%",
      features: [
        "Website responsivo (até 5 páginas)",
        "Otimização básica de SEO",
        "Integração com redes sociais",
        "Google Analytics configurado",
        "Suporte por email",
        "Atualizações mensais",
      ],
      cta: "Começar Agora",
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal para negócios em crescimento",
      monthlyPrice: "R$ 3.500",
      annualPrice: "R$ 3.150",
      savings: "Economize 10%",
      features: [
        "Tudo do Starter +",
        "Website (até 15 páginas)",
        "Blog integrado",
        "SEO avançado",
        "Google Ads básico",
        "Gestão de redes sociais",
        "Relatórios mensais detalhados",
        "Suporte prioritário",
      ],
      cta: "Mais Popular",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Solução completa para grandes negócios",
      monthlyPrice: "Sob consulta",
      annualPrice: "Sob consulta",
      savings: "Personalizado",
      features: [
        "Tudo do Professional +",
        "E-commerce completo",
        "Sistema personalizado",
        "Equipe dedicada",
        "CRM integrado",
        "Marketing automation",
        "Análises avançadas",
        "Suporte 24/7",
        "Consultoria estratégica",
      ],
      cta: "Fale Conosco",
      popular: false,
    },
  ];

  const addOns = [
    {
      name: "Gestão de Redes Sociais",
      price: "+ R$ 800/mês",
      description: "Gestão completa das suas redes sociais",
    },
    {
      name: "Google Ads Avançado",
      price: "+ R$ 1.200/mês",
      description: "Campanhas otimizadas com gestão profissional",
    },
    {
      name: "Conteúdo para Blog",
      price: "+ R$ 600/mês",
      description: "4 artigos otimizados para SEO por mês",
    },
    {
      name: "Email Marketing",
      price: "+ R$ 400/mês",
      description: "Campanhas de email marketing mensais",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          subtitle="Preços Transparentes"
          title="Planos que Crescem com Seu Negócio"
          description="Escolha o plano ideal para suas necessidades. Todos incluem suporte especializado e resultados garantidos."
        />

        {/* Billing Toggle */}
        <SectionWrapper className="text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Label htmlFor="billing-mode" className="text-lg font-medium">
              Mensal
            </Label>
            <Switch
              id="billing-mode"
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
            />
            <div className="flex items-center gap-2">
              <Label htmlFor="billing-mode" className="text-lg font-medium">
                Anual
              </Label>
              <Badge variant="secondary" className="ml-2">
                Economize 10%
              </Badge>
            </div>
          </div>
        </SectionWrapper>

        {/* Pricing Plans */}
        <SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border p-8 ${
                  plan.popular
                    ? "border-secondary shadow-lg scale-105 bg-secondary/5"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-secondary text-secondary-foreground px-4 py-2">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Mais Popular
                    </Badge>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">
                    {plan.description}
                  </p>

                  <div className="mb-2">
                    <span className="text-4xl font-bold">
                      {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    {plan.monthlyPrice !== "Sob consulta" && (
                      <span className="text-muted-foreground">/mês</span>
                    )}
                  </div>

                  {isAnnual && plan.savings && (
                    <Badge
                      variant="outline"
                      className="text-green-600 border-green-600"
                    >
                      {plan.savings}
                    </Badge>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                  size="lg"
                  asChild={plan.name !== "Enterprise"}
                >
                  {plan.name === "Enterprise" ? (
                    <a href="mailto:contato@iemarketing.com.br">{plan.cta}</a>
                  ) : (
                    <Link href="/contato">{plan.cta}</Link>
                  )}
                </Button>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Add-ons Section */}
        <SectionWrapper
          subtitle="Serviços Adicionais"
          title="Personalize Seu Plano"
          description="Adicione serviços extras para potencializar ainda mais seus resultados."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {addOns.map((addOn, index) => (
              <div
                key={index}
                className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h4 className="font-semibold mb-2">{addOn.name}</h4>
                <p className="text-2xl font-bold text-secondary mb-2">
                  {addOn.price}
                </p>
                <p className="text-sm text-muted-foreground">
                  {addOn.description}
                </p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* FAQ Section */}
        <SectionWrapper
          dark
          subtitle="Dúvidas Frequentes"
          title="Perguntas sobre Preços"
          className="bg-primary text-primary-foreground"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Posso mudar de plano depois?",
                answer:
                  "Sim, você pode fazer upgrade ou downgrade a qualquer momento. A diferença será rateada.",
              },
              {
                question: "Há taxa de cancelamento?",
                answer:
                  "Não cobramos taxa de cancelamento. Basta avisar com 30 dias de antecedência.",
              },
              {
                question: "O que está incluído no suporte?",
                answer:
                  "Oferecemos suporte por email em todos os planos. Nos planos Professional e Enterprise incluímos suporte prioritário.",
              },
              {
                question: "Posso personalizar um plano?",
                answer:
                  "Sim! Entre em contato conosco e criaremos um plano personalizado para suas necessidades.",
              },
              {
                question: "Há limite de tráfego?",
                answer:
                  "Não impomos limites de tráfego. Se seu site crescer muito, podemos otimizar a infraestrutura.",
              },
              {
                question: "Oferecem desconto para ONGs?",
                answer:
                  "Sim, oferecemos condições especiais para organizações sem fins lucrativos.",
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
          title="Pronto para Começar?"
          description="Escolha seu plano e vamos juntos transformar seu negócio digital."
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                Escolher Plano
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="hover:text-white transition-colors"
              asChild
            >
              <a href="mailto:contato@iemarketing.com.br">
                Falar com Especialista
              </a>
            </Button>
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}
