/**
 * ChallengesSection Component
 * - Challenges and solutions for sustainability
 * - Comparative analysis
 */

const challenges = [
  {
    title: "Conflitos de Interesse",
    description: "Tensão entre lucro imediato e sustentabilidade de longo prazo",
  },
  {
    title: "Desinformação",
    description: "Falta de conhecimento sobre impactos ambientais reais",
  },
  {
    title: "Implementação de Políticas",
    description: "Dificuldade em aplicar regulamentações ambientais",
  },
];

const solutions = [
  {
    title: "Inovação Tecnológica",
    description: "Desenvolvimento de tecnologias limpas e eficientes",
  },
  {
    title: "Educação Contínua",
    description: "Conscientização sobre sustentabilidade em todos os níveis",
  },
  {
    title: "Legislação e Fiscalização",
    description: "Leis rigorosas com enforcement efetivo",
  },
];

export function ChallengesSection() {
  return (
    <section id="desafios" className="relative py-20 md:py-32 bg-slate-800/50 backdrop-blur-sm border-y border-emerald-500/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              Desafios e Soluções
            </span>
          </h2>
          <p className="text-xl text-emerald-100/70 max-w-3xl mx-auto">
            Entender os obstáculos e as respostas viáveis é essencial para construir um futuro sustentável.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-black mb-8 text-red-400">Desafios</h3>
            <div className="space-y-6">
              {challenges.map((challenge, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative bg-slate-900/50 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 hover:border-red-400/60 transition-all">
                    <h4 className="text-xl font-black mb-2 text-red-300">{challenge.title}</h4>
                    <p className="text-emerald-100/70">{challenge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-black mb-8 text-green-400">Soluções</h3>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative bg-slate-900/50 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 hover:border-green-400/60 transition-all">
                    <h4 className="text-xl font-black mb-2 text-green-300">{solution.title}</h4>
                    <p className="text-emerald-100/70">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
