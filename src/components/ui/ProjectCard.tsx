import { ProjectItem } from "@/types/portifolio";

interface ProjectCardProps {
  project: ProjectItem;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
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
