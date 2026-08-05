import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { NAV, PRODUCTS } from "../data/content";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Olympkus AI">
          <Logo size={40} />
          <span>Olympkus AI</span>
        </Link>

        <nav className={`nav ${open ? "is-open" : ""}`}>
          <ul>
            <li
              className="nav-dropdown"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className="nav-dropdown-trigger"
                onClick={() => setProductsOpen((v) => !v)}
                aria-expanded={productsOpen}
              >
                Produtos <span className="nav-caret">▾</span>
              </button>
              {productsOpen && (
                <div className="nav-dropdown-menu">
                  {PRODUCTS.map((p) => (
                    <Link
                      key={p.slug}
                      to={`/${p.slug}`}
                      onClick={() => { setOpen(false); setProductsOpen(false); }}
                      className="nav-dropdown-item"
                    >
                      <span className="nav-dropdown-name">{p.name}</span>
                      <span className="nav-dropdown-cat">{p.category}</span>
                    </Link>
                  ))}
                </div>
              )}
            </li>
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => (isActive ? "is-active" : "")}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <Link to="/precos" className="link-muted">Entrar</Link>
          <Link to="/precos" className="btn btn-primary">Testar grátis</Link>
          <button
            className="menu-toggle"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
