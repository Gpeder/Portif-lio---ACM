import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "REVIT", level: 4 },
  { name: "SKETCHUP", level: 5 },
  { name: "TWINMOTION", level: 4 },
  { name: "ARCHICAD", level: 3 },
  { name: "AUTOCAD", level: 4 },
  { name: "LAYOUT", level: 5 },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ marginBottom: 16 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 6,
        }}
      >
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.1em",
            color: "#C8A97E",
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 10,
            color: "#6B5B45",
          }}
        >
          {level}/5
        </span>
      </div>
      <div
        style={{
          height: 1,
          background: "#E8E2D9",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            width: animated ? `${(level / 5) * 100}%` : "0%",
            background: "#C8A97E",
            transition: "width 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.2s",
          }}
        />
      </div>
    </div>
  );
}

export function Sobre() {
  return (
    <section
      id="sobre"
      data-section
      style={{
        background: "#F5F0E8",
        padding: "96px 40px",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
        className="sobre-grid"
      >
        <div data-reveal style={{ position: "relative" }}>
          <div
            style={{
              width: "100%",
              aspectRatio: "3/4",
              background: "#E8E2D9",
              clipPath:
                "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                textAlign: "center",
                padding: 24,
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: 18,
                  color: "#6B5B45",
                  letterSpacing: "0.1em",
                  marginBottom: 8,
                }}
              >
                Ana Carolina Miranda
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#C8A97E",
                }}
              >
                Arquiteta
              </p>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: -16,
              left: 24,
              width: 64,
              height: 1,
              background: "#C8A97E",
            }}
          />
        </div>

        <div>
          <p
            data-reveal
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: 10,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#6B5B45",
              marginBottom: 16,
            }}
          >
            Sobre
          </p>

          <h2
            data-reveal
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontSize: "clamp(32px, 3.5vw, 48px)",
              color: "#1C1C1A",
              lineHeight: 1.15,
              letterSpacing: "0.02em",
              marginBottom: 28,
            }}
          >
            Sobre Ana Carolina
          </h2>

          <p
            data-reveal
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: 15,
              lineHeight: 1.8,
              color: "#2C2C2A",
              marginBottom: 40,
            }}
          >
            Arquiteta formada pela PUCMINAS — Poços de Caldas, com experiência
            em projetos residenciais, comerciais e institucionais. Atua com foco
            em precisão técnica, detalhamento BIM e sensibilidade espacial. Já
            desenvolveu projetos do esboço à prancha executiva, passando pela
            visualização 3D com Twinmotion.
          </p>

          <div data-reveal style={{ marginBottom: 40 }}>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#6B5B45",
                marginBottom: 20,
              }}
            >
              Ferramentas
            </p>
            {skills.map((s) => (
              <SkillBar key={s.name} name={s.name} level={s.level} />
            ))}
          </div>

          <div data-reveal style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { label: "Email", value: "anacarolinamirandaa@gmail.com" },
              { label: "Telefone", value: "(35) 99200-0394" },
              { label: "Localização", value: "São Sebastião do Paraíso, MG" },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    fontSize: 10,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#6B5B45",
                    minWidth: 80,
                    paddingTop: 2,
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    fontSize: 14,
                    color: "#1C1C1A",
                    borderBottom: "0.5px solid #E8E2D9",
                    paddingBottom: 4,
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .sobre-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
