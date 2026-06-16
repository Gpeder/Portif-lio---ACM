import { useEffect } from "react";

interface ToastProps {
  show: boolean;
  message: string;
  type?: "success" | "error";
  onClose: () => void;
  duration?: number;
}

export function Toast({ show, message, type = "success", onClose, duration = 4000 }: ToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  if (!show) return null;

  return (
    <div
      className={`fixed top-8 right-8 z-[100] flex flex-col bg-dark-bg border-[0.5px] border-solid ${type === "success" ? "border-gold/50" : "border-red-500/50"
        } rounded-[2px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] min-w-[320px] max-w-[400px] overflow-hidden animate-[slideIn_0.4s_cubic-bezier(0.16,1,0.3,1)_both]`}
    >
      {/* Content */}
      <div className="flex items-center gap-4 p-5">
        {/* Icon */}
        <div className="flex-shrink-0">
          {type === "success" ? (
            <svg
              className="w-5 h-5 text-gold"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>

        {/* Message */}
        <div className="flex-grow">
          <p className="font-body font-light text-[13px] tracking-[0.06em] text-cream leading-relaxed">
            {message}
          </p>
        </div>

        {/* Butão de fechar */}
        <button
          onClick={onClose}
          className="flex-shrink-0 text-cream-soft/40 hover:text-gold transition-colors duration-300 cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Barra progresso */}
      <div className="w-full h-[2px] bg-cream-soft/10">
        <div
          className={`h-full ${type === "success" ? "bg-gold" : "bg-red-500"}`}
          style={{
            animation: `shrinkProgress ${duration}ms linear forwards`
          }}
        />
      </div>

      <style>{`
        @keyframes shrinkProgress {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
}
