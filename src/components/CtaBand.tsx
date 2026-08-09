import { useState } from "react";

export function CtaBand() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setDone(true);
  };

  return (
    <section className="access" id="access">
      <div className="access__inner" data-reveal>
        <p className="eyebrow eyebrow--center">Acesso antecipado</p>
        <h2 className="access__title">Entre para o Olimpo.</h2>
        <p className="access__sub">
          Vagas limitadas para o lançamento do Pluto, previsto para janeiro de 2027.
          Sem spam — apenas o convite.
        </p>

        {done ? (
          <p className="access__done mono">
            ✳ CONVITE RESERVADO — VOCÊ ESTÁ NA LISTA.
          </p>
        ) : (
          <form className="access__form" onSubmit={submit}>
            <input
              type="email"
              className="access__input"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Seu email"
              required
            />
            <button type="submit" className="btn btn--solid">Solicitar convite</button>
          </form>
        )}

        {!done && (
          <p className="access__consent">
            Ao entrar na lista, você concorda em receber e-mails da Olympkus AI sobre
            o lançamento e pode cancelar quando quiser. Tratamos seus dados conforme a
            LGPD — veja a <a href="#privacidade">Política de Privacidade</a>.
          </p>
        )}
      </div>
    </section>
  );
}
