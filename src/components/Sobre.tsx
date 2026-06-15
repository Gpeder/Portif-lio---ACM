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
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="font-dm-mono text-[11px] tracking-[0.1em] text-gold">
          {name}
        </span>
        <span className="font-dm-mono text-[10px] text-[#6B5B45]">
          {level}/5
        </span>
      </div>
      <div className="h-px bg-cream-soft relative overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full bg-gold transition-[width] duration-[900ms] ease-in-out delay-200"
          style={{ width: animated ? `${(level / 5) * 100}%` : "0%" }}
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
      className="bg-cream py-24 px-10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div data-reveal className="relative">
          <div className="w-full aspect-[3/4] bg-cream-soft [clip-path:polygon(0_0,100%_0,100%_85%,85%_100%,0_100%)] flex items-center justify-center relative overflow-hidden">
            <div className="text-center p-6">
              <p className="font-heading font-light text-[18px] text-[#6B5B45] tracking-[0.1em] mb-2">
                Ana Carolina Miranda
              </p>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gold">
                Arquiteta
              </p>
            </div>
          </div>
          <div className="absolute -bottom-4 left-6 w-16 h-px bg-gold" />
        </div>

        <div>
          <p
            data-reveal
            className="font-body font-light text-[10px] tracking-[0.22em] uppercase text-[#6B5B45] mb-4"
          >
            Sobre
          </p>

          <h2
            data-reveal
            className="font-heading font-normal text-[clamp(32px,3.5vw,48px)] text-[#1C1C1A] leading-[1.15] tracking-[0.02em] mb-7"
          >
            Sobre Ana Carolina
          </h2>

          <p
            data-reveal
            className="font-body font-light text-[15px] leading-[1.8] text-[#2C2C2A] mb-10"
          >
            Arquiteta formada pela PUCMINAS — Poços de Caldas, com experiência
            em projetos residenciais, comerciais e institucionais. Atua com foco
            em precisão técnica, detalhamento BIM e sensibilidade espacial. Já
            desenvolveu projetos do esboço à prancha executiva, passando pela
            visualização 3D com Twinmotion.
          </p>

          <div data-reveal className="mb-10">
            <p className="font-body font-light text-[10px] tracking-[0.22em] uppercase text-[#6B5B45] mb-5">
              Ferramentas
            </p>
            {skills.map((s) => (
              <SkillBar key={s.name} name={s.name} level={s.level} />
            ))}
          </div>

          <div data-reveal className="flex flex-col gap-3">
            {[
              { label: "Email", value: "anacarolinamirandaa@gmail.com" },
              { label: "Telefone", value: "(35) 99200-0394" },
              { label: "Localização", value: "São Sebastião do Paraíso, MG" },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 items-start">
                <span className="font-body font-light text-[10px] tracking-[0.18em] uppercase text-[#6B5B45] min-w-20 pt-[2px]">
                  {item.label}
                </span>
                <span className="font-body font-light text-[14px] text-[#1C1C1A] border-b-[0.5px] border-b-cream-soft pb-1">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
