import { useState } from "react";
import { ProjectModal } from "./ProjectModal";

const categories = ["Todos", "Interiores 3D", "Freelancer", "Estágio", "Escritório MHM"];

const projects = [
  {
    title: "Quarto Vitor",
    category: "Interiores 3D",
    tools: ["REVIT", "TWINMOTION"],
    type: "Projeto autônomo",
    images: 3,
    accent: "#D4B896",
  },
  {
    title: "Sala Natalina",
    category: "Interiores 3D",
    tools: ["REVIT", "TWINMOTION"],
    type: "Projeto autônomo",
    images: 2,
    accent: "#C8B8A2",
  },
  {
    title: "Quarto Boho",
    category: "Interiores 3D",
    tools: ["REVIT", "TWINMOTION"],
    type: "Projeto autônomo",
    images: 2,
    accent: "#BCA898",
  },
  {
    title: "Barracão Nobre",
    category: "Freelancer",
    tools: ["REVIT"],
    type: "Aprovação prefeitura + fachada",
    images: 2,
    accent: "#B8A898",
  },
  {
    title: "Conjunto Residencial",
    category: "Freelancer",
    tools: ["REVIT", "TWINMOTION", "LAYOUT"],
    type: "Plantas + elétrico + fachada",
    images: 3,
    accent: "#C0B0A0",
  },
  {
    title: "Hospital do Câncer",
    category: "Estágio",
    tools: ["REVIT"],
    type: "Projeto executivo institucional",
    images: 4,
    accent: "#C4B4A4",
  },
  {
    title: "Residência MHM",
    category: "Escritório MHM",
    tools: ["SKETCHUP", "LAYOUT"],
    type: "Marcenaria, marmoraria, infraestrutura",
    images: 6,
    accent: "#CCB8A6",
  },
];

type Project = (typeof projects)[0];

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      data-reveal
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        background: "#FFFFFF",
        borderRadius: 2,
        border: `0.5px solid ${hovered ? "#C8A97E" : "#E8E2D9"}`,
        overflow: "hidden",
        cursor: "pointer",
        transition:
          "transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 16px 40px rgba(13, 13, 13, 0.08)"
          : "0 2px 8px rgba(13, 13, 13, 0.04)",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: 200,
          background: project.accent,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: 16,
            color: "rgba(28, 28, 26, 0.5)",
            letterSpacing: "0.08em",
            textAlign: "center",
            padding: "0 16px",
          }}
        >
          {project.title}
        </span>

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#0D0D0D",
            opacity: hovered ? 0.88 : 0,
            transition: "opacity 0.4s ease",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            padding: 24,
          }}
        >
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontSize: 20,
              color: "#F5F0E8",
              letterSpacing: "0.04em",
              textAlign: "center",
            }}
          >
            {project.title}
          </span>
          <div
            style={{
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {project.tools.map((tool) => (
              <span
                key={tool}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10,
                  color: "#C8A97E",
                  letterSpacing: "0.1em",
                }}
              >
                {tool}
              </span>
            ))}
          </div>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: 10,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(232, 226, 217, 0.5)",
              marginTop: 4,
            }}
          >
            Ver projeto →
          </span>
        </div>
      </div>

      <div style={{ padding: "16px 20px 18px" }}>
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400,
            fontSize: 18,
            color: "#1C1C1A",
            margin: 0,
            marginBottom: 6,
            letterSpacing: "0.02em",
          }}
        >
          {project.title}
        </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 10,
              color: "#C8A97E",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            {project.tools.join(" · ")}
          </span>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: 10,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#6B5B45",
            }}
          >
            {project.category}
          </span>
        </div>
      </div>
    </div>
  );
}

export function Projetos() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeFilter === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <section
        id="projetos"
        style={{
          background: "#F5F0E8",
          padding: "96px 40px",
          borderTop: "0.5px solid #E8E2D9",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            data-section
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 56,
              flexWrap: "wrap",
              gap: 24,
            }}
          >
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
                  marginBottom: 12,
                }}
              >
                Portfólio
              </p>
              <h2
                data-reveal
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                  fontSize: "clamp(32px, 3.5vw, 48px)",
                  color: "#1C1C1A",
                  letterSpacing: "0.02em",
                  lineHeight: 1.1,
                }}
              >
                Projetos
              </h2>
            </div>

            <div data-reveal style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    fontSize: 10,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    padding: "8px 16px",
                    border: `0.5px solid ${activeFilter === cat ? "#C8A97E" : "#E8E2D9"}`,
                    background: activeFilter === cat ? "#C8A97E" : "transparent",
                    color: activeFilter === cat ? "#FFFFFF" : "#6B5B45",
                    cursor: "pointer",
                    borderRadius: 0,
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (activeFilter !== cat) {
                      (e.currentTarget as HTMLElement).style.borderColor = "#C8A97E";
                      (e.currentTarget as HTMLElement).style.color = "#C8A97E";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeFilter !== cat) {
                      (e.currentTarget as HTMLElement).style.borderColor = "#E8E2D9";
                      (e.currentTarget as HTMLElement).style.color = "#6B5B45";
                    }
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div
            data-section
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
            className="projects-grid"
          >
            {filtered.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 767px) {
            .projects-grid { grid-template-columns: 1fr !important; }
          }
          @media (min-width: 768px) and (max-width: 1023px) {
            .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
