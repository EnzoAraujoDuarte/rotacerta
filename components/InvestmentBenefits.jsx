import { DollarSign, TrendingUp, Target, Shield, Smartphone, Zap, BarChart3 } from 'lucide-react';

export default function InvestmentBenefits() {
  const investmentData = [
    {
      category: 'Desenvolvimento App Flutter',
      amount: 'R$ 120.000',
      period: '(investimento único)',
      description: 'Desenvolvimento e evolução do aplicativo Flutter com roteirização por IA, captura digital de comprovantes (foto + assinatura), integração com backend TypeScript e banco PostgreSQL, além de funcionalidades de rastreamento em tempo real.',
      items: ['Roteirização com IA/ML integrada', 'Captura digital: foto + assinatura', 'Interface intuitiva para entregadores', 'Dashboard de gestão em tempo real', 'Integração com backend TypeScript + PostgreSQL']
    },
    {
      category: 'Desenvolvimento de APIs de Integração',
      amount: 'R$ 80.000',
      period: '(investimento único)',
      description: 'Desenvolvimento de APIs REST para integração completa entre Shopify (e-commerce), SAP ERP (gestão empresarial) e aplicativo interno Flutter, garantindo sincronização automática de pedidos, estoque e entregas.',
      items: ['API Shopify ↔ SAP ERP', 'API SAP ↔ App Flutter', 'API Shopify ↔ App Flutter', 'Webhooks e sincronização em tempo real', 'Documentação técnica completa']
    },
    {
      category: 'Infraestrutura AWS e Smartphones',
      amount: 'R$ 70.000',
      period: '(investimento único)',
      description: 'Migração e configuração da infraestrutura AWS (servidores, banco PostgreSQL, storage, CDN) e aquisição de 55 smartphones corporativos para entregadores e gestores, além da implementação de ferramentas de segurança e MDM.',
      items: ['Migração e setup AWS (R$ 35.000)', 'Aquisição de 55 smartphones (R$ 35.000)', 'Implementação segurança e MDM (R$ 15.000)', 'Configuração backup e redundância']
    },
    {
      category: 'Infraestrutura AWS',
      amount: 'R$ 8.000',
      period: '/mês',
      description: 'Custos mensais da infraestrutura AWS incluindo servidores EC2, banco PostgreSQL RDS, storage S3, CDN CloudFront e serviços de backup automático com alta disponibilidade.',
      items: ['Servidores EC2 (backend TypeScript)', 'Banco PostgreSQL RDS', 'Storage S3 + CDN CloudFront', 'Backup automático e redundância']
    },
    {
      category: 'Shopify + Planos Móveis',
      amount: 'R$ 5.800',
      period: '/mês',
      description: 'Plataforma Shopify (plano fixo + 0,5% sobre vendas) para e-commerce B2B e planos de dados móveis corporativos para 55 aparelhos garantindo conectividade para rastreamento em tempo real.',
      items: ['Shopify: R$ 300 fixo + 0,5% vendas', '55 planos de dados móveis: R$ 5.500', 'Cobertura 4G/5G em 5 capitais', 'Suporte operadora 24x7']
    },
    {
      category: 'Segurança e MDM',
      amount: 'R$ 5.300',
      period: '/mês',
      description: 'Microsoft Intune para gestão de 55 dispositivos móveis (MDM) e ferramentas de segurança e monitoramento para proteger a infraestrutura AWS, dados sensíveis e garantir conformidade com LGPD.',
      items: ['Microsoft Intune (55 dispositivos): R$ 1.800', 'Ferramentas segurança e monitoramento: R$ 3.500', 'Políticas de segurança aplicadas', 'Monitoramento 24x7']
    },
    {
      category: 'Equipe de Tecnologia',
      amount: 'R$ 33.200',
      period: '/mês',
      description: 'Equipe dedicada de 3 profissionais qualificados para gestão, desenvolvimento e manutenção da infraestrutura tecnológica: DevOps, desenvolvimento full-stack e gestão de integrações entre sistemas.',
      items: ['1 Engenheiro DevOps Senior: R$ 15.000', '1 Desenvolvedor Full-Stack Pleno: R$ 10.000', '1 Analista de Integrações Pleno: R$ 8.200', 'Gestão completa do ecossistema tecnológico']
    },
    {
      category: 'Licença SAP ERP',
      amount: 'R$ 180.000',
      period: '/ano',
      description: 'Licenciamento anual do SAP ERP baseado no faturamento da empresa para gestão empresarial completa, incluindo módulos de vendas, estoque, logística e financeiro com integração via APIs ao Shopify e aplicativo Flutter.',
      items: ['Licença baseada em faturamento', 'Módulos: vendas, estoque, logística, financeiro', 'Integração via APIs REST', 'Suporte SAP incluído']
    }
  ];

  const monthlyTotal = investmentData.reduce((sum, item) => {
    if (item.period === '/mês') {
      return sum + parseFloat(item.amount.replace('R$ ', '').replace('.', ''));
    }
    return sum;
  }, 0);

  const initialInvestment = 285000;
  const sapAnnual = 180000;
  const annualTotal = (monthlyTotal * 12) + initialInvestment + sapAnnual;


  const mainBenefits = [
    {
      icon: TrendingUp,
      title: 'Melhoria na Produtividade',
      description: 'A roteirização automática com IA integrada ao aplicativo Flutter e o rastreamento em tempo real permitirão aumento estimado de 20% no número de entregas realizadas por veículo/dia, otimizando trajetos e reduzindo custos operacionais.',
      metrics: ['20% mais entregas por veículo/dia', '15% redução em custos com combustível', 'Otimização de rotas por IA/ML no app Flutter'],
      color: 'from-nexus-primary to-nexus-accent'
    },
    {
      icon: Shield,
      title: 'Redução de Falhas e Retrabalho',
      description: 'A digitalização do comprovante de entrega via aplicativo Flutter (foto + assinatura) elimina perdas de documentos e reduz o tempo de faturamento de semanas para dias. Integração Shopify-SAP-App garante sincronização automática.',
      metrics: ['Faturamento acelerado (semanas para dias)', '30% redução em devoluções e reentregas', 'Sincronização automática via APIs'],
      color: 'from-nexus-secondary to-nexus-primary'
    },
    {
      icon: Zap,
      title: 'Decisões Baseadas em Dados',
      description: 'Dashboard integrado ao app Flutter fornecerá métricas vitais em tempo real (OTIF, tempo médio por entrega, custo por km, taxa de sucesso, cumprimento de SLA), permitindo decisões estratégicas baseadas em dados concretos.',
      metrics: ['KPIs em tempo real via dashboard', 'Dados centralizados no PostgreSQL AWS', 'Redução de penalidades por SLA'],
      color: 'from-nexus-accent to-nexus-secondary'
    }
  ];

  const kpis = [
    { metric: '20%', label: 'Mais entregas', description: 'Por veículo/dia' },
    { metric: '30%', label: 'Menos devoluções', description: 'Redução em reentregas' },
    { metric: '15%', label: 'Economia', description: 'Custos com combustível' },
    { metric: 'Real-time', label: 'KPIs', description: 'Decisões data-driven' }
  ];

  const justifications = [
    {
      title: 'Modelo SaaS (OPEX)',
      description: 'Sem necessidade de servidores locais ou grandes investimentos em infraestrutura. Pague apenas pelo uso mensal.',
      advantage: 'Flexibilidade financeira e custos previsíveis'
    },
    {
      title: 'Foco em Mobilidade',
      description: 'Todo investimento em hardware foca nos entregadores - quem realmente gera receita para a empresa.',
      advantage: 'Investimento direto na operação e produtividade'
    },
    {
      title: 'Vantagem Competitiva',
      description: 'Experiência de entrega transparente com rastreamento em tempo real valorizada pelos clientes de e-commerce.',
      advantage: 'Diferenciação no mercado e retenção de clientes'
    }
  ];

  return (
    <section id="investimentos" className="min-h-screen py-20 bg-background flex flex-col justify-center">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Investimentos e <span className="text-gradient">Benefícios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Plano de investimento estratégico focado no desenvolvimento do aplicativo Flutter próprio 
            com roteirização IA, APIs de integração (Shopify-SAP-App), infraestrutura AWS escalável e 
            equipe qualificada de tecnologia para gestão completa do ecossistema.
          </p>
        </div>

        {/* Investment Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-r from-nexus-primary to-nexus-accent rounded-2xl p-8 text-white shadow-hero text-center">
            <Smartphone className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">R$ {initialInvestment.toLocaleString('pt-BR')}</h3>
            <p className="text-lg text-white/90">Investimento Inicial</p>
            <p className="text-sm text-white/80 mt-2">Hardware (uma vez)</p>
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
            Benefícios Conquistados
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
              Transformação Comprovada com Resultados Reais
            </h3>
            <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
              Este plano de investimento oferece um caminho claro para modernizar a operação com 
              desenvolvimento próprio do aplicativo Flutter com IA, APIs robustas de integração e 
              infraestrutura AWS escalável, construindo uma base tecnológica sólida para crescimento 
              futuro e expansão para B2C com logística last-mile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-nexus-primary font-semibold px-8 py-4 rounded-lg hover:bg-white/90 transition-colors duration-300 shadow-lg">
                Baixar Plano Detalhado (PDF)
              </button>
              <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-nexus-primary transition-colors duration-300">
                Solicitar Apresentação Executiva
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}