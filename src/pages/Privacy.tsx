import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/home/HeroSection";
import SectionWrapper from "@/components/common/SectionWrapper";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          subtitle="Política de Privacidade"
          title="Proteção de Dados"
          description="Saiba como coletamos, usamos e protegemos suas informações pessoais."
        />

        {/* Privacy Content */}
        <SectionWrapper>
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">
                  1. Coleta de Informações
                </h2>
                <p className="text-muted-foreground">
                  Coletamos informações que você nos fornece voluntariamente
                  quando:
                </p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside mt-2">
                  <li>Preenche formulários em nosso site</li>
                  <li>Entra em contato conosco por email ou telefone</li>
                  <li>Contrata nossos serviços</li>
                  <li>Assina nossa newsletter</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">
                  2. Uso das Informações
                </h2>
                <p className="text-muted-foreground mb-4">
                  Utilizamos suas informações para:
                </p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Prestar os serviços contratados</li>
                  <li>Enviar comunicações sobre nossos serviços</li>
                  <li>Melhorar nossa oferta de produtos e serviços</li>
                  <li>Cumprir obrigações legais</li>
                  <li>
                    Enviar newsletters e conteúdos relevantes (com seu
                    consentimento)
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">
                  3. Compartilhamento de Dados
                </h2>
                <p className="text-muted-foreground">
                  Não vendemos, alugamos ou comercializamos suas informações
                  pessoais para terceiros. Podemos compartilhar dados apenas
                  quando necessário para:
                </p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside mt-2">
                  <li>Cumprir obrigações legais</li>
                  <li>Proteger nossos direitos e propriedade</li>
                  <li>Prestar serviços através de parceiros autorizados</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">
                  4. Cookies e Tecnologias Similares
                </h2>
                <p className="text-muted-foreground">
                  Utilizamos cookies para melhorar sua experiência em nosso
                  site, analisar tráfego e personalizar conteúdo. Você pode
                  controlar o uso de cookies através das configurações do seu
                  navegador.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">
                  5. Segurança dos Dados
                </h2>
                <p className="text-muted-foreground">
                  Implementamos medidas de segurança técnicas e organizacionais
                  para proteger suas informações contra acesso não autorizado,
                  alteração, divulgação ou destruição.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Seus Direitos</h2>
                <p className="text-muted-foreground mb-4">
                  De acordo com a LGPD, você tem direito a:
                </p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir dados incompletos ou inexatos</li>
                  <li>Cancelar o tratamento de seus dados</li>
                  <li>Revogar consentimentos</li>
                  <li>Excluir dados tratados com consentimento</li>
                  <li>Solicitar a portabilidade dos dados</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">
                  7. Retenção de Dados
                </h2>
                <p className="text-muted-foreground">
                  Mantemos suas informações pessoais apenas pelo tempo
                  necessário para cumprir as finalidades para as quais foram
                  coletadas, a menos que um período de retenção mais longo seja
                  exigido por lei.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">
                  8. Alterações na Política
                </h2>
                <p className="text-muted-foreground">
                  Podemos atualizar esta política de privacidade periodicamente.
                  Notificaremos você sobre alterações significativas através de
                  aviso em nosso site ou por email.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">
                  9. Contato do Encarregado
                </h2>
                <p className="text-muted-foreground">
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta
                  política, entre em contato com nosso Encarregado de Dados:
                </p>
                <div className="mt-2 text-muted-foreground">
                  <p>Email: privacidade@iemarketing.com.br</p>
                  <p>Telefone: +55 (11) 9 9999-9999</p>
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
