import { TimeLineProjectItem } from "@/types/portifolio";

interface ExperienceCardProps {
  item: TimeLineProjectItem;
}

export function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <div
      data-reveal
      className={`w-full md:w-[calc(50%-40px)] rounded-[2px] py-6 px-7 relative transition-[transform,box-shadow] duration-300 hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] border-[0.5px] border-solid ${item.destaque
          ? "bg-dark-bg border-gold"
          : "bg-white border-cream-soft"
        }`}
    >
      <span className="font-dm-mono text-[10px] tracking-[0.1em] text-gold block mb-2">
        {item.period}
      </span>

      <h3
        className={`font-heading font-normal text-[20px] m-0 mb-1.5 tracking-[0.02em] ${item.destaque ? "text-cream" : "text-[#1C1C1A]"
          }`}
      >
        {item.cargo}
      </h3>

      <p
        className={`font-body font-light text-[13px] m-0 ${item.destaque ? "text-cream-soft/60" : "text-[#6B5B45]"
          } ${item.descricao ? "mb-3" : ""}`}
      >
        {item.empresa}
      </p>

      {item.descricao && (
        <p className={`font-body font-light text-[13px] leading-[1.7] m-0 ${item.destaque ? "text-cream-soft/80" : "text-[#2a2a29]"
          }`}>
          {item.descricao}
        </p>
      )}
    </div>
  );
}
