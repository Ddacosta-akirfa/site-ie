import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/home/HeroSection";
import SectionWrapper from "@/components/common/SectionWrapper";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          subtitle="Termos e Condições"
          title="Termos de Uso"
          description="Leia atentamente nossos termos e condições antes de utilizar nossos serviços."
        />

        {/* Terms Content */}
        <SectionWrapper>
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">
                  1. Aceitação dos Termos
                </h2>
                <p className="text-muted-foreground">
                  Ao acessar e usar os serviços da IE Marketing, você concorda
                  em cumprir e estar vinculado aos seguintes termos e condições.
                  Se você não concordar com qualquer parte destes termos, não
                  poderá acessar nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">
                  2. Serviços Prestados
                </h2>
                <p className="text-muted-foreground mb-4">
                  A IE Marketing oferece serviços de marketing digital,
                  incluindo mas não se limitando a:
                </p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Desenvolvimento de websites e aplicações web</li>
                  <li>Gestão de redes sociais e campanhas de marketing</li>
                  <li>Otimização para motores de busca (SEO)</li>
                  <li>Publicidade online (Google Ads, Meta Ads)</li>
                  <li>Consultoria em marketing digital</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">
                  3. Propriedade Intelectual
                </h2>
                <p className="text-muted-foreground">
                  Todo o conteúdo, marcas, logotipos e materiais disponíveis em
                  nosso site são de propriedade da IE Marketing ou de nossos
                  licenciadores e estão protegidos por leis de direitos autorais
                  e propriedade intelectual.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">
                  4. Pagamentos e Faturamento
                </h2>
                <p className="text-muted-foreground mb-4">
                  Os serviços são cobrados conforme acordado em contrato.
                  Aceitamos as seguintes formas de pagamento:
                </p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Transferência bancária</li>
                  <li>Cartão de crédito</li>
                  <li>Multicaixa Express</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">
                  5. Cancelamento e Reembolsos
                </h2>
                <p className="text-muted-foreground">
                  O cancelamento dos serviços deve ser solicitado com 30 dias de
                  antecedência. Reembolsos são avaliados caso a caso e sujeitos
                  aos termos específicos de cada contrato.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">
                  6. Limitação de Responsabilidade
                </h2>
                <p className="text-muted-foreground">
                  A IE Marketing não se responsabiliza por danos indiretos,
                  incidentais ou consequenciais resultantes do uso ou
                  incapacidade de usar nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">
                  7. Alterações nos Termos
                </h2>
                <p className="text-muted-foreground">
                  Reservamo-nos o direito de modificar estes termos a qualquer
                  momento. As alterações entrarão em vigor imediatamente após
                  sua publicação em nosso site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Lei Aplicável</h2>
                <p className="text-muted-foreground">
                  Estes termos são regidos e interpretados de acordo com as leis
                  de Angola. Qualquer disputa será resolvida no foro da comarca
                  de Huambo, HB.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Contato</h2>
                <p className="text-muted-foreground">
                  Para questiões sobre estes termos, entre em contato conosco:
                </p>
                <div className="mt-2 text-muted-foreground">
                  <p>Email: contato@iemarketing.com.br</p>
                  <p>Telefone: +244 943585590</p>
                  <p>Endereço: Huambo, HB</p>
                </div>
              </section>

              <div className="bg-muted rounded-lg p-6 mt-8">
                <p className="text-sm text-muted-foreground">
                  <strong>Última atualização:</strong> 15 de Janeiro de 2024
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}
