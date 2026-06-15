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

  const labelClass = "font-body font-light text-[10px] tracking-[0.22em] uppercase text-[#6B5B45] block mb-1";

  return (
    <>
      <section id="contato" className="bg-dark-bg py-24 px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-start">

          {/* Coluna esquerda — info */}
          <div data-section>
            <p
              data-reveal
              className="font-body font-light text-[10px] tracking-[0.22em] uppercase text-[#6B5B45] mb-4"
            >
              Contato
            </p>

            <h2
              data-reveal
              className="font-heading font-light text-[clamp(36px,4vw,64px)] text-cream tracking-[0.04em] leading-[1.1] mb-10"
            >
              Vamos
              <br />
              <em className="italic">conversar?</em>
            </h2>

            <p
              data-reveal
              className="font-body font-light text-[15px] leading-[1.8] text-cream-soft/55 mb-12 max-w-[360px]"
            >
              Interessada em colaborar em projetos residenciais, comerciais ou
              institucionais. Entre em contato e vamos construir algo juntos.
            </p>

            <div data-reveal className="flex flex-col gap-6">
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
                  <span className={labelClass}>{item.label}</span>
                  <a
                    href={item.href}
                    className="font-body font-light text-[15px] text-cream-soft border-b-[0.5px] border-solid border-b-[rgba(200,169,126,0.3)] pb-[2px] transition-[color,border-color] duration-300 hover:text-gold hover:border-b-gold"
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna direita — formulário */}
          <div data-section>
            <form data-reveal onSubmit={handleSubmit}>
              <div className="mb-8">
                <label className={labelClass}>Nome</label>
                <input
                  type="text"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  placeholder="Seu nome"
                  required
                  className="contact-input"
                />
              </div>

              <div className="mb-8">
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="seu@email.com"
                  required
                  className="contact-input"
                />
              </div>

              <div className="mb-10">
                <label className={labelClass}>Mensagem</label>
                <textarea
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  placeholder="Conte-me sobre o seu projeto..."
                  required
                  rows={5}
                  className="contact-input resize-none"
                />
              </div>

              <button
                type="submit"
                className={`font-body font-light text-[11px] tracking-[0.2em] uppercase py-4 px-10 border-[0.5px] border-solid border-gold cursor-pointer transition-all duration-300 w-full ${
                  sent
                    ? "bg-gold text-dark-bg"
                    : "bg-transparent text-gold hover:bg-gold hover:text-dark-bg"
                }`}
              >
                {sent ? "Mensagem enviada ✓" : "Enviar mensagem"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-dark-bg border-t-[0.5px] border-t-[rgba(232,226,217,0.1)] py-8 px-10 text-center">
        <p className="font-body font-light text-[11px] tracking-[0.22em] uppercase text-cream-soft/30 m-0">
          © 2026 Ana Carolina Miranda · Arquitetura & Interiores
        </p>
      </footer>
    </>
  );
}
