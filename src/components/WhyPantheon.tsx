export function WhyPantheon() {
  return (
    <section className="why" id="why">
      <div className="section-head">
        <p className="eyebrow" data-reveal>Por que o Panteão</p>
        <h2 className="section-title" data-reveal>
          Um especialista por domínio — não um generalista que faz de tudo um pouco.
        </h2>
      </div>

      <div className="why__grid">
        <article className="why__col" data-reveal>
          <p className="why__label mono">ASSISTENTES GENÉRICOS</p>
          <p className="why__body">
            Um chatbot que responde sobre qualquer assunto, mas não conhece
            profundamente suas contas, seu calendário ou suas prioridades.
            Você precisa explicar tudo, toda vez — e acaba operando a ferramenta
            em vez de viver.
          </p>
        </article>

        <article className="why__col why__col--mid" data-reveal>
          <p className="why__label mono">APPS INDIVIDUAIS</p>
          <p className="why__body">
            Um app de finanças, um de tarefas, um de calendário — cada um com
            seu login, sua interface, seu contexto isolado. Nenhum sabe o que
            o outro está fazendo. Você vira o integrador humano entre eles.
          </p>
        </article>

        <article className="why__col why__col--accent" data-reveal>
          <p className="why__label mono">PANTEÃO OLYMPKUS</p>
          <p className="why__body">
            Um agente especializado por domínio — Pluto conhece suas finanças
            em profundidade, Cronos conhece seu tempo — e um orquestrador, Zeus,
            que coordena tudo sob um só comando. Cada agente é excelente no
            que faz. Você delega, não integra.
          </p>
        </article>
      </div>

      <p className="why__foot" data-reveal>
        A autonomia isolada está sendo comoditizada. O que nenhum concorrente
        oferece é <em>autonomia coordenada</em> — agentes especializados que
        trabalham juntos, sob o seu comando.
      </p>
    </section>
  );
}
