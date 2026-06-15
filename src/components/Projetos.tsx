import { useState } from "react";
import { projects } from "../data/project_items";
import { ProjectCard } from "./ui/ProjectCard";
import { ProjectItem } from "../types/portifolio";
import { ProjectModal } from "./ui/ProjectModal";

const categories = ["Todos", "Interiores 3D", "Freelancer", "Estágio", "Escritório MHM"];

type Project = ProjectItem;


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
