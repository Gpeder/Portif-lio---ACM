import { useState } from "react";
import { ProjectModal } from "./ProjectModal";
import { projects } from "../data/project_items";
import { ProjectItem } from "../types/portifolio";

const categories = ["Todos", "Interiores 3D", "Freelancer", "Estágio", "Escritório MHM"];

type Project = ProjectItem;


function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <div
      data-reveal
      onClick={onClick}
      className="group bg-white rounded-[2px] border-[0.5px] border-solid border-cream-soft overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-gold shadow-[0_2px_8px_rgba(13,13,13,0.04)] hover:shadow-[0_16px_40px_rgba(13,13,13,0.08)] relative"
    >
      <div
        className="w-full h-[200px] relative overflow-hidden flex items-center justify-center"
        style={{ background: project.accent }}
      >
        <span className="font-heading font-light text-[16px] text-[rgba(28,28,26,0.5)] tracking-[0.08em] text-center px-4 transition-all duration-500 ease-out group-hover:scale-105">
          {project.title}
        </span>

        <div className="absolute inset-0 bg-dark-bg opacity-0 group-hover:opacity-[0.88] transition-all duration-500 ease-out flex flex-col items-center justify-center gap-3 p-6">
          <span className="font-heading font-normal text-[20px] text-cream tracking-[0.04em] text-center transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out">
            {project.title}
          </span>
          <div className="flex gap-2 flex-wrap justify-center transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75">
            {project.tools.map((tool) => (
              <span key={tool} className="font-dm-mono text-[10px] text-gold tracking-[0.1em]">
                {tool}
              </span>
            ))}
          </div>
          <span className="font-body font-light text-[10px] tracking-[0.18em] uppercase text-cream-soft/50 mt-1 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-100">
            Ver projeto →
          </span>
        </div>
      </div>

      <div className="px-5 pt-4 pb-[18px]">
        <h3 className="font-heading font-normal text-[18px] text-[#1C1C1A] m-0 mb-1.5 tracking-[0.02em]">
          {project.title}
        </h3>
        <div className="flex justify-between items-center">
          <span className="font-dm-mono text-[10px] text-gold tracking-[0.1em] uppercase">
            {project.tools.join(" · ")}
          </span>
          <span className="font-body font-light text-[10px] tracking-[0.12em] uppercase text-[#6B5B45]">
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
        className="bg-cream py-24 px-10 border-t-[0.5px] border-t-cream-soft"
      >
        <div className="max-w-7xl mx-auto">
          <div
            data-section
            className="flex justify-between items-end mb-14 flex-wrap gap-6"
          >
            <div>
              <p
                data-reveal
                className="font-body font-light text-[10px] tracking-[0.22em] uppercase text-[#6B5B45] mb-3"
              >
                Portfólio
              </p>
              <h2
                data-reveal
                className="font-heading font-normal text-[clamp(32px,3.5vw,48px)] text-[#1C1C1A] tracking-[0.02em] leading-[1.1]"
              >
                Projetos
              </h2>
            </div>

            <div data-reveal className="flex gap-1 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`font-body font-light text-[10px] tracking-[0.18em] uppercase py-2 px-4 border-[0.5px] border-solid cursor-pointer transition-all duration-300 ${activeFilter === cat
                    ? "border-gold bg-gold text-white"
                    : "border-cream-soft bg-transparent text-[#6B5B45] hover:border-gold hover:text-gold"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div
            data-section
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
