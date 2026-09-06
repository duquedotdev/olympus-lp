export type MythicSymbol = "pluto" | "aion" | "zeus" | "temple" | "laurel" | "scroll" | "shield" | "compass" | "balance" | "key" | "target";

type InteriorScene = { chapter: string; inscription: string; caption: string; symbol: MythicSymbol };

export const interiorScenes: Record<string, InteriorScene> = {
  pluto: { chapter: "I · O domínio da riqueza", inscription: "ΠΛΟΥΤΟΣ", caption: "Clareza para o que é seu", symbol: "pluto" },
  aion: { chapter: "II · O domínio do tempo", inscription: "ΑΙΩΝ", caption: "O tempo em seu próprio ritmo", symbol: "aion" },
  zeus: { chapter: "III · O domínio do corpo", inscription: "ΖΕΥΣ", caption: "1% melhor a cada dia", symbol: "zeus" },
  panteao: { chapter: "Olimpo · O Panteão", inscription: "ΟΛΥΜΠΟΣ", caption: "Um domínio para cada força", symbol: "temple" },
  sobre: { chapter: "Origem · Nosso manifesto", inscription: "ΑΡΧΗ", caption: "Toda jornada tem uma origem", symbol: "laurel" },
  funcionalidades: { chapter: "Pluto · Seus instrumentos", inscription: "ΤΕΧΝΗ", caption: "Inteligência a serviço da vida", symbol: "pluto" },
  "finance-agent": { chapter: "Pluto · Agentes", inscription: "ΑΠΟΛΛΩΝ", caption: "Apolo · A luz que revela", symbol: "compass" },
  orcamentos: { chapter: "Pluto · Orçamentos", inscription: "ΜΕΤΡΟΝ", caption: "A medida do equilíbrio", symbol: "balance" },
  dividas: { chapter: "Pluto · Dívidas e parcelamentos", inscription: "ΛΥΣΙΣ", caption: "O caminho para recomeçar", symbol: "key" },
  metas: { chapter: "Pluto · Metas e desejos", inscription: "ΣΚΟΠΟΣ", caption: "Toda conquista começa com intenção", symbol: "target" },
  recorrencias: { chapter: "Pluto · Recorrências", inscription: "ΚΥΚΛΟΣ", caption: "Clareza em cada ciclo", symbol: "aion" },
  seguranca: { chapter: "Confiança · Segurança", inscription: "ΑΙΓΙΣ", caption: "A égide · Símbolo de proteção", symbol: "shield" },
  comparativo: { chapter: "Perspectiva · Comparativo", inscription: "ΚΡΙΣΙΣ", caption: "Escolher é conhecer as diferenças", symbol: "balance" },
  precos: { chapter: "Acesso · Planos", inscription: "ΑΡΧΗ", caption: "Um convite à autonomia", symbol: "key" },
  ajuda: { chapter: "O oráculo · Central de ajuda", inscription: "ΛΟΓΟΣ", caption: "Conhecimento que orienta", symbol: "scroll" },
  contato: { chapter: "Conexões · Contato", inscription: "ΕΡΜΗΣ", caption: "Hermes · Caminhos que se encontram", symbol: "compass" },
  blog: { chapter: "Crônicas · O pensamento por trás", inscription: "ΛΟΓΟΣ", caption: "Ideias que merecem permanecer", symbol: "scroll" },
  press: { chapter: "Registros · Sala de imprensa", inscription: "ΚΗΡΥΞ", caption: "A voz do Panteão", symbol: "laurel" },
  notfound: { chapter: "404 · Fora dos mapas", inscription: "ΟΔΟΣ", caption: "Há sempre um caminho de volta", symbol: "compass" },
};

export function getInteriorRealm(route: string) {
  if (route === "aion" || route === "zeus") return route;
  if (route === "pluto" || route.startsWith("features") || route === "pricing" || route === "comparison") return "pluto";
  if (["security", "privacy", "terms", "cookies"].includes(route)) return "sanctuary";
  if (route.startsWith("blog") || route.startsWith("press")) return "archive";
  return "olympus";
}
