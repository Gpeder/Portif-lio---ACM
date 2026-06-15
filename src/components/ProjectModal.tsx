import { useEffect, useState } from "react";

const loremDesc =
  "Este projeto foi desenvolvido com foco em precisão técnica e sensibilidade espacial, equilibrando estética contemporânea com funcionalidade. Cada detalhe foi pensado para criar uma experiência de habitação única, desde a distribuição dos ambientes até a escolha de materiais e acabamentos. A concepção partiu de um briefing detalhado com o cliente, resultando em um projeto personalizado que reflete sua identidade e estilo de vida.";

const loremDetails =
  "O desenvolvimento contemplou todas as etapas do projeto arquitetônico: estudo preliminar, anteprojeto, projeto executivo e compatibilização com instalações. A modelagem BIM permitiu a identificação e resolução de interferências antes da execução em obra.";

const placeholderColors = [
  "#D4BCA0",
  "#C8B090",
  "#BFA888",
  "#D8CAB8",
  "#CCBAA8",
];

type Project = {
  title: string;
  category: string;
  tools: string[];
  type: string;
  images: number;
  accent: string;
};

function ImageGallery({ project }: { project: Project }) {
  const [current, setCurrent] = useState(0);
  const count = Math.min(project.images ?? 3, 5);
  const colors = placeholderColors.slice(0, count);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, height: "100%" }}>
      {/* * Imagem principal ativa */}
      <div
        style={{
          flex: 1,
          background: colors[current],
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 300,
          position: "relative",
          overflow: "hidden",
          transition: "background 0.4s ease",
        }}
      >
        <div style={{ textAlign: "center", padding: 24 }}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: 22,
              color: "rgba(28, 28, 26, 0.45)",
              letterSpacing: "0.08em",
            }}
          >
            {project.title}
          </p>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 10,
              color: "rgba(107, 91, 69, 0.6)",
              letterSpacing: "0.1em",
              marginTop: 8,
            }}
          >
            {String(current + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </p>
        </div>

        {/* * Setas de navegação (anterior/próxima) */}
        {count > 1 && (
          <>
            <button
              onClick={() => setCurrent((c) => (c - 1 + count) % count)}
              style={{
                position: "absolute",
                left: 16,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(13,13,13,0.35)",
                border: "0.5px solid rgba(232,226,217,0.3)",
                color: "#F5F0E8",
                width: 36,
                height: 36,
                cursor: "pointer",
                borderRadius: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(200,169,126,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(13,13,13,0.35)";
              }}
            >
              ←
            </button>
            <button
              onClick={() => setCurrent((c) => (c + 1) % count)}
              style={{
                position: "absolute",
                right: 16,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(13,13,13,0.35)",
                border: "0.5px solid rgba(232,226,217,0.3)",
                color: "#F5F0E8",
                width: 36,
                height: 36,
                cursor: "pointer",
                borderRadius: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(200,169,126,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(13,13,13,0.35)";
              }}
            >
              →
            </button>
          </>
        )}
      </div>

      {/* * Miniaturas das imagens adicionais */}
      {count > 1 && (
        <div style={{ display: "flex", gap: 8 }}>
          {colors.map((c, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                flex: 1,
                height: 56,
                background: c,
                border: `1.5px solid ${current === i ? "#C8A97E" : "transparent"}`,
                cursor: "pointer",
                borderRadius: 2,
                transition: "border-color 0.3s ease, opacity 0.3s ease",
                opacity: current === i ? 1 : 0.6,
                padding: 0,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        display: "flex",
        alignItems: "stretch",
        animation: "modalIn 0.35s ease",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* * Fundo escuro com efeito blur */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(13, 13, 13, 0.85)",
          backdropFilter: "blur(6px)",
        }}
        onClick={onClose}
      />

      {/* ! Painel central do Modal */}
      <div
        style={{
          position: "relative",
          marginLeft: "auto",
          width: "min(92vw, 1100px)",
          background: "#F5F0E8",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          overflow: "hidden",
          animation: "slideIn 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
        className="modal-panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* @sessão (galeria de imagens - esquerda) */}
        <div
          style={{
            background: "#FFFFFF",
            padding: 32,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ImageGallery project={project} />
        </div>

        {/* @sessão (informações do projeto - direita) */}
        <div
          style={{
            padding: "40px 40px 40px 36px",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            maxHeight: "100vh",
          }}
        >
          {/* * Cabeçalho e botão de fechar */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  color: "#C8A97E",
                  textTransform: "uppercase",
                }}
              >
                {project.category}
              </span>
              <button
                onClick={onClose}
                style={{
                  background: "none",
                  border: "0.5px solid #E8E2D9",
                  color: "#6B5B45",
                  width: 32,
                  height: 32,
                  cursor: "pointer",
                  borderRadius: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  transition: "border-color 0.3s ease, color 0.3s ease",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#C8A97E";
                  (e.currentTarget as HTMLElement).style.color = "#C8A97E";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#E8E2D9";
                  (e.currentTarget as HTMLElement).style.color = "#6B5B45";
                }}
              >
                ✕
              </button>
            </div>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                fontSize: 36,
                color: "#1C1C1A",
                letterSpacing: "0.02em",
                lineHeight: 1.1,
                marginBottom: 8,
              }}
            >
              {project.title}
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: 13,
                color: "#6B5B45",
                letterSpacing: "0.04em",
              }}
            >
              {project.type}
            </p>
          </div>

          {/* * Linha divisória simples */}
          <div style={{ height: 0.5, background: "#E8E2D9", marginBottom: 28 }} />

          {/* * Tecnologias / Softwares utilizados */}
          <div style={{ marginBottom: 28 }}>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#6B5B45",
                marginBottom: 12,
              }}
            >
              Ferramentas
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    color: "#C8A97E",
                    background: "#0D0D0D",
                    padding: "6px 12px",
                    borderRadius: 0,
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* * Descrições e detalhes textuais do projeto */}
          <div style={{ marginBottom: 28 }}>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#6B5B45",
                marginBottom: 12,
              }}
            >
              Sobre o projeto
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: 14,
                lineHeight: 1.85,
                color: "#2C2C2A",
              }}
            >
              {loremDesc}
            </p>
          </div>

          <div style={{ marginBottom: 32 }}>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: 14,
                lineHeight: 1.85,
                color: "#2C2C2A",
              }}
            >
              {loremDetails}
            </p>
          </div>

          {/* * Grade de metadados técnicos (categoria, tipo, softwares) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
              marginTop: "auto",
              paddingTop: 20,
              borderTop: "0.5px solid #E8E2D9",
            }}
          >
            {[
              { label: "Categoria", value: project.category },
              { label: "Tipo", value: project.type },
              { label: "Imagens", value: `${project.images} renders` },
              { label: "Software", value: project.tools.join(", ") },
            ].map((item) => (
              <div key={item.label}>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    fontSize: 10,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#6B5B45",
                    marginBottom: 4,
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    fontSize: 13,
                    color: "#1C1C1A",
                  }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { transform: translateX(40px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @media (max-width: 767px) {
          .modal-panel {
            grid-template-columns: 1fr !important;
            width: 100% !important;
            margin: 0 !important;
            overflow-y: auto !important;
          }
        }
      `}</style>
    </div>
  );
}
