import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * AgrinhoSection Component
 * - Agrinho Program information
 * - Educational and social impact
 */

const agrinhoPoints = [
  "Educação ambiental para crianças rurais",
  "Promoção de saúde e segurança pessoal",
  "Transformação social e ambiental",
  "Cidadania e responsabilidade comunitária",
];

export function AgrinhoSection() {
  return (
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
              {agrinhoPoints.map((point, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-emerald-400 font-bold text-xl">✓</span>
                  <span className="text-emerald-100/80">{point}</span>
                </li>
              ))}
            </ul>
            <Button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white gap-2">
              Conheça o Agrinho <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="relative h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-transparent rounded-2xl blur-3xl"></div>
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663727111658/BqKVh2jtiG86DBjUZkuKBz/agrinho-programa-ioKKvPxHLQPxFgQcuXMnqW.webp"
              alt="Programa Agrinho"
              className="w-full h-full object-cover rounded-2xl border border-emerald-500/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
