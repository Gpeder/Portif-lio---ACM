import { useEffect, useState } from "react";

export function Hero() {
  const [arrowVisible, setArrowVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setArrowVisible(window.scrollY < 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen bg-[#5A5535] flex items-center relative overflow-hidden"
    >
      {/* deocracao */}
      <div className="absolute right-[30%] top-[15%] bottom-[15%] w-px bg-cream-soft/18" />

      {/* conteudo */}
      <div className="max-w-7xl w-full mx-auto px-10 pt-20">
        <p className="font-body font-light text-[11px] tracking-[0.22em] uppercase text-gold mb-8 animate-[heroFadeIn_1s_ease_0.2s_both]">
          Arquitetura & Interiores
        </p>

        <h1 className="font-heading font-light text-[clamp(52px,9vw,110px)] tracking-[0.06em] text-cream leading-none m-0 mb-8 animate-[heroFadeIn_1s_ease_0.4s_both]">
          ANA CAROLINA
          <br />
          <em className="italic font-light text-cream-soft">
            MIRANDA
          </em>
        </h1>

        <p className="font-body font-light text-[15px] tracking-[0.08em] text-cream-soft/60 mb-14 animate-[heroFadeIn_1s_ease_0.6s_both]">
          Arquiteta e Urbanista · BIM · Interiores · Execução
        </p>

        <a
          href="#projetos"
          className="hero-link animate-[heroFadeIn_1s_ease_0.8s_both]"
        >
          Ver projetos ↓
        </a>
      </div>

      {/* Indicador de rolagem */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-[400ms] ${arrowVisible
          ? "opacity-100 animate-[heroScroll_2s_ease_infinite]"
          : "opacity-0"
          }`}
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-gold/60" />
        <div className="w-1.5 h-1.5 border-[0.5px] border-solid border-gold border-l-transparent border-t-transparent rotate-45 opacity-70" />
      </div>
    </section>
  );
}