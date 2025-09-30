import { Building2, Users, Target, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="min-h-screen py-20 section-gradient flex flex-col justify-center">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 fade-in-up px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Sobre a <span className="text-gradient">Rota Certa Logtech</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Fundada em 2019, a Rota Certa Logtech nasceu da visão de transformar a logística urbana brasileira 
            através da tecnologia. Somos especialistas em entregas de última milha para e-commerce B2C, 
            conectando lojas virtuais aos consumidores finais com velocidade, precisão e transparência. 
            Nossa infraestrutura tecnológica integra SAP S/4HANA para gestão empresarial e APIs diretas 
            com plataformas como Shopify, permitindo sincronização automática de pedidos 
            e rastreamento em tempo real.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="fade-in-up">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Nossa Missão
            </h3>
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              Ser a principal referência em logística urbana inteligente no Brasil, revolucionando 
              a última milha através de tecnologia de ponta, inteligência artificial e automação. 
              Nosso compromisso é proporcionar entregas ultrarrápidas, totalmente rastreáveis e com 
              experiência superior ao consumidor final, tornando-nos o parceiro estratégico ideal 
              para e-commerces que buscam excelência operacional. Através da integração total com 
              SAP S/4HANA e principais plataformas de e-commerce, garantimos processos otimizados, 
              redução de custos operacionais em até 30% e visibilidade completa em tempo real.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Target className="w-6 h-6 text-nexus-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Eficiência Operacional</h4>
                  <p className="text-muted-foreground">Roteirização inteligente por IA integrada ao SAP S/4HANA que otimiza trajetos, reduz custos e aumenta a produtividade.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Lightbulb className="w-6 h-6 text-nexus-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Visibilidade Total</h4>
                  <p className="text-muted-foreground">Rastreamento em tempo real integrado com Shopify que proporciona transparência completa para clientes e consumidores.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 slide-in-right">
            <div className="card-hover text-center">
              <Building2 className="w-12 h-12 text-nexus-primary mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-foreground mb-2">Médio Porte</h4>
              <p className="text-muted-foreground">Crescimento de 180% ao ano</p>
            </div>
            <div className="card-hover text-center">
              <Users className="w-12 h-12 text-nexus-primary mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-foreground mb-2">80</h4>
              <p className="text-muted-foreground">Profissionais especializados</p>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 px-4">
          <div className="card-hover text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-nexus-primary to-nexus-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Razão Social</h3>
            <p className="text-muted-foreground mb-2">Rota Certa Logtech Ltda.</p>
            <p className="text-sm text-muted-foreground">
              Empresa de logística urbana e tecnologia para e-commerce
            </p>
          </div>

          <div className="card-hover text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-nexus-secondary to-nexus-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Atuação</h3>
            <p className="text-muted-foreground mb-2">Logística Last-Mile B2C</p>
            <p className="text-sm text-muted-foreground">
              São Paulo, Rio de Janeiro, Belo Horizonte, Curitiba e Brasília
            </p>
          </div>

          <div className="card-hover text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-nexus-accent to-nexus-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Equipe</h3>
            <p className="text-muted-foreground mb-2">50 Entregadores Próprios</p>
            <p className="text-sm text-muted-foreground">
              30 profissionais em gestão, operações e tecnologia
            </p>
          </div>
        </div>

        {/* Departments */}
        <div className="bg-card rounded-2xl p-8 shadow-card">
          <h3 className="text-xl font-bold text-center mb-8 text-foreground">
            Estrutura Organizacional
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Operações e Logística',
              'Tecnologia e Sistemas',
              'Atendimento ao Cliente',
              'Gestão de Frota',
              'Comercial e Parcerias',
              'Administrativo e Financeiro'
            ].map((dept, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-background rounded-lg border border-border hover:border-nexus-primary transition-colors duration-300">
                <div className="w-2 h-2 bg-nexus-primary rounded-full"></div>
                <span className="font-medium text-foreground">{dept}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}