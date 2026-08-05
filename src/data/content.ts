export const SITE = {
  name: "Olympkus AI",
  domain: "olympkus.ai",
  url: "https://olympkus.ai",
  twitter: "@olympkusai",
  slogan: "AI at work. Life at ease.",
  description:
    "A IA trabalha. Sua vida fica leve. Cinco aplicativos de produtividade com IA que organizam suas finanças, sua agenda, suas notas, seu foco e seus hábitos.",
  logoText: "Olympkus",
};

export const PRODUCTS = [
  {
    slug: "pluto",
    name: "Pluto",
    tagline: "Converse com seu dinheiro. Ele responde.",
    category: "Finanças",
    icon: "wallet",
    color: "var(--accent)",
    desc: "O assistente financeiro com IA. Importe extratos, categorize tudo automaticamente, defina metas e converse com seu dinheiro em linguagem natural.",
    features: ["IA conversacional", "Categorização 98%", "Metas e orçamentos", "Investimentos e analytics"],
    status: "Disponível",
  },
  {
    slug: "artemis",
    name: "Artemis",
    tagline: "Sua agenda, suas tarefas, seu tempo — num só lugar.",
    category: "Agenda & Tarefas",
    icon: "target",
    color: "#c9a227",
    desc: "Calendário natural, tarefas que se organizam sozinhas e foco profundo com pomodoro integrado. A IA entende \"almoço com a Ana amanhã às 12\" e cria tudo pra você.",
    features: ["Calendário em linguagem natural", "Tarefas com IA", "Pomodoro integrado", "Sincronização total"],
    status: "Disponível",
  },
  {
    slug: "apolo",
    name: "Apolo",
    tagline: "Seu segundo cérebro. Conectado, rápido, seu.",
    category: "Notas & Conhecimento",
    icon: "brain",
    color: "#3aa7c2",
    desc: "Notas que se conectam sozinhas, wiki pessoal com IA e busca semântica. Escreva uma ideia, a IA encontra as relacionadas e sugere conexões que você nem imaginava.",
    features: ["Notas com links bidirecionais", "Wiki com IA", "Busca semântica", "Graph de conhecimento"],
    status: "Disponível",
  },
  {
    slug: "hermes",
    name: "Hermes",
    tagline: "Foco profundo. Zero distração. Resultado real.",
    category: "Foco & Tempo",
    icon: "bolt",
    color: "#a24ac2",
    desc: "Bloqueie apps que roubam sua atenção, acompanhe quanto tempo você gasta em cada coisa e entre em modo foco com um toque. A IA aprende seus padrões e protege seu tempo mais produtivo.",
    features: ["Bloqueio de distrações", "Analytics de tempo", "Modo foco com IA", "Relatórios de produtividade"],
    status: "Em breve",
  },
  {
    slug: "hestia",
    name: "Hestia",
    tagline: "Hábitos que ficam. Metas que chegam.",
    category: "Hábitos & Metas",
    icon: "spark",
    color: "#e0703a",
    desc: "Construa hábitos com streaks que motivam, defina metas inteligentes e acompanhe seu progresso com IA que ajusta o plano quando você escorrega — sem julgamento, com incentivo.",
    features: ["Hábitos com streaks", "Metas adaptativas", "Lembretes contextuais", "Insights com IA"],
    status: "Em breve",
  },
];

export const NAV = [
  { label: "Tecnologia", to: "/tecnologia" },
  { label: "Pesquisa", to: "/pesquisa" },
  { label: "Preços", to: "/precos" },
  { label: "Manifesto", to: "/manifesto" },
  { label: "Contato", to: "/contato" },
];

export const FEATURES = [
  {
    icon: "brain",
    title: "Converse com seu dinheiro",
    desc: "Pergunte em linguagem natural e receba respostas na hora. \"Quanto sobra este mês?\" \"Posso comprar um carro?\" O Pluto sabe.",
  },
  {
    icon: "chart",
    title: "Tudo categorizado sozinho",
    desc: "Chega de planilha. A IA entende cada transação, agrupa por categoria e mostra para onde seu dinheiro está indo.",
  },
  {
    icon: "shield",
    title: "Seus dados protegidos",
    desc: "Criptografia de nível bancário, LGPD desde o primeiro pixel. Nunca vendemos seus dados — são seus e ponto.",
  },
  {
    icon: "bolt",
    title: "Sincronização instantânea",
    desc: "Conecte suas contas e veja tudo atualizado em segundos. Sem importar extrato, sem digitar nada, sem perder tempo.",
  },
  {
    icon: "target",
    title: "Metas que você alcança",
    desc: "Defina um objetivo e o Pluto traça o caminho. Projeções realistas, alertas quando você sai da rota, comemoração quando chega.",
  },
  {
    icon: "sync",
    title: "Todos seus bancos num lugar",
    desc: "Nubank, Itaú, XP, BTG — importe os extratos e veja sua vida financeira inteira em uma única tela. Sem senha, sem complicação.",
  },
];

export const USE_CASES = [
  {
    title: "Você autônomo",
    desc: "Separe PJ de PF, projete impostos e mantenha a reserva sem abrir uma planilha.",
    tag: "Autônomos",
  },
  {
    title: "Sua família",
    desc: "Metas compartilhadas, despesas divididas e finanças ensinadas — não impostas — para as crianças.",
    tag: "Famílias",
  },
  {
    title: "Você investidor",
    desc: "Portfólio, rebalanceamento e oportunidades analisados pela IA. Decisões melhores, menos ansiedade.",
    tag: "Investidores",
  },
  {
    title: "Sua empresa",
    desc: "Fluxo de caixa claro, conciliação automática e relatórios prontos pro contador. Foco no negócio.",
    tag: "Pequenas empresas",
  },
];

export const PLANS = [
  {
    name: "Pessoal",
    price: "R$ 0",
    period: "/mês",
    desc: "Para dar o primeiro passo e nunca mais perder o controle.",
    features: [
      "1 usuário",
      "Até 2 contas conectadas",
      "Categorização automática",
      "Painel financeiro completo",
      "20 mensagens ao Pluto por mês",
    ],
    cta: "Começar grátis",
    highlight: false,
  },
  {
    name: "Pro",
    price: "R$ 29,90",
    period: "/mês",
    desc: "Para quem quer a IA trabalhando 100% a seu favor.",
    features: [
      "1 usuário",
      "Contas ilimitadas",
      "Categorização avançada com IA",
      "Metas e projeções inteligentes",
      "Pluto ilimitado",
      "Import de extratos ilimitado",
      "Relatórios mensais",
    ],
    cta: "Assinar Pro",
    highlight: true,
  },
  {
    name: "Família",
    price: "R$ 59,90",
    period: "/mês",
    desc: "Para quem divide finanças com a família.",
    features: [
      "Até 3 usuários",
      "Contas ilimitadas",
      "Metas compartilhadas",
      "Permissões por usuário",
      "Pluto ilimitado",
      "Relatórios para contador",
      "Suporte prioritário",
    ],
    cta: "Assinar Família",
    highlight: false,
  },
];

export const FAQ = [
  {
    q: "O Pluto substitui meu contador?",
    a: "Não — ele facilita a vida dos dois. O Pluto organiza tudo e gera relatórios prontos. Seu contador recebe dados limpos, você perde menos tempo. Decisões tributárias continuam com ele.",
  },
  {
    q: "Meus dados estão seguros?",
    a: "Sim. Criptografia AES-256, TLS 1.3, autenticação multifator e LGPD em cada etapa. Nunca vendemos seus dados — não é nosso modelo de negócio.",
  },
  {
    q: "Funciona com meu banco?",
    a: "Sim. Você importa o extrato de qualquer banco ou corretora brasileira em segundos — CSV, OFX ou PDF. Sem compartilhar senha, sem depender de integração de terceiros.",
  },
  {
    q: "E se eu quiser cancelar?",
    a: "Cancele com um clique, sem fidelidade, sem perguntas. Seus dados ficam disponíveis para exportação por 90 dias. Você nunca fica preso.",
  },
  {
    q: "A IA toma decisões por mim?",
    a: "Nunca. O Pluto recomenda, projeta e alerta — mas a decisão é sempre sua. É um copiloto, não um piloto automático. Você no controle, a IA no trabalho pesado.",
  },
  {
    q: "Preciso saber de finanças pra usar?",
    a: "Não. O Pluto foi feito para quem nunca teve clareza financeira. Você pergunta em português, ele responde em português. Sem jargão, sem complicação.",
  },
];

export const ARTICLES = [
  {
    slug: "ia-financas-pessoais-2026",
    title: "A IA já cuida das suas finanças. Você ainda não?",
    excerpt:
      "Categorização automática, projeções personalizadas e respostas na hora. Veja como a inteligência artificial mudou o jogo das finanças pessoais em 2026.",
    date: "2026-07-28",
    readTime: "6 min",
    category: "Inteligência Artificial",
  },
  {
    slug: "pluto-categorizacao-inteligente",
    title: "Como o Pluto acerta 98% das suas categorias sozinho",
    excerpt:
      "Modelos de linguagem + regras determinísticas. Entenda por que o Pluto categoriza melhor que qualquer humano com planilha.",
    date: "2026-07-15",
    readTime: "8 min",
    category: "Produto",
  },
  {
    slug: "import-extratos-segundo-guia",
    title: "Import de extratos: suas finanças organizadas em segundos",
    excerpt:
      "CSV, OFX ou PDF. Veja como importar o extrato de qualquer banco ou corretora e ter tudo categorizado automaticamente — sem compartilhar senha.",
    date: "2026-06-30",
    readTime: "8 min",
    category: "Educação",
  },
  {
    slug: "metas-financeiras-que-funcionam",
    title: "Por que suas metas financeiras sempre falham (e como mudar)",
    excerpt:
      "Analisamos milhares de usuários do Pluto e descobrimos o que separa quem alcança metas de quem desiste no segundo mês.",
    date: "2026-06-12",
    readTime: "5 min",
    category: "Finanças",
  },
  {
    slug: "seguranca-dados-lgpd",
    title: "Como protegemos cada centavo dos seus dados",
    excerpt:
      "Um olhar técnico — e honesto — sobre criptografia, LGPD e por que nunca vamos vender seus dados financeiros.",
    date: "2026-05-22",
    readTime: "7 min",
    category: "Segurança",
  },
  {
    slug: "produtividade-financas-ia",
    title: "4 horas de planilha viraram 4 minutos com IA",
    excerpt:
      "O tempo que você perde organizando finanças é tempo que você não vive. Veja como a IA devolve suas horas.",
    date: "2026-05-03",
    readTime: "4 min",
    category: "Produtividade",
  },
];

export const STATS = [
  { value: "50 mil+", label: "Pessoas no controle" },
  { value: "R$ 2,4 bi", label: "Organizados pelo Pluto" },
  { value: "98%", label: "Precisão na categorização" },
  { value: "4,9 ★", label: "Nota na App Store" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Pela primeira vez na vida eu sei para onde meu dinheiro vai. E o Pluto me avisa antes de eu fazer uma burrada.",
    name: "Marina Costa",
    role: "Designer autônoma",
  },
  {
    quote:
      "Deletei três planilhas e dois apps. O assistente responde perguntas que eu nem sabia que podia fazer.",
    name: "Rafael Mendes",
    role: "Investidor",
  },
  {
    quote:
      "Economizo 5 horas por mês. A categorização é tão precisa que eu nem confirmo mais — confio.",
    name: "Juliana Prado",
    role: "Sócia, estúdio criativo",
  },
];
