import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/Hero";
import { Sobre } from "@/components/Sobre";
import { Projetos } from "@/components/Projetos";
import { Viewer3D } from "@/components/Viewer3D";
import { Experiencia } from "@/components/Experiencia";
import { Contato } from "@/components/Contato";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function App() {
  useScrollReveal();

  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#F5F0E8",
        minHeight: "100vh",
        scrollBehavior: "smooth",
      }}
    >
      <Navbar />
      <Hero />
      <Sobre />
      <Projetos />
      <Viewer3D />
      <Experiencia />
      <Contato />
    </div>
  );
}
