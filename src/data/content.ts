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
];

export const deities: Deity[] = [
  {
    id: "pluto",
    name: "Pluto",
    domain: "Riqueza",
    glyph: "I",
    tagline: "Finanças pessoais agênticas.",
    description:
      "Pluto lê suas contas, antecipa faturas e prepara pagamentos e transferências para a sua aprovação — sempre dentro dos limites que você define. Você aprova a intenção; ele cuida do resto.",
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
    tagline: "Gestão de tempo agêntica.",
    description:
      "Calendário, tarefas e projetos num só agente. Cronos negocia horários, reorganiza a semana e protege o que importa. O fim do trabalho de organizar o trabalho.",
    platforms: "iOS · Android · macOS · Windows · Linux",
    status: "arriving",
    statusLabel: "PREVISTO",
    eta: "JUL 2027",
  },
  {
    id: "zeus",
    name: "Zeus",
    domain: "Vontade",
    glyph: "III",
    tagline: "O agente que rege os outros.",
    description:
      "Zeus orquestra a sua vida inteira: delega ao Pluto, ao Cronos e ao mundo lá fora. Um único comando, executado através de tudo. Recém-anunciado.",
    platforms: "A definir",
    status: "announced",
    statusLabel: "ANUNCIADO",
    eta: "EM BREVE",
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
