'use client';

import { ArrowRight, Play, Shield, Zap, Globe } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background with hero image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-image.jpg" 
          alt="Rota Certa Logtech" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center justify-center pt-28 md:pt-32 pb-16 text-center text-white">
        <div className="max-w-4xl mx-auto fade-in-up w-full">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
            <Shield className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Logística Last-Mile Inteligente</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight px-4">
            Revolucionando a Logística de
            <span className="block bg-gradient-to-r from-white via-nexus-accent to-white bg-clip-text text-transparent mt-2">
              Última Milha no Brasil
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed px-4">
            Atacadista B2B especializada em produtos de marcas líderes (Colgate, Kimberly Clark, Reckitt, 
            Ferrero, Huggies, Pampers) para farmácias, perfumarias e supermercados, expandindo para 
            B2C com logística last-mile. Plataforma Shopify, integração SAP ERP e app próprio para 
            entregas rastreáveis em tempo real.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-8 px-4">
            <div className="text-center min-w-[80px]">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-nexus-accent">80</div>
              <div className="text-xs sm:text-sm text-white/80">Profissionais Especializados</div>
            </div>
            <div className="text-center min-w-[80px]">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-nexus-accent">5</div>
              <div className="text-xs sm:text-sm text-white/80">Capitais em Operação</div>
            </div>
            <div className="text-center min-w-[80px]">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-nexus-accent">15K+</div>
              <div className="text-xs sm:text-sm text-white/80">Entregas/Mês</div>
            </div>
            <div className="text-center min-w-[80px]">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-nexus-accent">98%</div>
              <div className="text-xs sm:text-sm text-white/80">SLA de Entrega</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="#servicos" className="btn-hero group inline-flex items-center">
              Conheça Nossas Soluções
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a href="#contato" className="flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <Play className="w-5 h-5 mr-2" />
              Solicitar Demo
            </a>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto px-4">
            <div className="flex items-center justify-center space-x-2 md:space-x-3 p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <Zap className="w-5 h-5 md:w-6 md:h-6 text-nexus-accent flex-shrink-0" />
              <span className="font-medium text-sm md:text-base">Roteirização por IA</span>
            </div>
            <div className="flex items-center justify-center space-x-2 md:space-x-3 p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <Globe className="w-5 h-5 md:w-6 md:h-6 text-nexus-accent flex-shrink-0" />
              <span className="font-medium text-sm md:text-base">Rastreamento Real-Time</span>
            </div>
            <div className="flex items-center justify-center space-x-2 md:space-x-3 p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <Shield className="w-5 h-5 md:w-6 md:h-6 text-nexus-accent flex-shrink-0" />
              <span className="font-medium text-sm md:text-base">Comprovação Digital</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/60 rounded-full mt-1"></div>
        </div>
      </div>
    </section>
  );
}