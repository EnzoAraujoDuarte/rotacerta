import { DollarSign, TrendingUp, Target, Shield, Smartphone } from 'lucide-react';

export default function Investment() {
  const investmentData = [
    {
      category: 'Hardware - Smartphones e Dispositivos Móveis',
      amount: 'R$ 150.000',
      period: '(investimento único)',
      description: 'Aquisição de 50 smartphones corporativos Samsung Galaxy XCover Pro (IP68, MIL-STD-810H) com garantia estendida de 3 anos, carregadores veiculares de 12V, suportes magnéticos profissionais e seguro contra roubo/danos para todos os dispositivos.',
      items: ['50 smartphones Samsung XCover Pro (R$ 2.400/un)', '50 carregadores veiculares premium', '50 suportes magnéticos profissionais', 'Seguro total (roubo/dano) - 3 anos', 'MDM: 10 licenças Intune (3 anos)']
    },
    {
      category: 'Software TMS Cloud SaaS (drivin/Lincros)',
      amount: 'R$ 42.000',
      period: '/mês',
      description: 'Licenciamento SaaS da plataforma TMS líder de mercado (drivin ou Lincros) incluindo módulos completos: roteirização por IA, app móvel para 50 entregadores, dashboard gerencial web, portal B2B para clientes, tracking público, APIs de integração e suporte técnico 24x7.',
      items: ['Licença TMS Enterprise (50 motoristas)', 'App Android nativo para entregadores', 'Dashboard gerencial web com 40+ KPIs', 'Portal B2B + Tracking público ilimitado', 'APIs de integração (REST/Webhook)', 'Suporte técnico 24x7 (SLA 4h)']
    },
    {
      category: 'Conectividade - Planos Corporativos M2M',
      amount: 'R$ 15.000',
      period: '/mês',
      description: 'Planos corporativos M2M (Machine-to-Machine) Vivo Empresas com dados 4G/5G ilimitados (fair use 100GB/linha), IP fixo, APN dedicada e prioridade QoS para garantir transmissão contínua de GPS, fotos e dados críticos nas 5 capitais de operação.',
      items: ['50 linhas M2M Vivo Empresas (R$ 300/linha)', 'Dados 4G/5G ilimitados (fair use 100GB)', 'IP fixo + APN dedicada corporativa', 'Prioridade QoS em horário comercial', 'NOC 24x7 com SLA de atendimento 4h']
    },
    {
      category: 'Equipe Interna de Gestão Tecnológica',
      amount: 'R$ 35.000',
      period: '/mês',
      description: 'Equipe dedicada de 3 profissionais para gestão estratégica da operação digitalizada: monitoramento de dashboards em tempo real, gestão de incidentes ITIL, análise de KPIs operacionais e interface com fornecedores de TMS e conectividade.',
      items: ['1 Gerente de Tecnologia (R$ 16.000)', '1 Analista de Operações Sênior (R$ 11.000)', '1 Analista de Suporte Técnico (R$ 8.000)', 'Treinamentos e certificações ITIL/PMP']
    },
    {
      category: 'Serviços Profissionais e Manutenção',
      amount: 'R$ 15.000',
      period: '/mês',
      description: 'Serviços de suporte técnico L1/L2 para entregadores (24x7), manutenção preventiva e corretiva de dispositivos móveis, reposição de equipamentos danificados (pool de 8 smartphones reserva) e treinamentos mensais para novos entregadores.',
      items: ['Service desk 24x7 para entregadores', 'Manutenção de 50 smartphones (reparo/reposição)', 'Pool de 8 dispositivos reserva', 'Treinamentos mensais (onboarding)', 'Consultoria técnica TMS (8h/mês)']
    }
  ];

  const monthlyTotal = investmentData.reduce((sum, item) => {
    if (item.period === '/mês') {
      return sum + parseFloat(item.amount.replace('R$ ', '').replace('.', ''));
    }
    return sum;
  }, 0);

  const initialInvestment = 150000;
  const annualTotal = (monthlyTotal * 12) + initialInvestment;

  const benefits = [
    {
      icon: TrendingUp,
      title: 'ROI Alcançado',
      value: '5 meses',
      description: 'Payback em 5 meses com economia de R$ 129k/mês'
    },
    {
      icon: Target,
      title: 'Redução de Custos',
      value: '35%',
      description: 'Economia em combustível, administrativo e atendimento'
    },
    {
      icon: Shield,
      title: 'Aumento de Produtividade',
      value: '45%',
      description: 'Mais entregas por entregador com roteirização IA'
    }
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

  const savingsBreakdown = [
    { item: 'Redução combustível e pedágios (35%)', value: 'R$ 58.000/mês' },
    { item: 'Redução equipe administrativa (67%)', value: 'R$ 32.000/mês' },
    { item: 'Redução equipe atendimento (72%)', value: 'R$ 21.000/mês' },
    { item: 'Eliminação perda canhotos (15% faturamento)', value: 'R$ 18.000/mês' },
    { item: 'Total de economia operacional mensal', value: 'R$ 129.000/mês', highlight: true }
  ];

  return (
    <section id="investimentos" className="min-h-screen py-20 section-gradient flex flex-col justify-center">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Plano de <span className="text-gradient">Investimentos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Investimento estratégico de R$ 1,43 milhão no primeiro ano (CAPEX + OPEX) para transformação 
            digital completa da Rota Certa Logtech. Com ROI alcançado em apenas 5 meses através de economia 
            operacional de 35%, aumento de 45% na produtividade e crescimento de 180% na receita anual, 
            o projeto superou todas as expectativas e posicionou a empresa como referência tecnológica no setor.
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

        {/* ROI Analysis */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Análise de ROI e Economia
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Investment */}
            <div className="card-hover">
              <h4 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <DollarSign className="w-8 h-8 text-destructive mr-3" />
                Investimento Mensal
              </h4>
              <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-lg">
                <p className="text-4xl font-bold text-destructive mb-2">R$ {monthlyTotal.toLocaleString('pt-BR')}</p>
                <p className="text-sm text-muted-foreground">Custo operacional mensal total</p>
              </div>
            </div>

            {/* Savings */}
            <div className="card-hover">
              <h4 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
                Economia Esperada
              </h4>
              <div className="space-y-3">
                {savingsBreakdown.map((saving, index) => (
                  <div 
                    key={index} 
                    className={`flex justify-between items-center p-3 rounded-lg ${
                      saving.highlight 
                        ? 'bg-green-500/10 border border-green-500/30' 
                        : 'bg-background border border-border'
                    }`}
                  >
                    <span className={`text-sm ${saving.highlight ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}>
                      {saving.item}
                    </span>
                    <span className={`font-semibold ${saving.highlight ? 'text-green-600 text-lg' : 'text-foreground'}`}>
                      {saving.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Payback */}
          <div className="mt-8 text-center">
            <div className="inline-block p-6 bg-gradient-to-r from-green-600 to-green-500 rounded-2xl text-white shadow-hero">
              <p className="text-sm text-white/80 mb-2">ROI Alcançado (Payback Period)</p>
              <p className="text-5xl font-bold mb-2">5 meses</p>
              <p className="text-base text-white/90 mb-2">Economia mensal: R$ 129.000 | Investimento mensal: R$ 132.000</p>
              <p className="text-sm text-white/80">Investimento inicial de R$ 195.000 recuperado em 5 meses</p>
              <p className="text-xs text-white/70 mt-3">A partir do 6º mês: lucro líquido adicional de R$ 129.000/mês</p>
            </div>
          </div>
        </div>

        {/* Expected Benefits */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Benefícios Esperados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <div key={index} className="card-hover text-center hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-r from-nexus-secondary to-nexus-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                    <BenefitIcon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold text-nexus-primary mb-2">{benefit.value}</h4>
                  <h5 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h5>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Investment Justification */}
        <div>
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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Este investimento é o catalisador da nossa transformação
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Este investimento de R$ 1,43 milhão no primeiro ano não foi um custo, mas o principal 
              catalisador que transformou a Rota Certa Logtech em referência tecnológica no setor. 
              Com ROI em 5 meses, economia operacional de R$ 129k mensais e crescimento de 180% na receita, 
              o projeto superou todas as expectativas e posicionou a empresa para competir de igual para 
              igual com grandes players nacionais, conquistando 8 novos clientes enterprise no último ano.
            </p>
            <button className="btn-hero">
              Baixar Plano Detalhado (PDF)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}