import { useState } from "react";
import { Button } from "@/components/ui/button";

/**
 * GameQuizSection Component
 * - Game integration via iframe
 * - Educational quiz
 */

const quizQuestions = [
  {
    question: "Qual é um dos três pilares da produção sustentável?",
    options: ["Produção em massa", "Agricultura Sustentável", "Consumismo desenfreado", "Exploração de recursos"],
    correct: 1,
  },
  {
    question: "O que é o Programa Agrinho?",
    options: ["Uma empresa agrícola", "Educação e promoção social para crianças rurais", "Um tipo de cultivo", "Um produto químico"],
    correct: 1,
  },
  {
    question: "Qual característica define a Indústria Verde?",
    options: ["Produção em larga escala", "Uso de energias renováveis e redução de resíduos", "Máxima exploração de recursos", "Sem regulamentação ambiental"],
    correct: 1,
  },
  {
    question: "Como o consumo consciente impacta a sustentabilidade?",
    options: ["Não tem impacto", "Cria demanda por produtos responsáveis", "Aumenta a poluição", "Reduz empregos"],
    correct: 1,
  },
];

export function GameQuizSection() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index: number) => {
    if (index === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowResult(false);
    } else {
      setQuizStarted(false);
    }
  };

  return (
    <section className="relative py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Game Section */}
        <div id="jogo" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                Experiência Interativa
              </span>
            </h2>
            <p className="text-xl text-emerald-100/70 max-w-3xl mx-auto">
              Jogue "O Cristal de Lúmina" e derrote os robôs para restaurar a natureza!
            </p>
          </div>

          <div className="relative w-full" style={{ aspectRatio: "16 / 9", minHeight: "600px" }}>
            <iframe
              src="https://last-seed-bloom.base44.app"
              sandbox="allow-same-origin allow-scripts allow-popups"
              style={{
                width: "100%",
                height: "100%",
                border: "2px solid rgba(16, 185, 129, 0.2)",
                borderRadius: "1rem",
              }}
              title="O Cristal de Lúmina - Jogo Educativo"
            />
          </div>
        </div>

        {/* Quiz Section */}
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                Teste Seu Conhecimento
              </span>
            </h2>
            <p className="text-lg text-emerald-100/70">
              Responda o quiz e avalie o quanto você aprendeu sobre sustentabilidade!
            </p>
          </div>

          {!quizStarted ? (
            <div className="text-center">
              <Button
                onClick={() => {
                  setQuizStarted(true);
                  setCurrentQuestion(0);
                  setScore(0);
                  setShowResult(false);
                }}
                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white text-lg px-8 py-6"
              >
                Começar Quiz
              </Button>
            </div>
          ) : (
            <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8">
              <div className="mb-6">
                <p className="text-emerald-400 font-bold mb-2">
                  Pergunta {currentQuestion + 1} de {quizQuestions.length}
                </p>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-green-600 h-2 rounded-full transition-all"
                    style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                  />
                </div>
              </div>

              <h3 className="text-2xl font-black mb-8 text-emerald-100">
                {quizQuestions[currentQuestion].question}
              </h3>

              <div className="space-y-4 mb-8">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={showResult}
                    className={`w-full p-4 rounded-lg text-left font-semibold transition-all ${
                      showResult
                        ? index === quizQuestions[currentQuestion].correct
                          ? "bg-green-500/20 border border-green-500 text-green-300"
                          : "bg-red-500/20 border border-red-500 text-red-300"
                        : "bg-slate-700/50 border border-emerald-500/30 text-emerald-100 hover:border-emerald-400/60"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {showResult && (
                <div className="text-center">
                  <Button
                    onClick={handleNext}
                    className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white"
                  >
                    {currentQuestion < quizQuestions.length - 1 ? "Próxima Pergunta" : "Finalizar Quiz"}
                  </Button>
                </div>
              )}

              {!showResult && currentQuestion === quizQuestions.length - 1 && (
                <div className="text-center">
                  <p className="text-emerald-100/70 mb-4">Pontuação: {score} de {quizQuestions.length}</p>
                </div>
              )}
            </div>
          )}

          {!quizStarted && score > 0 && (
            <div className="text-center mt-8 bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-black mb-4 text-emerald-300">Resultado Final</h3>
              <p className="text-4xl font-black text-emerald-400 mb-4">{score} de {quizQuestions.length}</p>
              <p className="text-emerald-100/70 mb-6">
                {score === quizQuestions.length
                  ? "Perfeito! Você é um especialista em sustentabilidade! 🌿"
                  : score >= 3
                  ? "Excelente! Você tem um bom conhecimento sobre sustentabilidade! 🌱"
                  : "Bom começo! Continue aprendendo sobre sustentabilidade! 📚"}
              </p>
              <Button
                onClick={() => {
                  setQuizStarted(true);
                  setCurrentQuestion(0);
                  setScore(0);
                  setShowResult(false);
                }}
                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white"
              >
                Refazer Quiz
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
