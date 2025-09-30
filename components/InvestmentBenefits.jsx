import { DollarSign, TrendingUp, Target, Shield, Smartphone, Zap, BarChart3 } from 'lucide-react';

export default function InvestmentBenefits() {
  const investmentData = [
    {
      category: 'Taxa de Implementação e Treinamento',
      amount: 'R$ 40.000',
      period: '(investimento único)',
      description: 'Taxa de implementação e treinamento da plataforma Oracle Fusion Cloud SCM, incluindo configuração inicial, migração de dados, treinamentos para equipe e suporte técnico durante o go-live.',
      items: ['Configuração Oracle Fusion Cloud SCM', 'Migração de dados e integração', 'Treinamento de equipes', 'Suporte técnico no go-live', 'Documentação e manuais']
    },
    {
      category: 'Aquisição de Smartphones Corporativos',
      amount: 'R$ 95.000',
      period: '(investimento único)',
      description: 'Aquisição de 80 smartphones corporativos para toda a equipe, incluindo garantia estendida, acessórios e seguro contra danos e roubos.',
      items: ['80 smartphones corporativos', 'Garantia estendida 3 anos', 'Carregadores e acessórios', 'Seguro contra roubo/dano', 'Cases de proteção']
    },
    {
      category: 'Licença da Plataforma Oracle SCM',
      amount: 'R$ 14.000',
      period: '/mês',
      description: 'Licenciamento mensal da plataforma Oracle Fusion Cloud SCM com módulo de logística, incluindo roteirização por IA/ML, gestão de execução logística e APIs para integrações corporativas.',
      items: ['Oracle Fusion Cloud SCM Enterprise', 'Módulos de IA/ML para otimização', 'Gestão de pátio e execução', 'APIs robustas para integrações', 'Suporte técnico 24x7']
    },
    {
      category: 'Planos de Dados Móveis',
      amount: 'R$ 6.000',
      period: '/mês',
      description: 'Planos corporativos de dados móveis para os 80 aparelhos da equipe, garantindo conectividade contínua para transmissão de GPS, fotos e dados críticos.',
      items: ['80 linhas corporativas M2M', 'Dados 4G/5G ilimitados', 'Cobertura em 5 capitais', 'Prioridade de rede', 'NOC 24x7']
    },
    {
      category: 'Salesforce, Snowflake, Tableau e Ferramentas',
      amount: 'R$ 2.000',
      period: '/mês',
      description: 'Licenciamento das plataformas Salesforce Sales Cloud (CRM), Snowflake (Data Warehouse), Tableau (BI) e outras ferramentas de gestão, segurança e compliance.',
      items: ['Salesforce Sales Cloud', 'Snowflake Data Warehouse', 'Tableau para BI', 'Microsoft Intune (MDM)', 'Okta (Identity Management)']
    },
    {
      category: 'Analista de Operações e Tecnologia',
      amount: 'R$ 6.000',
      period: '/mês',
      description: 'Salário de Analista de Operações e Tecnologia dedicado à gestão da plataforma, monitoramento de KPIs, gestão de incidentes e interface com fornecedores.',
      items: ['Gestão de plataforma Oracle SCM', 'Monitoramento de dashboards', 'Gestão de incidentes ITIL', 'Interface com fornecedores', 'Análise de KPIs operacionais']
    }
  ];

  const monthlyTotal = investmentData.reduce((sum, item) => {
    if (item.period === '/mês') {
      return sum + parseFloat(item.amount.replace('R$ ', '').replace('.', ''));
    }
    return sum;
  }, 0);

  const initialInvestment = 135000;
  const annualTotal = (monthlyTotal * 12) + initialInvestment;


  const mainBenefits = [
    {
      icon: TrendingUp,
      title: 'Melhoria na Produtividade',
      description: 'A roteirização automática e o aplicativo de navegação permitirão um aumento estimado de 20% no número de entregas realizadas por veículo/dia, otimizando trajetos e reduzindo tempo ocioso.',
      metrics: ['20% mais entregas por veículo/dia', 'Redução de tempo em rota', 'Eliminação de retrabalho'],
      color: 'from-nexus-primary to-nexus-accent'
    },
    {
      icon: Shield,
      title: 'Redução de Falhas e Retrabalho',
      description: 'A digitalização do comprovante de entrega elimina perdas de documentos e reduz o tempo de faturamento de semanas para dias. Estima-se uma redução de 15% nos custos com combustível devido à otimização das rotas.',
      metrics: ['15% redução custos com combustível', 'Faturamento de semanas para dias', 'Zero perda de comprovantes'],
      color: 'from-nexus-secondary to-nexus-primary'
    },
    {
      icon: Zap,
      title: 'Aumento da Segurança da Informação',
      description: 'Centralização dos dados em ambiente de nuvem seguro e gerenciamento dos dispositivos móveis, garantindo conformidade com a LGPD e protegendo a reputação da empresa.',
      metrics: ['Dados centralizados em nuvem segura', 'Conformidade total com LGPD', 'Gerenciamento de dispositivos móveis'],
      color: 'from-nexus-accent to-nexus-secondary'
    }
  ];

  const kpis = [
    { metric: '20%', label: 'Mais entregas', description: 'Por veículo/dia' },
    { metric: '15%', label: 'Economia', description: 'Combustível e custos' },
    { metric: '100%', label: 'Rastreável', description: 'Visibilidade total' },
    { metric: 'LGPD', label: 'Compliance', description: 'Conformidade garantida' }
  ];

  const justifications = [
    {
      title: 'Investimento Acessível',
      description: 'Com investimento inicial de apenas R$ 135.000 e custo mensal recorrente de R$ 28.000, a solução oferece excelente custo-benefício.',
      advantage: 'ROI rápido e previsibilidade financeira'
    },
    {
      title: 'Tecnologia Enterprise',
      description: 'Utilização de plataformas líderes de mercado (Oracle, Salesforce, Snowflake, Tableau) garante escalabilidade e integração com grandes clientes.',
      advantage: 'Capacidade de atender clientes corporativos'
    },
    {
      title: 'Base para Crescimento',
      description: 'Infraestrutura tecnológica sólida que permite crescimento sustentável e diferenciação competitiva no mercado.',
      advantage: 'Preparado para escalar operações'
    }
  ];

  return (
    <section id="investimentos" className="min-h-screen py-20 bg-background flex flex-col justify-center">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Plano de <span className="text-gradient">Investimentos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Investimento estratégico para modernizar a operação, com investimento inicial de R$ 135.000 
            e custo mensal recorrente (OPEX) de R$ 28.000, totalizando R$ 471.000 no primeiro ano.
          </p>
        </div>

        {/* Investment Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-r from-nexus-primary to-nexus-accent rounded-2xl p-8 text-white shadow-hero text-center">
            <Smartphone className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">R$ {initialInvestment.toLocaleString('pt-BR')}</h3>
            <p className="text-lg text-white/90">Investimento Inicial</p>
            <p className="text-sm text-white/80 mt-2">Setup (uma vez)</p>
          </div>

          <div className="bg-gradient-to-r from-nexus-secondary to-nexus-primary rounded-2xl p-8 text-white shadow-hero text-center">
            <DollarSign className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">R$ {monthlyTotal.toLocaleString('pt-BR')}</h3>
            <p className="text-lg text-white/90">Custo Mensal</p>
            <p className="text-sm text-white/80 mt-2">OPEX recorrente</p>
          </div>

          <div className="bg-gradient-to-r from-nexus-accent to-nexus-secondary rounded-2xl p-8 text-white shadow-hero text-center">
            <TrendingUp className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">R$ {annualTotal.toLocaleString('pt-BR')}</h3>
            <p className="text-lg text-white/90">Total Primeiro Ano</p>
            <p className="text-sm text-white/80 mt-2">CAPEX + OPEX anual</p>
          </div>
        </div>

        {/* Investment Breakdown */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Detalhamento dos Investimentos
          </h3>
          <div className="space-y-8">
            {investmentData.map((investment, index) => (
              <div key={index} className="card-hover hover-lift">
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                  <div className="lg:w-1/3 mb-6 lg:mb-0">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-nexus-primary to-nexus-accent rounded-lg flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-foreground">{investment.category}</h4>
                        <p className="text-2xl font-bold text-nexus-primary">
                          {investment.amount}<span className="text-sm text-muted-foreground ml-1">{investment.period}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3">
                    <p className="text-muted-foreground mb-4 leading-relaxed">{investment.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {investment.items.map((item, idx) => (
                        <div key={idx} className="flex items-center p-3 bg-background rounded-lg border border-border">
                          <div className="w-2 h-2 bg-nexus-primary rounded-full mr-3"></div>
                          <span className="text-sm text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Benefits */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Benefícios Esperados
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {mainBenefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <div key={index} className="card-hover hover-lift group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <BenefitIcon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{benefit.description}</p>
                  <div className="space-y-3">
                    {benefit.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center p-3 bg-background-secondary rounded-lg border border-border">
                        <div className="w-2 h-2 bg-nexus-primary rounded-full mr-3"></div>
                        <span className="text-sm font-medium text-foreground">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpis.map((kpi, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-nexus-primary/5 to-nexus-accent/5 rounded-xl border border-nexus-primary/20 hover:border-nexus-primary/40 transition-colors duration-300">
                <div className="text-3xl font-bold text-nexus-primary mb-2">{kpi.metric}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{kpi.label}</div>
                <div className="text-sm text-muted-foreground">{kpi.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Justification */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Justificativa Estratégica
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {justifications.map((justification, index) => (
              <div key={index} className="card-hover hover-lift">
                <h4 className="text-xl font-bold text-foreground mb-4">{justification.title}</h4>
                <p className="text-muted-foreground mb-4 leading-relaxed">{justification.description}</p>
                <div className="p-4 bg-nexus-primary/5 border border-nexus-primary/20 rounded-lg">
                  <p className="text-sm text-nexus-primary font-semibold mb-1">Vantagem:</p>
                  <p className="text-sm text-muted-foreground">{justification.advantage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-nexus-secondary via-nexus-primary to-nexus-accent rounded-2xl p-8 text-white shadow-hero">
            <BarChart3 className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">
              Transformação Digital com Retorno Mensurável
            </h3>
            <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
              Este plano de investimento oferece um caminho claro para modernizar a operação, 
              encantar clientes com transparência e construir uma base tecnológica sólida para 
              o crescimento futuro com tecnologias enterprise de ponta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-nexus-primary font-semibold px-8 py-4 rounded-lg hover:bg-white/90 transition-colors duration-300 shadow-lg">
                Baixar Proposta Completa (PDF)
              </button>
              <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-nexus-primary transition-colors duration-300">
                Agendar Apresentação
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
