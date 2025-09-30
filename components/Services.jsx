import { AlertTriangle, MapPin, FileText, MessageSquare, Package, Clock, CheckCircle } from 'lucide-react';

export default function Services() {
  const currentProblems = [
    {
      icon: AlertTriangle,
      title: 'Ineficiência e Alto Custo Operacional',
      description: 'A roteirização das entregas é feita de forma manual em planilhas, um processo lento, sujeito a erros e que não considera variáveis em tempo real, como o trânsito. Isso resulta em rotas mais longas, maior consumo de combustível e pagamento excessivo de horas extras.',
      impact: ['Rotas sub-otimizadas e mais longas', 'Maior consumo de combustível', 'Pagamento excessivo de horas extras']
    },
    {
      icon: MapPin,
      title: 'Falta de Visibilidade e Rastreabilidade',
      description: 'Nossos clientes e seus consumidores finais não possuem um sistema para rastrear a entrega em tempo real. Isso sobrecarrega nossa equipe de atendimento com ligações e e-mails perguntando sobre o status dos pedidos, gerando uma experiência negativa.',
      impact: ['Sobrecarga no atendimento com ligações', 'Consumidores sem informação de status', 'Experiência negativa do cliente']
    },
    {
      icon: FileText,
      title: 'Processo de Comprovação de Entrega Arcaico',
      description: 'A confirmação da entrega é realizada através de canhotos de papel assinados. Este método leva à perda de documentos, atrasos no faturamento (pois é preciso esperar o canhoto físico chegar) e dificuldades na resolução de disputas.',
      impact: ['Perda frequente de documentos', 'Atrasos no faturamento', 'Dificuldades na resolução de disputas']
    },
    {
      icon: MessageSquare,
      title: 'Comunicação Desestruturada',
      description: 'Toda a comunicação com os entregadores na rua é feita por grupos de WhatsApp, tornando o registro de ocorrências (endereço não localizado, cliente ausente) descentralizado, informal e difícil de auditar.',
      impact: ['Comunicação descentralizada', 'Registro informal de ocorrências', 'Difícil auditoria e controle']
    }
  ];

  const services = [
    {
      icon: Package,
      title: 'Coleta e Entrega Last-Mile',
      description: 'Serviço principal de coleta de pacotes nos centros de distribuição de clientes (lojas virtuais) e realização da entrega rápida e eficiente ao consumidor final em grandes capitais.',
      features: ['Coleta em centros de distribuição', 'Entrega door-to-door ao consumidor', 'Cobertura em grandes capitais']
    },
    {
      icon: Clock,
      title: 'Entregas Rápidas',
      description: 'Foco em entregas rápidas e eficientes para o setor de e-commerce, garantindo que os produtos cheguem aos consumidores finais no menor tempo possível.',
      features: ['Entregas ágeis e eficientes', 'Foco no setor de e-commerce', 'Prioridade no prazo']
    },
    {
      icon: CheckCircle,
      title: 'Gestão de Entregas',
      description: 'Gerenciamento completo do processo de entrega, desde a coleta até a confirmação de recebimento pelo consumidor final.',
      features: ['Gestão de rotas', 'Acompanhamento de entregas', 'Confirmação de recebimento']
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
            A Rota Certa Logtech é uma empresa de logística focada no serviço de last-mile, 
            a etapa final e mais crítica da entrega para o setor de e-commerce. 
            Atuamos em grandes capitais conectando lojas virtuais aos seus consumidores finais.
          </p>
        </div>

        {/* Current Problems */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-destructive/10 border border-destructive/30 rounded-full mb-6">
              <span className="text-destructive font-semibold text-sm">⚠️ DESAFIOS ATUAIS</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Problemas ou Desafios <span className="text-destructive">Enfrentados Atualmente</span>
            </h3>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A empresa enfrenta sérios desafios operacionais que impactam custos, produtividade 
              e satisfação dos clientes. Estes problemas precisam ser resolvidos através da 
              implementação de soluções tecnológicas adequadas:
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
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border-2 border-blue-500/30 rounded-xl">
              <p className="text-sm md:text-base text-foreground font-semibold mb-2">
                💡 <span className="text-blue-600">PROPOSTA DE SOLUÇÃO</span>
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                Apresentamos um plano de implementação tecnológica para resolver estes desafios
              </p>
            </div>
          </div>
        </div>

        {/* Services Offered */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-nexus-primary/10 border border-nexus-primary/30 rounded-full mb-6">
              <span className="text-nexus-primary font-semibold text-sm">📦 SERVIÇOS OFERECIDOS</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Principais Produtos ou <span className="text-nexus-primary">Serviços</span> Oferecidos
            </h3>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              O serviço principal é a coleta de pacotes nos centros de distribuição de nossos clientes 
              (lojas virtuais) e a realização da entrega rápida e eficiente ao consumidor final
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
              Descubra como a transformação digital pode revolucionar sua operação logística, 
              eliminar problemas críticos e aumentar significativamente a eficiência operacional.
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