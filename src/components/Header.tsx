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

  const close = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "is-open" : ""}`}>
      <div className="site-header__inner">
        <Logo />
        <nav className="site-nav" aria-label="Navegação principal" aria-hidden={!menuOpen}>
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
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
