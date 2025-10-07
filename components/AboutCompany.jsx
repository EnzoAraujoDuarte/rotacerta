import { Building2, Users, Target, Lightbulb, Crown, Briefcase, TrendingUp, Truck, Database, HeadphonesIcon, Package, UserCheck, Clipboard } from 'lucide-react';

export default function AboutCompany() {
  const orgStructure = {
    ceo: {
      name: "CEO",
      subtitle: "Chief Executive Officer",
      icon: Crown,
      color: "from-red-600 to-red-500"
    },
    managers: [
      { name: "Gerente de Operações", icon: Package, color: "from-blue-600 to-blue-500", team: 1 },
      { name: "Gerente de Tecnologia", icon: Database, color: "from-purple-600 to-purple-500", team: 1 },
      { name: "Gerente Comercial", icon: TrendingUp, color: "from-green-600 to-green-500", team: 1 },
      { name: "Gerente Financeiro", icon: Briefcase, color: "from-orange-600 to-orange-500", team: 1 },
      { name: "Gerente de RH", icon: Users, color: "from-pink-600 to-pink-500", team: 1 }
    ],
    analysts: [
      { name: "Analista de Operações", icon: Clipboard, color: "from-teal-600 to-teal-500", count: 4 },
      { name: "Analista de TI", icon: Database, color: "from-teal-600 to-teal-500", count: 3 },
      { name: "Analista Comercial", icon: TrendingUp, color: "from-teal-600 to-teal-500", count: 3 },
      { name: "Analista Financeiro", icon: Briefcase, color: "from-teal-600 to-teal-500", count: 2 },
      { name: "Analista de RH", icon: UserCheck, color: "from-teal-600 to-teal-500", count: 2 }
    ],
    assistants: [
      { name: "Assistente de Operações", icon: Package, color: "from-cyan-600 to-cyan-500", count: 3 },
      { name: "Assistente de TI", icon: HeadphonesIcon, color: "from-cyan-600 to-cyan-500", count: 2 },
      { name: "Assistente Comercial", icon: Users, color: "from-cyan-600 to-cyan-500", count: 2 },
      { name: "Assistente Financeiro", icon: Clipboard, color: "from-cyan-600 to-cyan-500", count: 2 },
      { name: "Assistente de RH", icon: UserCheck, color: "from-cyan-600 to-cyan-500", count: 1 }
    ],
    drivers: {
      total: 50,
      distribution: [
        { city: "São Paulo", count: 18 },
        { city: "Rio de Janeiro", count: 12 },
        { city: "Belo Horizonte", count: 8 },
        { city: "Curitiba", count: 7 },
        { city: "Brasília", count: 5 }
      ]
    }
  };

  const CeoIcon = orgStructure.ceo.icon;

  return (
    <section id="sobre" className="min-h-screen py-20 section-gradient flex flex-col justify-center">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 md:mb-16 fade-in-up px-4">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
            {/* Texto à esquerda */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                Sobre a <span className="text-gradient">Rota Certa Logtech</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                A Rota Certa Logtech é uma empresa atacadista B2B especializada na venda e distribuição de produtos 
                de marcas líderes do mercado - como Colgate, Kimberly Clark, Reckitt, Ferrero, Huggies, Pampers 
                e outras - para farmácias, perfumarias e supermercados. Estamos expandindo para o mercado B2C com 
                foco em logística last-mile. Operamos através de uma plataforma de e-commerce Shopify, utilizamos 
                o SAP ERP para gerenciar processos, e contamos com um aplicativo desenvolvido internamente 
                (Flutter, backend TypeScript e banco PostgreSQL) para acompanhamento de entregas.
              </p>
            </div>
            
            {/* Logo à direita */}
            <div className="flex-shrink-0">
              <img 
                src="/rota-certa-logo.jpeg" 
                alt="Logo Rota Certa Logtech" 
                className="w-48 sm:w-56 md:w-64 lg:w-72 h-auto rounded-lg shadow-hero hover-lift"
              />
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="fade-in-up">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Nossa Missão
            </h3>
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              Ser a principal referência em logística urbana inteligente no Brasil, revolucionando 
              o mercado através de tecnologia de ponta, inteligência artificial e automação. 
              Nosso compromisso é proporcionar entregas ultrarrápidas e totalmente rastreáveis, 
              atendendo farmácias, perfumarias e supermercados (B2B) e expandindo para o consumidor 
              final (B2C), tornando-nos o parceiro estratégico ideal para quem busca excelência 
              operacional. Através da integração com SAP ERP, Shopify e nosso app de rastreamento, garantimos processos 
              otimizados, redução de custos operacionais e visibilidade completa em tempo real.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Target className="w-6 h-6 text-nexus-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Eficiência Operacional</h4>
                  <p className="text-muted-foreground">Roteirização inteligente integrada ao SAP ERP que otimiza trajetos, reduz custos e aumenta a produtividade.</p>
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
              Atacadista de produtos de higiene, limpeza e alimentos
            </p>
          </div>

          <div className="card-hover text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-nexus-secondary to-nexus-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Atuação</h3>
            <p className="text-muted-foreground mb-2">B2B + Expansão B2C Last-Mile</p>
            <p className="text-sm text-muted-foreground">
              Atacado + Expandindo para entregas ao consumidor final
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

        {/* Organogram Section */}
        <div className="mt-20">
          <div className="text-center mb-12 md:mb-16 fade-in-up px-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Estrutura <span className="text-gradient">Organizacional</span>
            </h3>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Estrutura organizacional enxuta e eficiente, composta por 80 profissionais 
              distribuídos estrategicamente em 3 níveis hierárquicos (CEO, Gerentes e Time Operacional).
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* CEO Level */}
            <div className="flex justify-center mb-8">
              <div className="card-hover text-center max-w-xs hover-lift">
                <div className={`w-24 h-24 bg-gradient-to-r ${orgStructure.ceo.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-hero`}>
                  <CeoIcon className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-1 text-foreground">{orgStructure.ceo.name}</h4>
                <p className="text-sm text-muted-foreground font-medium">{orgStructure.ceo.subtitle}</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center mb-6">
              <div className="flex flex-col items-center">
                <div className="w-1 h-12 bg-gradient-to-b from-nexus-primary to-nexus-primary/80"></div>
                <div className="w-3 h-3 rotate-45 bg-nexus-primary transform translate-y-[-6px]"></div>
              </div>
            </div>

            {/* Managers */}
            <div className="flex justify-center mb-6">
              <div className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full text-white font-bold text-lg shadow-lg">
                GERENTES (5)
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 mb-8 px-4">
              {orgStructure.managers.map((manager, index) => {
                const ManagerIcon = manager.icon;
                return (
                  <div key={index} className="card-hover text-center hover-lift">
                    <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${manager.color} rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-card`}>
                      <ManagerIcon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    <h5 className="text-xs sm:text-sm md:text-base font-bold text-foreground mb-2 leading-tight">{manager.name}</h5>
                    <p className="text-xs md:text-sm text-muted-foreground">{manager.team} colaborador</p>
                  </div>
                );
              })}
            </div>

            {/* Analysts */}
            <div className="mt-12">
              <div className="flex justify-center mb-6">
                <div className="inline-block px-8 py-3 bg-gradient-to-r from-teal-600 to-teal-500 rounded-full text-white font-bold text-lg shadow-lg">
                  ANALISTAS (14)
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 mb-8 px-4">
                {orgStructure.analysts.map((analyst, index) => {
                  const AnalystIcon = analyst.icon;
                  return (
                    <div key={index} className="card-hover text-center hover-lift bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-900/20 border-2 border-teal-200 dark:border-teal-800">
                      <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r ${analyst.color} rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-card`}>
                        <AnalystIcon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                      </div>
                      <h5 className="text-xs sm:text-sm md:text-base font-bold text-teal-700 dark:text-teal-400 mb-1 leading-tight">{analyst.name}</h5>
                      <p className="text-xs md:text-sm text-muted-foreground font-medium">{analyst.count} colaboradores</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Assistants */}
            <div className="mt-12">
              <div className="flex justify-center mb-6">
                <div className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 rounded-full text-white font-bold text-lg shadow-lg">
                  ASSISTENTES (10)
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 mb-8 px-4">
                {orgStructure.assistants.map((assistant, index) => {
                  const AssistantIcon = assistant.icon;
                  return (
                    <div key={index} className="card-hover text-center hover-lift bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-900/20 border-2 border-cyan-200 dark:border-cyan-800">
                      <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r ${assistant.color} rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-card`}>
                        <AssistantIcon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                      </div>
                      <h5 className="text-xs sm:text-sm md:text-base font-bold text-cyan-700 dark:text-cyan-400 mb-1 leading-tight">{assistant.name}</h5>
                      <p className="text-xs md:text-sm text-muted-foreground font-medium">{assistant.count} colaboradores</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Drivers Distribution */}
            <div className="mt-12">
              <div className="flex justify-center mb-6">
                <div className="inline-block px-8 py-3 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full text-white font-bold text-lg shadow-lg">
                  ENTREGADORES (50)
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 px-4">
                {orgStructure.drivers.distribution.map((location, index) => (
                  <div key={index} className="card-hover text-center hover-lift bg-gradient-to-br from-amber-50 to-orange-100 dark:from-orange-900/20 dark:to-amber-900/20 border-2 border-orange-200 dark:border-orange-800">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-card">
                      <Truck className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <h5 className="text-xl md:text-2xl font-bold text-orange-700 dark:text-orange-400 mb-1">{location.count}</h5>
                    <p className="text-xs md:text-sm text-muted-foreground font-medium">{location.city}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary Stats */}
            <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto px-4">
              <div className="text-center p-4 md:p-6 bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-xl border border-red-500/30 shadow-card">
                <div className="text-3xl md:text-4xl font-bold text-red-600 mb-1 md:mb-2">80</div>
                <p className="text-xs md:text-sm text-muted-foreground font-medium">Total de Colaboradores</p>
              </div>
              <div className="text-center p-4 md:p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl border border-blue-500/30 shadow-card">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1 md:mb-2">6</div>
                <p className="text-xs md:text-sm text-muted-foreground font-medium">Liderança (CEO + Gerentes)</p>
              </div>
              <div className="text-center p-4 md:p-6 bg-gradient-to-br from-teal-500/10 to-teal-600/10 rounded-xl border border-teal-500/30 shadow-card">
                <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-1 md:mb-2">24</div>
                <p className="text-xs md:text-sm text-muted-foreground font-medium">Analistas + Assistentes</p>
              </div>
              <div className="text-center p-4 md:p-6 bg-gradient-to-br from-orange-600/10 to-orange-700/10 rounded-xl border border-orange-600/30 shadow-card">
                <div className="text-3xl md:text-4xl font-bold text-orange-700 dark:text-orange-500 mb-1 md:mb-2">50</div>
                <p className="text-xs md:text-sm text-muted-foreground font-medium">Entregadores em Campo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
