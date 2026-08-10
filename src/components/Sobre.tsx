import { useEffect } from "react";
import { CtaBand } from "./CtaBand.tsx";

export function Sobre() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <section className="page-hero" id="sobre">
        <div className="page-hero__inner">
          <a href="#" className="blog-back">← Voltar</a>
          <p className="eyebrow"><span className="eyebrow__dot" />SOBRE</p>
          <h1 className="page-hero__title">Construímos o oposto do que a tecnologia prometeu.</h1>
          <p className="page-hero__lede">
            A tecnologia prometeu tempo livre e entregou mais telas para vigiar.
            A Olympkus AI constrói agentes que agem por você — silenciosos,
            responsáveis e sob o seu comando.
          </p>
        </div>
      </section>

      <section className="prose">
        <div className="prose__inner">
          <h2>Por que existimos</h2>
          <p>
            Usamos três apps para organizar a vida e ainda assim sentimos que
            administramos ferramentas em vez de viver. A tecnologia deveria
            devolver atenção, não consumi-la. A Olympkus existe para resolver
            essa contradição: delegar, não mais operar.
          </p>

          <h2>O que construímos</h2>
          <p>
            Uma suíte de agentes de IA chamada Panteão. Cada agente é especializado
            em um domínio da vida pessoal — <a href="#pluto">Pluto</a> cuida do
            dinheiro, <a href="#cronos">Cronos</a> do tempo, <a href="#zeus">Zeus</a>
            orquestra tudo. Você aprova a intenção; eles cuidam da execução.
          </p>

          <h2>Como somos diferentes</h2>
          <p>
            A mensagem que mais nos diferencia não é "agente que move seu dinheiro"
            — isso outros já fazem. É <em>um agente por domínio, sob um só comando</em>.
            A autonomia isolada está sendo comoditizada; a orquestração de agentes
            especializados é o que nenhum concorrente oferece.
          </p>
          <p>
            Nosso modelo é "você aprova, o agente executa" — controle, não apenas
            automação. É o oposto explícito de produtos que executam sem sua permissão.
          </p>

          <h2>Onde estamos</h2>
          <p>
            A Olympkus AI é uma empresa brasileira. O primeiro produto, Pluto, está
            previsto para lançar em janeiro de 2027. A lista de espera está aberta —
            os primeiros da fila entram como membros fundadores, com condições
            especiais no lançamento.
          </p>

          <h2>Princípios</h2>
          <ol>
            <li><strong>Você define a intenção.</strong> Nada acontece fora dos limites que você traça.</li>
            <li><strong>O agente executa.</strong> Um agente que opera por você, não mais um app para você operar.</li>
            <li><strong>Tudo permanece seu.</strong> Seus dados sob seu controle, com transparência sobre cada ação.</li>
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
