import { useEffect } from "react";
import { Logo } from "./Logo.tsx";
import { ReadingMark } from "./reading-mark.tsx";

export function Termos() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="legal">
      <header className="legal__bar">
        <Logo />
        <a href="/" className="legal__back">← Voltar ao site</a>
      </header>

      <article className="legal__doc">
        <ReadingMark label="Confiança · Termos de uso" legal />
        <h1 className="legal__title">Termos de Uso</h1>
        <p className="legal__meta mono">ÚLTIMA ATUALIZAÇÃO · 9 DE AGOSTO DE 2026</p>

        <p className="legal__lead">
          Estes termos regem o uso do site olympkusai.com e da lista de novidades
          dos produtos da Olympkus AI. Ao entrar na lista ou usar qualquer
          funcionalidade do site, você concorda com estes termos.
        </p>

        <section className="legal__section">
          <h2>1. Sobre os produtos</h2>
          <p>
            A Olympkus AI desenvolve uma suíte de agentes de IA (Panteão) composta
            por Pluto, Aion e Zeus. Nenhum produto está em produção no momento.
            Todas as datas de lançamento são <strong>previstas</strong> e podem
            ser alteradas a qualquer tempo, sem aviso prévio.
          </p>
        </section>

        <section className="legal__section">
          <h2>2. Lista de novidades</h2>
          <p>
            Ao entrar na lista de novidades, você fornece seu endereço de e-mail
            voluntariamente. Usamos seu e-mail para: confirmar seu cadastro,
            comunicar novidades sobre o lançamento e exibir sua posição na lista.
          </p>
          <p>
            O programa de indicação é opcional. Cada indicação confirmada sobe
            sua posição na lista. A Olympkus não garante que inscritos terão
            acesso prioritário em caso de lançamento gradual (beta), embora essa
            seja a intenção.
          </p>
        </section>

        <section className="legal__section">
          <h2>3. Acesso antecipado</h2>
          <p>
            Os primeiros inscritos na lista de novidades terão acesso prioritário
            ao lançamento gradual (beta), quando aplicável. Condições específicas
            (preço, acesso, benefícios) serão comunicadas antes do lançamento do
            Pluto. A Olympkus reserva-se o direito de modificar ou revogar essas
            condições a seu critério, com aviso prévio aos inscritos.
          </p>
        </section>

        <section className="legal__section">
          <h2>4. Uso aceitável</h2>
          <p>Você concorda em não:</p>
          <ul>
            <li>usar o site para fins ilegais ou não autorizados;</li>
            <li>tentar acessar sistemas internos, bancos de dados ou infraestrutura da Olympkus;</li>
            <li>automatizar cadastros em massa, usar robôs ou programas automatizados sem autorização;</li>
            <li>se cadastrar com e-mails falsos, descartáveis ou de terceiros sem consentimento.</li>
          </ul>
        </section>

        <section className="legal__section">
          <h2>5. Propriedade intelectual</h2>
          <p>
            Todo o conteúdo do site — textos, imagens, vídeos, logos, identidade
            visual, nomes (Olympkus, Pluto, Aion, Zeus, Panteão) — é propriedade
            da Olympkus AI. Você não pode copiar, reproduzir ou usar esses elementos
            sem autorização expressa.
          </p>
        </section>

        <section className="legal__section">
          <h2>6. Limitação de responsabilidade</h2>
          <p>
            A Olympkus AI é uma empresa em fase de pré-lançamento. Nenhum produto
            está em produção. O site e a lista de novidades são fornecidos "como estão",
            sem garantia de disponibilidade contínua. A Olympkus não se responsabiliza
            por decisões financeiras ou pessoais tomadas com base em conteúdo do site
            antes do lançamento de qualquer produto.
          </p>
        </section>

        <section className="legal__section">
          <h2>7. Alterações destes termos</h2>
          <p>
            Podemos atualizar estes termos a qualquer tempo. Mudanças relevantes
            serão comunicadas por e-mail ou aqui nesta página, com a nova data.
          </p>
        </section>

        <section className="legal__section">
          <h2>8. Contato</h2>
          <p>
            Para questões sobre estes termos, escreva para{" "}
            <a href="mailto:legal@olympkusai.com">legal@olympkusai.com</a>.
          </p>
        </section>

        <p className="legal__foot mono">
          OLYMPKUS AI · LEGAL@OLYMPKUS.AI
        </p>
      </article>
    </div>
  );
}
