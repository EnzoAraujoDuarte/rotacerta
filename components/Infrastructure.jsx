import { Server, Shield, Cloud, Zap, Monitor, Lock, Users, Phone } from 'lucide-react';

export default function Infrastructure() {
  const saasAdvantages = [
    {
      service: 'Zero Servidores Locais (Cloud-First)',
      description: 'Toda infraestrutura tecnológica (TMS, banco de dados, APIs, dashboards) hospedada na nuvem AWS/Azure pelo fornecedor, com redundância geográfica e alta disponibilidade garantida por SLA de 99.95%',
      benefit: 'Zero CAPEX em hardware de TI, apenas OPEX mensal previsível'
    },
    {
      service: 'Atualizações Automáticas e Contínuas',
      description: 'Releases quinzenais de novas funcionalidades, correções de bugs e melhorias de performance aplicadas automaticamente durante madrugadas, sem janelas de manutenção ou interrupção do serviço',
      benefit: 'Sempre na última versão com zero intervenção da equipe interna'
    },
    {
      service: 'Escalabilidade Elástica e Instantânea',
      description: 'Infraestrutura dimensiona automaticamente conforme demanda (Black Friday, Natal). De 50 para 150 entregadores sem necessidade de provisionamento prévio ou alteração de contrato',
      benefit: 'Modelo pay-per-use: pague apenas pelos usuários ativos mensalmente'
    },
    {
      service: 'Backup Automático e Disaster Recovery',
      description: 'Backup incremental a cada 4 horas, replicação síncrona em 3 zonas de disponibilidade AWS, RPO de 4h e RTO de 1h em caso de falha catastrófica. Testes de DR trimestrais',
      benefit: 'SLA de 99.95% de disponibilidade garantido contratualmente'
    }
  ];

  const mobileInfrastructure = [
    {
      icon: Phone,
      title: 'Smartphones Corporativos Robustos',
      description: 'Dispositivos profissionais Samsung Galaxy XCover Pro ou Motorola Defy (IP68, MIL-STD-810H) preparados para uso intensivo em campo com quedas, água e temperatura extrema',
      specs: ['Certificação IP68 (água/poeira)', 'Bateria 5000mAh (2 dias de autonomia)', 'GPS multi-constelação (precisão 3m)', 'Tela 6.3" legível sob sol direto']
    },
    {
      icon: Zap,
      title: 'Conectividade 4G/5G Corporativa',
      description: 'Planos corporativos Vivo/Claro M2M (Machine-to-Machine) com dados ilimitados, IP fixo, APN dedicada e prioridade de rede para garantir transmissão contínua de GPS e fotos',
      specs: ['Cobertura 4G/5G em 5 capitais + região metropolitana', 'Dados ilimitados (fair use 100GB/linha)', 'Prioridade QoS em horário comercial', 'NOC 24x7 com SLA de 4h']
    },
    {
      icon: Lock,
      title: 'MDM - Mobile Device Management',
      description: 'Plataforma VMware Workspace ONE ou Microsoft Intune para gestão centralizada de 50 smartphones, permitindo instalação remota, políticas de segurança, wipe em caso de roubo e inventário de ativos',
      specs: ['Deploy remoto de apps (OTA)', 'Wipe/lock remoto em caso de perda/roubo', 'Políticas: senha obrigatória, criptografia', 'Dashboard de inventário e health de dispositivos']
    }
  ];

  const managementModel = {
    internal: {
      title: 'Equipe Interna',
      role: 'Estratégica',
      responsibilities: [
        'Analista de Operações - Monitoramento de dashboards',
        'Coordenador de Logística - Gestão de entregas',
        'Supervisor de Frota - Gestão de entregadores',
        'Gerente de TI - Ponto focal com fornecedor TMS'
      ],
      investment: 'R$ 35.000/mês'
    },
    outsourced: {
      title: 'Serviços Terceirizados',
      role: 'Operacional',
      responsibilities: [
        'Gestão da Plataforma TMS (drivin/Lincros)',
        'Suporte técnico aos entregadores 24/7',
        'Manutenção de smartphones e MDM',
        'Gestão de planos de dados e conectividade',
        'Treinamento de novos entregadores'
      ],
      investment: 'R$ 45.000/mês (TMS + suporte)'
    }
  };

  const securityPractices = [
    {
      icon: Shield,
      title: 'Autenticação Segura',
      description: 'Login com credenciais únicas e senha forte para cada entregador',
      implementation: 'Integrado no app do entregador'
    },
    {
      icon: Lock,
      title: 'Criptografia de Dados',
      description: 'Todos os dados transmitidos e armazenados são criptografados',
      implementation: 'TLS 1.3 e criptografia em repouso'
    },
    {
      icon: Monitor,
      title: 'Auditoria e Compliance',
      description: 'Logs de acesso e conformidade com LGPD',
      implementation: 'Relatórios automáticos de auditoria'
    }
  ];

  return (
    <section id="infraestrutura" className="min-h-screen py-20 bg-background flex flex-col justify-center">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Infraestrutura <span className="text-gradient">Cloud SaaS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A Rota Certa Logtech adotou modelo 100% Cloud SaaS (Software as a Service) para sua 
            infraestrutura tecnológica, eliminando completamente a necessidade de servidores locais, 
            data centers próprios ou equipe de infraestrutura de TI. Todo investimento foi direcionado 
            para equipar 50 entregadores com smartphones corporativos robustos, planos de dados 4G/5G 
            ilimitados e sistema MDM (Mobile Device Management) para gestão centralizada dos dispositivos.
          </p>
        </div>

        {/* SaaS Advantages */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-r from-nexus-primary to-nexus-accent rounded-xl flex items-center justify-center mx-auto mb-6">
              <Cloud className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Modelo SaaS (Software as a Service)</h3>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Infraestrutura completamente gerenciada pelo fornecedor, sem necessidade de TI local
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {saasAdvantages.map((service, index) => (
              <div key={index} className="card-hover hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-nexus-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{service.service}</h4>
                    <p className="text-muted-foreground mb-3">{service.description}</p>
                    <div className="p-3 bg-nexus-primary/5 rounded-lg">
                      <p className="text-sm text-nexus-primary font-semibold">Benefício:</p>
                      <p className="text-sm text-muted-foreground">{service.benefit}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Infrastructure */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Infraestrutura Móvel</h3>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Foco em equipar todos os entregadores com smartphones corporativos e conectividade premium
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mobileInfrastructure.map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <div key={index} className="card-hover text-center hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-r from-nexus-secondary to-nexus-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                    <ItemIcon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
                  <div className="space-y-2">
                    {item.specs.map((spec, idx) => (
                      <div key={idx} className="text-sm text-muted-foreground flex items-center justify-center">
                        <div className="w-2 h-2 bg-nexus-secondary rounded-full mr-2"></div>
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Management Model */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Modelo de Gestão Terceirizado
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Internal Team */}
            <div className="card-hover hover-lift">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-2xl font-bold text-foreground">{managementModel.internal.title}</h4>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-nexus-primary/10 text-nexus-primary">
                  Foco {managementModel.internal.role}
                </span>
              </div>
              
              <div className="mb-6">
                <h5 className="font-semibold text-foreground mb-3">Responsabilidades:</h5>
                <ul className="space-y-2">
                  {managementModel.internal.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-nexus-primary rounded-full mr-3 mt-2"></div>
                      <span className="text-muted-foreground text-sm">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-gradient-to-r from-nexus-primary/5 to-nexus-accent/5 rounded-lg border border-nexus-primary/20">
                <p className="text-lg font-bold text-nexus-primary">{managementModel.internal.investment}</p>
                <p className="text-sm text-muted-foreground">Custo mensal estimado</p>
              </div>
            </div>

            {/* Outsourced Services */}
            <div className="card-hover hover-lift">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-2xl font-bold text-foreground">{managementModel.outsourced.title}</h4>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-nexus-secondary/10 text-nexus-secondary">
                  Foco {managementModel.outsourced.role}
                </span>
              </div>
              
              <div className="mb-6">
                <h5 className="font-semibold text-foreground mb-3">Responsabilidades:</h5>
                <ul className="space-y-2">
                  {managementModel.outsourced.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-nexus-secondary rounded-full mr-3 mt-2"></div>
                      <span className="text-muted-foreground text-sm">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-gradient-to-r from-nexus-secondary/5 to-nexus-primary/5 rounded-lg border border-nexus-secondary/20">
                <p className="text-lg font-bold text-nexus-secondary">{managementModel.outsourced.investment}</p>
                <p className="text-sm text-muted-foreground">Custo mensal estimado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Security Practices */}
        <div className="bg-card rounded-2xl p-8 shadow-card">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Segurança e Compliance
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Práticas de segurança para proteger dados e garantir conformidade com LGPD
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityPractices.map((practice, index) => {
              const PracticeIcon = practice.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-nexus-primary to-nexus-accent rounded-xl flex items-center justify-center mx-auto mb-6">
                    <PracticeIcon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{practice.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{practice.description}</p>
                  <div className="p-3 bg-background rounded-lg border border-border">
                    <p className="text-xs text-muted-foreground">{practice.implementation}</p>
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