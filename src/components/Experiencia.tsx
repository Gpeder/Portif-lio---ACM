import { timeline } from "../data/timeline_items";

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

                {/* Card */}
                <div
                  data-reveal
                  className={`w-full md:w-[calc(50%-40px)] rounded-[2px] py-6 px-7 relative transition-[transform,box-shadow] duration-300 hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] border-[0.5px] border-solid ${
                    item.destaque
                      ? "bg-dark-bg border-gold"
                      : "bg-white border-cream-soft"
                  }`}
                >
                  <span className="font-dm-mono text-[10px] tracking-[0.1em] text-gold block mb-2">
                    {item.period}
                  </span>

                  <h3
                    className={`font-heading font-normal text-[20px] m-0 mb-1.5 tracking-[0.02em] ${
                      item.destaque ? "text-cream" : "text-[#1C1C1A]"
                    }`}
                  >
                    {item.cargo}
                  </h3>

                  <p
                    className={`font-body font-light text-[13px] m-0 ${
                      item.destaque ? "text-cream-soft/60" : "text-[#6B5B45]"
                    } ${item.descricao ? "mb-3" : ""}`}
                  >
                    {item.empresa}
                  </p>

                  {item.descricao && (
                    <p className="font-body font-light text-[13px] leading-[1.7] text-[#2C2C2A] m-0">
                      {item.descricao}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
