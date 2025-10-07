import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Nossa Missão', href: '#sobre' },
    { label: 'Estrutura', href: '#sobre' },
    { label: 'Carreira', href: '#contato' }
  ];

  const solutionsLinks = [
    { label: 'Entrega Last-Mile', href: '#servicos' },
    { label: 'Entregas Expressas', href: '#servicos' },
    { label: 'Rastreamento em Tempo Real', href: '#servicos' },
    { label: 'Gestão de Ocorrências', href: '#servicos' }
  ];

  const technologyLinks = [
    { label: 'Sistema de Gestão', href: '#tecnologia' },
    { label: 'App do Entregador', href: '#tecnologia' },
    { label: 'Dashboard Gerencial', href: '#tecnologia' },
    { label: 'Portal do Cliente', href: '#tecnologia' }
  ];

  const supportLinks = [
    { label: 'Solicitar Cotação', href: '#contato' },
    { label: 'Suporte ao Cliente', href: '#contato' },
    { label: 'FAQ', href: '#contato' },
    { label: 'Agendar Demo', href: '#contato' }
  ];

  return (
    <footer className="bg-nexus-dark text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image 
                src="/rota-certa-logo.jpeg" 
                alt="Rota Certa Logtech" 
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Especialistas em logística urbana de última milha para e-commerce. 
              Conectamos seus produtos aos consumidores finais com tecnologia, rapidez e eficiência.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-nexus-accent" />
                <span className="text-sm text-white/80">contato@rotacerta.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-nexus-accent" />
                <span className="text-sm text-white/80">+55 (11) 4000-0000</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-nexus-accent" />
                <span className="text-sm text-white/80">São Paulo, Rio de Janeiro, BH, Curitiba e Brasília</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Empresa</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-nexus-accent transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Serviços</h3>
            <ul className="space-y-3">
              {solutionsLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-nexus-accent transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Tecnologia</h3>
            <ul className="space-y-3">
              {technologyLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-nexus-accent transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Atendimento</h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-nexus-accent transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-semibold text-white mb-2">
                Fique por Dentro
              </h3>
              <p className="text-white/70">
                Receba novidades sobre logística inteligente e tecnologia
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input 
                type="email"
                placeholder="Seu email"
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-nexus-accent focus:ring-2 focus:ring-nexus-accent/20 transition-colors duration-300 sm:w-64"
              />
              <button className="px-6 py-3 bg-nexus-accent text-nexus-dark font-semibold rounded-lg hover:bg-nexus-accent/90 transition-colors duration-300">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © {currentYear} Rota Certa Logtech Ltda. Todos os direitos reservados.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <a 
                href="#" 
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-nexus-accent hover:text-nexus-dark transition-colors duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-nexus-accent hover:text-nexus-dark transition-colors duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-nexus-accent hover:text-nexus-dark transition-colors duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-4 text-sm">
              <a href="#" className="text-white/60 hover:text-nexus-accent transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/60 hover:text-nexus-accent transition-colors duration-300">
                Termos de Uso
              </a>
              <a href="#" className="text-white/60 hover:text-nexus-accent transition-colors duration-300">
                LGPD
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}