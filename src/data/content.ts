export type Status = "shipping" | "arriving" | "announced";

export interface Deity {
  id: string;
  name: string;
  domain: string;
  glyph: string;
  tagline: string;
  description: string;
  platforms: string;
  status: Status;
  statusLabel: string;
  eta: string;
}

export const nav = [
  { label: "Panteão", href: "#pantheon" },
  { label: "Manifesto", href: "#manifesto" },
  { label: "Método", href: "#method" },
  { label: "Blog", href: "#blog" },
  { label: "Imprensa", href: "#imprensa" },
  { label: "Perguntas", href: "#faq" },
];

export const deities: Deity[] = [
  {
    id: "pluto",
    name: "Pluto",
    domain: "Riqueza",
    glyph: "I",
    tagline: "Finanças agênticas — com você no comando.",
    description:
      "Pluto é o agente de finanças pessoais da Olympkus. Dashboard completa, transações com categorização por IA, orçamentos, metas, dívidas, investimentos, importação de extratos e um assistente de IA que raciocina. Offline-first, 5 idiomas, no celular e no desktop.",
    platforms: "iOS · Android · macOS · Windows · Linux",
    status: "shipping",
    statusLabel: "PREVISTO",
    eta: "JAN 2027",
  },
  {
    id: "cronos",
    name: "Cronos",
    domain: "Tempo",
    glyph: "II",
    tagline: "O agente de tempo — se existir.",
    description:
      "Cronos é a ideia de um agente de gestão de tempo para o Panteão. Ainda não é um produto. Quando soubermos o que fará, você saberá.",
    platforms: "A definir",
    status: "announced",
    statusLabel: "AGUARDE",
    eta: "—",
  },
  {
    id: "zeus",
    name: "Zeus",
    domain: "Vontade",
    glyph: "III",
    tagline: "O orquestrador — se existir.",
    description:
      "Zeus é a ideia de um orquestrador do Panteão. Ainda não sabemos se será um produto, o que fará ou quando. Quando soubermos, você saberá.",
    platforms: "A definir",
    status: "announced",
    statusLabel: "AGUARDE",
    eta: "—",
  },
];

export const principles = [
  {
    k: "01",
    title: "Você define a intenção",
    body: "Nada acontece fora dos limites que você traça. O agente pede permissão onde importa e age onde foi autorizado.",
  },
  {
    k: "02",
    title: "O agente executa",
    body: "Em vez de mais um app para você operar, um agente que opera por você — através dos seus dispositivos e das suas contas.",
  },
  {
    k: "03",
    title: "Tudo permanece seu",
    body: "Seus dados vivem sob seu controle, com criptografia forte e transparência sobre cada ação tomada. Você vê — e revoga — o que quiser, quando quiser.",
  },
];

export interface FaqItem {
  q: string;
  a: string;
}

export const faqs: FaqItem[] = [
  {
    q: "O que é a Olympkus AI?",
    a: "A Olympkus AI é uma empresa brasileira que constrói uma suíte de agentes de inteligência artificial para a vida pessoal. A suíte, chamada Panteão, reúne três agentes especializados: Pluto (finanças), Cronos (tempo e tarefas) e Zeus (orquestração). O diferencial é ter um agente por domínio, orquestrados por um comando único — em vez de um assistente genérico.",
  },
  {
    q: "O que é IA agêntica?",
    a: "IA agêntica é inteligência artificial que age por você, não apenas responde perguntas. Em vez de um chatbot que você precisa operar, um agente executa tarefas dentro de limites que você define: você aprova a intenção, o agente cuida da execução. A Olympkus aplica esse conceito a finanças pessoais, gestão de tempo e orquestração da vida pessoal.",
  },
  {
    q: "O que é o Pluto da Olympkus?",
    a: "Pluto é o agente de finanças pessoais da Olympkus AI. Ele lê suas contas, antecipa faturas e prepara pagamentos e transferências para a sua aprovação. Você define os limites e aprova cada intenção — não é piloto automático, é delegação com controle. Lançamento previsto para janeiro de 2027.",
  },
  {
    q: "Quando o Pluto vai lançar?",
    a: "O lançamento do Pluto está previsto para janeiro de 2027. A lista de espera está aberta — os primeiros da fila entram como membros fundadores, com condições especiais no lançamento.",
  },
  {
    q: "Qual a diferença entre Olympkus e assistentes de IA como ChatGPT?",
    a: "O ChatGPT e outros assistentes genéricos respondem perguntas sobre qualquer assunto, mas não conhecem profundamente suas contas, seu calendário ou suas prioridades — você precisa explicar tudo, toda vez. A Olympkus tem um agente especializado por domínio: Pluto conhece suas finanças em profundidade, Cronos conhece seu tempo. Cada agente é excelente no que faz, e Zeus orquestra tudo sob um só comando.",
  },
  {
    q: "Qual a diferença entre Olympkus e apps de finanças com IA?",
    a: "Apps como Aizen e Cleo fazem autonomia em um único domínio (dinheiro). A Olympkus propõe autonomia coordenada em toda a vida pessoal — finanças, tempo e orquestração — com um agente especializado por domínio. Além disso, o modelo da Olympkus é 'você aprova, o agente executa': controle, não apenas automação cega. É o oposto explícito de produtos que executam sem sua permissão.",
  },
  {
    q: "O que significa 'você aprova, o agente executa'?",
    a: "Significa que nenhum agente da Olympkus executa uma ação significativa sem a sua aprovação. Você define os limites — quais categorias de ação o agente pode fazer sozinho, quais precisam de permissão — e o agente age dentro desses limites. Não é piloto automático: é delegação com controle. Você pode ver e revogar qualquer permissão a qualquer momento.",
  },
  {
    q: "A Olympkus AI é brasileira?",
    a: "Sim. A Olympkus AI é uma empresa brasileira que desenvolve agentes de IA para o mercado brasileiro, com suporte a português e foco no ecossistema financeiro nacional.",
  },
  {
    q: "Meus dados estão seguros com a Olympkus?",
    a: "Seus dados vivem sob seu controle, com criptografia forte e transparência sobre cada ação tomada. Você vê o que o agente fez e pode revogar permissões quando quiser. A Olympkus não vende seus dados — a receita vem da assinatura, não da sua informação.",
  },
];
