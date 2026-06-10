/**
 * ContextualIntro Component
 * - Author's original text about production-environment balance
 * - Educational context for the entire website
 */

export function ContextualIntro() {
  return (
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
  );
}
