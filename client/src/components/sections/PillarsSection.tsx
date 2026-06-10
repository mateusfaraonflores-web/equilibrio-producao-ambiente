import { Leaf, Factory, ShoppingCart } from "lucide-react";

/**
 * PillarsSection Component
 * - Three pillars of sustainable production
 * - Main educational content
 */

const pillars = [
  {
    icon: Leaf,
    title: "Agricultura Sustentável",
    description: "Práticas como rotação de culturas, conservação do solo e irrigação eficiente garantem produtividade sem comprometer recursos naturais. Alimenta gerações mantendo a terra viva.",
    color: "emerald",
  },
  {
    icon: Factory,
    title: "Indústria Verde",
    description: "Redução de resíduos, eficiência energética e uso de energias renováveis transformam a produção industrial em força sustentável. Inovação que protege o planeta.",
    color: "green",
  },
  {
    icon: ShoppingCart,
    title: "Consumo Consciente",
    description: "Escolhas informadas dos consumidores impulsionam mercados sustentáveis e criam demanda por produtos responsáveis. Você tem poder de transformação.",
    color: "cyan",
  },
];

export function PillarsSection() {
  return (
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
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const colorClass = pillar.color === "emerald" ? "emerald" : pillar.color === "green" ? "green" : "cyan";
            
            return (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r from-${colorClass}-500/20 to-${colorClass === "emerald" ? "green" : colorClass}-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all`}></div>
                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 hover:border-emerald-400/60 transition-all">
                  <div className={`w-14 h-14 bg-${colorClass}-500/20 rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-8 h-8 text-${colorClass}-400`} />
                  </div>
                  <h3 className={`text-2xl font-black mb-3 text-${colorClass}-300`}>{pillar.title}</h3>
                  <p className="text-emerald-100/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
