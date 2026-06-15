import { useEffect, useState } from "react";

export function Hero() {
  const [arrowVisible, setArrowVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setArrowVisible(window.scrollY < 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "#0D0D0D",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* * Linha decorativa vertical (fundo) */}
      <div
        style={{
          position: "absolute",
          right: "30%",
          top: "15%",
          bottom: "15%",
          width: 1,
          background: "rgba(232, 226, 217, 0.18)",
        }}
      />

      {/* ! Conteúdo principal da seção Hero */}
      <div
        style={{
          maxWidth: 1280,
          width: "100%",
          margin: "0 auto",
          padding: "0 40px",
          paddingTop: 80,
        }}
      >
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#C8A97E",
            marginBottom: 32,
            animation: "heroFadeIn 1s ease 0.2s both",
          }}
        >
          Arquitetura & Interiores
        </p>

        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "clamp(52px, 9vw, 110px)",
            letterSpacing: "0.06em",
            color: "#F5F0E8",
            lineHeight: 1.0,
            margin: 0,
            marginBottom: 32,
            animation: "heroFadeIn 1s ease 0.4s both",
          }}
        >
          ANA CAROLINA
          <br />
          <em
            style={{
              fontStyle: "italic",
              fontWeight: 300,
              color: "#E8E2D9",
            }}
          >
            MIRANDA
          </em>
        </h1>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: 15,
            letterSpacing: "0.08em",
            color: "rgba(232, 226, 217, 0.6)",
            marginBottom: 56,
            animation: "heroFadeIn 1s ease 0.6s both",
          }}
        >
          Arquiteta e Urbanista · BIM · Interiores · Execução
        </p>

        <a
          href="#projetos"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#F5F0E8",
            textDecoration: "none",
            borderBottom: "0.5px solid rgba(232, 226, 217, 0.4)",
            paddingBottom: 4,
            transition: "color 0.3s ease, border-color 0.3s ease",
            display: "inline-block",
            animation: "heroFadeIn 1s ease 0.8s both",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = "#C8A97E";
            (e.currentTarget as HTMLElement).style.borderColor = "#C8A97E";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = "#F5F0E8";
            (e.currentTarget as HTMLElement).style.borderColor =
              "rgba(232, 226, 217, 0.4)";
          }}
        >
          Ver projetos ↓
        </a>
      </div>

      {/* @sessão (indicador de rolagem do mouse) */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: arrowVisible ? 1 : 0,
          transition: "opacity 0.4s ease",
          animation: arrowVisible ? "pulse 2s ease infinite" : "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <div
          style={{
            width: 1,
            height: 40,
            background:
              "linear-gradient(to bottom, transparent, rgba(200, 169, 126, 0.6))",
          }}
        />
        <div
          style={{
            width: 6,
            height: 6,
            border: "0.5px solid #C8A97E",
            borderLeft: "none",
            borderTop: "none",
            transform: "rotate(45deg)",
            opacity: 0.7,
          }}
        />
      </div>

      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: translateX(-50%) translateY(0); }
          50% { opacity: 1; transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
}
