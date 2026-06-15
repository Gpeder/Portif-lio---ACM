import { useEffect, useState } from "react";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = ["sobre", "projetos", "experiencia", "contato"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-[background,box-shadow] duration-[400ms] ease-in-out ${scrolled
          ? "bg-cream shadow-[0_1px_0_rgba(0,0,0,0.08)]"
          : "bg-transparent shadow-none"
          }`}
      >
        <div className="max-w-7xl mx-auto px-10 h-16 flex items-center justify-between">
          <a
            href="#"
            className={`font-heading font-light text-[22px] tracking-[0.12em] transition-colors duration-[400ms] ease-in-out ${scrolled ? "text-dark-bg" : "text-cream"
              }`}
          >
            ACM
          </a>

          {/* Menu de navegação para Desktop */}
          <ul className="hidden md:flex gap-10 list-none m-0 p-0">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`font-body font-light text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 relative pb-[2px] hover:text-gold ${isActive
                      ? "text-gold"
                      : scrolled
                        ? "text-[#2C2C2A]"
                        : "text-cream-soft"
                      }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Botão Menu Hamburger (Mobile) */}
          <button
            className="md:hidden cursor-pointer p-2 bg-transparent border-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <div
              className={`w-[22px] h-px mb-1.5 transition-colors duration-300 ${scrolled ? "bg-dark-bg" : "bg-cream"
                }`}
            />
            <div
              className={`w-[22px] h-px transition-colors duration-300 ${scrolled ? "bg-dark-bg" : "bg-cream"
                }`}
            />
          </button>
        </div>
      </nav>

      {/* Menu mobile suspenso */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[99] bg-dark-bg flex flex-col items-center justify-center gap-10"
          onClick={() => setMenuOpen(false)}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-body font-light text-[13px] tracking-[0.24em] uppercase text-cream-soft"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
