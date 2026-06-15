import { useState } from "react";

export function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ nome: "", email: "", mensagem: "" });
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "0.5px solid rgba(232, 226, 217, 0.25)",
    padding: "14px 0",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 300,
    fontSize: 15,
    color: "#F5F0E8",
    outline: "none",
    transition: "border-color 0.3s ease",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 300,
    fontSize: 10,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "#6B5B45",
    display: "block",
    marginBottom: 4,
  };

  return (
    <>
      <section
        id="contato"
        style={{
          background: "#0D0D0D",
          padding: "96px 40px",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 96,
            alignItems: "start",
          }}
          className="contato-grid"
        >
          {/* ! Seção lateral - redes sociais*/}
          <div data-section>
            <p
              data-reveal
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#6B5B45",
                marginBottom: 16,
              }}
            >
              Contato
            </p>

            <h2
              data-reveal
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(36px, 4vw, 64px)",
                color: "#F5F0E8",
                letterSpacing: "0.04em",
                lineHeight: 1.1,
                marginBottom: 40,
              }}
            >
              Vamos
              <br />
              <em style={{ fontStyle: "italic" }}>conversar?</em>
            </h2>

            <p
              data-reveal
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: 15,
                lineHeight: 1.8,
                color: "rgba(232, 226, 217, 0.55)",
                marginBottom: 48,
                maxWidth: 360,
              }}
            >
              Interessada em colaborar em projetos residenciais, comerciais ou
              institucionais. Entre em contato e vamos construir algo juntos.
            </p>

            <div data-reveal style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                {
                  label: "Email",
                  value: "anacarolinamirandaa@gmail.com",
                  href: "mailto:anacarolinamirandaa@gmail.com",
                },
                {
                  label: "Telefone",
                  value: "(35) 99200-0394",
                  href: "tel:+5535992000394",
                },
              ].map((item) => (
                <div key={item.label}>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 300,
                      fontSize: 10,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "#6B5B45",
                      display: "block",
                      marginBottom: 4,
                    }}
                  >
                    {item.label}
                  </span>
                  <a
                    href={item.href}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 300,
                      fontSize: 15,
                      color: "#E8E2D9",
                      textDecoration: "none",
                      borderBottom: "0.5px solid rgba(200, 169, 126, 0.3)",
                      paddingBottom: 2,
                      transition: "color 0.3s ease, border-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#C8A97E";
                      (e.currentTarget as HTMLElement).style.borderColor = "#C8A97E";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#E8E2D9";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(200, 169, 126, 0.3)";
                    }}
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* @sessão - formulário de contato */}
          <div data-section>
            <form data-reveal onSubmit={handleSubmit}>
              <div style={{ marginBottom: 32 }}>
                <label style={labelStyle}>Nome</label>
                <input
                  type="text"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  placeholder="Seu nome"
                  required
                  style={inputStyle}
                  onFocus={(e) => {
                    (e.target as HTMLElement).style.borderColor = "rgba(200, 169, 126, 0.6)";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLElement).style.borderColor =
                      "rgba(232, 226, 217, 0.25)";
                  }}
                />
              </div>

              <div style={{ marginBottom: 32 }}>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="seu@email.com"
                  required
                  style={inputStyle}
                  onFocus={(e) => {
                    (e.target as HTMLElement).style.borderColor = "rgba(200, 169, 126, 0.6)";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLElement).style.borderColor =
                      "rgba(232, 226, 217, 0.25)";
                  }}
                />
              </div>

              <div style={{ marginBottom: 40 }}>
                <label style={labelStyle}>Mensagem</label>
                <textarea
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  placeholder="Conte-me sobre o seu projeto..."
                  required
                  rows={5}
                  style={{
                    ...inputStyle,
                    resize: "none",
                    borderBottom: "0.5px solid rgba(232, 226, 217, 0.25)",
                  }}
                  onFocus={(e) => {
                    (e.target as HTMLElement).style.borderColor = "rgba(200, 169, 126, 0.6)";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLElement).style.borderColor =
                      "rgba(232, 226, 217, 0.25)";
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: sent ? "#C8A97E" : "transparent",
                  border: "0.5px solid #C8A97E",
                  color: sent ? "#0D0D0D" : "#C8A97E",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  padding: "16px 40px",
                  cursor: "pointer",
                  borderRadius: 0,
                  transition: "all 0.3s ease",
                  width: "100%",
                }}
                onMouseEnter={(e) => {
                  if (!sent) {
                    (e.currentTarget as HTMLElement).style.background = "#C8A97E";
                    (e.currentTarget as HTMLElement).style.color = "#0D0D0D";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!sent) {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.color = "#C8A97E";
                  }
                }}
              >
                {sent ? "Mensagem enviada ✓" : "Enviar mensagem"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* @sessão - rodapé */}
      <footer
        style={{
          background: "#0D0D0D",
          borderTop: "0.5px solid rgba(232, 226, 217, 0.1)",
          padding: "32px 40px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(232, 226, 217, 0.3)",
            margin: 0,
          }}
        >
          © 2026 Ana Carolina Miranda · Arquitetura & Interiores
        </p>
      </footer>

      <style>{`
        @media (max-width: 767px) {
          .contato-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
        input::placeholder, textarea::placeholder {
          color: rgba(232, 226, 217, 0.2);
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
        }
      `}</style>
    </>
  );
}
