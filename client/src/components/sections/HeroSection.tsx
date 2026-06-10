import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * HeroSection Component
 * - Main entry point with parallax background
 * - Educational focus with call-to-action
 * - Animated crystal icon
 */

interface HeroSectionProps {
  scrollY: number;
}

export function HeroSection({ scrollY }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <img 
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663727111658/BqKVh2jtiG86DBjUZkuKBz/hero-nature-magic-noNzoFBWnMVUokHdYhovX7.webp"
          alt="Fada da Natureza"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-6xl md:text-7xl font-black leading-tight">
            <span className="bg-gradient-to-r from-emerald-300 via-green-300 to-cyan-300 bg-clip-text text-transparent">
              Equilíbrio entre Produção e Meio Ambiente
            </span>
          </h2>
          <p className="text-xl text-emerald-100/80 leading-relaxed max-w-lg">
            A sustentabilidade não é uma escolha, é uma necessidade. Descubra como podemos equilibrar a produção econômica com a preservação ambiental para as gerações futuras através de conhecimento, ação e inovação.
          </p>
          <div className="flex gap-4 pt-4">
            <Button 
              className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white gap-2 text-lg px-8 py-6"
              onClick={() => document.getElementById('pilares')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explorar <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              className="border-emerald-400 text-emerald-300 hover:bg-emerald-400/10 text-lg px-8 py-6"
            >
              Saiba Mais
            </Button>
          </div>
        </div>

        {/* Hero Image with Animation */}
        <div className="relative h-96 md:h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-transparent rounded-2xl blur-3xl"></div>
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663727111658/BqKVh2jtiG86DBjUZkuKBz/crystal-icon-bJFEnjdW2v88ML9mc8svBTb.webp"
            alt="Cristal Mágico"
            className="w-full h-full object-contain animate-float"
            style={{
              animation: "float 6s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-emerald-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
