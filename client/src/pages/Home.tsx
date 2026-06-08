import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Leaf } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Design Philosophy: Artistic & Creative
 * - Highly original, non-generic layout
 * - Artistic illustrations as protagonists
 * - Dynamic animations and interactive elements
 * - Narrative-driven design around nature restoration
 * - Game-ready with space for interactive elements
 */

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-emerald-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-emerald-500/20">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              Natureza Despertada
            </h1>
          </div>
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li><a href="#jogo" className="hover:text-emerald-400 transition-colors">Jogo</a></li>
            <li><a href="#historia" className="hover:text-emerald-400 transition-colors">História</a></li>
            <li><a href="#missao" className="hover:text-emerald-400 transition-colors">Missão</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section - Artistic & Dramatic */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663727111658/BqKVh2jtiG86DBjUZkuKBz/hero-nature-magic-noNzoFBWnMVUokHdYhovX7.webp"
            alt="Fada da Natureza"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-emerald-300 via-green-300 to-cyan-300 bg-clip-text text-transparent">
                A Natureza Despertou
              </span>
            </h2>
            <p className="text-xl text-emerald-100/80 leading-relaxed max-w-lg">
              Os robôs roubaram o cristal que alimenta toda a vida. Sem sua energia vital, a natureza desapareceu. Mas você pode restaurá-la. Derrote os robôs, liberte a essência da natureza e reconstrua o mundo.
            </p>
            <div className="flex gap-4 pt-4">
              <Button 
                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white gap-2 text-lg px-8 py-6"
                onClick={() => document.getElementById('jogo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Começar Jogo <Zap className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-emerald-400 text-emerald-300 hover:bg-emerald-400/10 text-lg px-8 py-6"
              >
                Conhecer a História
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

      {/* Game Section Placeholder */}
      <section id="jogo" className="relative py-20 md:py-32 bg-slate-800/50 backdrop-blur-sm border-y border-emerald-500/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                Derrote os Robôs
              </span>
            </h2>
            <p className="text-xl text-emerald-100/70 max-w-2xl mx-auto">
              Enfrente as máquinas que roubaram a essência da natureza. Cada robô derrotado libera energia vital que restaura o ambiente.
            </p>
          </div>

          {/* Game Container - Ready for Integration */}
          <div id="game-container" className="relative w-full aspect-video bg-gradient-to-b from-slate-900 to-slate-800 rounded-2xl border-2 border-emerald-500/30 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <Shield className="w-24 h-24 mx-auto text-emerald-400 animate-pulse" />
                <p className="text-2xl font-bold text-emerald-300">Jogo Interativo</p>
                <p className="text-emerald-100/60">Seu código de jogo será integrado aqui</p>
              </div>
            </div>
          </div>

          {/* Game Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-slate-800/50 border border-emerald-500/20 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-emerald-400 text-4xl font-black mb-2">∞</div>
              <p className="text-emerald-100/70">Robôs para Derrotar</p>
            </div>
            <div className="bg-slate-800/50 border border-emerald-500/20 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-green-400 text-4xl font-black mb-2">🌍</div>
              <p className="text-emerald-100/70">Mundo para Restaurar</p>
            </div>
            <div className="bg-slate-800/50 border border-emerald-500/20 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-cyan-400 text-4xl font-black mb-2">⚡</div>
              <p className="text-emerald-100/70">Energia a Liberar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="historia" className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-4xl md:text-5xl font-black mb-6">
                <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                  O Roubo
                </span>
              </h3>
              <p className="text-lg text-emerald-100/80 leading-relaxed mb-4">
                Há tempos, um cristal mágico alimentava toda a vida na Terra. Sua energia vital mantinha as florestas verdes, os rios fluindo e os animais prosperos. Mas um dia, robôs misteriosos invadiram nosso mundo e roubaram o cristal.
              </p>
              <p className="text-lg text-emerald-100/80 leading-relaxed">
                Sem sua energia, tudo desapareceu. As florestas morreram, os rios secaram, e o silêncio tomou conta da Terra. Agora, você é nossa última esperança.
              </p>
            </div>
            <div className="relative h-96">
              <div className="absolute inset-0 bg-gradient-to-l from-red-500/20 to-transparent rounded-2xl blur-3xl"></div>
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663727111658/BqKVh2jtiG86DBjUZkuKBz/robot-villain-nKQkP93FagRPFbPxou9F5t.webp"
                alt="Robô Vilão"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-transparent rounded-2xl blur-3xl"></div>
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663727111658/BqKVh2jtiG86DBjUZkuKBz/nature-restoration-kTCGP6MGiUw43tBTzLb6F9.webp"
                alt="Restauração da Natureza"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-4xl md:text-5xl font-black mb-6">
                <span className="bg-gradient-to-r from-green-400 to-cyan-300 bg-clip-text text-transparent">
                  A Restauração
                </span>
              </h3>
              <p className="text-lg text-emerald-100/80 leading-relaxed mb-4">
                Cada robô que você derrota libera um fragmento da energia vital. Conforme você avança, a natureza começa a despertar. As primeiras flores brotam, os animais retornam, a água flui novamente.
              </p>
              <p className="text-lg text-emerald-100/80 leading-relaxed">
                Sua missão é simples: derrote todos os robôs, liberte o cristal e restaure a vitalidade do nosso planeta. O futuro da Terra está em suas mãos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="missao" className="relative py-20 md:py-32 bg-slate-800/50 backdrop-blur-sm border-y border-emerald-500/20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16">
            <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-cyan-300 bg-clip-text text-transparent">
              Sua Missão
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 hover:border-emerald-400/60 transition-all">
                <div className="text-5xl mb-4">⚔️</div>
                <h3 className="text-2xl font-black mb-3 text-emerald-300">Derrote os Robôs</h3>
                <p className="text-emerald-100/70">
                  Enfrente as máquinas que invadiram nosso planeta. Cada vitória libera energia vital.
                </p>
              </div>
            </div>

            {/* Mission 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 hover:border-emerald-400/60 transition-all">
                <div className="text-5xl mb-4">💎</div>
                <h3 className="text-2xl font-black mb-3 text-green-300">Liberte o Cristal</h3>
                <p className="text-emerald-100/70">
                  Recupere a essência mágica que alimenta toda a vida no planeta.
                </p>
              </div>
            </div>

            {/* Mission 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 hover:border-emerald-400/60 transition-all">
                <div className="text-5xl mb-4">🌱</div>
                <h3 className="text-2xl font-black mb-3 text-cyan-300">Restaure a Natureza</h3>
                <p className="text-emerald-100/70">
                  Reconstrua florestas, rios e ecossistemas inteiros com a energia liberada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-cyan-500/10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-black">
            <span className="bg-gradient-to-r from-emerald-300 via-green-300 to-cyan-300 bg-clip-text text-transparent">
              Você Está Pronto?
            </span>
          </h2>
          <p className="text-xl text-emerald-100/80 max-w-2xl mx-auto">
            O planeta precisa de você. Os robôs estão esperando. A natureza está chamando. Venha restaurar a vida na Terra.
          </p>
          <Button 
            className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white gap-2 text-lg px-10 py-7 mx-auto"
            onClick={() => document.getElementById('jogo')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Iniciar Jogo Agora <Zap className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-emerald-500/20 bg-slate-900/50 backdrop-blur-sm py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-emerald-400" />
                <span className="font-bold text-lg text-emerald-300">Natureza Despertada</span>
              </div>
              <p className="text-emerald-100/60">Um jogo para restaurar a vida na Terra.</p>
            </div>
            <div>
              <h4 className="font-bold text-emerald-300 mb-3">Navegação</h4>
              <ul className="space-y-2 text-emerald-100/60">
                <li><a href="#jogo" className="hover:text-emerald-400 transition-colors">Jogo</a></li>
                <li><a href="#historia" className="hover:text-emerald-400 transition-colors">História</a></li>
                <li><a href="#missao" className="hover:text-emerald-400 transition-colors">Missão</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-emerald-300 mb-3">Sobre</h4>
              <p className="text-emerald-100/60">
                Desenvolvido com foco em educação ambiental e sustentabilidade através do jogo.
              </p>
            </div>
          </div>
          <div className="border-t border-emerald-500/20 pt-8 text-center text-emerald-100/50">
            <p>&copy; 2026 Natureza Despertada. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}
