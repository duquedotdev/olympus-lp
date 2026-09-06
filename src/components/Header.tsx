import { useEffect, useState } from "react";
import { Logo } from "./Logo.tsx";
import { nav } from "../data/content.ts";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        document.querySelector<HTMLButtonElement>(".site-header__burger")?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "is-open" : ""}`}>
      <div className="site-header__inner">
        <div className="site-header__brand"><Logo /><span aria-hidden="true">OLYMPKUS <small>AI</small></span></div>
        <nav className="site-nav" id="site-navigation" aria-label="Navegação principal">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="site-nav__link" onClick={close}>
              {n.label}
            </a>
          ))}
        </nav>
        <a href="/#access" className="btn btn--ghost site-header__cta" onClick={close}>
          Solicitar acesso
        </a>
        <button
          className="site-header__burger"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
