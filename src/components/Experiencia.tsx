import { timeline } from "../data/timeline_items";
import { ExperienceCard } from "./ui/ExperienceCard";

export function Experiencia() {
  return (
    <section
      id="experiencia"
      className="bg-cream py-24 px-10 border-t-[0.5px] border-t-cream-soft"
    >
      <div className="max-w-7xl mx-auto">
        <div data-section className="mb-16 text-center">
          <p
            data-reveal
            className="font-body font-light text-[10px] tracking-[0.22em] uppercase text-[#6B5B45] mb-3"
          >
            Trajetória
          </p>
          <h2
            data-reveal
            className="font-heading font-normal text-[clamp(32px,3.5vw,48px)] text-[#1C1C1A] tracking-[0.02em]"
          >
            Experiência
          </h2>
        </div>

        <div className="relative max-w-[900px] mx-auto">
          {/* Linha central — oculta no mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 [background:linear-gradient(to_bottom,transparent,#C8A97E_8%,#C8A97E_92%,transparent)]" />

          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={i}
                data-section
                className={`flex mb-12 relative justify-start ${isLeft ? "md:justify-start" : "md:justify-end"}`}
              >
                {/* Ponto da timeline — oculto no mobile */}
                <div
                  className={`hidden md:block absolute left-1/2 top-5 -translate-x-1/2 -translate-y-1/2 border border-solid border-gold z-[1] transition-transform duration-300 ${
                    item.destaque ? "w-[10px] h-[10px] bg-gold" : "w-[6px] h-[6px] bg-cream-soft"
                  }`}
                />

                <ExperienceCard item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
