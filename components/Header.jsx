'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Mostrar/ocultar header baseado na direção do scroll
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      // Atualizar estado de scroll para background
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navigationItems = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Tecnologia', href: '#tecnologia' },
    { label: 'Investimentos', href: '#investimentos' },
    { label: 'Contato', href: '#contato' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-xl border-b border-border/50' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-3 md:py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <Image 
              src="/rota-certa-logo.jpeg" 
              alt="Rota Certa Logtech" 
              width={40}
              height={40}
              className="h-8 w-8 md:h-10 md:w-10 hover:scale-110 transition-transform duration-300 rounded-lg"
            />
            <span className="text-sm md:text-base font-bold text-gradient hidden sm:block">
              Rota Certa Logtech
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-nexus-primary transition-all duration-300 font-medium relative group px-2 xl:px-3 py-2 rounded-lg hover:bg-nexus-primary/5 text-xs xl:text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-nexus-primary to-nexus-accent transition-all duration-300 group-hover:w-3/4"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-2">
            <a href="#contato" className="text-foreground/80 hover:text-nexus-primary transition-colors duration-300 font-medium px-3 py-2 rounded-lg hover:bg-nexus-primary/5 text-xs xl:text-sm">
              Área fornecedor
            </a>
            <a href="#contato" className="bg-gradient-to-r from-nexus-primary to-nexus-accent text-white font-semibold px-3 xl:px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-xs xl:text-sm">
              Contato
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground/80 hover:text-nexus-primary transition-all duration-300 rounded-lg hover:bg-nexus-primary/5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="mt-4 py-4 border-t border-border/50 bg-background/95 backdrop-blur-sm rounded-b-lg">
            <nav className="flex flex-col space-y-1">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground/80 hover:text-nexus-primary transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-nexus-primary/5 active:bg-nexus-primary/10 text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4 px-4">
                <a 
                  href="#contato" 
                  className="text-foreground/80 hover:text-nexus-primary transition-colors duration-300 font-medium py-3 px-4 rounded-lg hover:bg-nexus-primary/5 text-center border border-border"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Solicitar Demo
                </a>
                <a 
                  href="#contato" 
                  className="bg-gradient-to-r from-nexus-primary to-nexus-accent text-white font-semibold py-3 px-4 rounded-lg shadow-lg text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Falar com Especialista
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
