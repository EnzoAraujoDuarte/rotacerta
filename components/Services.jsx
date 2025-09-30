import { AlertTriangle, MapPin, FileText, MessageSquare, Package, Clock, CheckCircle } from 'lucide-react';

export default function Services() {
  const currentProblems = [
    {
      icon: AlertTriangle,
      title: 'Roteirização Manual Ineficiente',
      description: 'Antes da implementação do TMS, o planejamento de rotas era feito manualmente em planilhas Excel, resultando em trajetos sub-otimizados, alto consumo de combustível (até 40% superior ao ideal) e atrasos frequentes nas entregas por não considerar trânsito em tempo real.',
      impact: ['Custos 40% maiores com combustível', 'Perda de 30% da produtividade', 'SLA de entrega abaixo de 75%']
    },
    {
      icon: MapPin,
      title: 'Ausência de Rastreamento em Tempo Real',
      description: 'Sem sistema de GPS integrado, nem clientes nem gestores sabiam a localização precisa dos entregadores. Isso gerava ansiedade nos consumidores finais e sobrecarga massiva no SAC com ligações constantes questionando o status das entregas.',
      impact: ['Mais de 200 ligações/dia perguntando "onde está?"', 'NPS baixo (45) por falta de transparência', 'Equipe de atendimento 3x maior que necessário']
    },
    {
      icon: FileText,
      title: 'Comprovação Manual em Papel',
      description: 'As provas de entrega eram feitas com canhotos de papel físico assinados pelo cliente. Esses documentos frequentemente eram perdidos, danificados por chuva ou ilegíveis, atrasando o ciclo de faturamento em até 15 dias e gerando disputas sem evidências fotográficas.',
      impact: ['15% de canhotos perdidos mensalmente', 'Ciclo de faturamento de 12-15 dias', 'Disputas sem evidência documental confiável']
    },
    {
      icon: MessageSquare,
      title: 'Comunicação Fragmentada e Caótica',
      description: 'Toda comunicação com a frota era via WhatsApp pessoal dos supervisores, criando múltiplos grupos desorganizados. Não havia registro centralizado de ocorrências (ausências, endereços errados, recusas), tornando impossível análises históricas e melhorias de processo.',
      impact: ['Zero histórico estruturado de ocorrências', 'Supervisores gastando 4h/dia apenas em WhatsApp', 'Impossibilidade de análise de padrões e KPIs']
    }
  ];

  const services = [
    {
      icon: Package,
      title: 'Coleta e Entrega Last-Mile B2C',
      description: 'Serviço core de coleta em centros de distribuição dos clientes de e-commerce (integração via API com Shopify, VTEX, WooCommerce) e entrega door-to-door para o consumidor final com janelas de tempo flexíveis e rastreamento completo.',
      features: ['Coleta agendada com 4h de antecedência', 'Entrega D+1 ou same-day (capital)', 'Cobertura em 5 capitais + região metropolitana']
    },
    {
      icon: Clock,
      title: 'Entregas Expressas Same-Day',
      description: 'Serviço premium de entrega ultrarrápida para pedidos urgentes de e-commerce, com coleta imediata e janelas de entrega de 2-3 horas garantidas por SLA. Ideal para produtos de alto valor, medicamentos ou presentes de última hora.',
      features: ['Janelas de 2-3 horas com 98% precisão', 'Coleta em até 1 hora após pedido', 'SLA garantido com multa contratual']
    },
    {
      icon: CheckCircle,
      title: 'Gestão Inteligente de Ocorrências',
      description: 'Plataforma completa para gerenciar todas as exceções logísticas: ausências do destinatário, endereços incorretos, recusas e devoluções. Com machine learning que prevê padrões de ausência e sugere melhores horários para re-entrega.',
      features: ['Registro fotográfico geo-localizado', 'Reagendamento automático via SMS/WhatsApp', 'IA prevê melhor janela de re-entrega']
    }
  ];

  return (
    <section id="servicos" className="min-h-screen py-20 bg-background flex flex-col justify-center">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A Rota Certa Logtech oferece um portfólio completo de soluções de entrega urbana 
            para e-commerce B2C, desde coletas agendadas até entregas expressas same-day. 
            Nossa infraestrutura tecnológica com roteirização por IA e rastreamento em tempo real 
            garante eficiência máxima, redução de custos e experiência superior para o consumidor final.
          </p>
        </div>

        {/* Current Problems */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-destructive/10 border border-destructive/30 rounded-full mb-6">
              <span className="text-destructive font-semibold text-sm">⚠️ ANTES DA TRANSFORMAÇÃO DIGITAL</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Problemas <span className="text-destructive">Críticos</span> Enfrentados
            </h3>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Antes de implementar nossa solução tecnológica com TMS, enfrentávamos sérios desafios 
              operacionais que impactavam drasticamente nossos custos, produtividade e satisfação dos clientes. 
              Estes problemas eram o dia a dia da operação logística tradicional:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {currentProblems.map((problem, index) => {
              const ProblemIcon = problem.icon;
              return (
                <div key={index} className="card-hover hover-lift group bg-destructive/5 border-2 border-destructive/20 hover:border-destructive/40">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-destructive/80 to-destructive rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <ProblemIcon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-destructive/70 uppercase tracking-wider">Problema #{index + 1}</span>
                      <h4 className="text-lg md:text-xl font-bold mt-1 text-destructive leading-tight">{problem.title}</h4>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">{problem.description}</p>
                  <div className="space-y-3 bg-destructive/10 rounded-lg p-4 border border-destructive/20">
                    <p className="text-xs md:text-sm font-bold text-destructive mb-3 flex items-center">
                      <span className="inline-block w-5 h-5 rounded-full bg-destructive text-white text-xs flex items-center justify-center mr-2">!</span>
                      IMPACTOS FINANCEIROS E OPERACIONAIS:
                    </p>
                    {problem.impact.map((impact, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-destructive rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-xs md:text-sm text-foreground font-medium leading-relaxed">{impact}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Transition Section */}
          <div className="mt-12 text-center">
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-green-500/10 to-green-600/10 border-2 border-green-500/30 rounded-xl">
              <p className="text-sm md:text-base text-foreground font-semibold mb-2">
                ✅ <span className="text-green-600">SOLUÇÃO IMPLEMENTADA COM SUCESSO</span>
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                Todos estes problemas foram eliminados com a implementação do TMS drivin/Lincros
              </p>
            </div>
          </div>
        </div>

        {/* Services Offered */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-nexus-primary/10 border border-nexus-primary/30 rounded-full mb-6">
              <span className="text-nexus-primary font-semibold text-sm">🚀 APÓS A TRANSFORMAÇÃO DIGITAL</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Soluções <span className="text-nexus-primary">Tecnológicas</span> Implementadas
            </h3>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Com o TMS drivin/Lincros, oferecemos serviços de logística urbana de última milha 
              totalmente digitalizados, com eficiência operacional, rastreamento em tempo real e 
              experiência premium para o consumidor final
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <div key={index} className="card-hover hover-lift group border-2 border-nexus-primary/20 hover:border-nexus-primary/50">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-nexus-primary to-nexus-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <ServiceIcon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold mb-4 text-foreground leading-tight">{service.title}</h4>
                  <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-3 pt-4 border-t border-border">
                    <p className="text-xs font-semibold text-nexus-primary uppercase tracking-wider">Recursos:</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-nexus-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-xs md:text-sm text-muted-foreground leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-nexus-primary to-nexus-accent rounded-xl md:rounded-2xl p-6 md:p-8 text-white shadow-hero">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              Pronto para transformar suas entregas?
            </h3>
            <p className="text-sm md:text-lg mb-6 text-white/90 max-w-2xl mx-auto leading-relaxed px-4">
              Descubra como nossa solução tecnológica pode revolucionar sua operação logística, 
              eliminar problemas críticos e reduzir custos operacionais em até 35%.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <button className="bg-white text-nexus-primary font-semibold px-6 md:px-8 py-3 rounded-lg hover:bg-white/90 transition-colors duration-300 text-sm md:text-base">
                Agendar Demonstração
              </button>
              <button className="border-2 border-white text-white font-semibold px-6 md:px-8 py-3 rounded-lg hover:bg-white hover:text-nexus-primary transition-colors duration-300 text-sm md:text-base">
                Falar com Especialista
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}