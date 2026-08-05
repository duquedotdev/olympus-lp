import { useState } from "react";
import { Seo } from "../components/Seo";
import { Icon } from "../components/Icon";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Seo
        path="/contato"
        title="Contato"
        description="Fale com a Olympkus AI. Suporte, vendas, parcerias e imprensa. Respondemos em até 1 dia útil — pessoa pra pessoa, não bot."
      />

      <section className="page-hero">
        <div className="container page-hero-inner">
          <span className="badge">Contato</span>
          <h1>Fala com a gente</h1>
          <p className="section-lead">
            Suporte, vendas, parcerias ou imprensa. Escolhe o canal certo e fala
            com a pessoa certa. Respondemos em até 1 dia útil — pessoa pra
            pessoa, não bot.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          {/* Channels */}
          <div className="contact-channels">
            <div className="contact-channel card">
              <div className="feature-icon"><Icon name="spark" size={22} /></div>
              <h3>Suporte</h3>
              <p>Algum problema com o Pluto? Tô aqui pra ajudar.</p>
              <a href="mailto:suporte@olympkus.ai">suporte@olympkus.ai</a>
            </div>
            <div className="contact-channel card">
              <div className="feature-icon"><Icon name="rocket" size={22} /></div>
              <h3>Vendas</h3>
              <p>Plano Família & Negócios ou integrações sob medida.</p>
              <a href="mailto:vendas@olympkus.ai">vendas@olympkus.ai</a>
            </div>
            <div className="contact-channel card">
              <div className="feature-icon"><Icon name="sync" size={22} /></div>
              <h3>Parcerias</h3>
              <p>Co-marketing, integrações e parcerias estratégicas.</p>
              <a href="mailto:parcerias@olympkus.ai">parcerias@olympkus.ai</a>
            </div>
            <div className="contact-channel card">
              <div className="feature-icon"><Icon name="shield" size={22} /></div>
              <h3>Imprensa & LGPD</h3>
              <p>Assessoria, dados pessoais e privacidade.</p>
              <a href="mailto:imprensa@olympkus.ai">imprensa@olympkus.ai</a>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap card">
            {sent ? (
              <div className="contact-success">
                <div className="feature-icon"><Icon name="check" size={28} /></div>
                <h3>Recebido!</h3>
                <p>Valeu pelo contato. A gente responde em até 1 dia útil — pessoa pra pessoa.</p>
                <button className="btn btn-ghost" onClick={() => setSent(false)}>
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={onSubmit}>
                <h3>Manda um recado</h3>
                <div className="form-row">
                  <label>
                    <span>Nome</span>
                    <input required type="text" name="name" placeholder="Seu nome" />
                  </label>
                  <label>
                    <span>Email</span>
                    <input required type="email" name="email" placeholder="voce@email.com" />
                  </label>
                </div>
                <label>
                  <span>Assunto</span>
                  <select name="subject" required defaultValue="">
                    <option value="" disabled>Selecione...</option>
                    <option>Suporte</option>
                    <option>Vendas</option>
                    <option>Parcerias</option>
                    <option>Imprensa</option>
                    <option>Outro</option>
                  </select>
                </label>
                <label>
                  <span>Mensagem</span>
                  <textarea required name="message" rows={5} placeholder="Como podemos ajudar?" />
                </label>
                <button type="submit" className="btn btn-primary btn-lg">
                  Enviar recado
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
