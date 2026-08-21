import { useEffect } from "react";

const revealSelector = "section:not(#home) .container > *, section:not(#home) .glass-card, footer > div > *";

export const useScrollReveal = () => {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));

    if (!elements.length) return;

    elements.forEach((element, index) => {
      element.classList.add("scroll-reveal");
      element.style.setProperty("--reveal-delay", `${(index % 5) * 80}ms`);
    });

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px" },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
};