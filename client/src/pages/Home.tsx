import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Factory, ShoppingCart, Globe, Zap, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Design Philosophy: Artistic + Educational Focus
 * - Educational content as PRIMARY protagonist
 * - Artistic dark mode layout with emerald/cyan gradients
 * - Dynamic animations and creative, non-generic layout
 * - Game as secondary section at the end
 * - Quiz to assess learning
 */

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-900 text-white overflow-hidden">
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
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              Equilíbrio
            </h1>
          </div>
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li><a href="#pilares" className="hover:text-emerald-400 transition-colors">Pilares</a></li>
            <li><a href="#agrinho" className="hover:text-emerald-400 transition-colors">Agrinho</a></li>
            <li><a href="#desafios" className="hover:text-emerald-400 transition-colors">Desafios</a></li>
            <li><a href="#futuro" className="hover:text-emerald-400 transition-colors">Futuro</a></li>
            <li><a href="#jogo" className="hover:text-cyan-400 transition-colors font-bold">Jogar</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section - Educational Focus */}
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

      {/* Contextual Introduction - Author's Original Text */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm border-l-4 border-emerald-500 rounded-2xl p-12 space-y-6">
              <p className="text-lg text-emerald-100/90 leading-relaxed">
                Como já sabemos, o equilíbrio entre produzir e cuidar do ambiente tem sido um grande desafio na atualidade, já que a produção sem controle tem causado sérios danos ao meio ambiente.
              </p>
              
              <p className="text-lg text-emerald-100/90 leading-relaxed">
                Produzimos por diversos motivos, sendo o principal deles a necessidade, buscando evoluir e alcançar melhor qualidade de vida. Porém, essa evolução tem ocorrido, muitas vezes, às custas da degradação ambiental. Com os avanços técnico-científicos advindos da Revolução Industrial, a forma que lidamos com a matéria-prima natural mudou drasticamente. Passamos de uma produção voltada apenas às necessidades para uma produção movida por desejos supérfluos e pelo consumismo. Como consequência, aumentaram-se o desmatamento, a contaminação do solo e da água, além de outros impactos ambientais que ameaçam o futuro das próximas gerações.
              </p>
              
              <p className="text-lg text-emerald-100/90 leading-relaxed">
                Além do problema do consumismo e da produção excessiva, há também a exploração dos recursos naturais, como o carvão mineral. Seus impactos incluem a destruição de habitats, a contaminação do solo, danos aos recursos hídricos e à atmosfera, afetando ecossistemas. Como prova da gravidade da situação, a Floresta Amazônica já perdeu cerca de 13% a 15% de sua cobertura nas últimas décadas, aproximando-se do chamado "tipping point", ou ponto sem volta.
              </p>
              
              <div className="border-t border-emerald-500/30 pt-6">
                <p className="text-lg text-emerald-100/90 leading-relaxed font-semibold">
                  Portanto, é necessário colocar na balança os dois lados: produção e meio ambiente. Já que não podemos parar de produzir, também não podemos negligenciar o cuidado com o planeta. Por isso, o governo, com a ajuda de órgãos ambientais, deve ampliar a fiscalização contra crimes ambientais e oferecer incentivos para empresas que usem formas de produção mais sustentáveis, como o uso de energias renováveis e a redução de resíduos. Além disso, as escolas e os meios de comunicação devem promover campanhas de conscientização sobre consumo responsável, mostrando à população a importância de preservar o meio ambiente. Assim, será possível alcançar um equilíbrio entre produção e preservação ambiental.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section - MAIN EDUCATIONAL CONTENT */}
      <section id="pilares" className="relative py-20 md:py-32 bg-slate-800/50 backdrop-blur-sm border-y border-emerald-500/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                Três Pilares da Produção Sustentável
              </span>
            </h2>
            <p className="text-xl text-emerald-100/70 max-w-3xl mx-auto">
              O caminho para um futuro equilibrado passa por três pilares fundamentais que trabalham em harmonia, transformando a forma como produzimos e consumimos.
            </p>
          </div>

          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663727111658/BqKVh2jtiG86DBjUZkuKBz/pilares-sustentabilidade-LsfBCzWFSrNn9zUoGbL2JC.webp"
            alt="Três pilares da produção sustentável"
            className="w-full h-auto rounded-2xl shadow-2xl mb-12 border border-emerald-500/20"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 hover:border-emerald-400/60 transition-all">
                <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Leaf className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-black mb-3 text-emerald-300">Agricultura Sustentável</h3>
                <p className="text-emerald-100/70 leading-relaxed">
                  Práticas como rotação de culturas, conservação do solo e irrigação eficiente garantem produtividade sem comprometer recursos naturais. Alimenta gerações mantendo a terra viva.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 hover:border-emerald-400/60 transition-all">
                <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Factory className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-black mb-3 text-green-300">Indústria Verde</h3>
                <p className="text-emerald-100/70 leading-relaxed">
                  Redução de resíduos, eficiência energética e uso de energias renováveis transformam a produção industrial em força sustentável. Inovação que protege o planeta.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 hover:border-emerald-400/60 transition-all">
                <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                  <ShoppingCart className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-black mb-3 text-cyan-300">Consumo Consciente</h3>
                <p className="text-emerald-100/70 leading-relaxed">
                  Escolhas informadas dos consumidores impulsionam mercados sustentáveis e criam demanda por produtos responsáveis. Você tem poder de transformação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agrinho Program Section */}
      <section id="agrinho" className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                  Programa Agrinho
                </span>
              </h2>
              <p className="text-lg text-emerald-100/80 leading-relaxed mb-6">
                O Programa Agrinho é um conjunto de ações de educação e promoção social destinado a transformar crianças e adolescentes em agentes de mudança. Através da educação ambiental, o programa promove sustentabilidade no meio rural.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold text-xl">✓</span>
                  <span className="text-emerald-100/80">Educação ambiental para crianças rurais</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold text-xl">✓</span>
                  <span className="text-emerald-100/80">Promoção de saúde e segurança pessoal</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold text-xl">✓</span>
                  <span className="text-emerald-100/80">Transformação social e ambiental</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold text-xl">✓</span>
                  <span className="text-emerald-100/80">Cidadania e responsabilidade comunitária</span>
                </li>
              </ul>
              <Button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white gap-2">
                Conheça o Agrinho <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="relative h-96">
              <div className="absolute inset-0 bg-gradient-to-l from-green-500/20 to-transparent rounded-2xl blur-3xl"></div>
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663727111658/BqKVh2jtiG86DBjUZkuKBz/agrinho-programa-CFEnjdW2v88ML9mc8svBTb.webp"
                alt="Crianças aprendendo sobre sustentabilidade"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenges and Solutions Section */}
      <section id="desafios" className="relative py-20 md:py-32 bg-slate-800/50 backdrop-blur-sm border-y border-emerald-500/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              Desafios e Soluções
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Challenges */}
            <div>
              <h3 className="text-3xl font-black mb-8 text-emerald-300">Desafios Atuais</h3>
              <div className="space-y-4">
                <div className="bg-slate-900/50 backdrop-blur-sm border-l-4 border-emerald-500 p-6 rounded-lg hover:border-emerald-400 transition-colors">
                  <h4 className="font-bold text-emerald-300 mb-2">Conflitos de Interesse</h4>
                  <p className="text-emerald-100/70">Tensão entre lucro imediato e preservação ambiental de longo prazo.</p>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-sm border-l-4 border-green-500 p-6 rounded-lg hover:border-green-400 transition-colors">
                  <h4 className="font-bold text-green-300 mb-2">Desinformação</h4>
                  <p className="text-emerald-100/70">Falta de conhecimento sobre práticas sustentáveis e seus benefícios.</p>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-sm border-l-4 border-cyan-500 p-6 rounded-lg hover:border-cyan-400 transition-colors">
                  <h4 className="font-bold text-cyan-300 mb-2">Implementação de Políticas</h4>
                  <p className="text-emerald-100/70">Dificuldade em aplicar regulamentações ambientais de forma efetiva.</p>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-3xl font-black mb-8 text-green-300">Soluções Viáveis</h3>
              <div className="space-y-4">
                <div className="bg-slate-900/50 backdrop-blur-sm border-l-4 border-emerald-500 p-6 rounded-lg hover:border-emerald-400 transition-colors">
                  <h4 className="font-bold text-emerald-300 mb-2">Inovação Tecnológica</h4>
                  <p className="text-emerald-100/70">Desenvolvimento de tecnologias limpas e eficientes para produção.</p>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-sm border-l-4 border-green-500 p-6 rounded-lg hover:border-green-400 transition-colors">
                  <h4 className="font-bold text-green-300 mb-2">Educação Contínua</h4>
                  <p className="text-emerald-100/70">Programas como Agrinho que educam e transformam consciências.</p>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-sm border-l-4 border-cyan-500 p-6 rounded-lg hover:border-cyan-400 transition-colors">
                  <h4 className="font-bold text-cyan-300 mb-2">Legislação e Fiscalização</h4>
                  <p className="text-emerald-100/70">Marcos regulatórios claros com fiscalização rigorosa e transparente.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section id="futuro" className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-transparent rounded-2xl blur-3xl"></div>
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663727111658/BqKVh2jtiG86DBjUZkuKBz/nature-restoration-kTCGP6MGiUw43tBTzLb6F9.webp"
                alt="Futuro sustentável"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                <span className="bg-gradient-to-r from-green-400 to-cyan-300 bg-clip-text text-transparent">
                  Construindo um Futuro Sustentável
                </span>
              </h2>
              <p className="text-lg text-emerald-100/80 leading-relaxed mb-6">
                O futuro que desejamos não é apenas possível—é necessário. Através de ações individuais e coletivas, podemos criar um mundo onde produção e preservação ambiental caminham juntas.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-300 mb-1">Ações Individuais</h4>
                    <p className="text-emerald-100/70">Cada escolha consciente contribui para mudanças sistêmicas.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-300 mb-1">Engajamento Comunitário</h4>
                    <p className="text-emerald-100/70">Comunidades unidas criam força para transformação real.</p>
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white gap-2">
                Saiba Como Agir <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Game Section - SECONDARY, at the end */}
      <section id="jogo" className="relative py-20 md:py-32 bg-slate-800/50 backdrop-blur-sm border-y border-emerald-500/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-300 bg-clip-text text-transparent">
                Experiência Interativa
              </span>
            </h2>
            <p className="text-xl text-emerald-100/70 max-w-2xl mx-auto">
              Aprenda de forma divertida! Derrote robôs, liberte a energia da natureza e restaure o ambiente em um jogo educativo.
            </p>
          </div>

          {/* Game Container - O Cristal de Lúmina */}
          <div id="game-container" className="relative w-full bg-gradient-to-b from-slate-900 to-slate-800 rounded-2xl border-2 border-cyan-500/30 overflow-hidden shadow-2xl">
            <iframe
              src="https://last-seed-bloom.base44.app"
              className="w-full h-screen rounded-2xl border-0"
              title="O Cristal de Lúmina - Jogo de Restauração Ambiental"
              sandbox="allow-same-origin allow-scripts allow-popups"
              style={{
                aspectRatio: '16 / 9',
                minHeight: '600px',
              }}
            />
          </div>

          <div className="text-center mt-8">
            <p className="text-emerald-100/70 mb-6">Pronto para colocar seus conhecimentos em prática?</p>
            <Button 
              className="bg-gradient-to-r from-cyan-500 to-emerald-600 hover:from-cyan-600 hover:to-emerald-700 text-white gap-2 text-lg px-8 py-6"
            >
              Jogar Agora <Zap className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Quiz Section - Educational Assessment */}
      <section id="quiz" className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-cyan-300 bg-clip-text text-transparent">
                Teste Seus Conhecimentos
              </span>
            </h2>
            <p className="text-xl text-emerald-100/70 max-w-2xl mx-auto">
              Você aprendeu sobre sustentabilidade? Responda nosso quiz e veja como está seu conhecimento!
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {/* Quiz Question 1 */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 hover:border-emerald-400/60 transition-all">
              <h3 className="text-xl font-bold text-emerald-300 mb-6">1. Qual é um dos três pilares da produção sustentável?</h3>
              <div className="space-y-3">
                <label className="flex items-center p-4 bg-slate-900/50 rounded-lg border border-emerald-500/20 hover:border-emerald-400/60 cursor-pointer transition-all">
                  <input type="radio" name="q1" className="w-4 h-4" />
                  <span className="ml-3 text-emerald-100/80">Maximizar lucro a qualquer custo</span>
                </label>
                <label className="flex items-center p-4 bg-slate-900/50 rounded-lg border border-emerald-500/20 hover:border-emerald-400/60 cursor-pointer transition-all">
                  <input type="radio" name="q1" className="w-4 h-4" />
                  <span className="ml-3 text-emerald-100/80">Agricultura Sustentável</span>
                </label>
                <label className="flex items-center p-4 bg-slate-900/50 rounded-lg border border-emerald-500/20 hover:border-emerald-400/60 cursor-pointer transition-all">
                  <input type="radio" name="q1" className="w-4 h-4" />
                  <span className="ml-3 text-emerald-100/80">Ignorar impactos ambientais</span>
                </label>
              </div>
            </div>

            {/* Quiz Question 2 */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 hover:border-emerald-400/60 transition-all">
              <h3 className="text-xl font-bold text-emerald-300 mb-6">2. O que é o Programa Agrinho?</h3>
              <div className="space-y-3">
                <label className="flex items-center p-4 bg-slate-900/50 rounded-lg border border-emerald-500/20 hover:border-emerald-400/60 cursor-pointer transition-all">
                  <input type="radio" name="q2" className="w-4 h-4" />
                  <span className="ml-3 text-emerald-100/80">Um programa de educação ambiental para crianças rurais</span>
                </label>
                <label className="flex items-center p-4 bg-slate-900/50 rounded-lg border border-emerald-500/20 hover:border-emerald-400/60 cursor-pointer transition-all">
                  <input type="radio" name="q2" className="w-4 h-4" />
                  <span className="ml-3 text-emerald-100/80">Um jogo de vídeo game</span>
                </label>
                <label className="flex items-center p-4 bg-slate-900/50 rounded-lg border border-emerald-500/20 hover:border-emerald-400/60 cursor-pointer transition-all">
                  <input type="radio" name="q2" className="w-4 h-4" />
                  <span className="ml-3 text-emerald-100/80">Uma marca de produtos agrícolas</span>
                </label>
              </div>
            </div>

            {/* Quiz Question 3 */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 hover:border-emerald-400/60 transition-all">
              <h3 className="text-xl font-bold text-emerald-300 mb-6">3. Qual prática é característica da Indústria Verde?</h3>
              <div className="space-y-3">
                <label className="flex items-center p-4 bg-slate-900/50 rounded-lg border border-emerald-500/20 hover:border-emerald-400/60 cursor-pointer transition-all">
                  <input type="radio" name="q3" className="w-4 h-4" />
                  <span className="ml-3 text-emerald-100/80">Aumento de resíduos industriais</span>
                </label>
                <label className="flex items-center p-4 bg-slate-900/50 rounded-lg border border-emerald-500/20 hover:border-emerald-400/60 cursor-pointer transition-all">
                  <input type="radio" name="q3" className="w-4 h-4" />
                  <span className="ml-3 text-emerald-100/80">Eficiência energética e uso de energias renováveis</span>
                </label>
                <label className="flex items-center p-4 bg-slate-900/50 rounded-lg border border-emerald-500/20 hover:border-emerald-400/60 cursor-pointer transition-all">
                  <input type="radio" name="q3" className="w-4 h-4" />
                  <span className="ml-3 text-emerald-100/80">Poluição descontrolada</span>
                </label>
              </div>
            </div>

            {/* Quiz Question 4 */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 hover:border-emerald-400/60 transition-all">
              <h3 className="text-xl font-bold text-emerald-300 mb-6">4. Como o consumo consciente impacta a sustentabilidade?</h3>
              <div className="space-y-3">
                <label className="flex items-center p-4 bg-slate-900/50 rounded-lg border border-emerald-500/20 hover:border-emerald-400/60 cursor-pointer transition-all">
                  <input type="radio" name="q4" className="w-4 h-4" />
                  <span className="ml-3 text-emerald-100/80">Não tem impacto algum</span>
                </label>
                <label className="flex items-center p-4 bg-slate-900/50 rounded-lg border border-emerald-500/20 hover:border-emerald-400/60 cursor-pointer transition-all">
                  <input type="radio" name="q4" className="w-4 h-4" />
                  <span className="ml-3 text-emerald-100/80">Cria demanda por produtos responsáveis e mercados sustentáveis</span>
                </label>
                <label className="flex items-center p-4 bg-slate-900/50 rounded-lg border border-emerald-500/20 hover:border-emerald-400/60 cursor-pointer transition-all">
                  <input type="radio" name="q4" className="w-4 h-4" />
                  <span className="ml-3 text-emerald-100/80">Aumenta apenas o consumo de plástico</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-8">
              <Button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white gap-2 text-lg px-10 py-6">
                Verificar Respostas <BookOpen className="w-5 h-5" />
              </Button>
              <p className="text-emerald-100/60 mt-4">Você receberá um certificado ao acertar todas as questões!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-emerald-500/20 bg-slate-900/50 backdrop-blur-sm py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-6 h-6 text-emerald-400" />
                <span className="font-bold text-lg text-emerald-300">Equilíbrio</span>
              </div>
              <p className="text-emerald-100/60">Conhecimento educativo para um futuro sustentável.</p>
            </div>
            <div>
              <h4 className="font-bold text-emerald-300 mb-3">Navegação</h4>
              <ul className="space-y-2 text-emerald-100/60">
                <li><a href="#pilares" className="hover:text-emerald-400 transition-colors">Pilares</a></li>
                <li><a href="#agrinho" className="hover:text-emerald-400 transition-colors">Agrinho</a></li>
                <li><a href="#desafios" className="hover:text-emerald-400 transition-colors">Desafios</a></li>
                <li><a href="#futuro" className="hover:text-emerald-400 transition-colors">Futuro</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-emerald-300 mb-3">Sobre</h4>
              <p className="text-emerald-100/60">
                Desenvolvido com foco em educação ambiental e sustentabilidade.
              </p>
            </div>
          </div>
          <div className="border-t border-emerald-500/20 pt-8 text-center text-emerald-100/50">
            <p>&copy; 2026 Equilíbrio entre Produção e Meio Ambiente. Todos os direitos reservados.</p>
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
        /* Hide Base44 edit badge */
        #base44-edit-badge,
        [id*="badge"],
        [class*="badge"] {
          display: none !important;
          visibility: hidden !important;
        }
      `}</style>
    </div>
  );
}
