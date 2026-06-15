import { useEffect, useState } from "react";
import { ProjectItem } from "@/types/portifolio";

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

function ImageGallery({ project }: { project: ProjectItem }) {
  const [current, setCurrent] = useState(0);
  const count = Math.min(project.images ?? 3, 5);
  const colors = placeholderColors.slice(0, count);

  return (
    <div className="flex flex-col gap-3 h-full">
      <div
        className="flex-1 rounded-[2px] flex items-center justify-center min-h-[300px] relative overflow-hidden transition-[background] duration-[400ms]"
        style={{ background: colors[current] }}
      >
        <div className="text-center p-6">
          <p className="font-heading font-light text-[22px] text-[rgba(28,28,26,0.45)] tracking-[0.08em]">
            {project.title}
          </p>
          <p className="font-dm-mono text-[10px] text-[rgba(107,91,69,0.6)] tracking-[0.1em] mt-2">
            {String(current + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </p>
        </div>

        {count > 1 && (
          <>
            <button
              onClick={() => setCurrent((c) => (c - 1 + count) % count)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-[rgba(13,13,13,0.35)] border-[0.5px] border-solid border-[rgba(232,226,217,0.3)] text-cream w-9 h-9 cursor-pointer flex items-center justify-center text-[16px] transition-[background] duration-300 hover:bg-[rgba(200,169,126,0.5)]"
            >
              ←
            </button>
            <button
              onClick={() => setCurrent((c) => (c + 1) % count)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-[rgba(13,13,13,0.35)] border-[0.5px] border-solid border-[rgba(232,226,217,0.3)] text-cream w-9 h-9 cursor-pointer flex items-center justify-center text-[16px] transition-[background] duration-300 hover:bg-[rgba(200,169,126,0.5)]"
            >
              →
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="flex gap-2">
          {colors.map((c, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`flex-1 h-14 border-[1.5px] border-solid cursor-pointer rounded-[2px] transition-[border-color,opacity] duration-300 p-0 ${
                current === i ? "border-gold opacity-100" : "border-transparent opacity-60"
              }`}
              style={{ background: c }}
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
  project: ProjectItem | null;
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
      className="fixed inset-0 z-[200] flex items-stretch animate-[modalIn_0.35s_ease]"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="absolute inset-0 bg-dark-bg/85 backdrop-blur-[6px]"
        onClick={onClose}
      />

      <div
        className="relative ml-auto w-[min(92vw,1100px)] bg-cream grid grid-cols-1 md:grid-cols-2 overflow-hidden animate-[slideIn_0.4s_cubic-bezier(0.22,1,0.36,1)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Galeria - esquerda */}
        <div className="bg-white p-8 flex flex-col">
          <ImageGallery project={project} />
        </div>

        {/* Informações - direita */}
        <div className="pt-10 pr-10 pb-10 pl-9 flex flex-col overflow-y-auto max-h-screen">
          <div className="mb-8">
            <div className="flex justify-between items-start mb-4">
              <span className="font-dm-mono text-[10px] tracking-[0.14em] text-gold uppercase">
                {project.category}
              </span>
              <button
                onClick={onClose}
                className="bg-transparent border-[0.5px] border-solid border-cream-soft text-[#6B5B45] w-8 h-8 cursor-pointer flex items-center justify-center text-[16px] transition-[border-color,color] duration-300 flex-shrink-0 hover:border-gold hover:text-gold"
              >
                ✕
              </button>
            </div>

            <h2 className="font-heading font-normal text-[36px] text-[#1C1C1A] tracking-[0.02em] leading-[1.1] mb-2">
              {project.title}
            </h2>
            <p className="font-body font-light text-[13px] text-[#6B5B45] tracking-[0.04em]">
              {project.type}
            </p>
          </div>

          <div className="h-[0.5px] bg-cream-soft mb-7" />

          <div className="mb-7">
            <p className="font-body font-light text-[10px] tracking-[0.22em] uppercase text-[#6B5B45] mb-3">
              Ferramentas
            </p>
            <div className="flex gap-2 flex-wrap">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="font-dm-mono text-[11px] tracking-[0.1em] text-gold bg-dark-bg py-1.5 px-3"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-7">
            <p className="font-body font-light text-[10px] tracking-[0.22em] uppercase text-[#6B5B45] mb-3">
              Sobre o projeto
            </p>
            <p className="font-body font-light text-[14px] leading-[1.85] text-[#2C2C2A]">
              {loremDesc}
            </p>
          </div>

          <div className="mb-8">
            <p className="font-body font-light text-[14px] leading-[1.85] text-[#2C2C2A]">
              {loremDetails}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 mt-auto pt-5 border-t-[0.5px] border-t-cream-soft">
            {[
              { label: "Categoria", value: project.category },
              { label: "Tipo", value: project.type },
              { label: "Imagens", value: `${project.images} renders` },
              { label: "Software", value: project.tools.join(", ") },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-body font-light text-[10px] tracking-[0.18em] uppercase text-[#6B5B45] mb-1">
                  {item.label}
                </p>
                <p className="font-body font-light text-[13px] text-[#1C1C1A]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
