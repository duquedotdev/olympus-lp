import { Logo } from "./Logo.tsx";
import { deities } from "../data/content.ts";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__brand">
          <Logo />
          <p className="site-footer__tag">Um panteão agêntico para a vida pessoal.</p>
        </div>

        <nav className="site-footer__col" aria-label="Produtos">
          <p className="site-footer__h mono">PRODUTOS</p>
          {deities.map((d) => (
            <a key={d.id} href={`#${d.id}`}>{d.name}</a>
          ))}
        </nav>

        <nav className="site-footer__col" aria-label="Empresa">
          <p className="site-footer__h mono">OLYMPKUS</p>
          <a href="#manifesto">Manifesto</a>
          <a href="#method">Método</a>
          <a href="#access">Acesso antecipado</a>
        </nav>
      </div>

      <div className="site-footer__base mono">
        <span>© {new Date().getFullYear()} OLYMPKUS AI</span>
        <span>40°N 22°E — MONTE OLIMPO</span>
      </div>
    </footer>
  );
}
