import { useState } from "react";
import { submitContactForm } from "@/data/forms";
import { Toast } from "@/components/ui/Toast";

export function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ nome?: boolean; email?: boolean; mensagem?: boolean }>({});
  const [toast, setToast] = useState<{ show: boolean; message: string; type: "success" | "error" }>({
    show: false,
    message: "",
    type: "success",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação de campos
    const newErrors: typeof errors = {};
    if (!form.nome.trim()) newErrors.nome = true;
    if (!form.email.trim()) newErrors.email = true;
    if (!form.mensagem.trim()) newErrors.mensagem = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTimeout(() => {
        setErrors({});
      }, 3000);
      return;
    }

    // evita spam
    const LAST_SEND_KEY = "acm_portfolio_last_send";
    const COOLDOWN_MS = 3 * 60 * 1000;
    const lastSend = localStorage.getItem(LAST_SEND_KEY);
    if (lastSend) {
      const timePassed = Date.now() - parseInt(lastSend, 10);
      if (timePassed < COOLDOWN_MS) {
        const secondsLeft = Math.ceil((COOLDOWN_MS - timePassed) / 1000);
        const timeText = secondsLeft > 60
          ? `${Math.ceil(secondsLeft / 60)} minuto(s)`
          : `${secondsLeft} segundo(s)`;

        setToast({
          show: true,
          message: `Mensagem enviada recentemente. Aguarde mais ${timeText} para enviar outra.`,
          type: "error",
        });
        return;
      }
    }

    setSubmitting(true);

    const success = await submitContactForm(form);

    if (success) {
      setForm({ nome: "", email: "", mensagem: "" });
      setToast({
        show: true,
        message: "Sua mensagem foi enviada com sucesso!",
        type: "success",
      });
    } else {
      setToast({
        show: true,
        message: "Ocorreu um erro ao enviar. Por favor, tente novamente.",
        type: "error",
      });
    }

    setSubmitting(false);
  };

  const labelClass = "font-body font-light text-[10px] tracking-[0.22em] uppercase text-[#6B5B45] block mb-1";

  return (
    <>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-6px); }
          40%, 80% { transform: translateX(6px); }
        }
      `}</style>
      <Toast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast((prev) => ({ ...prev, show: false }))}
      />
      <section id="contato" className="bg-dark-bg py-24 px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-start">

          {/* Coluna info */}
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

          {/*formulário */}
          <div data-section>
            <form data-reveal onSubmit={handleSubmit} noValidate>
              <div className="mb-8">
                <label className={`${labelClass} ${errors.nome ? "text-red-500/80 transition-colors duration-300" : "transition-colors duration-300"}`}>Nome</label>
                <input
                  type="text"
                  value={form.nome}
                  onChange={(e) => {
                    setForm({ ...form, nome: e.target.value });
                    if (errors.nome) setErrors((prev) => ({ ...prev, nome: false }));
                  }}
                  placeholder="Seu nome"
                  className={`contact-input ${errors.nome
                    ? "!border-b-red-500/80 animate-[shake_0.4s_ease-in-out_both]"
                    : ""
                    }`}
                />
              </div>

              <div className="mb-8">
                <label className={`${labelClass} ${errors.email ? "text-red-500/80 transition-colors duration-300" : "transition-colors duration-300"}`}>Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    if (errors.email) setErrors((prev) => ({ ...prev, email: false }));
                  }}
                  placeholder="seu@email.com"
                  className={`contact-input ${errors.email
                    ? "!border-b-red-500/80 animate-[shake_0.4s_ease-in-out_both]"
                    : ""
                    }`}
                />
              </div>

              <div className="mb-10">
                <label className={`${labelClass} ${errors.mensagem ? "text-red-500/80 transition-colors duration-300" : "transition-colors duration-300"}`}>Mensagem</label>
                <textarea
                  value={form.mensagem}
                  onChange={(e) => {
                    setForm({ ...form, mensagem: e.target.value });
                    if (errors.mensagem) setErrors((prev) => ({ ...prev, mensagem: false }));
                  }}
                  placeholder="Conte-me sobre o seu projeto..."
                  rows={5}
                  className={`contact-input resize-none ${errors.mensagem
                    ? "!border-b-red-500/80 animate-[shake_0.4s_ease-in-out_both]"
                    : ""
                    }`}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className={`font-body font-light text-[11px] tracking-[0.2em] uppercase py-4 px-10 border-[0.5px] border-solid cursor-pointer transition-all duration-300 w-full ${submitting
                  ? "border-cream-soft/30 bg-transparent text-cream-soft/30 cursor-not-allowed"
                  : "border-gold bg-transparent text-gold hover:bg-gold hover:text-dark-bg"
                  }`}
              >
                {submitting ? "Enviando..." : "Enviar mensagem"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-dark-bg border-t-[0.5px] border-t-[rgba(232,226,217,0.1)] py-8 px-10 text-center">
        <p className="font-body font-light text-[11px] tracking-[0.22em] uppercase text-cream-soft/30 m-0">
          © {new Date().getFullYear()} Ana Carolina Miranda · Arquitetura & Interiores
        </p>
      </footer>
    </>
  );
}
