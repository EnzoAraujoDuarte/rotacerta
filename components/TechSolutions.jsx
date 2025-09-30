import { Cloud, Shield, Zap, Database, Smartphone, MapPin, Camera } from 'lucide-react';

export default function TechSolutions() {
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

  const implementation = {
    hardware: [
      { item: 'Smartphones Corporativos Robustos', qty: '50 unidades', purpose: 'Para todos os entregadores' },
      { item: 'Planos de Dados 4G/5G', qty: '50 linhas', purpose: 'Cobertura nas 5 capitais' },
      { item: 'Carregadores Veiculares', qty: '50 unidades', purpose: 'Garantir bateria durante jornada' }
    ],
    software: [
      { item: 'Licenças TMS (drivin/Lincros)', qty: 'Plano empresarial', purpose: 'Sistema completo SaaS' },
      { item: 'Licenças App Entregador', qty: '50 usuários', purpose: 'Incluído no TMS' },
      { item: 'Dashboard e Portal Cliente', qty: 'Ilimitado', purpose: 'Incluído no TMS' }
    ]
  };

  return (
    <section id="solucoes-ti" className="min-h-screen py-20 section-gradient flex flex-col justify-center">
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
            plataformas de e-commerce (Shopify, VTEX, WooCommerce). Governança baseada em ITIL v4 
            para gestão de incidentes, mudanças e service desk 24x7.
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

        {/* ITIL Practices */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            Gestão e Governança ITIL
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {itilPractices.map((item, index) => (
              <div key={index} className="card-hover hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-nexus-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{item.practice}</h4>
                    <p className="text-muted-foreground mb-3">{item.description}</p>
                    <div className="p-3 bg-nexus-secondary/5 rounded-lg">
                      <p className="text-sm text-nexus-secondary font-semibold">Benefício:</p>
                      <p className="text-sm text-muted-foreground">{item.benefit}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Requirements */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            Requisitos de Implementação
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Hardware */}
            <div className="card-hover">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-2xl font-bold text-foreground">Hardware</h4>
                <Smartphone className="w-8 h-8 text-nexus-primary" />
              </div>
              <div className="space-y-4">
                {implementation.hardware.map((item, index) => (
                  <div key={index} className="p-4 bg-background-secondary rounded-lg border border-border">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-semibold text-foreground">{item.item}</h5>
                      <span className="text-sm bg-nexus-primary/10 text-nexus-primary px-2 py-1 rounded">{item.qty}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.purpose}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Software */}
            <div className="card-hover">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-2xl font-bold text-foreground">Software (SaaS)</h4>
                <Cloud className="w-8 h-8 text-nexus-primary" />
              </div>
              <div className="space-y-4">
                {implementation.software.map((item, index) => (
                  <div key={index} className="p-4 bg-background-secondary rounded-lg border border-border">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-semibold text-foreground">{item.item}</h5>
                      <span className="text-sm bg-nexus-accent/10 text-nexus-accent px-2 py-1 rounded">{item.qty}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.purpose}</p>
                  </div>
                ))}
              </div>
                </div>
          </div>
        </div>

        {/* Technology Quotes */}
        <div className="mt-16 mb-16">
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            Tecnologias Empresariais de Referência
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* SAP S/4HANA Quote */}
            <div className="card-hover">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-nexus-primary to-nexus-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-3">ERP SAP S/4HANA</h4>
                  <blockquote className="text-muted-foreground italic mb-4 leading-relaxed">
                    "O SAP S/4HANA é o sistema ERP mais avançado do mercado, oferecendo processamento em tempo real, 
                    inteligência artificial integrada e experiência de usuário moderna. É a escolha das empresas 
                    líderes que buscam transformação digital completa."
                  </blockquote>
                  <div className="p-3 bg-nexus-primary/5 rounded-lg">
                    <p className="text-sm text-nexus-primary font-semibold">Benefício para Rota Certa Logtech:</p>
                    <p className="text-sm text-muted-foreground">
                      Integração completa de dados operacionais, financeiros e logísticos em uma única plataforma, 
                      garantindo visibilidade total e tomada de decisões baseada em dados em tempo real.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shopify Quote */}
            <div className="card-hover">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-nexus-accent to-nexus-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-3">E-commerce Shopify</h4>
                  <blockquote className="text-muted-foreground italic mb-4 leading-relaxed">
                    "Shopify é a plataforma de e-commerce mais confiável do mundo, utilizada por mais de 1.7 milhões 
                    de empresas. Oferece ferramentas poderosas de vendas, marketing e gestão de pedidos, 
                    com integração nativa com sistemas de logística."
                  </blockquote>
                  <div className="p-3 bg-nexus-accent/5 rounded-lg">
                    <p className="text-sm text-nexus-accent font-semibold">Benefício para Rota Certa Logtech:</p>
                    <p className="text-sm text-muted-foreground">
                      Integração direta com lojas Shopify para sincronização automática de pedidos, 
                      rastreamento de entregas e notificações em tempo real para clientes finais.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Competitive Advantage */}
        <div className="mt-16 bg-card rounded-2xl p-8 shadow-card border border-border">
          <div className="text-center mb-8">
            <Zap className="w-12 h-12 text-nexus-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground">Vantagem Competitiva</h3>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground text-center leading-relaxed mb-6">
              Esta solução tecnológica não apenas reduz custos operacionais, mas cria uma 
              vantagem competitiva significativa ao oferecer uma experiência de entrega 
              transparente e de alta qualidade para os clientes dos e-commerces.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-nexus-primary/5 rounded-lg">
                <div className="text-3xl font-bold text-nexus-primary mb-2">30%</div>
                <p className="text-sm text-muted-foreground">Redução de custos com combustível</p>
              </div>
              <div className="text-center p-4 bg-nexus-primary/5 rounded-lg">
                <div className="text-3xl font-bold text-nexus-primary mb-2">60%</div>
                <p className="text-sm text-muted-foreground">Menos chamadas ao atendimento</p>
              </div>
              <div className="text-center p-4 bg-nexus-primary/5 rounded-lg">
                <div className="text-3xl font-bold text-nexus-primary mb-2">40%</div>
                <p className="text-sm text-muted-foreground">Aumento de produtividade</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}