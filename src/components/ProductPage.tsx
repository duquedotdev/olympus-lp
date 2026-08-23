import { useEffect } from "react";
import { deities } from "../data/content.ts";
import { CtaBand } from "./CtaBand.tsx";

type Feature = { title: string; body: string; icon: string };
type FeatureGroup = { label: string; features: Feature[] };
type Plan = { name: string; price: string; period: string; description: string; features: string[]; highlight?: boolean };

const productDetails: Record<string, {
  hero: string;
  featureGroups: FeatureGroup[];
  plans: Plan[];
  faq: { q: string; a: string }[];
}> = {
  pluto: {
    hero: "Pluto é o agente de finanças pessoais da Olympkus. Dashboard completa, transações inteligentes com categorização por IA, orçamentos, metas, dívidas, investimentos e um assistente de IA que raciocina — tudo num só app, no celular e no desktop.",
    featureGroups: [
      {
        label: "Visão geral",
        features: [
          { icon: "◎", title: "Dashboard financeira", body: "Saldo, receitas, despesas e poupança num só lugar. Cards de balanço, saúde financeira, gastos por categoria e faturas próximas — atualizados em tempo real." },
          { icon: "◉", title: "Gráficos interativos", body: "Donut de gastos por categoria, sparklines de fluxo semanal, barras de comparação mensal e medidor de saúde financeira (sun gauge)." },
          { icon: "◈", title: "Multi-conta", body: "Cadastre todas as suas contas — banco, carteira, investimento. Arquive as que não usa mais. Veja transações por conta ou consolidadas." },
          { icon: "⬗", title: "Transações completas", body: "Crie, edite e estorne transações com poucos toques. Filtre por conta, categoria e período. Cada transação tem descrição, categoria, conta e data — tudo editável." },
        ],
      },
      {
        label: "Assistente de IA",
        features: [
          { icon: "✦", title: "Assistente de IA com raciocínio", body: "Chat streaming que mostra o raciocínio passo a passo antes de responder. Markdown renderizado, anexo de arquivos, histórico de conversas agrupado por data. Sugestões prontas: analisar gastos, orçamento, metas e dicas." },
          { icon: "✧", title: "Categorização inteligente", body: "Pluto sugere a categoria correta para cada transação com 96% de confiança. Você aprova com um toque — não precisa categorizar tudo manualmente." },
          { icon: "★", title: "Insights e quick wins", body: "Auditoria de assinaturas, caminho para quitar dívidas, projeção de metas e oportunidades de economia — gerados automaticamente a partir dos seus dados." },
          { icon: "☆", title: "Histórico de conversas", body: "Cada conversa com a IA fica salva e agrupada por data — hoje, ontem, última semana, últimos 30 dias. Volte a qualquer conversa anterior e continue de onde parou." },
        ],
      },
      {
        label: "Controle",
        features: [
          { icon: "▣", title: "Orçamentos por categoria", body: "Crie orçamentos semanais, mensais, trimestrais ou anuais por categoria. Acompanhe quanto já gastou e receba alertas ao se aproximar do limite." },
          { icon: "◆", title: "Metas financeiras", body: "Reserva de emergência, quitar dívida, investir, poupar para uma viagem. Acompanhe progresso, contribuições e projeção de quando vai chegar lá." },
          { icon: "▼", title: "Dívidas e parcelamentos", body: "Acompanhe dívidas ativas e quitadas, simule cenários de aceleração de pagamento e veja quanto economiza antecipando parcelas. Controle parcelamentos com vencimento agrupado." },
          { icon: "◐", title: "Recorrências", body: "Assinaturas e contas fixas num só lugar. Veja quanto gasta por mês com recorrências e identifique assinaturas esquecidas." },
          { icon: "▲", title: "Investimentos", body: "Aportes, resgates, lucros e dividendos. Calculadora de valor futuro com juros compostos para projetar o crescimento da carteira." },
          { icon: "◇", title: "Lista de desejos", body: "Guarde o que quer comprar com preço, categoria e data alvo. Pluto acompanha quanto você já juntou e te avisa quando pode comprar — sem comprometer o orçamento." },
        ],
      },
      {
        label: "Onde funciona",
        features: [
          { icon: "⬆", title: "Importação de extratos", body: "Importe extratos bancários em CSV ou OFX. Pluto lê o arquivo, categoriza as transações e importa tudo — sem digitar linha por linha." },
          { icon: "⬇", title: "Funciona sem internet", body: "Funciona sem internet. Suas ações vão para uma fila e sincronizam automaticamente quando a conexão volta. Banner de status sempre visível." },
          { icon: "⬌", title: "5 idiomas", body: "Português, inglês, espanhol, francês e chinês. O app inteiro traduzido — não só o menu, todas as telas." },
          { icon: "◐", title: "Notificações push", body: "Lembretes de recorrência e vencimento de parcelas. Notificações no celular e no desktop." },
          { icon: "◑", title: "Temas e acessibilidade", body: "Modo claro e escuro, cor de destaque personalizável e configurações de acessibilidade. O app se adapta a você." },
          { icon: "⚿", title: "Segurança e auditoria", body: "Login com Google, dados sensíveis protegidos com criptografia e tela de auditoria que registra cada ação tomada no app. Você vê o histórico de tudo." },
        ],
      },
    ],
    plans: [
      {
        name: "Free",
        price: "R$ 0",
        period: "",
        description: "Para começar a organizar suas finanças",
        features: [
          "Dashboard financeira completa",
          "Transações manuais",
          "Categorização inteligente",
          "1 conta bancária",
          "Importação de extratos (CSV/OFX)",
        ],
      },
      {
        name: "Pro",
        price: "R$ 29",
        period: "/mês",
        description: "Para quem quer mais controle",
        features: [
          "Tudo do Free, mais:",
          "Análise avançada de gastos",
          "Metas e objetivos ilimitados",
          "Orçamentos ilimitados",
          "Sugestões de economia com IA",
          "Contas ilimitadas",
          "Backup automático",
          "Suporte prioritário",
        ],
        highlight: true,
      },
      {
        name: "Premium",
        price: "R$ 49",
        period: "/mês",
        description: "Máximo controle e insights",
        features: [
          "Tudo do Pro, mais:",
          "Previsões financeiras com IA",
          "Análise de investimentos detalhada",
          "Planejamento de aposentadoria",
          "Consultoria financeira via chat 24/7",
          "Contas compartilhadas em família",
          "Ofertas exclusivas de parceiros",
          "Suporte VIP",
        ],
      },
    ],
    faq: [
      { q: "Pluto move meu dinheiro sozinho?", a: "Não. Pluto é um agente de finanças que organiza, categoriza e analisa — mas não executa transferências ou pagamentos sem sua ação. Você aprova cada intenção. É delegação com controle, não piloto automático." },
      { q: "Pluto funciona com meu banco?", a: "Pluto importa extratos bancários em CSV e OFX — formatos suportados por todos os bancos brasileiros. A integração direta via Open Finance está no roadmap. A lista completa de bancos será publicada no lançamento." },
      { q: "Preciso dar minha senha do banco?", a: "Não. Você importa o extrato que seu banco gera, ou lança transações manualmente. A Olympkus nunca pede nem armazena suas credenciais bancárias." },
      { q: "O assistente de IA realmente raciocina?", a: "Sim. O chat mostra o raciocínio passo a passo antes de responder — cada etapa do chain of thought é exibida com o ícone do nó que a gerou. Você vê como o Pluto chegou à conclusão, não só a resposta." },
      { q: "Pluto funciona offline?", a: "Sim. O app funciona sem internet: suas ações vão para uma fila e sincronizam automaticamente quando a conexão volta. Um banner de status mostra se você está online ou offline." },
      { q: "Quais idiomas o Pluto suporta?", a: "Português (BR), inglês, espanhol, francês e chinês. O app inteiro é traduzido — todas as telas, não só o menu." },
      { q: "Pluto tem versão desktop?", a: "Sim. Pluto roda no iOS, Android, macOS, Windows e Linux. O desktop tem a mesma base de recursos do mobile, mais analytics avançados (cenários de dívida, projeção de metas, quick wins)." },
      { q: "Qual a diferença entre Pro e Premium?", a: "Pro (R$ 29/mês) desbloqueia metas, orçamentos e contas ilimitadas, além de sugestões de economia com IA. Premium (R$ 49/mês) adiciona previsões financeiras, análise de investimentos detalhada, planejamento de aposentadoria, consultoria via chat 24/7 e contas compartilhadas em família." },
    ],
  },
  aion: {
    hero: "Aion é o agente de tempo da Olympkus. Tarefas, calendário, quadro, hábitos e notas num só app — com IA que age por padrão. Você fala o que precisa; o Aion organiza tudo em ciclos, não em listas intermináveis. Previsto para julho de 2027.",
    featureGroups: [
      {
        label: "O Método Aion",
        features: [
          { icon: "◉", title: "Captura", body: "Tudo entra por um único ponto, sem categorizar no momento. A IA processa sozinha — transforma texto em tarefa, nota ou evento e já encaixa no lugar certo." },
          { icon: "▣", title: "Fluxo", body: "Todo item vive em um de quatro estados: Capturado, Próximo, Agora, Feito. A IA move os cartões entre colunas conforme sua capacidade libera — não você." },
          { icon: "◐", title: "Ciclo", body: "Tempo organizado em ciclos semanais, cada um com uma intenção definida no início. No fim, a IA gera uma Revisão de Ciclo automática — sem sessão de 60 minutos." },
          { icon: "◆", title: "Bloco", body: "A IA aloca tarefas em blocos de tempo no calendário. Replaneja sozinha quando reuniões surgem, prazos mudam ou tarefas atrasam. Você não desenha o bloco — ele já está lá." },
        ],
      },
      {
        label: "Assistente",
        features: [
          { icon: "⌘", title: "Barra de captura & comando", body: "Um campo só, aberto em qualquer lugar do app. A IA decide se é tarefa, nota ou evento a partir do que você digitou. Reconhece datas, horários e prazos em linguagem natural — em qualquer campo de texto." },
          { icon: "✦", title: "Painel de conversa", body: "Converse com o Aion. Ele já age — não mostra um cartão de 'aplicar' esperando clique. Cita quais tarefas, notas e eventos usou como contexto em cada resposta." },
          { icon: "⟲", title: "Log de ações da IA", body: "Toda ação da IA — autônoma ou confirmada — é registrada num log cronológico. Desfaça individualmente por até 30 dias. A transparência é a principal forma de revisar o que aconteceu." },
        ],
      },
      {
        label: "Fluxo",
        features: [
          { icon: "▤", title: "Colunas de estado", body: "Capturado → Próximo → Agora → Feito. A IA move os itens para 'Agora' conforme sua capacidade observada. Arrastar manualmente continua funcionando para sobrepor a decisão da IA." },
          { icon: "▦", title: "Calendário do dia", body: "Blocos de tempo já alocados pela IA ao lado das colunas de estado. Detecção de conflito de horário. Arraste para mudar — a IA replaneja o resto do dia." },
          { icon: "●", title: "Hábitos do dia", body: "Check-in de um toque na mesma tela do Fluxo. Streak atual e recorde, heatmap histórico. O check-in é sempre um ato humano — a IA nunca marca um hábito como feito, mesmo com altíssima confiança." },
          { icon: "◈", title: "Projetos", body: "Hierarquia Área > Projeto > Tarefa > Subtarefa. Três tipos: paralelo, sequencial e ação única. Veja como lista ou quadro — mesmos dados, dois ângulos. Sem duplicidade." },
        ],
      },
      {
        label: "Ciclos & Revisão",
        features: [
          { icon: "↻", title: "Ciclo semanal", body: "Cada ciclo tem uma data de início e fim, com uma intenção definida no início. É o horizonte de planejamento — não um contrato de entrega rígido." },
          { icon: "✧", title: "Revisão de Ciclo", body: "No fim de cada ciclo, a IA gera um resumo: o que foi concluído, o que ficou para trás, sugestão de intenção para o próximo. Um ritual curto e pré-preenchido — não uma sessão longa que você precisa reservar sozinho." },
          { icon: "↺", title: "Replanejamento contínuo", body: "Tarefas não concluídas ao fim do ciclo não são excluídas nem marcadas como atrasadas. Voltam para 'Próximo' no ciclo seguinte, com a IA reavaliando prioridade. Sem culpa, sem manutenção manual." },
        ],
      },
      {
        label: "Notas & memória pessoal",
        features: [
          { icon: "✎", title: "Auto-organização", body: "A IA sugere e aplica tags e ligações entre notas automaticamente — sem pastas manuais. Notas que se mencionam ficam conectadas. Tudo indexado para busca." },
          { icon: "◈", title: "Memória pessoal", body: "Notas viram contexto. O Assistente usa seu histórico de notas para responder perguntas sobre qualquer coisa que você anotou — 'o que eu disse sobre X na reunião de terça?'. Busca por significado, não só por palavra exata." },
          { icon: "⚿", title: "Seu conteúdo é seu", body: "A IA nunca reescreve o texto original das suas notas. Só adiciona tags e ligações. Reescrever só acontece quando você pede a edição diretamente — nunca por iniciativa da IA." },
          { icon: "▦", title: "Nota diária", body: "Pré-populada com eventos e tarefas concluídas do dia. Ponto de entrada central do fluxo de captura. Exportação em formato aberto — seus dados não ficam presos." },
        ],
      },
      {
        label: "Disponibilidade",
        features: [
          { icon: "⬌", title: "Onde funciona", body: "macOS, Windows e Linux no computador. iOS e Android no celular. Conta única, dados sincronizados entre todos os dispositivos." },
          { icon: "⬇", title: "Funciona sem internet", body: "Captura, criação e edição funcionam sem conexão. Sincroniza automaticamente quando a conexão volta. Nada se perde — a versão anterior fica preservada no histórico por 30 dias." },
          { icon: "◐", title: "Sistema de cores", body: "Cada área, projeto, tag, calendário e hábito tem cor própria — identificável à distância. Sempre com um segundo sinal (ícone ou forma) para acessibilidade. Paleta com contraste e daltonismo." },
          { icon: "⚿", title: "Autonomia com limites", body: "A IA age por padrão. Só para em três casos: exclusão permanente, comunicação externa, ação financeira. Modo Manual disponível para quem quer controle total. Tudo auditável e desfazível." },
        ],
      },
    ],
    plans: [
      {
        name: "Free",
        price: "R$ 0",
        period: "",
        description: "Para começar a organizar seu tempo",
        features: [
          "Tarefas e projetos ilimitados",
          "Calendário com blocos de tempo",
          "Notas com editor em blocos",
          "Hábitos com streak e heatmap",
          "Captura em linguagem natural",
          "Limite de ações de IA por mês",
        ],
      },
      {
        name: "Pro",
        price: "R$ 200",
        period: "/mês",
        description: "IA sem limites, memória completa",
        features: [
          "Tudo do Free, mais:",
          "Ações de IA ilimitadas",
          "Memória pessoal completa sobre notas",
          "Sincronização entre todos os dispositivos",
          "Perspectivas avançadas (filtros salvos)",
          "Histórico de ciclos e métricas",
        ],
        highlight: true,
      },
      {
        name: "Max",
        price: "R$ 1.000",
        period: "/mês",
        description: "Máxima autonomia e integrações",
        features: [
          "Tudo do Pro, mais:",
          "Integrações com Google, Microsoft e Apple",
          "Sinalização sensorial estendida (som e vibração)",
          "Cor de energia ligada à IA",
          "Sincronização prioritária",
          "Suporte direto com o fundador",
        ],
      },
    ],
    faq: [
      { q: "O que é o Método Aion?", a: "É a forma como o Aion organiza sua vida. Tudo entra por um único ponto (Captura), move-se entre estados visuais (Fluxo), é organizado em ciclos semanais com intenção e revisão automática (Ciclo), e ganha blocos de tempo no calendário alocados pela IA (Bloco). Não é uma pilha de metodologias separadas — é um fluxo só, com a IA conduzindo entre as estações." },
      { q: "A IA age sozinha?", a: "Sim — por padrão. A IA cria, edita, prioriza, agenda e organiza sem esperar aprovação prévia. O que você vê é o resultado e a explicação, com opção de desfazer. Só três categorias sempre pedem confirmação: exclusão permanente, comunicação externa (enviar e-mail, convite, mensagem) e ação financeira. Quem quer controle total pode ativar o Modo Manual." },
      { q: "Quando o Aion vai lançar?", a: "O lançamento do Aion está previsto para julho de 2027. O desenvolvimento começa depois que o Pluto estiver no ar, com dados reais de uso informando o design. O Aion nasce global, em inglês desde o dia 1." },
      { q: "Onde o Aion funciona?", a: "No computador (macOS, Windows e Linux) e no celular (iOS e Android). Conta única com sincronização entre todos os dispositivos. Funciona sem internet — sincroniza automaticamente quando a conexão volta." },
      { q: "Como o Aion se compara ao Motion, Notion ou Things 3?", a: "Nenhum concorrente combina tudo ao mesmo tempo: quadro de tarefas, calendário com linguagem natural, método rigoroso com revisão e perspectivas, e notas que se auto-organizam e viram memória pessoal. O Motion se aproxima em ambição, mas foca em times e negócios — não no usuário individual. O Aion nasce desse cruzamento que ninguém cobre." },
      { q: "O Aion vai ter versão gratuita?", a: "Sim. O plano Free tem tarefas, calendário, notas e hábitos sem limite de itens — o limite é no número de ações de IA por mês. O Pro (R$ 200/mês) remove o limite de IA, libera memória pessoal completa e sincronização entre todos os dispositivos. O Max (R$ 1.000/mês) adiciona integrações com Google, Microsoft e Apple, sinalização sensorial estendida e suporte direto com o fundador." },
      { q: "A IA pode alterar minhas notas?", a: "Não. A IA pode sugerir e aplicar tags e ligações entre notas automaticamente, mas nunca reescreve o texto original do que você escreveu. Seu conteúdo é seu. Reescrever só acontece quando você pede a edição diretamente." },
      { q: "O Aion funciona sem internet?", a: "Sim. Captura, criação e edição funcionam sem conexão. As ações sincronizam automaticamente quando a conexão volta. Nada se perde — a versão anterior fica preservada no histórico por 30 dias." },
    ],
  },
  zeus: {
    hero: "Zeus é a visão final do Panteão: um orquestrador que coordena todos os agentes sob um só comando. Um único pedido, executado através de tudo — finanças, tempo e o que vier depois. Em concepção.",
    featureGroups: [],
    plans: [],
    faq: [
      { q: "O que o Zeus vai fazer?", a: "A visão é um orquestrador: você dá um comando e Zeus coordena os agentes especializados — Pluto, Aion e o que vier depois — para executar tudo em sequência. Um pedido, múltiplos domínios, um só resultado. O escopo exato será definido com dados reais de uso dos outros agentes." },
      { q: "Quando o Zeus vai lançar?", a: "Ainda em concepção. Zeus só faz sentido quando há agentes reais para orquestrar e dados reais para aprender com eles. Vai nascer do que o Pluto e o Aion ensinarem — não de um PowerPoint." },
    ],
  },
};

export function ProductPage({ id }: { id: string }) {
  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  const deity = deities.find((d) => d.id === id);
  if (!deity) return null;
  const details = productDetails[id];

  return (
    <>
      <section className="product-hero" id={id}>
        <div className="product-hero__inner">
          <a href="/pantheon" className="blog-back">← Panteão</a>
          {id === "aion" && (
            <img src="/aion_logo.svg" alt="" className="product-hero__logo" aria-hidden="true" />
          )}
          {id === "pluto" && (
            <img src="/pluto_logo.svg" alt="" className="product-hero__logo" aria-hidden="true" />
          )}
          <h1 className="product-hero__title">{deity.name}</h1>
          <p className="product-hero__tagline">{deity.tagline}</p>
          <p className="product-hero__desc">{details.hero}</p>
          <p className="product-hero__platforms mono">{deity.platforms}</p>
        </div>
      </section>

      {details.featureGroups.length > 0 && details.featureGroups.map((group, gi) => (
        <section className="product-features" key={gi}>
          <div className="section-head">
            <p className="eyebrow" data-reveal>{group.label}</p>
            <h2 className="section-title" data-reveal>{group.label}</h2>
          </div>
          <div className="product-features__grid">
            {group.features.map((f, i) => (
              <article className="product-feature" key={i} data-reveal>
                <span className="product-feature__icon" aria-hidden="true">{f.icon}</span>
                <h3 className="product-feature__title">{f.title}</h3>
                <p className="product-feature__body">{f.body}</p>
              </article>
            ))}
          </div>
        </section>
      ))}

      {details.plans.length > 0 && (
        <section className="product-pricing">
          <div className="section-head" style={{ textAlign: "center" }}>
            <p className="eyebrow eyebrow--center" data-reveal>Planos</p>
            <h2 className="section-title" data-reveal style={{ textAlign: "center" }}>Escolha o seu</h2>
          </div>
          <div className="pricing-grid">
            {details.plans.map((plan, i) => (
              <div className={`pricing-card ${plan.highlight ? "pricing-card--highlight" : ""}`} key={i} data-reveal>
                {plan.highlight && <span className="pricing-card__badge mono">RECOMENDADO</span>}
                <h3 className="pricing-card__name">{plan.name}</h3>
                <p className="pricing-card__price">
                  {plan.price}<span className="pricing-card__period">{plan.period}</span>
                </p>
                <p className="pricing-card__desc">{plan.description}</p>
                <ul className="pricing-card__features">
                  {plan.features.map((f, j) => (
                    <li key={j} className={f.endsWith(":") ? "pricing-card__sep" : ""}>{f}</li>
                  ))}
                </ul>
                <a href="/" className={`btn ${plan.highlight ? "btn--solid" : "btn--ghost"} pricing-card__cta`}>
                  Entrar para a lista
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="product-faq">
        <div className="section-head">
          <p className="eyebrow" data-reveal>Perguntas</p>
          <h2 className="section-title" data-reveal>Sobre o {deity.name}</h2>
        </div>
        <div className="faq__list">
          {details.faq.map((item, i) => (
            <details className="faq__item" key={i} data-reveal>
              <summary className="faq__q">
                <span>{item.q}</span>
                <span className="faq__icon" aria-hidden="true">+</span>
              </summary>
              <p className="faq__a">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
