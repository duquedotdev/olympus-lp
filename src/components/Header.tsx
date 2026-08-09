import { useEffect, useState } from "react";
import { Logo } from "./Logo.tsx";
import { nav } from "../data/content.ts";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="site-header__inner">
        <Logo />
        <nav className="site-nav" aria-label="Navegação principal">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="site-nav__link">
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#access" className="btn btn--ghost site-header__cta">
          Solicitar acesso
        </a>
      </div>
    </header>
  );
}
