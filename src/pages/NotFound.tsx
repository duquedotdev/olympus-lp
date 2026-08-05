import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";

export function NotFound() {
  return (
    <>
      <Seo path="/404" title="Página não encontrada" />
      <section className="page-hero not-found">
        <div className="container page-hero-inner" style={{ alignItems: "center", textAlign: "center" }}>
          <span className="gradient-text" style={{ fontSize: "120px", lineHeight: 1, fontWeight: 700 }}>
            404
          </span>
          <h1>Página não encontrada</h1>
          <p className="section-lead">
            A página que você procura não existe ou foi movida.
          </p>
          <Link to="/" className="btn btn-primary btn-lg">Voltar para o início</Link>
        </div>
      </section>
    </>
  );
}
