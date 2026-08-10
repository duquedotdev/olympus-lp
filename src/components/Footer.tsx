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
          <a href="#blog">Blog</a>
          <a href="#imprensa">Imprensa</a>
        </nav>

        <nav className="site-footer__col" aria-label="Comunidade">
          <p className="site-footer__h mono">COMUNIDADE</p>
          <a href="#faq">Perguntas</a>
          <a href="#access">Acesso antecipado</a>
          <a href="#privacidade">Privacidade</a>
          <a href="https://discord.gg/Y5GxgEY8Zt" target="_blank" rel="noopener noreferrer">Discord</a>
        </nav>

        <nav className="site-footer__col" aria-label="Social">
          <p className="site-footer__h mono">SOCIAL</p>
          <a href="https://linkedin.com/company/olympkusai" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://instagram.com/olympkus" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://tiktok.com/@olympkus" target="_blank" rel="noopener noreferrer">TikTok</a>
          <a href="https://discord.gg/Y5GxgEY8Zt" target="_blank" rel="noopener noreferrer">Discord</a>
        </nav>
      </div>

      <div className="site-footer__base mono">
        <span>© {new Date().getFullYear()} OLYMPKUS AI</span>
        <span>40°N 22°E — MONTE OLIMPO</span>
      </div>
    </footer>
  );
}
