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
      practice: 'Equipe DevOps e Desenvolvimento',
      description: 'Engenheiro DevOps Senior + Desenvolvedor Full-Stack Pleno para gestão AWS, evolução do app Flutter e manutenção',
      benefit: 'Desenvolvimento e infraestrutura geridos internamente'
    },
    {
      practice: 'Gestão de Integrações',
      description: 'Analista de Integrações Pleno focado nas APIs entre Shopify, SAP ERP e aplicativo Flutter',
      benefit: 'Sincronização automática e monitoramento contínuo'
    },
    {
      practice: 'Segurança e Conformidade LGPD',
      description: 'Ferramentas de segurança, monitoramento AWS e Microsoft Intune para gestão de 55 dispositivos móveis',
      benefit: 'Proteção de dados e conformidade automatizada'
    },
    {
      practice: 'Infraestrutura AWS Escalável',
      description: 'Servidores EC2, PostgreSQL RDS, S3, CloudFront com backup automático e alta disponibilidade',
      benefit: 'Escalabilidade e resiliência para crescimento B2C'
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