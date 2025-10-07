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
      title: 'Vendas B2B via E-commerce Shopify',
      description: 'Plataforma de e-commerce Shopify onde farmácias, perfumarias e supermercados realizam pedidos de produtos de marcas líderes (Colgate, Kimberly Clark, Reckitt, Ferrero, Huggies, Pampers), com gestão integrada ao SAP ERP e entrega last-mile própria.',
      features: ['Catálogo com produtos de marcas líderes', 'Integração Shopify + SAP ERP', 'Entrega própria em 5 capitais']
    },
    {
      icon: Clock,
      title: 'Logística Last-Mile B2B e Expansão B2C',
      description: 'Serviço completo de entrega dos produtos vendidos via Shopify para estabelecimentos (B2B) e expandindo para entregas ao consumidor final (B2C), com rastreamento via aplicativo interno (Flutter/TypeScript/PostgreSQL) e comprovação digital de entrega.',
      features: ['Rastreamento em tempo real via app próprio', 'Comprovação digital de entrega', 'Expansão para entregas B2C last-mile']
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
            A Rota Certa Logtech oferece vendas B2B através de plataforma Shopify e está expandindo 
            para B2C com logística last-mile completa. Distribuímos produtos de marcas líderes 
            (Colgate, Kimberly Clark, Reckitt, Ferrero, Huggies, Pampers) para farmácias, perfumarias 
            e supermercados, com infraestrutura tecnológica que garante eficiência máxima e entregas 
            rastreáveis em tempo real.
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
              Com tecnologia integrada (Shopify + SAP ERP + App interno), oferecemos vendas B2B 
              e estamos expandindo para B2C com logística urbana de última milha totalmente digitalizada, 
              com eficiência operacional, rastreamento em tempo real e experiência premium
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

      </div>
    </section>
  );
}