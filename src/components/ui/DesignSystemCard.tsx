const colors = [
  { name: "Noir", hex: "#0D0D0D", usage: "Hero, navbar, fundo escuro", textColor: "#C8A97E" },
  { name: "Linho", hex: "#F5F0E8", usage: "Background geral", textColor: "#6B5B45" },
  { name: "Cobre", hex: "#C8A97E", usage: "Accent principal", textColor: "#0D0D0D" },
  { name: "Grafite", hex: "#2C2C2A", usage: "Texto secundário", textColor: "#C8A97E" },
  { name: "Branco", hex: "#FFFFFF", usage: "Cards, superfícies", textColor: "#6B5B45", border: true },
  { name: "Areia", hex: "#E8E2D9", usage: "Bordas, divisores", textColor: "#6B5B45" },
  { name: "Escuro", hex: "#1C1C1A", usage: "Texto primário", textColor: "#C8A97E" },
  { name: "Terracota", hex: "#6B5B45", usage: "Hover, detalhe", textColor: "#F5F0E8" },
];

const fonts = [
  {
    family: "Cormorant Garamond",
    type: "Display / Serif",
    weights: [
      { weight: 300, label: "Light", size: "80–120px", usage: "Hero name" },
      { weight: 300, label: "Light Italic", size: "80–120px", usage: "Hero name italic", italic: true },
      { weight: 400, label: "Regular", size: "36–48px", usage: "Section headings" },
      { weight: 400, label: "Regular", size: "18px", usage: "Card titles" },
    ],
    sample: "Espaços que transformam",
    color: "#1C1C1A",
  },
  {
    family: "DM Sans",
    type: "Body / UI",
    weights: [
      { weight: 300, label: "Light", size: "15–16px", usage: "Body text, line-height 1.8" },
      { weight: 300, label: "Light", size: "11px", usage: "Nav labels, uppercase, tracking 0.2em" },
      { weight: 300, label: "Light", size: "10px", usage: "Labels uppercase, tracking 0.22em" },
    ],
    sample: "Arquitetura & Interiores",
    color: "#2C2C2A",
  },
  {
    family: "DM Mono",
    type: "Monospace / Tags",
    weights: [
      { weight: 400, label: "Regular", size: "11px", usage: "Tool tags, uppercase" },
      { weight: 400, label: "Regular", size: "10px", usage: "Meta info, letter-spacing 0.1em" },
    ],
    sample: "REVIT · SKETCHUP · TWINMOTION",
    color: "#C8A97E",
  },
];

const spacing = [
  { token: "xs", px: 4 },
  { token: "sm", px: 8 },
  { token: "md", px: 16 },
  { token: "lg", px: 24 },
  { token: "xl", px: 40 },
  { token: "2xl", px: 64 },
  { token: "3xl", px: 96 },
  { token: "4xl", px: 128 },
];

const radii = [
  { label: "Sharp", px: 0, usage: "Hero, botões outline" },
  { label: "Cards", px: 2, usage: "Cards de projeto" },
  { label: "Buttons", px: 4, usage: "Botões filled" },
];

const label: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 300,
  fontSize: 10,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  color: "#6B5B45",
  marginBottom: 20,
  display: "block",
  borderBottom: "0.5px solid #E8E2D9",
  paddingBottom: 10,
};

export function DesignSystemCard() {
  return (
    <section
      style={{
        background: "#FAFAF8",
        borderTop: "0.5px solid #E8E2D9",
        padding: "80px 40px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: 56,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#6B5B45",
                marginBottom: 10,
              }}
            >
              Design System
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                fontSize: 36,
                color: "#1C1C1A",
                letterSpacing: "0.04em",
              }}
            >
              Ana Carolina Miranda
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: 13,
                color: "#6B5B45",
                marginTop: 4,
              }}
            >
              Arquitetura & Interiores · 2026
            </p>
          </div>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.12em",
              color: "#C8A97E",
              background: "#0D0D0D",
              padding: "6px 14px",
              borderRadius: 0,
            }}
          >
            v1.0
          </span>
        </div>

        <div style={{ height: 0.5, background: "#E8E2D9", marginBottom: 56 }} />

        <p style={label}>Paleta de Cores</p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
            marginBottom: 56,
          }}
          className="ds-colors-grid"
        >
          {colors.map((c) => (
            <div key={c.name}>
              <div
                style={{
                  height: 72,
                  background: c.hex,
                  border: c.border ? "0.5px solid #E8E2D9" : "none",
                  borderRadius: 2,
                  marginBottom: 10,
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "8px 10px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 10,
                    color: c.textColor,
                    letterSpacing: "0.06em",
                    opacity: 0.9,
                  }}
                >
                  {c.hex}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: 12,
                  color: "#1C1C1A",
                  marginBottom: 2,
                }}
              >
                {c.name}
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: 11,
                  color: "#6B5B45",
                }}
              >
                {c.usage}
              </p>
            </div>
          ))}
        </div>

        <div style={{ height: 0.5, background: "#E8E2D9", marginBottom: 40 }} />
        <p style={label}>Tipografia</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 40, marginBottom: 56 }}>
          {fonts.map((f) => (
            <div
              key={f.family}
              style={{
                border: "0.5px solid #E8E2D9",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background: "#F5F0E8",
                  padding: "16px 24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "0.5px solid #E8E2D9",
                  flexWrap: "wrap",
                  gap: 8,
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 12,
                      color: "#C8A97E",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {f.family}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    fontSize: 10,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#6B5B45",
                    background: "#E8E2D9",
                    padding: "4px 10px",
                    borderRadius: 2,
                  }}
                >
                  {f.type}
                </span>
              </div>

              <div
                style={{
                  padding: "28px 24px",
                  background: "#FFFFFF",
                  borderBottom: "0.5px solid #E8E2D9",
                }}
              >
                <p
                  style={{
                    fontFamily: `'${f.family}', ${f.family === "DM Mono" ? "monospace" : f.family === "Cormorant Garamond" ? "serif" : "sans-serif"}`,
                    fontWeight: f.weights[0].weight,
                    fontSize: f.family === "Cormorant Garamond" ? 40 : f.family === "DM Mono" ? 20 : 24,
                    color: f.color,
                    letterSpacing: f.family === "Cormorant Garamond" ? "0.04em" : f.family === "DM Mono" ? "0.06em" : "0.01em",
                    lineHeight: 1.2,
                    fontStyle: "normal",
                  }}
                >
                  {f.sample}
                </p>
              </div>

              <div style={{ background: "#FFFFFF" }}>
                {f.weights.map((w, i) => (
                  <div
                    key={i}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "120px 80px 80px 1fr",
                      gap: 16,
                      padding: "12px 24px",
                      borderTop: i === 0 ? "none" : "0.5px solid #F5F0E8",
                      alignItems: "center",
                    }}
                    className="ds-weight-row"
                  >
                    <span
                      style={{
                        fontFamily: `'${f.family}', sans-serif`,
                        fontWeight: w.weight,
                        fontSize: 14,
                        color: "#1C1C1A",
                        fontStyle: w.italic ? "italic" : "normal",
                      }}
                    >
                      {w.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 11,
                        color: "#C8A97E",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {w.weight}
                    </span>
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 11,
                        color: "#6B5B45",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {w.size}
                    </span>
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 300,
                        fontSize: 12,
                        color: "#6B5B45",
                      }}
                    >
                      {w.usage}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ height: 0.5, background: "#E8E2D9", marginBottom: 40 }} />
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}
          className="ds-bottom-grid"
        >
          {/* Spacing */}
          <div>
            <p style={label}>Escala de Espaçamento</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {spacing.map((s) => (
                <div
                  key={s.token}
                  style={{ display: "flex", alignItems: "center", gap: 16 }}
                >
                  <div
                    style={{
                      width: s.px,
                      height: s.px,
                      background: "#C8A97E",
                      borderRadius: "50%",
                      flexShrink: 0,
                      minWidth: 4,
                      minHeight: 4,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 11,
                      color: "#C8A97E",
                      letterSpacing: "0.08em",
                      minWidth: 28,
                    }}
                  >
                    {s.token}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 11,
                      color: "#6B5B45",
                    }}
                  >
                    {s.px}px
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Border Radius + Motion */}
          <div>
            <p style={label}>Border Radius</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
              {radii.map((r) => (
                <div
                  key={r.label}
                  style={{ display: "flex", alignItems: "center", gap: 16 }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 28,
                      border: "1px solid #C8A97E",
                      borderRadius: r.px,
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 11,
                        color: "#C8A97E",
                        display: "block",
                        marginBottom: 2,
                      }}
                    >
                      {r.px}px — {r.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 300,
                        fontSize: 11,
                        color: "#6B5B45",
                      }}
                    >
                      {r.usage}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p style={{ ...label, marginTop: 8 }}>Motion</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { key: "Default", val: "0.4s ease" },
                { key: "Scroll reveal", val: "0.7s ease + translateY 24px→0" },
                { key: "Hover cards", val: "translateY(−4px) + border cobre" },
                { key: "Link hover", val: "scaleX 0→1, da esquerda" },
              ].map((m) => (
                <div key={m.key} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 10,
                      color: "#C8A97E",
                      letterSpacing: "0.06em",
                      minWidth: 100,
                      paddingTop: 1,
                    }}
                  >
                    {m.key}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 300,
                      fontSize: 12,
                      color: "#6B5B45",
                      lineHeight: 1.6,
                    }}
                  >
                    {m.val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ height: 0.5, background: "#E8E2D9", margin: "48px 0 40px" }} />
        <p style={label}>Componentes — Tokens Visuais</p>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}
          className="ds-components-grid"
        >
          <div style={{ border: "0.5px solid #E8E2D9", borderRadius: 2, overflow: "hidden" }}>
            <div style={{ height: 80, background: "#E8E2D9", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 13, color: "#6B5B45" }}>
                Quarto Vitor
              </span>
            </div>
            <div style={{ padding: "12px 16px", background: "#FFFFFF" }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 14, color: "#1C1C1A", marginBottom: 4 }}>
                Quarto Vitor
              </p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#C8A97E" }}>
                REVIT · TWINMOTION
              </p>
            </div>
            <div style={{ padding: "6px 12px 10px", background: "#FAFAFA", borderTop: "0.5px solid #F5F0E8" }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "#6B5B45", letterSpacing: "0.1em" }}>
                Card de projeto — border-radius: 2px
              </span>
            </div>
          </div>

          <div style={{ border: "0.5px solid #E8E2D9", borderRadius: 2, padding: 20, background: "#FFFFFF", display: "flex", flexDirection: "column", gap: 12 }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B5B45", marginBottom: 4 }}>
              Botões
            </p>
            <div style={{ display: "inline-flex", border: "0.5px solid #1C1C1A", padding: "10px 24px", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#1C1C1A", borderRadius: 0 }}>
              Ver projeto
            </div>
            <div style={{ display: "inline-flex", background: "#C8A97E", padding: "10px 24px", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#FFFFFF", borderRadius: 0 }}>
              Contato
            </div>
            <div style={{ display: "inline-flex", border: "0.5px solid #C8A97E", padding: "10px 24px", fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C8A97E", borderRadius: 0, background: "#0D0D0D" }}>
              Enviar
            </div>
          </div>

          <div style={{ border: "0.5px solid #E8E2D9", borderRadius: 2, padding: 20, background: "#FFFFFF" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B5B45", marginBottom: 16 }}>
              Tags / Chips
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {[
                { bg: "#0D0D0D", color: "#C8A97E", text: "Interiores" },
                { bg: "#F5F0E8", color: "#6B5B45", text: "Freelancer", border: "0.5px solid #E8E2D9" },
                { bg: "#F5F0E8", color: "#6B5B45", text: "Estágio", border: "0.5px solid #E8E2D9" },
                { bg: "#C8A97E", color: "#FFFFFF", text: "Ativo" },
              ].map((chip) => (
                <span
                  key={chip.text}
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 10,
                    letterSpacing: "0.08em",
                    padding: "4px 10px",
                    background: chip.bg,
                    color: chip.color,
                    border: (chip as any).border,
                    borderRadius: 2,
                  }}
                >
                  {chip.text}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: 40, paddingTop: 24, borderTop: "0.5px solid #E8E2D9", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: 11, color: "#6B5B45", letterSpacing: "0.06em" }}>
            Stack: React + Tailwind CSS v4 · Fontes via Google Fonts · 3D via Three.js
          </p>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#C8A97E", letterSpacing: "0.1em" }}>
            Ana Carolina Miranda · Portfólio 2026
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .ds-colors-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .ds-bottom-grid { grid-template-columns: 1fr !important; }
          .ds-components-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .ds-colors-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .ds-components-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        .ds-weight-row:hover {
          background: #FAFAF8;
        }
      `}</style>
    </section>
  );
}
