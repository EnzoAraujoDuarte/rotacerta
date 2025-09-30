import { Building2, Users, Target, Lightbulb, Truck, HeadphonesIcon, Package, Briefcase, TrendingUp } from 'lucide-react';

export default function AboutCompany() {
  const departments = [
    { name: "Operações e Planejamento", icon: Package, color: "from-blue-600 to-blue-500", count: 15, description: "Gestão de rotas e planejamento logístico" },
    { name: "Entregadores", icon: Truck, color: "from-orange-600 to-orange-500", count: 50, description: "Equipe de campo realizando entregas" },
    { name: "Atendimento ao Cliente", icon: HeadphonesIcon, color: "from-green-600 to-green-500", count: 5, description: "Suporte e relacionamento com clientes" },
    { name: "Comercial", icon: TrendingUp, color: "from-purple-600 to-purple-500", count: 5, description: "Vendas e desenvolvimento de negócios" },
    { name: "Administrativo/Financeiro", icon: Briefcase, color: "from-teal-600 to-teal-500", count: 5, description: "Gestão administrativa e financeira" }
  ];

  return (
    <section id="sobre" className="min-h-screen py-20 section-gradient flex flex-col justify-center">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 fade-in-up px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Sobre a <span className="text-gradient">Rota Certa Logtech</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A Rota Certa Logtech é uma empresa de logística focada no serviço de last-mile, 
            a etapa final e mais crítica da entrega para o setor de e-commerce. De porte pequeno 
            para médio e atuando em grandes capitais, ela se posiciona como um elo essencial entre 
            as lojas virtuais e seus consumidores finais, garantindo que os produtos comprados online 
            cheguem rapidamente às mãos de quem os comprou.
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
              O serviço principal é a coleta de pacotes nos centros de distribuição de nossos clientes 
              (lojas virtuais) e a realização da entrega rápida e eficiente ao consumidor final. 
              Nosso compromisso é proporcionar entregas totalmente rastreáveis e com experiência 
              superior, garantindo processos otimizados e visibilidade completa em tempo real.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Target className="w-6 h-6 text-nexus-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Eficiência Operacional</h4>
                  <p className="text-muted-foreground">Roteirização inteligente que otimiza trajetos, reduz custos com combustível e aumenta a produtividade.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Lightbulb className="w-6 h-6 text-nexus-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Visibilidade Total</h4>
                  <p className="text-muted-foreground">Rastreamento em tempo real que proporciona transparência completa para clientes e consumidores finais.</p>
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
            <p className="text-muted-foreground mb-2">80 Colaboradores</p>
            <p className="text-sm text-muted-foreground">
              Divididos em 5 departamentos principais
            </p>
          </div>
        </div>

        {/* Departments Section */}
        <div className="mt-20">
          <div className="text-center mb-12 md:mb-16 fade-in-up px-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Estrutura <span className="text-gradient">Organizacional</span>
            </h3>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A empresa possui 80 funcionários, divididos entre 5 departamentos principais 
              que garantem eficiência operacional e excelência no atendimento.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 mb-12">
              {departments.map((dept, index) => {
                const DeptIcon = dept.icon;
                return (
                  <div key={index} className="card-hover text-center hover-lift">
                    <div className={`w-20 h-20 bg-gradient-to-r ${dept.color} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-card`}>
                      <DeptIcon className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-3">{dept.name}</h4>
                    <div className="text-4xl font-bold text-nexus-primary mb-3">{dept.count}</div>
                    <p className="text-sm text-muted-foreground">{dept.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 px-4">
              {departments.map((dept, index) => (
                <div key={index} className="text-center p-4 md:p-6 bg-gradient-to-br from-nexus-primary/5 to-nexus-accent/5 rounded-xl border border-nexus-primary/20 shadow-card">
                  <div className="text-3xl md:text-4xl font-bold text-nexus-primary mb-1 md:mb-2">{dept.count}</div>
                  <p className="text-xs md:text-sm text-muted-foreground font-medium">{dept.name}</p>
                </div>
              ))}
            </div>

            {/* Total Summary */}
            <div className="mt-8 text-center">
              <div className="inline-block px-8 py-4 bg-gradient-to-r from-nexus-primary to-nexus-accent rounded-xl text-white shadow-hero">
                <div className="text-5xl font-bold mb-2">80</div>
                <p className="text-lg">Total de Colaboradores</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}