import { Cloud, Shield, Zap, Database, Smartphone, MapPin, Camera, Phone, Lock, Monitor, Server } from 'lucide-react';

export default function Technology() {
  const tmsSystems = [
    {
      icon: Smartphone,
      title: 'Aplicativo Flutter (Mobile)',
      description: 'Aplicativo desenvolvido internamente em Flutter com roteirização por IA, captura digital de comprovantes (foto + assinatura), rastreamento GPS em tempo real e comunicação integrada. Backend em TypeScript e banco de dados PostgreSQL hospedados na AWS.',
      features: ['Roteirização com IA/ML integrada', 'Captura digital: foto + assinatura', 'Rastreamento GPS em tempo real', 'Backend TypeScript + PostgreSQL AWS'],
      recommended: 'Solução desenvolvida sob medida para as necessidades específicas da operação, com total controle sobre funcionalidades e evolução contínua pela equipe interna'
    },
    {
      icon: Database,
      title: 'APIs de Integração (REST)',
      description: 'APIs REST desenvolvidas internamente para integração completa entre Shopify (e-commerce B2B), SAP ERP (gestão empresarial) e aplicativo Flutter, garantindo sincronização automática de pedidos, estoque, entregas e faturamento em tempo real.',
      features: ['API Shopify ↔ SAP ERP', 'API SAP ↔ App Flutter', 'API Shopify ↔ App Flutter', 'Webhooks e sincronização em tempo real'],
      recommended: 'Ecossistema totalmente integrado elimina retrabalho manual, reduz erros e permite visibilidade completa da operação desde o pedido até a entrega final'
    },
    {
      icon: MapPin,
      title: 'Shopify (E-commerce B2B)',
      description: 'Plataforma de e-commerce líder mundial onde farmácias, perfumarias e supermercados realizam pedidos de produtos de marcas líderes. Integração via APIs com SAP ERP e aplicativo Flutter para sincronização automática e rastreamento.',
      features: ['Catálogo completo de produtos', 'Checkout B2B personalizado', 'Integração via APIs REST', 'Taxa: R$ 300 fixo + 0,5% sobre vendas'],
      recommended: 'Plataforma robusta e escalável que oferece excelente experiência de compra B2B com baixo custo operacional e integrações nativas via APIs'
    },
    {
      icon: Server,
      title: 'SAP ERP (Gestão Empresarial)',
      description: 'Sistema ERP líder mundial para gestão completa de vendas, estoque, logística e financeiro. Integrado via APIs ao Shopify e aplicativo Flutter, centralizando toda a operação empresarial com governança e conformidade.',
      features: ['Módulos: vendas, estoque, logística, financeiro', 'Integração via APIs REST', 'Governança e conformidade', 'Licença anual: R$ 180.000'],
      recommended: 'Plataforma enterprise robusta que garante controle total sobre processos críticos e prepara a empresa para crescimento e expansão B2C'
    }
  ];

  const itilPractices = [
    {
      practice: 'ITIL: Gestão de Incidentes',
      description: 'Service Desk estruturado com processo ITIL 4 para resolver rapidamente problemas técnicos (ex: app travado, API fora do ar). Tickets priorizados por impacto e urgência.',
      benefit: 'Resolução rápida com SLA definido e documentação'
    },
    {
      practice: 'ITIL: Gestão de Mudanças',
      description: 'Processo formal para deploy de novas versões do app Flutter, atualizações de APIs e mudanças na infraestrutura AWS, com testes, aprovação e plano de rollback.',
      benefit: 'Estabilidade do sistema e redução de riscos'
    },
    {
      practice: 'COBIT: Alinhamento TI-Negócio',
      description: 'TI desenvolvida para suportar estratégia de expansão B2C. Decisões tecnológicas baseadas em objetivos de negócio, ROI e prioridades estratégicas da empresa.',
      benefit: 'TI como enabler do crescimento e competitividade'
    },
    {
      practice: 'COBIT: Gestão de Riscos e Compliance',
      description: 'Avaliação contínua de riscos de segurança, conformidade LGPD, backup/disaster recovery e proteção de dados sensíveis. Auditorias periódicas e controles documentados.',
      benefit: 'Conformidade legal e proteção contra incidentes'
    },
    {
      practice: 'ITIL: Gestão de Configuração',
      description: 'Inventário completo de ativos de TI: 55 smartphones, servidores AWS, licenças SAP/Shopify, versões do app Flutter. CMDB atualizado para rastreabilidade total.',
      benefit: 'Controle de ativos e rastreabilidade'
    },
    {
      practice: 'COBIT: Medição de Desempenho',
      description: 'KPIs definidos para avaliar desempenho de TI: disponibilidade de sistemas, tempo médio de resposta, taxa de sucesso de deploy, satisfação de usuários.',
      benefit: 'Melhoria contínua baseada em métricas'
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
      title: 'Smartphones Corporativos (55 unidades)',
      description: 'Aquisição de 55 smartphones corporativos para entregadores e gestores, gerenciados pela plataforma Microsoft Intune (MDM) para aplicação de políticas de segurança e proteção de dados em campo.',
      specs: ['55 smartphones corporativos', 'Microsoft Intune (MDM): R$ 1.800/mês', 'Políticas de segurança aplicadas', 'Wipe remoto em caso de perda/roubo']
    },
    {
      icon: Zap,
      title: 'Infraestrutura AWS Completa',
      description: 'Infraestrutura completa na AWS incluindo servidores EC2 (backend TypeScript), banco PostgreSQL RDS, storage S3, CDN CloudFront, backup automático e alta disponibilidade em múltiplas zonas.',
      specs: ['EC2: backend TypeScript', 'PostgreSQL RDS: banco de dados', 'S3 + CloudFront: storage e CDN', 'Custo mensal: R$ 8.000']
    },
    {
      icon: Lock,
      title: 'Segurança e Monitoramento',
      description: 'Ferramentas de segurança e monitoramento para proteção da infraestrutura AWS, dados sensíveis e conformidade com LGPD, incluindo alertas em tempo real e análise de logs.',
      specs: ['Monitoramento AWS 24/7', 'Ferramentas de segurança: R$ 3.500/mês', 'Conformidade LGPD', 'Backup automático e disaster recovery']
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
            Ecossistema tecnológico próprio desenvolvido internamente: aplicativo Flutter com IA, 
            APIs de integração robustas (Shopify-SAP-App) e infraestrutura AWS escalável.
          </p>
        </div>

        {/* TMS Solutions */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            Plataformas Tecnológicas do Ecossistema
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
            <h3 className="text-2xl font-bold mb-4 text-foreground">Infraestrutura AWS e Gestão</h3>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Infraestrutura 100% na nuvem AWS eliminando servidores locais, com equipe interna qualificada para gestão, desenvolvimento e evolução contínua
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

        {/* Governance Frameworks Introduction */}
        <div className="mb-12 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-2xl p-8 border-2 border-green-200 dark:border-green-800">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            🏛️ Frameworks de Governança de TI
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-green-500">
              <h4 className="text-xl font-bold text-green-600 dark:text-green-400 mb-3">📚 ITIL (Information Technology Infrastructure Library)</h4>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                <strong>Framework de Gerenciamento de Serviços de TI</strong> que define as melhores práticas para 
                entregar serviços de TI com qualidade. Inclui processos como gestão de incidentes, mudanças, 
                problemas e configuração. ITIL 4 é a versão mais recente, focada em entrega ágil e DevOps.
              </p>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-xs text-muted-foreground">Gestão de Incidentes e Problemas</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-xs text-muted-foreground">Gestão de Mudanças e Releases</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-xs text-muted-foreground">Service Desk e Catálogo de Serviços</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
              <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">🎯 COBIT (Control Objectives for Information and Related Technologies)</h4>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                <strong>Framework de Governança Corporativa de TI</strong> que alinha TI aos objetivos de negócio. 
                Foca em conformidade, gestão de riscos, segurança da informação e entrega de valor. Define controles, 
                processos e métricas para garantir que TI suporte a estratégia empresarial.
              </p>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-xs text-muted-foreground">Alinhamento TI com Negócio</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-xs text-muted-foreground">Gestão de Riscos e Conformidade</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-xs text-muted-foreground">Medição de Desempenho e Valor</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ITIL Practices */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            Aplicação de ITIL e COBIT no Projeto
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itilPractices.map((item, index) => {
              const isITIL = item.practice.startsWith('ITIL');
              const borderColor = isITIL ? 'border-green-500' : 'border-blue-500';
              const bgColor = isITIL ? 'bg-green-500/5' : 'bg-blue-500/5';
              const textColor = isITIL ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400';
              
              return (
                <div key={index} className={`card-hover hover-lift border-l-4 ${borderColor}`}>
                  <div className="p-4">
                    <h4 className={`text-base md:text-lg font-bold mb-3 ${textColor}`}>{item.practice}</h4>
                    <p className="text-muted-foreground mb-4 text-xs md:text-sm leading-relaxed">{item.description}</p>
                    <div className={`p-3 ${bgColor} rounded-lg`}>
                      <p className={`text-xs font-semibold ${textColor} mb-1`}>✓ Benefício:</p>
                      <p className="text-xs text-muted-foreground">{item.benefit}</p>
                    </div>
                  </div>
                </div>
              );
            })}
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