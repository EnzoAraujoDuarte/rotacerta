import { DollarSign, TrendingUp, Target, Shield, Smartphone, Zap, BarChart3 } from 'lucide-react';

export default function InvestmentBenefits() {
  const investmentData = [
    {
      category: 'Implantação SAP ERP HANA Cloud',
      amount: 'R$ 500.000',
      period: '(investimento)',
      description: 'Implantação completa do SAP ERP HANA Cloud e tecnologias SAP, incluindo configuração, customização, migração de dados, integrações e treinamento. Sistema de gestão empresarial de última geração com processamento in-memory e analytics em tempo real.',
      items: ['Configuração e customização SAP HANA Cloud', 'Migração de dados e integração com sistemas legados', 'Módulos: FI, CO, SD, MM, PP, QM', 'Analytics e Business Intelligence integrados', 'Treinamento completo para equipe']
    },
    {
      category: 'Desenvolvimento App Flutter',
      amount: 'R$ 120.000',
      period: '(investimento)',
      description: 'Desenvolvimento e evolução do aplicativo Flutter com roteirização por IA, captura digital de comprovantes (foto + assinatura), integração com backend TypeScript e banco PostgreSQL, além de funcionalidades de rastreamento em tempo real.',
      items: ['Roteirização com IA/ML integrada', 'Captura digital: foto + assinatura', 'Interface intuitiva para entregadores', 'Dashboard de gestão em tempo real', 'Integração com backend TypeScript + PostgreSQL']
    },
    {
      category: 'Desenvolvimento de APIs de Integração',
      amount: 'R$ 80.000',
      period: '(investimento)',
      description: 'Desenvolvimento de APIs REST para integração completa entre Shopify (e-commerce), SAP ERP (gestão empresarial) e aplicativo interno Flutter, garantindo sincronização automática de pedidos, estoque e entregas.',
      items: ['API Shopify ↔ SAP ERP', 'API SAP ↔ App Flutter', 'API Shopify ↔ App Flutter', 'Webhooks e sincronização em tempo real', 'Documentação técnica completa']
    },
    {
      category: 'Infraestrutura AWS e Smartphones',
      amount: 'R$ 85.000',
      period: '(investimento)',
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
      items: ['Microsoft Intune (55 dispositivos): R$ 1.800', 'AWS IAM, MFA e Cognito: R$ 800', 'AWS Certificate Manager, KMS e Encryption: R$ 1.200', 'CloudWatch, CloudTrail e GuardDuty: R$ 1.500']
    },
    {
      category: 'Equipe Completa',
      amount: 'R$ 100.200',
      period: '/mês',
      description: 'Equipe completa de tecnologia incluindo Engenheiro DevOps, Desenvolvedores Full-Stack, Analistas de Integrações, Suporte Técnico e demais profissionais para gestão, desenvolvimento, manutenção e evolução contínua da infraestrutura e aplicações.',
      items: ['Engenheiros DevOps e Desenvolvedores', 'Analistas de Integrações', 'Suporte Técnico e Manutenção', 'Gestão completa do ecossistema tecnológico']
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

  const initialInvestment = 785000; // Atualizado para incluir SAP ERP HANA Cloud (R$ 500.000)
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
      title: 'CAPEX (Capital Expenditure)',
      description: 'Investimento inicial de R$ 785 mil para implantação do SAP ERP HANA Cloud, desenvolvimento do app Flutter, APIs, infraestrutura AWS e aquisição de 55 smartphones. Gera ativo de longo prazo e propriedade intelectual.',
      advantage: 'Controle total sobre tecnologia e evolução própria'
    },
    {
      title: 'OPEX (Operational Expenditure)',
      description: 'Custo operacional mensal recorrente de R$ 119,3 mil incluindo infraestrutura AWS, licenças, planos móveis e equipe completa de TI. Despesa dedutível fiscalmente.',
      advantage: 'Flexibilidade financeira e custos previsíveis'
    },
    {
      title: 'Equipe Interna Completa',
      description: 'Equipe própria (R$ 100,2 mil/mês) garante desenvolvimento contínuo, manutenção ágil e capacidade de resposta rápida às necessidades do negócio.',
      advantage: 'Autonomia tecnológica e inovação constante'
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
            Investimento estratégico com CAPEX inicial de R$ 785 mil e OPEX mensal de R$ 119,3 mil, 
            focado na implantação do SAP ERP HANA Cloud, desenvolvimento do aplicativo Flutter próprio com IA, 
            APIs de integração (Shopify-SAP-App), infraestrutura AWS escalável e equipe completa de TI.
          </p>
        </div>

        {/* CAPEX vs OPEX Explanation */}
        <div className="mb-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8 border-2 border-blue-200 dark:border-blue-800">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            📊 Entendendo CAPEX e OPEX
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
              <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">💰 CAPEX (Capital Expenditure)</h4>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                <strong>Despesa de Capital:</strong> Investimento pontual ou esporádico para aquisição de ativos de longo prazo 
                (desenvolvimento de software, infraestrutura, equipamentos). Gera propriedade e pode ser depreciado ao 
                longo do tempo para fins contábeis e fiscais.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">Neste projeto:</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">R$ 785.000</p>
                <p className="text-xs text-muted-foreground mt-1">Investimento único ou pontual</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
              <h4 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-3">📅 OPEX (Operational Expenditure)</h4>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                <strong>Despesa Operacional:</strong> Custos recorrentes mensais necessários para manter a operação 
                (salários, licenças de software, infraestrutura cloud, serviços). Dedutíveis diretamente no imposto 
                de renda como despesa operacional.
              </p>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                <p className="text-sm font-semibold text-purple-700 dark:text-purple-300">Neste projeto:</p>
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">R$ 119.300</p>
                <p className="text-xs text-muted-foreground mt-1">Custo mensal recorrente</p>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Breakdown */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Detalhamento dos Investimentos Tecnologicos
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

        {/* Revenue and Profit Expectations */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl p-8 border-2 border-green-200 dark:border-green-800">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              📈 Expectativa de Faturamento e Lucro
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Projeções financeiras baseadas na operação atual e expansão planejada para B2C
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Monthly Revenue */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-green-500">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-sm font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider mb-2">Faturamento Mensal Médio</h4>
                <p className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">R$ 520.000</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Baseado em 12.000 entregas/mês com ticket médio de R$ 43,00 por entrega (B2B e B2C)
                </p>
              </div>
            </div>

            {/* Operating Costs */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-orange-500">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-sm font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-2">Custos Totais Mensais</h4>
                <p className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">R$ 420.000</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  OPEX tecnológico (R$ 119.300) + SAP anualizado (R$ 15.000) + operacionais (R$ 285.700: pessoal, combustível, manutenção, etc.)
                </p>
              </div>
            </div>

            {/* Net Profit */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-blue-500">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">Lucro Líquido Mensal</h4>
                <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">R$ 100.000</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Margem líquida de 19,2% - padrão saudável para empresas de logística urbana last-mile
                </p>
              </div>
            </div>
          </div>

          {/* Annual Projection */}
          <div className="bg-gradient-to-r from-nexus-primary to-nexus-accent rounded-xl p-8 text-white shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-white/80 text-sm uppercase tracking-wider mb-2">Faturamento Anual</p>
                <p className="text-3xl font-bold">R$ 6.240.000</p>
              </div>
              <div>
                <p className="text-white/80 text-sm uppercase tracking-wider mb-2">Lucro Líquido Anual</p>
                <p className="text-3xl font-bold">R$ 1.200.000</p>
              </div>
              <div>
                <p className="text-white/80 text-sm uppercase tracking-wider mb-2">ROI do Investimento</p>
                <p className="text-3xl font-bold">14 meses</p>
              </div>
            </div>
          </div>

          {/* Assumptions */}
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 border border-border">
            <h4 className="text-lg font-bold text-foreground mb-4 flex items-center">
              <span className="w-8 h-8 bg-nexus-primary/10 rounded-lg flex items-center justify-center mr-3">
                📊
              </span>
              Premissas da Projeção
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-muted-foreground">
                  <strong>Volume de entregas:</strong> 12.000 entregas/mês (atual B2B + expansão B2C), com crescimento de 15% após 6 meses
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-muted-foreground">
                  <strong>Ticket médio:</strong> R$ 43,00 por entrega (mix B2B: R$ 55,00 e B2C: R$ 35,00)
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-muted-foreground">
                  <strong>Equipe operacional:</strong> 50 entregadores + 5 supervisores com salários e encargos.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-muted-foreground">
                  <strong>Custos operacionais:</strong> Combustível (R$ 65.000), manutenção frota (R$ 25.000), aluguel CDs (R$ 15.700)
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-muted-foreground">
                  <strong>Eficiência:</strong> Tecnologia reduz custos em 15% (combustível) e aumenta produtividade em 20% (entregas/veículo)
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-muted-foreground">
                  <strong>Margem líquida:</strong> 19,2% alinhada ao padrão do setor no Brasil
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
