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
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        h1, h2, h3, h4 {
          font-weight: inherit;
          line-height: inherit;
          font-size: inherit;
        }

        ::selection {
          background: rgba(200, 169, 126, 0.25);
          color: #1C1C1A;
        }

        ::-webkit-scrollbar {
          width: 4px;
        }

        ::-webkit-scrollbar-track {
          background: #0D0D0D;
        }

        ::-webkit-scrollbar-thumb {
          background: #C8A97E;
          border-radius: 0;
        }

        a {
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
