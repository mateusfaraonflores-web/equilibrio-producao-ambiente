import { Leaf } from "lucide-react";

/**
 * Header Component
 * - Sticky navigation
 * - Logo and brand
 */

export function Header() {
  return (
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
  );
}
