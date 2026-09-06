export function Manifesto() {
  return (
    <section className="manifesto" id="manifesto">
      <div className="manifesto__seal" aria-hidden="true"><span>Ο</span></div>
      <p className="eyebrow" data-reveal>I · Além das nuvens</p>
      <blockquote className="manifesto__quote" data-reveal>
        A tecnologia prometeu tempo livre e entregou mais telas para vigiar.
        <span className="manifesto__turn">
          Nós construímos o oposto: agentes que <em>agem</em> por você — silenciosos,
          responsáveis e sob o seu comando.
        </span>
      </blockquote>
      <p className="manifesto__sign mono" data-reveal>— OLYMPKUS AI, DO MONTE OLIMPO</p>
      <dl className="manifesto__reach" data-reveal>
        <div><dt>03</dt><dd>agentes</dd></div>
        <div><dt>05</dt><dd>plataformas</dd></div>
        <div><dt>85</dt><dd>países</dd></div>
        <div><dt>05</dt><dd>idiomas</dd></div>
      </dl>
    </section>
  );
}
