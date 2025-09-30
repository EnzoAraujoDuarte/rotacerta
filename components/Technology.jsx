import { Cloud, Shield, Zap, Database, Smartphone, MapPin, Camera, Phone, Lock, Monitor, Server } from 'lucide-react';

export default function Technology() {
  const tmsSystems = [
    {
      icon: MapPin,
      title: 'Oracle Fusion Cloud SCM (Módulo Logística)',
      description: 'Plataforma líder global em Supply Chain com módulos de IA/ML para otimização e previsão logística. Robustez e capacidade de integração via APIs com Shopify, SAP ERP e aplicativo interno de entregas (Flutter/TypeScript/PostgreSQL), ideal para escalar operações sem gargalos.',
      features: ['Roteirização com IA/ML e previsão de demanda', 'Integração nativa via APIs REST', 'Gestão de pátio e execução logística', 'Escalabilidade para grandes clientes corporativos'],
      recommended: 'Plataforma de classe mundial projetada para empresas que atendem grandes clientes corporativos, oferecendo recursos avançados de previsão e otimização com IA'
    },
    {
      icon: Database,
      title: 'Snowflake Data Warehouse',
      description: 'Plataforma de dados em nuvem de referência no mercado, projetada para performance e escalabilidade. Servirá como data warehouse central, ingerindo dados do Shopify, SAP ERP, banco PostgreSQL do app de entregas e Oracle SCM para visão unificada do negócio.',
      features: ['Repositório centralizado (single source of truth)', 'Integração com Shopify, SAP, PostgreSQL e Oracle', 'Performance e escalabilidade em nuvem', 'Governança de dados e conformidade LGPD'],
      recommended: 'Elimina ambiguidade de planilhas departamentais e consolida toda a informação em uma única fonte confiável para decisões estratégicas'
    },
    {
      icon: Camera,
      title: 'Tableau (Business Intelligence)',
      description: 'Líder no quadrante mágico do Gartner, o Tableau se conecta ao Snowflake para transformar dados brutos em dashboards interativos e análises visuais poderosas, permitindo que a gestão tome decisões estratégicas com base em inteligência de dados em tempo real.',
      features: ['Dashboards interativos em tempo real', 'Conexão nativa com Snowflake', 'Análises visuais avançadas', 'KPIs: OTIF, custo por entrega, taxa de sucesso'],
      recommended: 'Proporciona visibilidade completa sobre indicadores críticos (OTIF, custo por entrega, taxa de sucesso na primeira tentativa) permitindo ações corretivas rápidas'
    },
    {
      icon: Smartphone,
      title: 'Salesforce Sales Cloud (CRM)',
      description: 'Plataforma de CRM nº 1 do mundo, oferece escalabilidade e automações para gerenciar processo de vendas B2B complexo e garantir excelência no relacionamento com clientes. Integração nativa com Shopify e visão 360º do ciclo de vida dos clientes.',
      features: ['Gestão completa do ciclo de vida B2B', 'Integração nativa com Shopify', 'Automações avançadas de vendas', 'Gestão de contratos e suporte pós-venda'],
      recommended: 'Essencial para gerenciar relacionamento com grandes clientes corporativos (farmácias, perfumarias, supermercados) e garantir cumprimento de SLAs contratuais'
    }
  ];

  const itilPractices = [
    {
      practice: 'ITIL 4 via Jira Service Management',
      description: 'Gestão profissional de incidentes, requisições e mudanças com processo claro e auditável',
      benefit: 'Processo estruturado para suporte tecnológico'
    },
    {
      practice: 'ISO/IEC 27001 e LGPD',
      description: 'Conformidade gerenciada via ferramentas nativas de segurança (AWS Security Hub, Oracle Cloud Guard) e SIEM Datadog',
      benefit: 'Monitoramento contínuo de conformidade'
    },
    {
      practice: 'Platform Ops (Equipe Interna)',
      description: 'Engenheiro de Plataforma focado em gerenciar integrações via API entre sistemas (Shopify, SAP, Oracle SCM, app interno)',
      benefit: 'Automações e saúde do ecossistema tecnológico'
    },
    {
      practice: 'Governança de Dados',
      description: 'Controle de acesso granular (RBAC/ABAC) e gestão automatizada de consentimento LGPD',
      benefit: 'Segurança máxima e conformidade automatizada'
    }
  ];

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
      title: 'Smartphones Corporativos (80 unidades)',
      description: 'Aquisição de 80 smartphones corporativos para os colaboradores (30 da gestão/operações + 50 entregadores), gerenciados pela plataforma Microsoft Intune para aplicação de políticas de segurança e proteção de dados',
      specs: ['80 smartphones corporativos', 'Gestão via Microsoft Intune (UEM)', 'Políticas de segurança aplicadas', 'Proteção de dados em campo']
    },
    {
      icon: Zap,
      title: 'Arquitetura Multi-Cloud',
      description: 'Utilização de Oracle Cloud Infrastructure (OCI) para Oracle SCM e AWS para Snowflake, backend TypeScript e banco PostgreSQL do aplicativo, garantindo que cada sistema rode em seu ambiente otimizado sem vendor lock-in',
      specs: ['Oracle Cloud (OCI) para Oracle SCM', 'AWS para Snowflake e app interno', 'Integração entre clouds via APIs', 'Redundância e alta disponibilidade']
    },
    {
      icon: Lock,
      title: 'Segurança com Datadog e Okta',
      description: 'SIEM Datadog para monitoramento de segurança em tempo real em todo ecossistema e Okta como plataforma de gestão de identidade (Single Sign-On) para acesso seguro a Shopify, SAP, Oracle SCM e backend do app',
      specs: ['SIEM Datadog: monitoramento 24/7', 'Okta: SSO e gestão de identidade', 'Alertas de atividades suspeitas', 'Princípio do menor privilégio']
    }
  ];

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
    <section id="tecnologia" className="min-h-screen py-20 section-gradient flex flex-col justify-center">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Soluções de <span className="text-gradient">Tecnologia</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Proposta de solução tecnológica integrada com plataformas de classe mundial 
            (Oracle, Snowflake, Tableau, Salesforce) e infraestrutura multi-cloud robusta.
          </p>
        </div>

        {/* TMS Solutions */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            Softwares Recomendados - Proposta de Solução
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tmsSystems.map((system, index) => {
              const SystemIcon = system.icon;
              return (
                <div key={index} className="card-hover hover-lift">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-nexus-primary to-nexus-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <SystemIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2">{system.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{system.description}</p>
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
                    <p className="text-sm text-nexus-primary font-semibold mb-1">Benefício:</p>
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
            <h3 className="text-2xl font-bold mb-4 text-foreground">Infraestrutura Cloud SaaS</h3>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Modelo 100% Cloud SaaS eliminando necessidade de servidores locais, data centers próprios ou equipe de infraestrutura de TI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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

          {/* Mobile Infrastructure */}
          <div className="mt-12">
            <h4 className="text-xl font-bold text-center mb-8 text-foreground">Infraestrutura Sugerida</h4>
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

        {/* ITIL Practices */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            Modelo de Gestão de TI e Governança
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itilPractices.map((item, index) => (
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