import { useEffect } from "react";
import { CtaBand } from "./CtaBand.tsx";
import { InteriorHero } from "./interior-hero.tsx";
import { SocialLinks } from "./SocialLinks.tsx";

const CONTACT_EMAILS: { label: string; address: string }[] = [
  { label: "General", address: "hello@olympkusai.com" },
  { label: "Press", address: "press@olympkusai.com" },
  { label: "Privacy", address: "privacy@olympkusai.com" },
  { label: "Legal", address: "legal@olympkusai.com" },
];

export function Sobre() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <InteriorHero id="sobre">
        <div className="page-hero__inner">
          <a href="/" className="blog-back">← Voltar</a>
          <h1 className="page-hero__title">Construímos o oposto do que a tecnologia prometeu.</h1>
          <p className="page-hero__lede">
            A tecnologia prometeu tempo livre e entregou mais telas para vigiar.
            A Olympkus AI constrói agentes que agem por você — silenciosos,
            responsáveis e sob o seu comando.
          </p>
        </div>
      </InteriorHero>

      <section className="prose">
        <div className="prose__inner">
          <h2>Por que existimos</h2>
          <p>
            A tecnologia prometeu nos libertar. Entregou mais trabalho.
          </p>
          <p>
            Não no sentido óbvio, de código ou máquinas. No sentido traiçoeiro:{" "}
            <strong>ela trocou o esforço físico pelo esforço mental.</strong> Você
            não carrega mais peso, mas carrega decisões. Notificações. Dashboards.
            Atualizações manuais. Escolhas que não deveriam ser suas.
          </p>
          <p>
            O problema não é você. É o modelo. A indústria construiu ferramentas
            que exigem operação constante porque é assim que elas te mantêm refém.
            Quanto mais você opera, mais preso fica. E eles chamam isso de
            "empoderamento".
          </p>
          <p>
            Nós chamamos de defeito.
          </p>

          <h2>A virada</h2>
          <p>
            E se a tecnologia não te pedisse nada?
          </p>
          <p>
            E se, em vez de gráficos para você interpretar, ela agisse? Em vez de
            relatórios para você ler, ela resolvesse? Em vez de painéis para você
            gerenciar, ela simplesmente <strong>fizesse</strong> — com sua
            permissão, mas sem sua intervenção?
          </p>
          <p>
            Essa é a única pergunta que importa na Olympkus.
          </p>
          <p>
            Não criamos mais um aplicativo para você operar. Criamos agentes que
            operam por você. E essa diferença não é incremental — é categórica. É
            a diferença entre dirigir um carro e ter um motorista de confiança.
            Entre cozinhar todos os dias e ter um chef particular que só cozinha
            o que você aprova.
          </p>

          <h2>A origem</h2>
          <p>
            A Olympkus nasceu de uma constatação indigesta: a inteligência
            artificial já é boa o suficiente para pensar, categorizar, sugerir e
            agir. Mas quase ninguém está usando ela para isso. Estão usando IA
            para gerar textos bonitos ou desenhos criativos. Não para{" "}
            <strong>cuidar da sua vida</strong>.
          </p>
          <p>
            Comecei sozinho. Com um computador, um celular e a teimosia de quem
            se recusa a lançar produto que não usa. Não tenho investidor mandando
            em roadmap. Não tenho equipe de marketing criando moda. Tenho uma
            convicção: software bom é software que some. Que faz o trabalho e te
            devolve o tempo.
          </p>

          <h2>O nome</h2>
          <p>
            Olympkus. Olimpo.
          </p>
          <p>
            No topo da montanha, nenhum deus fazia tudo. Zeus tinha o céu.
            Poseidon, o mar. Hades, o submundo. Cada um no seu domínio, com total
            soberania. Especialistas, não generalistas.
          </p>
          <p>
            A Olympkus é um panteão digital exatamente assim:
          </p>
          <ul>
            <li><strong>Pluto</strong> — soberano do seu dinheiro.</li>
            <li><strong>Aion</strong> — soberano do seu tempo.</li>
            <li><strong>Zeus</strong> — soberano do seu corpo.</li>
          </ul>
          <p>
            Não um assistente genérico que se despedaça tentando abraçar o mundo.
            Mas especialistas quietos, cooperando nos bastidores, para que você
            viva sem precisar saber que eles estão lá.
          </p>

          <h2>Quem sou eu</h2>
          <p>
            Felipe Duque. Brasileiro, programador desde moleque, sozinho nessa
            jornada.
          </p>
          <p>
            Cada linha de código, cada pixel do design, cada servidor no backend —
            eu que fiz. Não por ego. Porque não dá para terceirizar o que você
            não sente na pele. Se eu não uso, não lanço. Se não resolve minha
            vida, não resolve a sua.
          </p>
          <p>
            E quando você falar comigo — no Discord, no e-mail, no que for — não
            vai ter robô de triagem. Não vai ter "responderemos em até 48 horas".
            Vai ter eu. Sem filtro, sem enrolação.
          </p>

          <h2>O que construí</h2>
          <p>
            O <strong>Panteão</strong>: uma suíte de agentes de IA.
          </p>
          <p>
            Você aprova a intenção. Eles executam. Sem dashboards, sem gráficos,
            sem relatório de fim de mês. Você não opera. Você decide. O agente faz
            o resto.
          </p>
          <p>
            Isso não é automação. Automação é uma máquina que repete. Isso é{" "}
            <strong>delegação</strong> — é uma entidade inteligente que entende o
            que você quer, pede seu ok e age como se fosse você, só que sem gastar
            sua energia.
          </p>

          <h2>O que nos diferencia</h2>
          <p>
            O mercado está cheio de "IA que faz tudo". Robôs genéricos que
            prometem o mundo e entregam respostas vagas.
          </p>
          <p>
            A Olympkus é o oposto: um time de especialistas. Cada agente com
            autonomia restrita ao que realmente sabe fazer, e com total autoridade
            nesse território.
          </p>
          <p>
            Enquanto eles tentam fazer um canivete suíço que não corta nada
            direito, nós temos um conjunto de facas japonesas. Cada uma para um
            propósito. Cada uma afiadíssima.
          </p>

          <h2>Nossos princípios</h2>
          <ul>
            <li><strong>Você manda.</strong> Nada acontece sem seu ok explícito.</li>
            <li><strong>Eles trabalham.</strong> Você não toca em ferramenta nenhuma depois de dar a ordem.</li>
            <li><strong>Tudo seu.</strong> Seus dados, seus hábitos, sua privacidade. Não vendemos, não expomos, não olhamos de graça.</li>
            <li><strong>Devagar e certo.</strong> Não existe pressa para lançar lixo. Existe paciência para entregar ouro.</li>
            <li><strong>Sem rabo preso.</strong> Zero publi disfarçada, zero comissão em cima de você, zero conflito com seus interesses.</li>
          </ul>

          <h2>Onde estamos</h2>
          <p>
            Brasileiros. Independentes. Vivos.
          </p>
          <ul>
            <li><strong>Pluto</strong> está no Google Play desde agosto de 2026.</li>
            <li><strong>Aion</strong> chega em julho de 2027.</li>
            <li><strong>Zeus</strong> está sendo moldado pelo que eu aprender sobre você — não por um PowerPoint de investidor.</li>
          </ul>
          <p>
            Quer acompanhar? A lista de novidades está aberta. Você recebe antes
            de todo mundo.
          </p>

          <h2>Contato</h2>
          <ul style={contactListStyle}>
            {CONTACT_EMAILS.map((c) => (
              <li key={c.label} className="about-contact-row" style={contactRowStyle}>
                <span className="mono" style={contactLabelStyle}>{c.label}</span>
                {c.address.includes("@") ? (
                  <a href={`mailto:${c.address}`} style={contactLinkStyle}>{c.address}</a>
                ) : (
                  <span style={contactLinkStyle}>{c.address}</span>
                )}
              </li>
            ))}
          </ul>
          <p>
            <a href="/contact">Todos os canais em /contact</a>
          </p>
          <SocialLinks />
        </div>
      </section>

      <CtaBand />
    </>
  );
}

/* ---------- Inline styles ---------- */
const contactListStyle: React.CSSProperties = {
  listStyle: "none",
  margin: "0 0 1.2rem",
  padding: 0,
};

const contactRowStyle: React.CSSProperties = {
  display: "grid",
  gap: "1rem",
  padding: "0.6rem 0",
  borderBottom: "1px solid var(--line)",
};

const contactLabelStyle: React.CSSProperties = {
  fontSize: "0.72rem",
  letterSpacing: "0.12em",
  color: "var(--stone-dim)",
  textTransform: "uppercase",
};

const contactLinkStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "var(--bronze-soft)",
};
