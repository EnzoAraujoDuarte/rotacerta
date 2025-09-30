import { Mail, Phone, MapPin, Calendar, Download, MessageSquare } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Corporativo',
      value: 'contato@rotacerta.com.br',
      description: 'Resposta em até 24 horas'
    },
    {
      icon: Phone,
      title: 'Telefone Comercial',
      value: '+55 (11) 4000-0000',
      description: 'Atendimento de segunda a sexta, 8h às 18h'
    },
    {
      icon: MapPin,
      title: 'Áreas de Atuação',
      value: 'SP, RJ, BH, Curitiba e Brasília',
      description: '5 capitais brasileiras'
    }
  ];

  const ctaOptions = [
    {
      icon: Calendar,
      title: 'Agendar Demonstração',
      description: 'Veja nossa plataforma TMS e app do entregador em funcionamento',
      action: 'Agendar Demo',
      style: 'btn-hero'
    },
    {
      icon: MessageSquare,
      title: 'Falar com Especialista',
      description: 'Consulte nossos especialistas sobre implementação e benefícios',
      action: 'Iniciar Conversa',
      style: 'btn-secondary'
    },
    {
      icon: Download,
      title: 'Download da Proposta',
      description: 'Baixe o documento completo com todos os detalhes do projeto',
      action: 'Baixar PDF',
      style: 'btn-outline'
    }
  ];

  const departments = [
    {
      name: 'Comercial',
      contact: 'vendas@rotacerta.com.br',
      focus: 'Novas parcerias e soluções para e-commerce'
    },
    {
      name: 'Operações',
      contact: 'operacoes@rotacerta.com.br',
      focus: 'Gestão de entregas e logística'
    },
    {
      name: 'Tecnologia',
      contact: 'ti@rotacerta.com.br',
      focus: 'Integração de sistemas e plataforma TMS'
    },
    {
      name: 'Atendimento ao Cliente',
      contact: 'suporte@rotacerta.com.br',
      focus: 'Suporte operacional e rastreamento de entregas'
    }
  ];

  return (
    <section id="contato" className="min-h-screen py-20 section-gradient flex flex-col justify-center">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Estamos prontos para transformar sua operação logística. Escolha a melhor forma de 
            iniciar sua jornada com a Rota Certa Logtech.
          </p>
        </div>

        {/* Main CTAs */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ctaOptions.map((option, index) => {
              const OptionIcon = option.icon;
              return (
                <div key={index} className="card-hover text-center hover-lift group">
                  <div className="w-16 h-16 bg-gradient-to-r from-nexus-primary to-nexus-accent rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <OptionIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{option.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{option.description}</p>
                  <button className={`${option.style} w-full`}>
                    {option.action}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Methods */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-8">
              Informações de Contato
            </h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const MethodIcon = method.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-card rounded-lg border border-border hover:border-nexus-primary/40 transition-colors duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-nexus-primary to-nexus-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <MethodIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{method.title}</h4>
                      <p className="text-nexus-primary font-medium mb-1">{method.value}</p>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-8">
              Departamentos Especializados
            </h3>
            <div className="space-y-4">
              {departments.map((dept, index) => (
                <div key={index} className="p-4 bg-card rounded-lg border border-border hover:border-nexus-primary/40 transition-colors duration-300">
                  <h4 className="font-semibold text-foreground mb-2">{dept.name}</h4>
                  <p className="text-nexus-primary font-medium text-sm mb-2">{dept.contact}</p>
                  <p className="text-sm text-muted-foreground">{dept.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <h3 className="text-2xl font-bold text-center text-foreground mb-6">
              Envie uma Mensagem Rápida
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:border-nexus-primary focus:ring-2 focus:ring-nexus-primary/20 transition-colors duration-300"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:border-nexus-primary focus:ring-2 focus:ring-nexus-primary/20 transition-colors duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Empresa</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:border-nexus-primary focus:ring-2 focus:ring-nexus-primary/20 transition-colors duration-300"
                    placeholder="Nome da empresa"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Interesse</label>
                  <select className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:border-nexus-primary focus:ring-2 focus:ring-nexus-primary/20 transition-colors duration-300">
                    <option>Entrega Last-Mile</option>
                    <option>Implementação TMS</option>
                    <option>Consultoria Logística</option>
                    <option>Parceria Comercial</option>
                    <option>Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Mensagem</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:border-nexus-primary focus:ring-2 focus:ring-nexus-primary/20 transition-colors duration-300"
                  placeholder="Conte-nos mais sobre sua necessidade..."
                ></textarea>
              </div>

              <button type="submit" className="btn-hero w-full">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-nexus-primary/10 border border-nexus-primary/20 rounded-full">
            <div className="w-3 h-3 bg-nexus-primary rounded-full animate-pulse mr-3"></div>
            <span className="text-nexus-primary font-medium">
              Resposta garantida em até 24 horas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}