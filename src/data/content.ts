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
  { label: "Panteão", href: "/pantheon" },
  { label: "Manifesto", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Perguntas", href: "/help" },
];

export const deities: Deity[] = [
  {
    id: "pluto",
    name: "Pluto",
    domain: "Riqueza",
    glyph: "I",
    tagline: "Finanças agênticas — com você no comando.",
    description:
      "Pluto é o agente de finanças pessoais da Olympkus. Dashboard completa, transações com categorização por IA, orçamentos, metas, dívidas, investimentos, importação de extratos e um assistente de IA que raciocina. Funciona sem internet, 5 idiomas, no celular.",
    platforms: "Android · iOS",
    status: "shipping",
    statusLabel: "DISPONÍVEL",
    eta: "DESDE AGO 2026",
  },
  {
    id: "aion",
    name: "Aion",
    domain: "Tempo",
    glyph: "II",
    tagline: "Fale. O Aion faz.",
    description:
      "Aion é o agente de tempo da Olympkus. Tarefas, calendário, quadro, hábitos e notas num só app — com IA que age por padrão. Você fala o que precisa; o Aion organiza tudo em ciclos, não em listas intermináveis.",
    platforms: "Android · iOS",
    status: "arriving",
    statusLabel: "PREVISTO",
    eta: "JUL 2027",
  },
  {
    id: "zeus",
    name: "Zeus",
    domain: "Corpo",
    glyph: "III",
    tagline: "Orquestra seus aspectos fisiológicos para você focar no que importa.",
    description:
      "Zeus é o agente do seu corpo. Água, alimentação, sono, peso, humor, exercícios, ciclo menstrual, doenças — da ansiedade à diabetes. Ele te entende como organismo e te ajuda a chegar onde quer chegar, controlando a subida. Sem influência externa. É você, 1% melhor a cada dia. Em concepção.",
    platforms: "Android · iOS",
    status: "announced",
    statusLabel: "EM CONCEPÇÃO",
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
    a: "A Olympkus AI é uma empresa brasileira que constrói uma suíte de agentes de inteligência artificial para a vida pessoal. A suíte, chamada Panteão, reúne três agentes especializados: Pluto (finanças), Aion (tempo e tarefas) e Zeus (corpo e fisiologia). O diferencial é ter um agente por domínio — em vez de um assistente genérico.",
  },
  {
    q: "O que é IA agêntica?",
    a: "IA agêntica é inteligência artificial que age por você, não apenas responde perguntas. Em vez de um chatbot que você precisa operar, um agente executa tarefas dentro de limites que você define: você aprova a intenção, o agente cuida da execução. A Olympkus aplica esse conceito a finanças pessoais, gestão de tempo e bem-estar fisiológico.",
  },
  {
    q: "O que é o Pluto da Olympkus?",
    a: "Pluto é o agente de finanças pessoais da Olympkus AI. Ele lê suas contas, antecipa faturas e prepara pagamentos e transferências para a sua aprovação. Você define os limites e aprova cada intenção — não é piloto automático, é delegação com controle. Disponível desde agosto de 2026.",
  },
  {
    q: "O Pluto já está disponível?",
    a: "O Pluto está disponível desde agosto de 2026. A lista de novidades está aberta para os próximos produtos da Olympkus AI.",
  },
  {
    q: "Qual a diferença entre Olympkus e assistentes de IA como ChatGPT?",
    a: "O ChatGPT e outros assistentes genéricos respondem perguntas sobre qualquer assunto, mas não conhecem profundamente suas contas, seu calendário ou suas prioridades — você precisa explicar tudo, toda vez. A Olympkus tem um agente especializado por domínio: Pluto conhece suas finanças em profundidade, Aion conhece seu tempo, Zeus conhece seu corpo. Cada agente é excelente no que faz.",
  },
  {
    q: "Qual a diferença entre Olympkus e apps de finanças com IA?",
    a: "Apps como Aizen e Cleo fazem autonomia em um único domínio (dinheiro). A Olympkus propõe autonomia em toda a vida pessoal — finanças, tempo e corpo — com um agente especializado por domínio. Além disso, o modelo da Olympkus é 'você aprova, o agente executa': controle, não apenas automação cega. É o oposto explícito de produtos que executam sem sua permissão.",
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
