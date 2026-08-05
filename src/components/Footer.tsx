import { Link } from "react-router-dom";
import { Logo } from "./Logo";

const COLUMNS = [
  {
    title: "Produtos",
    links: [
      { label: "Pluto — Finanças", to: "/pluto" },
      { label: "Artemis — Agenda", to: "/artemis" },
      { label: "Apolo — Notas", to: "/apolo" },
      { label: "Hermes — Foco", to: "/hermes" },
      { label: "Hestia — Hábitos", to: "/hestia" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Manifesto", to: "/manifesto" },
      { label: "Tecnologia", to: "/tecnologia" },
      { label: "Pesquisa", to: "/pesquisa" },
      { label: "Contato", to: "/contato" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Preços", to: "/precos" },
      { label: "Blog", to: "/recursos" },
      { label: "Central de ajuda", to: "/contato" },
      { label: "Segurança", to: "/tecnologia" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Termos de uso", to: "/contato" },
      { label: "Privacidade", to: "/contato" },
      { label: "LGPD", to: "/contato" },
      { label: "Cookies", to: "/contato" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <Logo size={160} />
            </Link>
            <p className="footer-tagline">
              AI at work. Life at ease.
            </p>
          </div>
          <div className="footer-columns">
            {COLUMNS.map((col) => (
              <div key={col.title} className="footer-col">
                <h4>{col.title}</h4>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Olympkus AI Ltda. CNPJ 00.000.000/0001-00.</p>
          <p className="footer-made">Feito no Brasil 🇧🇷</p>
        </div>
      </div>
    </footer>
  );
}
