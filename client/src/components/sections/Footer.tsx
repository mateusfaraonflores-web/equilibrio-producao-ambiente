import { Leaf } from "lucide-react";

/**
 * Footer Component
 * - Navigation links
 * - Copyright info
 */

export function Footer() {
  return (
    <footer className="relative py-16 border-t border-emerald-500/20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
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
  );
}
