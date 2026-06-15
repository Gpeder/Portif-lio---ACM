const timeline = [
  {
    periodo: "Atual",
    cargo: "Auxiliar de Projetos",
    empresa: "—",
    destaque: true,
  },
  {
    periodo: "2024–2025",
    cargo: "Arquiteta",
    empresa: "Estúdio MHM — São Sebastião do Paraíso/MG",
    descricao: "Projetos residenciais, marcenaria, marmoraria, infraestrutura. SketchUp + Layout.",
    destaque: false,
  },
  {
    periodo: "2023–2024",
    cargo: "Estagiária",
    empresa: "Prefeitura de Poços de Caldas — Hospital do Câncer",
    descricao: "Projeto executivo BIM, compatibilização, detalhamento de esquadrias e fachada.",
    destaque: false,
  },
  {
    periodo: "2022–2023",
    cargo: "Estagiária",
    empresa: "Escritório INK Arquitetura — São Sebastião do Paraíso/MG",
    descricao: "Projetos arquitetônicos em Archicad, atendimento ao cliente.",
    destaque: false,
  },
  {
    periodo: "2021–2022",
    cargo: "Colaboradora",
    empresa: "Escritório Modelo PUCMINAS",
    descricao: "Projetos institucionais — Santa Casa de Poços de Caldas, espaço Vaga Viva.",
    destaque: false,
  },
  {
    periodo: "07/2023",
    cargo: "Formação",
    empresa: "Bacharel em Arquitetura e Urbanismo — PUCMINAS Poços de Caldas",
    destaque: false,
  },
];

export function Experiencia() {
  return (
    <section
      id="experiencia"
      style={{
        background: "#F5F0E8",
        padding: "96px 40px",
        borderTop: "0.5px solid #E8E2D9",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* @sessão (cabeçalho) */}
        <div data-section style={{ marginBottom: 64, textAlign: "center" }}>
          <p
            data-reveal
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
            Trajetória
          </p>
          <h2
            data-reveal
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontSize: "clamp(32px, 3.5vw, 48px)",
              color: "#1C1C1A",
              letterSpacing: "0.02em",
            }}
          >
            Experiência
          </h2>
        </div>

        {/* ! Linha do tempo (experiências) */}
        <div
          style={{
            position: "relative",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {/* * Linha central divisória */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 1,
              background:
                "linear-gradient(to bottom, transparent, #C8A97E 8%, #C8A97E 92%, transparent)",
              transform: "translateX(-50%)",
            }}
            className="timeline-line"
          />

          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={i}
                data-section
                style={{
                  display: "flex",
                  justifyContent: isLeft ? "flex-start" : "flex-end",
                  marginBottom: 48,
                  position: "relative",
                }}
                className="timeline-item"
              >
                {/* * Marcador visual (ponto da timeline) */}
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: 20,
                    transform: "translate(-50%, -50%)",
                    width: item.destaque ? 10 : 6,
                    height: item.destaque ? 10 : 6,
                    background: item.destaque ? "#C8A97E" : "#E8E2D9",
                    border: `1px solid ${item.destaque ? "#C8A97E" : "#C8A97E"}`,
                    borderRadius: 0,
                    zIndex: 1,
                    transition: "transform 0.3s ease",
                  }}
                  className="timeline-dot"
                />

                {/* * Bloco de conteúdo (card de experiência) */}
                <div
                  data-reveal
                  style={{
                    width: "calc(50% - 40px)",
                    background: item.destaque ? "#0D0D0D" : "#FFFFFF",
                    border: `0.5px solid ${item.destaque ? "#C8A97E" : "#E8E2D9"}`,
                    borderRadius: 2,
                    padding: "24px 28px",
                    position: "relative",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 8px 24px rgba(0,0,0,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* * Período de atuação */}
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 10,
                      letterSpacing: "0.1em",
                      color: "#C8A97E",
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    {item.periodo}
                  </span>

                  {/* * Cargo ocupado */}
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 400,
                      fontSize: 20,
                      color: item.destaque ? "#F5F0E8" : "#1C1C1A",
                      margin: 0,
                      marginBottom: 6,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item.cargo}
                  </h3>

                  {/* * Empresa ou instituição */}
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 300,
                      fontSize: 13,
                      color: item.destaque
                        ? "rgba(232, 226, 217, 0.6)"
                        : "#6B5B45",
                      margin: 0,
                      marginBottom: item.descricao ? 12 : 0,
                    }}
                  >
                    {item.empresa}
                  </p>

                  {item.descricao && (
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 300,
                        fontSize: 13,
                        lineHeight: 1.7,
                        color: "#2C2C2A",
                        margin: 0,
                      }}
                    >
                      {item.descricao}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .timeline-line { display: none !important; }
          .timeline-dot { display: none !important; }
          .timeline-item {
            justify-content: flex-start !important;
          }
          .timeline-item > div:last-child {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
