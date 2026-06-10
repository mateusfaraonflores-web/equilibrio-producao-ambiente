import { useState, useEffect } from "react";
import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ContextualIntro } from "@/components/sections/ContextualIntro";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { AgrinhoSection } from "@/components/sections/AgrinhoSection";
import { ChallengesSection } from "@/components/sections/ChallengesSection";
import { FutureSection } from "@/components/sections/FutureSection";
import { GameQuizSection } from "@/components/sections/GameQuizSection";
import { Footer } from "@/components/sections/Footer";
import "@/styles/animations.css";

/**
 * Home Page
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

      {/* Header */}
      <Header />

      {/* Main Content */}
      <HeroSection scrollY={scrollY} />
      <ContextualIntro />
      <PillarsSection />
      <AgrinhoSection />
      <ChallengesSection />
      <FutureSection />
      <GameQuizSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
