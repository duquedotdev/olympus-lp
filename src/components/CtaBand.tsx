import { useEffect, useState } from "react";
import { joinWaitlist, getStanding, getCount, shareUrl, type Standing } from "../lib/api.ts";
import { useReferral } from "../hooks/useReferral.ts";
import { events } from "../lib/analytics.ts";

export function CtaBand() {
  const { savedCode, rememberCode, getRef } = useReferral();
  const [email, setEmail] = useState("");
  const [standing, setStanding] = useState<Standing | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    if (!savedCode) return;
    getStanding(savedCode)
      .then((s) => {
        if (s) {
          setStanding(s);
          events.waitlistView();
        }
      })
      .catch(() => {});
  }, [savedCode]);

  // Public counter — proof of momentum before the user signs up.
  useEffect(() => {
    getCount().then((n) => {
      if (n > 0) setTotal(n);
    });
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      const ref = getRef();
      const result = await joinWaitlist(email, ref);
      rememberCode(result.code);
      setStanding(result);
      setTotal(result.total);
      events.waitlistJoin(!!ref);
    } catch {
      setError("Não foi possível concluir agora. Tente novamente.");
    } finally {
      setBusy(false);
    }
  };

  const copy = async () => {
    if (!standing) return;
    try {
      await navigator.clipboard.writeText(shareUrl(standing.code));
      setCopied(true);
      events.referralCopy();
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError("Copie o link manualmente.");
    }
  };

  return (
    <section className="access" id="access">
      <div className="access__inner" data-reveal>
        {standing ? (
          <>
            <p className="eyebrow eyebrow--center">Você está no Olimpo</p>
            <h2 className="access__title">
              Posição <span className="access__pos">#{standing.position}</span>
            </h2>
            <p className="access__sub">
              de {standing.total.toLocaleString("pt-BR")} na fila do Pluto.
              Cada amigo que entrar pelo seu link aproxima você do topo.
            </p>

            <div className="share">
              <span className="share__link mono">{shareUrl(standing.code)}</span>
              <button type="button" className="btn btn--solid" onClick={copy}>
                {copied ? "Copiado ✓" : "Copiar link"}
              </button>
            </div>

            <p className="access__done mono">
              ✳ {standing.referrals} INDICAÇÃO{standing.referrals === 1 ? "" : "ÕES"} CONFIRMADA
              {standing.referrals === 1 ? "" : "S"}
            </p>
            {error && <p className="access__error">{error}</p>}
          </>
        ) : (
          <>
            <p className="eyebrow eyebrow--center">Membros fundadores</p>
            <h2 className="access__title">Entre para o Olimpo.</h2>
            <p className="access__sub">
              Os primeiros da lista entram como fundadores, com condições especiais
              no lançamento do Pluto, previsto para janeiro de 2027. Sem spam —
              apenas o convite.
            </p>

            {total !== null && (
              <p className="access__counter mono">
                {total.toLocaleString("pt-BR")} JÁ ESTÃO NA FILA
              </p>
            )}

            <form className="access__form" onSubmit={submit}>
              {/* Honeypot — hidden from users, catches bots. */}
              <input
                type="text"
                name="company_website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
              />
              <input
                type="email"
                className="access__input"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Seu email"
                required
                disabled={busy}
              />
              <button type="submit" className="btn btn--solid" disabled={busy}>
                {busy ? "Enviando…" : "Solicitar convite"}
              </button>
            </form>

            {error && <p className="access__error">{error}</p>}

            <p className="access__consent">
              Ao entrar na lista, você concorda em receber e-mails da Olympkus AI sobre
              o lançamento e pode cancelar quando quiser. Tratamos seus dados conforme a
              LGPD — veja a <a href="#privacidade">Política de Privacidade</a>.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
