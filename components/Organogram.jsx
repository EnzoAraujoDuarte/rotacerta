import { Users, Crown, Briefcase, TrendingUp, Truck, Database, HeadphonesIcon, Package, UserCheck, Clipboard } from 'lucide-react';

export default function Organogram() {
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
      { name: "3 Analistas", area: "Planejamento Logístico", icon: Clipboard, color: "from-blue-500 to-blue-400" },
      { name: "2 Analistas", area: "Atendimento ao Cliente", icon: HeadphonesIcon, color: "from-blue-500 to-blue-400" },
      { name: "3 Assistentes", area: "Operações", icon: UserCheck, color: "from-blue-500 to-blue-400" },
      
      { name: "2 Analistas", area: "Desenvolvimento", icon: Database, color: "from-purple-500 to-purple-400" },
      { name: "2 Analistas", area: "Suporte TI", icon: HeadphonesIcon, color: "from-purple-500 to-purple-400" },
      { name: "2 Assistentes", area: "Infraestrutura", icon: UserCheck, color: "from-purple-500 to-purple-400" },
      
      { name: "2 Analistas", area: "Vendas", icon: TrendingUp, color: "from-green-500 to-green-400" },
      { name: "2 Analistas", area: "Marketing", icon: TrendingUp, color: "from-green-500 to-green-400" },
      { name: "1 Assistente", area: "Comercial", icon: UserCheck, color: "from-green-500 to-green-400" },
      
      { name: "2 Analistas", area: "Contabilidade", icon: Briefcase, color: "from-orange-500 to-orange-400" },
      { name: "1 Analista", area: "Controladoria", icon: Briefcase, color: "from-orange-500 to-orange-400" },
      { name: "1 Assistente", area: "Financeiro", icon: UserCheck, color: "from-orange-500 to-orange-400" },
      
      { name: "2 Analistas", area: "Recrutamento", icon: Users, color: "from-pink-500 to-pink-400" },
      { name: "1 Analista", area: "Departamento Pessoal", icon: Users, color: "from-pink-500 to-pink-400" },
      { name: "1 Assistente", area: "RH", icon: UserCheck, color: "from-pink-500 to-pink-400" }
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

  // Componente de seta conectora vertical
  const VerticalArrow = ({ height = "h-12" }) => (
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        <div className={`w-1 ${height} bg-gradient-to-b from-nexus-primary to-nexus-primary/80`}></div>
        <div className="relative">
          <div className={`w-3 h-3 rotate-45 bg-nexus-primary transform translate-y-[-6px]`}></div>
        </div>
      </div>
    </div>
  );

  // Componente de linha horizontal conectora
  const HorizontalConnector = ({ width = "w-full" }) => (
    <div className="flex items-center justify-center my-4">
      <div className={`${width} h-0.5 bg-gradient-to-r from-transparent via-nexus-primary to-transparent`}></div>
    </div>
  );

  return (
    <section className="min-h-screen py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 fade-in-up px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Organograma <span className="text-gradient">Institucional</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Estrutura organizacional enxuta e eficiente da Rota Certa Logtech, composta por 80 profissionais 
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
              <h3 className="text-2xl font-bold mb-1 text-foreground">{orgStructure.ceo.name}</h3>
              <p className="text-sm text-muted-foreground font-medium">{orgStructure.ceo.subtitle}</p>
            </div>
          </div>

          {/* Arrow to Managers */}
          <VerticalArrow height="h-16" />

          {/* Managers Label */}
          <div className="flex justify-center mb-6">
            <div className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full text-white font-bold text-lg shadow-lg">
              GERENTES (5)
            </div>
          </div>

          {/* Horizontal Line */}
          <HorizontalConnector width="w-10/12" />

          {/* Managers */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 mb-8 relative px-4">
            {/* Vertical lines from horizontal connector to each manager - Hidden on mobile */}
            <div className="hidden md:flex absolute top-0 left-0 right-0 justify-around px-4 pointer-events-none">
              {orgStructure.managers.map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-0.5 h-6 bg-nexus-primary"></div>
                  <div className="w-2 h-2 rotate-45 bg-nexus-primary transform translate-y-[-4px]"></div>
                </div>
              ))}
            </div>

            {orgStructure.managers.map((manager, index) => {
              const ManagerIcon = manager.icon;
              return (
                <div key={index} className="card-hover text-center hover-lift mt-0 md:mt-8">
                  <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${manager.color} rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-card`}>
                    <ManagerIcon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <h4 className="text-xs sm:text-sm md:text-base font-bold text-foreground mb-2 leading-tight">{manager.name}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">{manager.team} colaborador</p>
                </div>
              );
            })}
          </div>

          {/* Arrow to Team */}
          <VerticalArrow height="h-12" />

          {/* Team Label */}
          <div className="flex justify-center mb-6">
            <div className="inline-block px-8 py-3 bg-gradient-to-r from-teal-600 to-teal-500 rounded-full text-white font-bold text-lg shadow-lg">
              TIME OPERACIONAL (74)
            </div>
          </div>

          {/* Analysts and Assistants Section */}
          <div className="mb-12 px-4">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-foreground">
              Analistas e Assistentes (24)
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {orgStructure.analysts.map((analyst, index) => {
                const AnalystIcon = analyst.icon;
                return (
                  <div key={index} className="card-hover text-center hover-lift bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/30 dark:to-slate-800/30">
                    <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r ${analyst.color} rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3 shadow-card`}>
                      <AnalystIcon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <h4 className="text-xs md:text-sm font-bold text-foreground mb-1">{analyst.name}</h4>
                    <p className="text-xs text-muted-foreground leading-tight">{analyst.area}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Drivers Section */}
          <div className="mb-12 px-4">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-foreground">
              Entregadores (50)
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
              {orgStructure.drivers.distribution.map((location, index) => (
                <div key={index} className="card-hover text-center hover-lift bg-gradient-to-br from-amber-50 to-orange-100 dark:from-orange-900/20 dark:to-amber-900/20 border-2 border-orange-200 dark:border-orange-800">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-card">
                    <Truck className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-orange-700 dark:text-orange-400 mb-1">{location.count}</h4>
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

          {/* Company Info */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-card rounded-2xl p-8 shadow-card border border-border max-w-3xl">
              <h3 className="text-2xl font-bold text-foreground mb-4">Rota Certa Logtech Ltda.</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Empresa de médio porte especializada em logística urbana de última milha, com estrutura 
                organizacional enxuta e eficiente, crescimento anual de 180% e operação em 5 capitais 
                brasileiras (São Paulo, Rio de Janeiro, Belo Horizonte, Curitiba e Brasília).
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div>
                  <span className="font-semibold text-foreground">CNPJ:</span>
                  <span className="text-muted-foreground ml-2">32.456.789/0001-90</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Fundação:</span>
                  <span className="text-muted-foreground ml-2">2019</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Sede:</span>
                  <span className="text-muted-foreground ml-2">São Paulo - SP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}