import type { MythicSymbol } from "../data/interior-scenes.ts";
import { DivineEmblem } from "./divine-emblem.tsx";

const paths = {
  temple: "M40 87 120 44l80 43Zm12 8h136M56 150h128M44 162h152M68 101v42m12-42v42m34-42v42m12-42v42m34-42v42m12-42v42M113 71h14",
  laurel: "M120 156c-55-10-73-61-39-100m39 100c55-10 73-61 39-100M82 67c-17-3-23 4-18 20 14-2 20-9 18-20Zm-15 30c-17 4-19 14-7 26 12-8 15-16 7-26Zm10 29c-16 12-14 22 3 27 9-12 8-21-3-27Zm19 20c-8 16-3 25 15 23 2-15-3-23-15-23Zm62-79c17-3 23 4 18 20-14-2-20-9-18-20Zm15 30c17 4 19 14 7 26-12-8-15-16-7-26Zm-10 29c16 12 14 22-3 27-9-12-8-21 3-27Zm-19 20c8 16 3 25-15 23-2-15 3-23 15-23Z",
  scroll: "M77 60h90v76q0 14-14 14H77q-16 0-16-14h76q0 14 16 14M77 60q-16 0-16 16h90q0-16 16-16M77 76v60m18-43h53m-53 14h44m-44 14h53",
  shield: "m120 45 50 18v39c0 31-27 50-50 61-23-11-50-30-50-61V63Zm0 15 36 13v29c0 22-17 37-36 47-19-10-36-25-36-47V73Zm-11 43v-7a11 11 0 0 1 22 0v7m-27 0h32v24h-32Zm16 8v8",
  compass: "m120 42 11 45 47 13-47 13-11 45-11-45-47-13 47-13Zm0 45 13 13-13 13-13-13Zm-45-32 20 20m50 50 20 20m0-90-20 20m-50 50-20 20",
  balance: "M120 48v103m-31 7h62M75 76h90m-90 0-23 46h46Zm90 0-23 46h46ZM52 122q23 29 46 0m44 0q23 29 46 0M120 48l8 8-8 8-8-8Z",
  key: "M107 72a23 23 0 1 1-46 0 23 23 0 0 1 46 0Zm-23-9a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm16 25 66 66 17-17-9-9-9 9-10-10 9-9-9-9-9 9-34-34",
  target: "M120 47a53 53 0 1 0 53 53m-53-32a32 32 0 1 0 32 32m-32-10a10 10 0 1 0 10 10m-10 0 57-57m-23 2 23-2-2 23m-10-10 20-2-2 20",
};

export function MythicSeal({ symbol }: { symbol: MythicSymbol }) {
  if (symbol === "pluto" || symbol === "aion" || symbol === "zeus") return <DivineEmblem domain={symbol} />;
  return (
    <svg className="mythic-seal" viewBox="0 0 240 200" fill="none" aria-hidden="true">
      <circle className="mythic-seal__orbit" cx="120" cy="100" r="86" />
      <circle className="mythic-seal__orbit" cx="120" cy="100" r="76" strokeDasharray="1 7" />
      <path d={paths[symbol]} />
      <path className="mythic-seal__orbit" d="M10 100h18m184 0h18M120 4v10m0 172v10" />
    </svg>
  );
}
