export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid">
        <div className="hero__lede">
          <p className="eyebrow hero__eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            Olympkus AI &nbsp;//&nbsp; suíte agêntica
          </p>

          <h1 className="hero__title">
            <span className="reveal-line"><span>Devolvemos o seu</span></span>
            <span className="reveal-line"><span>recurso mais escasso:</span></span>
            <span className="reveal-line"><em>atenção.</em></span>
          </h1>

          <p className="hero__sub">
            Um panteão de agentes para a vida pessoal. Eles cuidam do dinheiro,
            do tempo e da execução — para que você cuide do que só você pode.
          </p>

          <div className="hero__actions">
            <a href="#access" className="btn btn--solid">Entrar para a lista</a>
            <a href="#pantheon" className="btn btn--ghost">Conhecer o panteão</a>
          </div>

          <dl className="hero__stats">
            <div><dt>03</dt><dd>agentes</dd></div>
            <div><dt>05</dt><dd>plataformas</dd></div>
            <div><dt>2027</dt><dd>primeiro lançamento</dd></div>
          </dl>
        </div>

        <figure className="exhibit-hero" data-reveal>
          <div className="exhibit-hero__spot" aria-hidden="true" />
          <div className="exhibit-hero__frame">
            <video
              className="exhibit-hero__media"
              src="/zeus.mp4"
              poster="/zeus.png"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <span className="exhibit-hero__meridian" aria-hidden="true" />
            <span className="exhibit-hero__tag exhibit-hero__tag--tl">EXHIBIT · ZEUS</span>
            <span className="exhibit-hero__tag exhibit-hero__tag--br">MÁRMORE · Ø ORÁCULO</span>
          </div>
          <figcaption className="exhibit-hero__cap">
            <span>Busto de Zeus</span>
            <span className="mono">40°N 22°E — MONTE OLIMPO</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
