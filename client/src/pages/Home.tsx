import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Factory, ShoppingCart, Globe } from "lucide-react";

/**
 * Design Philosophy: Sustainable Modernism
 * - Clean, elegant typography with Playfair Display for headings
 * - Deep green (#2D5016) as primary color representing forests and sustainability
 * - Asymmetric layout with generous whitespace
 * - Smooth transitions and hover effects for interactivity
 * - Semantic HTML with proper heading hierarchy
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">Equilíbrio</h1>
          </div>
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li><a href="#pilares" className="hover:text-primary transition-colors">Pilares</a></li>
            <li><a href="#agrinho" className="hover:text-primary transition-colors">Agrinho</a></li>
            <li><a href="#desafios" className="hover:text-primary transition-colors">Desafios</a></li>
            <li><a href="#futuro" className="hover:text-primary transition-colors">Futuro</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
              Equilíbrio entre Produção e Meio Ambiente
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed">
              A sustentabilidade não é uma escolha, é uma necessidade. Descubra como podemos equilibrar a produção econômica com a preservação ambiental para as gerações futuras.
            </p>
            <div className="flex gap-4 pt-4">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white gap-2"
                onClick={() => document.getElementById('pilares')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explorar <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Saiba Mais
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663727111658/BqKVh2jtiG86DBjUZkuKBz/hero-producao-ambiente-6VKiU9W2hwhVRqR2j7bzKb.webp"
              alt="Equilíbrio entre produção sustentável e natureza"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Decorative divider */}
        <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent/50 mt-12"></div>
      </section>

      {/* Three Pillars Section */}
      <section id="pilares" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Três Pilares da Produção Sustentável
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              O caminho para um futuro equilibrado passa por três pilares fundamentais que trabalham em harmonia.
            </p>
          </div>

          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663727111658/BqKVh2jtiG86DBjUZkuKBz/pilares-sustentabilidade-LsfBCzWFSrNn9zUoGbL2JC.webp"
            alt="Três pilares da produção sustentável: agricultura, indústria verde e consumo consciente"
            className="w-full h-auto rounded-lg shadow-lg mb-12"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1: Agriculture */}
            <article className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Agricultura Sustentável</h3>
              <p className="text-foreground/70 leading-relaxed">
                Práticas como rotação de culturas, conservação do solo e irrigação eficiente garantem produtividade sem comprometer recursos naturais.
              </p>
            </article>

            {/* Pillar 2: Green Industry */}
            <article className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <Factory className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Indústria Verde</h3>
              <p className="text-foreground/70 leading-relaxed">
                Redução de resíduos, eficiência energética e uso de energias renováveis transformam a produção industrial em força sustentável.
              </p>
            </article>

            {/* Pillar 3: Conscious Consumption */}
            <article className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <ShoppingCart className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Consumo Consciente</h3>
              <p className="text-foreground/70 leading-relaxed">
                Escolhas informadas dos consumidores impulsionam mercados sustentáveis e criam demanda por produtos responsáveis.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Agrinho Program Section */}
      <section id="agrinho" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Programa Agrinho
              </h2>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                O Programa Agrinho é um conjunto de ações de educação e promoção social destinado a transformar crianças e adolescentes em agentes de mudança. Através da educação ambiental, o programa promove sustentabilidade no meio rural.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span className="text-foreground/70">Educação ambiental para crianças rurais</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span className="text-foreground/70">Promoção de saúde e segurança pessoal</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span className="text-foreground/70">Transformação social e ambiental</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span className="text-foreground/70">Cidadania e responsabilidade comunitária</span>
                </li>
              </ul>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Conheça o Agrinho
              </Button>
            </div>
            <div>
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663727111658/BqKVh2jtiG86DBjUZkuKBz/agrinho-programa-CFEnjdW2v88ML9mc8svBTb.webp"
                alt="Crianças e adolescentes aprendendo sobre sustentabilidade no Programa Agrinho"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenges and Solutions Section */}
      <section id="desafios" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16 text-center">
            Desafios e Soluções
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Challenges */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Desafios Atuais</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                  <h4 className="font-bold text-foreground mb-2">Conflitos de Interesse</h4>
                  <p className="text-foreground/70">Tensão entre lucro imediato e preservação ambiental de longo prazo.</p>
                </div>
                <div className="bg-white p-6 rounded-lg border-l-4 border-secondary">
                  <h4 className="font-bold text-foreground mb-2">Desinformação</h4>
                  <p className="text-foreground/70">Falta de conhecimento sobre práticas sustentáveis e seus benefícios.</p>
                </div>
                <div className="bg-white p-6 rounded-lg border-l-4 border-accent">
                  <h4 className="font-bold text-foreground mb-2">Implementação de Políticas</h4>
                  <p className="text-foreground/70">Dificuldade em aplicar regulamentações ambientais de forma efetiva.</p>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Soluções Viáveis</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                  <h4 className="font-bold text-foreground mb-2">Inovação Tecnológica</h4>
                  <p className="text-foreground/70">Desenvolvimento de tecnologias limpas e eficientes para produção.</p>
                </div>
                <div className="bg-white p-6 rounded-lg border-l-4 border-secondary">
                  <h4 className="font-bold text-foreground mb-2">Educação Contínua</h4>
                  <p className="text-foreground/70">Programas como Agrinho que educam e transformam consciências.</p>
                </div>
                <div className="bg-white p-6 rounded-lg border-l-4 border-accent">
                  <h4 className="font-bold text-foreground mb-2">Legislação e Fiscalização</h4>
                  <p className="text-foreground/70">Marcos regulatórios claros com fiscalização rigorosa e transparente.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section id="futuro" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663727111658/BqKVh2jtiG86DBjUZkuKBz/futuro-sustentavel-cnyuqXJeHRqFBAe8pmzRzA.webp"
                alt="Visão de futuro com tecnologia e natureza em harmonia"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Construindo um Futuro Sustentável
              </h2>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                O futuro que desejamos não é apenas possível—é necessário. Através de ações individuais e coletivas, podemos criar um mundo onde produção e preservação ambiental caminham juntas.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Ações Individuais</h4>
                    <p className="text-foreground/70">Cada escolha consciente contribui para mudanças sistêmicas.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Engajamento Comunitário</h4>
                    <p className="text-foreground/70">Comunidades unidas criam força para transformação real.</p>
                  </div>
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary/90 text-white gap-2 w-full md:w-auto">
                Junte-se ao Movimento <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seja Parte da Solução
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            A sustentabilidade é responsabilidade de todos. Descubra como você pode contribuir para um equilíbrio entre produção e meio ambiente.
          </p>
          <Button 
            className="bg-white text-primary hover:bg-white/90 font-semibold"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Comece Agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-6 h-6 text-primary" />
                <span className="font-bold text-primary">Equilíbrio</span>
              </div>
              <p className="text-foreground/70 text-sm">Promovendo sustentabilidade e equilíbrio ambiental.</p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-3">Navegação</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#pilares" className="hover:text-primary transition-colors">Pilares</a></li>
                <li><a href="#agrinho" className="hover:text-primary transition-colors">Agrinho</a></li>
                <li><a href="#desafios" className="hover:text-primary transition-colors">Desafios</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-3">Recursos</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-primary transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-3">Conecte-se</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-primary transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-foreground/70">
            <p>&copy; 2026 Equilíbrio entre Produção e Meio Ambiente. Todos os direitos reservados.</p>
            <p className="mt-2">Desenvolvido com foco em sustentabilidade e educação ambiental.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
