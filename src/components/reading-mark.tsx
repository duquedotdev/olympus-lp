import { MythicSeal } from "./mythic-seal.tsx";

export function ReadingMark({ label, legal = false }: { label: string; legal?: boolean }) {
  return (
    <div className="reading-mark">
      <MythicSeal symbol={legal ? "shield" : "scroll"} />
      <span className="eyebrow">{label}</span>
    </div>
  );
}
