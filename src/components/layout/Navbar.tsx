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
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "background 0.4s ease, box-shadow 0.4s ease",
          background: scrolled ? "#F5F0E8" : "transparent",
          boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 40px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a
            href="#"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: 22,
              letterSpacing: "0.12em",
              color: scrolled ? "#0D0D0D" : "#F5F0E8",
              textDecoration: "none",
              transition: "color 0.4s ease",
            }}
          >
            ACM
          </a>

          {/* ! Menu de navegação para Desktop */}
          <ul
            style={{
              display: "flex",
              gap: 40,
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
            className="hidden-mobile"
          >
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 300,
                      fontSize: 11,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: isActive
                        ? "#C8A97E"
                        : scrolled
                          ? "#2C2C2A"
                          : "#E8E2D9",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                      position: "relative",
                      paddingBottom: 2,
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = "#C8A97E";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = isActive
                        ? "#C8A97E"
                        : scrolled
                          ? "#2C2C2A"
                          : "#E8E2D9";
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* * Botão Menu Hamburger (Mobile) */}
          <button
            className="show-mobile"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              display: "none",
            }}
            aria-label="Menu"
          >
            <div
              style={{
                width: 22,
                height: 1,
                background: scrolled ? "#0D0D0D" : "#F5F0E8",
                marginBottom: 6,
                transition: "background 0.3s ease",
              }}
            />
            <div
              style={{
                width: 22,
                height: 1,
                background: scrolled ? "#0D0D0D" : "#F5F0E8",
                transition: "background 0.3s ease",
              }}
            />
          </button>
        </div>
      </nav>

      {/* @sessão (menu mobile suspenso) */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            background: "#0D0D0D",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
          }}
          onClick={() => setMenuOpen(false)}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: 13,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "#E8E2D9",
                textDecoration: "none",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 768px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
