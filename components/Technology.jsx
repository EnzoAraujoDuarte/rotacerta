import { Cloud, Shield, Zap, Database, Smartphone, MapPin, Camera, Phone, Lock, Monitor, Server } from 'lucide-react';

export default function Technology() {
  const tmsSystems = [
    {
      icon: MapPin,
      title: 'TMS - drivin ou Lincros (Cloud SaaS)',
      description: 'Sistema de Gerenciamento de Transporte (TMS) com roteirização automática por IA/ML que analisa histórico de 6 meses, trânsito em tempo real (integração Waze/Google Maps), prioridades de SLA e capacidade de 50 veículos para gerar rotas otimizadas dinamicamente.',
      features: ['Roteirização IA com 35% economia combustível', 'Otimização dinâmica a cada 15min (trânsito)', 'Monitoramento GPS em tempo real (3 em 3 min)', 'Gestão de janelas de entrega e SLA'],
      recommended: 'Drivin e Lincros são líderes brasileiros em TMS para last-mile, com comprovados cases de economia de 30-40% em custos operacionais e aumento de 40-50% na produtividade'
    },
    {
      icon: Smartphone,
      title: 'App do Entregador (Android Nativo)',
      description: 'Aplicativo mobile Android nativo com interface intuitiva que digitaliza completamente o processo de entrega: scan de código de barras, navegação turn-by-turn integrada (Waze), comprovação digital com foto geo-localizada + assinatura na tela, e chat centralizado para comunicação de ocorrências.',
      features: ['POD digital: foto + assinatura + coordenadas GPS', 'Comunicação in-app (substitui WhatsApp)', 'Registro estruturado de ocorrências (8 tipos)', 'Navegação integrada Waze/Google Maps'],
      recommended: 'Eliminou 100% dos canhotos de papel (antes 15% de perda mensal), acelerou ciclo de faturamento de 15 para 2 dias, e aumentou produtividade em 45% ao eliminar tarefas administrativas manuais'
    },
    {
      icon: Database,
      title: 'Dashboard de Gestão (Web Responsivo)',
      description: 'Painel gerencial web responsivo (desktop/tablet) com mais de 40 KPIs em tempo real sincronizados com SAP S/4HANA: taxa de entrega, tempo médio de rota, custo por entrega, produtividade por entregador, SLA, NPS, e heatmaps de ocorrências. Com drill-down para análise granular e exportação para Excel/PDF.',
      features: ['40+ KPIs atualizados em tempo real (5 em 5 min)', 'Integração bidirecional SAP S/4HANA (API REST)', 'Análise de custos: R$/entrega, R$/km, R$/hora', 'Relatórios automáticos diários/semanais/mensais'],
      recommended: 'Proporcionou visibilidade 360° da operação que antes não existia. Gestores conseguem identificar gargalos, entregadores improdutivos e oportunidades de otimização em tempo real, resultando em decisões data-driven que aumentaram margem EBITDA em 12 pontos percentuais'
    },
    {
      icon: Camera,
      title: 'Portal do Cliente + Tracking Público',
      description: 'Portal web white-label para clientes B2B (lojas de e-commerce) com dashboard de pedidos, SLA, e custos. Página de tracking público para consumidores finais com mapa em tempo real, ETA dinâmico (atualizado a cada 5 min), e notificações proativas via SMS/WhatsApp. Integração via Webhook/API REST com Shopify, VTEX e WooCommerce.',
      features: ['Tracking público: mapa tempo real + ETA dinâmico', 'Notificações proativas (SMS/WhatsApp/Email)', 'Histórico completo: 12 meses de entregas', 'API REST para integração com qualquer e-commerce'],
      recommended: 'Reduziu ligações ao SAC em 72% (de 280 para 78 chamadas/dia), aumentou NPS de 45 para 87 pontos, e se tornou diferencial competitivo chave que conquistou 8 grandes clientes de e-commerce no último ano'
    }
  ];

  const itilPractices = [
    {
      practice: 'Gestão de Incidentes',
      description: 'Processo estruturado para resolver problemas como "aplicativo do motorista travou"',
      benefit: 'Resolução rápida e documentada'
    },
    {
      practice: 'Gestão de Mudanças',
      description: 'Controle de atualizações no TMS e aplicativos com testes e rollback',
      benefit: 'Estabilidade e confiabilidade'
    },
    {
      practice: 'Gestão de Configuração',
      description: 'Inventário de smartphones corporativos, planos de dados e dispositivos',
      benefit: 'Controle de ativos de TI'
    },
    {
      practice: 'Service Desk',
      description: 'Suporte técnico 24/7 para entregadores e equipe operacional',
      benefit: 'Suporte contínuo e eficiente'
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
            A Rota Certa Logtech implementou uma stack tecnológica completa de última geração para 
            transformação digital: TMS drivin/Lincros com roteirização por IA, aplicativo mobile 
            nativo para entregadores (Android), dashboard gerencial web responsivo, portal do cliente 
            com tracking em tempo real, e integrações via API REST com SAP S/4HANA (ERP) e principais 
            plataformas de e-commerce (Shopify, VTEX, WooCommerce). Infraestrutura 100% Cloud SaaS 
            com governança baseada em ITIL v4.
          </p>
        </div>

        {/* TMS Solutions */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            Plataforma TMS Proposta
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

        {/* ITIL Practices */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            Gestão e Governança ITIL
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