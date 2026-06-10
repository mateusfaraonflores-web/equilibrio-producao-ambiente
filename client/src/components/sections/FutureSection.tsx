import { Globe, Zap, BookOpen } from "lucide-react";

/**
 * FutureSection Component
 * - Vision for sustainable future
 * - Call to action
 */

const futureActions = [
  {
    icon: Globe,
    title: "Ação Individual",
    description: "Cada escolha conta. Consumo consciente, redução de resíduos, apoio a empresas sustentáveis.",
  },
  {
    icon: Zap,
    title: "Engajamento Comunitário",
    description: "Mobilize sua comunidade. Campanhas locais, educação ambiental, pressão por políticas públicas.",
  },
  {
    icon: BookOpen,
    title: "Transformação Sistêmica",
    description: "Apoie mudanças estruturais. Legislação ambiental, tecnologia limpa, economia circular.",
  },
];

export function FutureSection() {
  return (
    <section id="futuro" className="relative py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              Um Futuro Sustentável
            </span>
          </h2>
          <p className="text-xl text-emerald-100/70 max-w-3xl mx-auto">
            O futuro não é determinado. É construído por nossas ações hoje. Descubra como você pode contribuir para um mundo equilibrado.
          </p>
        </div>

        <img 
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663727111658/BqKVh2jtiG86DBjUZkuKBz/futuro-sustentavel-aXzMnRxKvKXTqNKdQvLBxV.webp"
          alt="Futuro Sustentável"
          className="w-full h-auto rounded-2xl shadow-2xl mb-12 border border-emerald-500/20"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {futureActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 hover:border-emerald-400/60 transition-all text-center">
                  <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-black mb-3 text-cyan-300">{action.title}</h3>
                  <p className="text-emerald-100/70 leading-relaxed">
                    {action.description}
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
