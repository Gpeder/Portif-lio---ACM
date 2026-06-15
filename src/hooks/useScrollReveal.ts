import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const init = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              const children = el.querySelectorAll<HTMLElement>("[data-reveal]");
              if (children.length) {
                children.forEach((child, i) => {
                  setTimeout(() => {
                    child.style.opacity = "1";
                    child.style.transform = "translateY(0)";
                  }, i * 100);
                });
              } else {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.1 }
      );

      const sections = document.querySelectorAll<HTMLElement>("[data-section]");
      sections.forEach((s) => {
        const children = s.querySelectorAll<HTMLElement>("[data-reveal]");
        if (children.length) {
          children.forEach((child) => {
            child.style.opacity = "0";
            child.style.transform = "translateY(24px)";
            child.style.transition = "opacity 0.7s ease, transform 0.7s ease";
          });
        } else {
          s.style.opacity = "0";
          s.style.transform = "translateY(24px)";
          s.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        }
        observer.observe(s);
      });

      return observer;
    };

    // * Pequeno atraso para garantir que o DOM esteja totalmente renderizado
    const timer = setTimeout(() => {
      const observer = init();
      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, []);
}
