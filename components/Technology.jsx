import { Cloud, Shield, Zap, Database, Smartphone, MapPin, Camera, Phone, Lock, Monitor, Server, BarChart3 } from 'lucide-react';

export default function Technology() {
  const softwareSolutions = [
    {
      icon: MapPin,
      title: 'Oracle Fusion Cloud SCM (Módulo de Logística)',
      description: 'Plataforma líder global em Supply Chain que oferece módulos de IA/ML para otimização e previsão. Sua robustez e capacidade de integração via APIs a tornam a escolha ideal para uma empresa que planeja atender grandes clientes corporativos e escalar suas operações sem gargalos.',
      features: ['Roteirização com IA/ML para otimização', 'Previsão de demanda inteligente', 'Gestão de pátio e execução logística', 'APIs robustas para integração corporativa'],
      recommended: 'Plataforma de Execução Logística (LEP) que automatiza roteirização, oferece previsão de demanda e possui ecossistema de APIs para conexão com sistemas de grandes clientes'
    },
    {
      icon: Database,
      title: 'Snowflake - Data Warehouse',
      description: 'Plataforma de dados em nuvem de referência no mercado, projetada para performance e escalabilidade quase infinitas. Servirá como o data warehouse central, ingerindo dados do Oracle SCM, Salesforce e outras fontes para prover uma visão unificada do negócio.',
      features: ['Repositório central unificando logística, vendas e finanças', 'Performance e escalabilidade infinitas', 'Análises preditivas e insights de rentabilidade', 'Single Source of Truth para toda empresa'],
      recommended: 'Plataforma Centralizada de Dados e Analytics que unifica informações e permite análises preditivas sobre rentabilidade e eficiência'
    },
    {
      icon: BarChart3,
      title: 'Tableau - Business Intelligence',
      description: 'Líder no quadrante mágico do Gartner, o Tableau se conectará ao Snowflake para transformar dados brutos em dashboards interativos e análises visuais poderosas, permitindo que a gestão tome decisões estratégicas com base em inteligência de dados.',
      features: ['Dashboards interativos e análises visuais', 'Conexão nativa com Snowflake', 'Transformação de dados em insights estratégicos', 'Decisões baseadas em inteligência de dados'],
      recommended: 'Ferramenta de BI líder de mercado para visualização de dados e análises avançadas'
    },
    {
      icon: Camera,
      title: 'Salesforce Sales Cloud - CRM',
      description: 'Como plataforma de CRM nº 1 do mundo, o Salesforce oferece a escalabilidade, o ecossistema e as automações necessárias para gerenciar um processo de vendas B2B complexo e garantir a excelência no relacionamento com os clientes.',
      features: ['Gestão completa do ciclo de vida B2B', 'Automações avançadas de vendas', 'Visão 360º dos clientes', 'Integração com ecossistema de dados'],
      recommended: 'Plataforma de Gestão do Engajamento de Clientes Enterprise desde prospecção até gestão de contratos e suporte pós-venda'
    }
  ];

  const infrastructure = [
    {
      service: 'Arquitetura Multi-Cloud',
      description: 'Utilização da Oracle Cloud Infrastructure (OCI) para o SCM e AWS para hospedar a plataforma de dados Snowflake e desenvolver possíveis aplicações customizadas, garantindo que cada sistema rode em seu ambiente otimizado.',
      benefit: 'Máxima performance, resiliência e evita dependência de fornecedor único (vendor lock-in)'
    },
    {
      service: 'Microsoft Intune - UEM',
      description: 'Solução líder em Gerenciamento Unificado de Endpoints que permite a aplicação de políticas de segurança de alto nível, garantindo o controle e a proteção dos dados da empresa nos dispositivos móveis.',
      benefit: 'Gestão e segurança unificada de endpoints móveis com políticas robustas'
    },
    {
      service: 'Datadog - SIEM',
      description: 'Sistema de monitoramento de segurança em tempo real (SIEM) que monitora e alerta sobre qualquer atividade suspeita em todo o ecossistema de nuvem.',
      benefit: 'Monitoramento proativo de segurança com alertas em tempo real'
    },
    {
      service: 'Okta - Identity Management',
      description: 'Plataforma de Gestão de Identidade que centraliza e protege o acesso dos funcionários a todas as plataformas através de Single Sign-On (SSO).',
      benefit: 'Controle centralizado de acesso com SSO e princípio do menor privilégio'
    }
  ];

  const mobileInfrastructure = [
    {
      icon: Phone,
      title: 'Smartphones Corporativos',
      description: 'Aquisição de 80 smartphones corporativos para toda equipe com planos de dados móveis para conectividade contínua',
      specs: ['80 aparelhos corporativos', 'Conectividade 4G/5G', 'GPS de alta precisão', 'Aplicativos corporativos']
    },
    {
      icon: Zap,
      title: 'Planos de Dados Móveis',
      description: 'Planos corporativos com dados ilimitados para garantir transmissão contínua de GPS, fotos e dados críticos',
      specs: ['80 linhas corporativas', 'Dados ilimitados', 'Cobertura nacional', 'Prioridade de rede']
    },
    {
      icon: Lock,
      title: 'Microsoft Intune - MDM',
      description: 'Plataforma de gerenciamento unificado de endpoints que permite gestão centralizada, políticas de segurança e proteção contra vazamento de dados',
      specs: ['Gestão remota de dispositivos', 'Políticas de segurança corporativa', 'Separação dados corporativos/pessoais', 'Wipe remoto em caso de perda']
    }
  ];

  const governancePractices = [
    {
      practice: 'ITIL 4 via Jira Service Management',
      description: 'Gestão profissional de serviços de TI com processo claro e auditável para suporte tecnológico',
      benefit: 'Gestão de incidentes, requisições e mudanças estruturada'
    },
    {
      practice: 'ISO/IEC 27001',
      description: 'Conformidade contínua utilizando ferramentas nativas de segurança dos provedores de nuvem',
      benefit: 'Monitoramento e relatórios de aderência às políticas de segurança'
    },
    {
      practice: 'LGPD Compliance',
      description: 'Conformidade automatizada com classificação de dados, gestão de consentimento e geração de evidências',
      benefit: 'Processo contínuo e automatizado de conformidade com LGPD'
    },
    {
      practice: 'Controle de Acesso RBAC/ABAC',
      description: 'Sistema granular de controle de acesso baseado em papel, departamento e contexto',
      benefit: 'Segurança máxima com permissões contextuais e auditáveis'
    }
  ];

  const securityPractices = [
    {
      icon: Shield,
      title: 'Monitoramento 24/7',
      description: 'SIEM com Datadog monitora continuamente todo ambiente',
      implementation: 'Alertas em tempo real de atividades suspeitas'
    },
    {
      icon: Lock,
      title: 'Single Sign-On',
      description: 'Okta centraliza acesso a todas plataformas',
      implementation: 'SSO com autenticação multifator'
    },
    {
      icon: Monitor,
      title: 'Compliance Automatizado',
      description: 'Conformidade com ISO 27001 e LGPD',
      implementation: 'Relatórios automáticos de auditoria'
    }
  ];

  return (
    <section id="tecnologia" className="min-h-screen py-20 section-gradient flex flex-col justify-center">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Proposta de <span className="text-gradient">Solução Tecnológica</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Plano de implementação tecnológica enterprise projetado para resolver os desafios 
            de forma integrada e escalável, com foco em grandes clientes corporativos.
          </p>
        </div>

        {/* Software Solutions */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            Softwares Recomendados
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {softwareSolutions.map((system, index) => {
              const SystemIcon = system.icon;
              return (
                <div key={index} className="card-hover hover-lift">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-nexus-primary to-nexus-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <SystemIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2">{system.title}</h4>
                      <p className="text-muted-foreground leading-relaxed text-sm">{system.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {system.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-nexus-primary rounded-full mr-3"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-nexus-primary/5 border border-nexus-primary/20 rounded-lg">
                    <p className="text-sm text-nexus-primary font-semibold mb-1">Motivo:</p>
                    <p className="text-sm text-muted-foreground">{system.recommended}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Infrastructure Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-r from-nexus-primary to-nexus-accent rounded-xl flex items-center justify-center mx-auto mb-6">
              <Cloud className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Infraestrutura Sugerida</h3>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Arquitetura Multi-Cloud com Oracle Cloud Infrastructure e AWS para máxima performance e resiliência
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {infrastructure.map((service, index) => (
              <div key={index} className="card-hover hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-nexus-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{service.service}</h4>
                    <p className="text-muted-foreground mb-3 text-sm">{service.description}</p>
                    <div className="p-3 bg-nexus-primary/5 rounded-lg">
                      <p className="text-sm text-nexus-primary font-semibold">Benefício:</p>
                      <p className="text-sm text-muted-foreground">{service.benefit}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Infrastructure */}
          <div className="mt-12">
            <h4 className="text-xl font-bold text-center mb-8 text-foreground">Infraestrutura Móvel</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mobileInfrastructure.map((item, index) => {
                const ItemIcon = item.icon;
                return (
                  <div key={index} className="card-hover text-center hover-lift">
                    <div className="w-16 h-16 bg-gradient-to-r from-nexus-secondary to-nexus-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                      <ItemIcon className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="text-xl font-bold mb-4 text-foreground">{item.title}</h5>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{item.description}</p>
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
        </div>

        {/* Governance Practices */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            Modelo de Gestão e Governança
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {governancePractices.map((item, index) => (
              <div key={index} className="card-hover hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-nexus-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{item.practice}</h4>
                    <p className="text-muted-foreground mb-3 text-sm">{item.description}</p>
                    <div className="p-3 bg-nexus-secondary/5 rounded-lg">
                      <p className="text-xs text-nexus-secondary font-semibold">Benefício:</p>
                      <p className="text-xs text-muted-foreground">{item.benefit}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security */}
        <div className="bg-card rounded-2xl p-8 shadow-card">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Segurança da Informação
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Implementação de SIEM com Datadog e gestão de identidade com Okta para postura de segurança proativa
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
