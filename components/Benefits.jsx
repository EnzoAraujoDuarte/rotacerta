import { TrendingUp, Shield, Zap, BarChart3, Users, Target, DollarSign } from 'lucide-react';

export default function Benefits() {
  const mainBenefits = [
    {
      icon: TrendingUp,
      title: 'Redução de Custos Operacionais',
      description: 'A roteirização inteligente por IA analisa em tempo real o trânsito, prioridades de entrega e perfil histórico de cada endereço, otimizando dinamicamente as rotas e reduzindo drasticamente custos com combustível, pedágios e horas extras.',
      metrics: ['35% economia em combustível mensal', '45% mais entregas por entregador/dia', '28% redução no tempo médio de rota'],
      color: 'from-nexus-primary to-nexus-accent'
    },
    {
      icon: Shield,
      title: 'Visibilidade e Transparência Total',
      description: 'Rastreamento GPS em tempo real via portal web e notificações proativas automáticas (SMS/WhatsApp) eliminaram completamente a ansiedade do "onde está meu pedido?". Clientes recebem link de tracking e ETA dinâmico atualizado a cada 5 minutos.',
      metrics: ['72% redução em ligações ao SAC', 'NPS subiu de 45 para 87 pontos', '100% das entregas com foto geo-localizada'],
      color: 'from-nexus-secondary to-nexus-primary'
    },
    {
      icon: Zap,
      title: 'Aumento de Produtividade',
      description: 'Comprovação digital com foto + assinatura na tela eliminou completamente canhotos de papel, acelerando o ciclo de faturamento de 15 dias para 24-48 horas. Equipe administrativa reduziu de 12 para 4 pessoas, focando em análise estratégica.',
      metrics: ['67% redução no tempo administrativo', 'Ciclo de faturamento reduzido para 24-48h', 'Zero perda de comprovantes (antes 15%/mês)'],
      color: 'from-nexus-accent to-nexus-secondary'
    }
  ];

  const competitiveAdvantages = [
    {
      title: 'Experiência Premium para Clientes',
      description: 'Transparência e comunicação proativa criam diferencial competitivo',
      points: ['Notificações automáticas', 'ETA preciso em tempo real', 'Comunicação pró-ativa']
    },
    {
      title: 'Escalabilidade Rápida',
      description: 'Infraestrutura SaaS permite crescimento sem investimento em TI',
      points: ['Sem CAPEX inicial', 'Adicionar entregadores facilmente', 'Expandir para novas cidades']
    },
    {
      title: 'Dados para Decisão',
      description: 'Analytics em tempo real para otimização contínua',
      points: ['KPIs em tempo real', 'Identificação de gargalos', 'Otimização baseada em dados']
    }
  ];

  const kpis = [
    { metric: '30%', label: 'Redução custos', description: 'Combustível e tempo' },
    { metric: '60%', label: 'Menos chamadas', description: 'Atendimento ao cliente' },
    { metric: '40%', label: 'Mais produtivo', description: 'Entregas por entregador' },
    { metric: '95%', label: 'Satisfação', description: 'Clientes e consumidores' }
  ];

  const decisionSupport = [
    {
      area: 'Performance de Entregas',
      description: 'Análise detalhada de tempo médio, taxa de sucesso e tentativas por região',
      impact: 'Identificar áreas problemáticas e otimizar rotas'
    },
    {
      area: 'Gestão de Frota e Equipe',
      description: 'Monitoramento de produtividade individual, custos por entregador e horas trabalhadas',
      impact: 'Avaliar performance e planejar expansão da equipe'
    },
    {
      area: 'Análise de Custos',
      description: 'Custo por entrega, consumo de combustível e ROI de clientes',
      impact: 'Negociação de contratos e precificação competitiva'
    }
  ];

  const roi = {
    investment: {
      hardware: 'R$ 150.000 (uma vez)',
      softwareMensal: 'R$ 45.000/mês',
      equipeMensal: 'R$ 35.000/mês',
      totalMensal: 'R$ 80.000/mês'
    },
    savings: {
      combustivel: 'R$ 45.000/mês (30% de economia)',
      administrativo: 'R$ 25.000/mês (redução de retrabalho)',
      atendimento: 'R$ 15.000/mês (menos sobrecarga)',
      totalMensal: 'R$ 85.000/mês'
    },
    payback: '6 meses'
  };

  return (
    <section id="beneficios" className="min-h-screen py-20 bg-background flex flex-col justify-center">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Benefícios <span className="text-gradient">Esperados</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Com a implementação completa do TMS drivin/Lincros integrado ao SAP S/4HANA, a Rota Certa Logtech 
            alcançou resultados extraordinários: redução de 35% nos custos operacionais, aumento de 45% na 
            produtividade dos entregadores e salto no NPS de 45 para 87 pontos. O ROI foi atingido em apenas 
            5 meses, superando as projeções iniciais de 6 meses.
          </p>
        </div>

        {/* Main Benefits */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainBenefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <div key={index} className="card-hover hover-lift group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <BenefitIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h3>
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
        </div>

        {/* KPIs */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            Indicadores de Performance Esperados
          </h3>
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

        {/* ROI Analysis */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            Análise de ROI (Retorno sobre Investimento)
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Investment */}
            <div className="card-hover hover-lift bg-destructive/5 border-destructive/20">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-2xl font-bold text-foreground">Investimento</h4>
                <DollarSign className="w-8 h-8 text-destructive" />
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-sm text-muted-foreground">Hardware (uma vez)</span>
                  <span className="font-semibold text-foreground">{roi.investment.hardware}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-sm text-muted-foreground">Software TMS</span>
                  <span className="font-semibold text-foreground">{roi.investment.softwareMensal}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-sm text-muted-foreground">Equipe Interna</span>
                  <span className="font-semibold text-foreground">{roi.investment.equipeMensal}</span>
                </div>
              </div>
              <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/30">
                <p className="text-sm text-muted-foreground mb-1">Total Mensal</p>
                <p className="text-2xl font-bold text-destructive">{roi.investment.totalMensal}</p>
              </div>
            </div>

            {/* Savings */}
            <div className="card-hover hover-lift bg-green-500/5 border-green-500/20">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-2xl font-bold text-foreground">Economia</h4>
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-sm text-muted-foreground">Combustível</span>
                  <span className="font-semibold text-foreground">{roi.savings.combustivel}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-sm text-muted-foreground">Administrativo</span>
                  <span className="font-semibold text-foreground">{roi.savings.administrativo}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-sm text-muted-foreground">Atendimento</span>
                  <span className="font-semibold text-foreground">{roi.savings.atendimento}</span>
                </div>
              </div>
              <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/30">
                <p className="text-sm text-muted-foreground mb-1">Total Mensal</p>
                <p className="text-2xl font-bold text-green-600">{roi.savings.totalMensal}</p>
              </div>
            </div>
          </div>

          {/* Payback */}
          <div className="mt-8 text-center">
            <div className="inline-block p-6 bg-gradient-to-r from-nexus-primary to-nexus-accent rounded-2xl text-white">
              <p className="text-sm text-white/80 mb-2">Payback Estimado</p>
              <p className="text-4xl font-bold mb-2">{roi.payback}</p>
              <p className="text-sm text-white/90">Considerando investimento inicial em hardware</p>
            </div>
          </div>
        </div>

        {/* Decision Support */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <BarChart3 className="w-16 h-16 text-nexus-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Suporte à Tomada de Decisão Gerencial
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dashboards em tempo real fornecendo insights acionáveis para otimização contínua
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {decisionSupport.map((item, index) => (
              <div key={index} className="card-hover hover-lift">
                <h4 className="text-xl font-bold text-foreground mb-4">{item.area}</h4>
                <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                <div className="p-4 bg-nexus-primary/5 border border-nexus-primary/20 rounded-lg">
                  <p className="text-sm text-nexus-primary font-semibold mb-1">Impacto:</p>
                  <p className="text-sm text-muted-foreground">{item.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competitive Advantages */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            Vantagens Competitivas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <div key={index} className="card-hover text-center hover-lift">
                <div className="w-12 h-12 bg-gradient-to-r from-nexus-secondary to-nexus-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{advantage.title}</h4>
                <p className="text-sm text-muted-foreground mb-6">{advantage.description}</p>
                <ul className="space-y-3">
                  {advantage.points.map((point, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-nexus-primary rounded-full mr-3"></div>
                      <span className="text-muted-foreground text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Final Statement */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-nexus-secondary via-nexus-primary to-nexus-accent rounded-2xl p-8 text-white shadow-hero">
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">
              Transformando a Logística Last-Mile
            </h3>
            <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
              Este investimento em tecnologia não apenas reduz custos e aumenta eficiência, 
              mas cria uma vantagem competitiva sustentável ao oferecer uma experiência de 
              entrega transparente e de alta qualidade muito valorizada no mercado atual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-nexus-primary font-semibold px-8 py-4 rounded-lg hover:bg-white/90 transition-colors duration-300 shadow-lg">
                Solicitar Apresentação Executiva
              </button>
              <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-nexus-primary transition-colors duration-300">
                Download do Plano Completo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}