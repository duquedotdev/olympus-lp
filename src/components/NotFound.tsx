import { useEffect } from "react";

export function NotFound() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <section className="notfound" id="notfound">
        <div className="notfound__inner">
          <a href="/" className="blog-back">← Voltar ao início</a>
          <p className="eyebrow"><span className="eyebrow__dot" />404 · ORÁCULO MUDO</p>
          <h1 className="notfound__title">Este caminho não leva a lugar nenhum.</h1>
          <p className="notfound__lede">
            O oráculo consultou cada coluna do Olimpo e não encontrou nada aqui.
            Talvez a página tenha mudado de endereço — ou talvez nunca tenha existido.
          </p>
          <div className="notfound__actions">
            <a href="/" className="btn btn--solid">Voltar ao início</a>
            <a href="/pantheon" className="btn btn--ghost">Conhecer o panteão</a>
          </div>
        </div>
      </section>
    </>
  );
}
