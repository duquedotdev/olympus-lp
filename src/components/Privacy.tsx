import { useEffect } from "react";
import { Logo } from "./Logo.tsx";

export function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal">
      <header className="legal__bar">
        <Logo />
        <a href="/" className="legal__back">← Voltar ao site</a>
      </header>

      <article className="legal__doc">
        <p className="eyebrow">Legal</p>
        <h1 className="legal__title">Política de Privacidade</h1>
        <p className="legal__meta mono">ÚLTIMA ATUALIZAÇÃO · 9 DE AGOSTO DE 2026</p>

        <p className="legal__lead">
          Esta política explica como a Olympkus AI coleta, usa e protege os seus
          dados pessoais quando você entra na lista de espera dos nossos produtos.
          Tratamos seus dados em conformidade com a Lei nº 13.709/2018 (LGPD).
        </p>

        <section className="legal__section">
          <h2>1. Quem é o controlador</h2>
          <p>
            O controlador dos seus dados é a Olympkus AI (<span className="fill">[razão
            social]</span>, inscrita no CNPJ sob o nº <span className="fill">[•]</span>,
            com sede em <span className="fill">[endereço]</span>). Para questões de
            privacidade, fale com o nosso Encarregado (DPO) pelo e-mail{" "}
            <a href="mailto:privacidade@olympkus.ai">privacidade@olympkus.ai</a>.
          </p>
        </section>

        <section className="legal__section">
          <h2>2. Quais dados coletamos</h2>
          <ul>
            <li>
              <strong>E-mail:</strong> o endereço que você informa ao entrar na lista
              de espera.
            </li>
            <li>
              <strong>Dados de indicação:</strong> um código de indicação gerado para
              você e, quando você chega por um convite, a associação ao código de quem
              indicou — para calcular a sua posição na fila.
            </li>
            <li>
              <strong>Dados técnicos:</strong> informações que a nossa infraestrutura de
              hospedagem registra automaticamente para segurança e funcionamento, como
              endereço IP e dados de navegador nos registros de acesso.
            </li>
          </ul>
          <p>
            Não coletamos dados financeiros, documentos ou informações sensíveis nesta
            fase. A lista de espera não exige criação de conta.
          </p>
        </section>

        <section className="legal__section">
          <h2>3. Base legal e finalidades</h2>
          <p>Usamos seus dados para:</p>
          <ul>
            <li>
              enviar comunicações sobre o lançamento e novidades dos produtos, com base
              no seu <strong>consentimento</strong>;
            </li>
            <li>
              gerenciar a lista de espera e o programa de indicação (posição na fila),
              com base no <strong>legítimo interesse</strong> de operar a campanha;
            </li>
            <li>
              garantir a segurança e a integridade do serviço, com base no cumprimento
              de obrigações e no legítimo interesse.
            </li>
          </ul>
        </section>

        <section className="legal__section">
          <h2>4. Cookies e armazenamento local</h2>
          <p>
            Não usamos cookies de publicidade. Guardamos no seu navegador
            (<em>localStorage</em>) dois itens estritamente funcionais: o código de
            quem indicou você e o seu próprio código, para exibir a sua posição na fila
            quando você retorna. Você pode limpá-los apagando os dados do site no
            navegador.
          </p>
          <p>
            Usamos ainda uma ferramenta de <strong>analytics de audiência sem
            cookies</strong>, que mede o alcance das páginas de forma agregada e
            anônima, sem criar perfis individuais.
          </p>
        </section>

        <section className="legal__section">
          <h2>5. Compartilhamento com terceiros</h2>
          <p>
            Não vendemos seus dados. Compartilhamos o mínimo necessário com operadores
            que nos ajudam a prestar o serviço, sob contrato e apenas conforme nossas
            instruções — por exemplo, provedores de hospedagem, de banco de dados e de
            envio de e-mail. Alguns desses provedores podem processar dados fora do
            Brasil; nesses casos, adotamos salvaguardas compatíveis com a LGPD para a
            transferência internacional.
          </p>
        </section>

        <section className="legal__section">
          <h2>6. Por quanto tempo guardamos</h2>
          <p>
            Mantemos seus dados enquanto durar a lista de espera e a relação com você,
            ou até que você solicite a exclusão ou revogue o consentimento. Após isso,
            eliminamos ou anonimizamos os dados, salvo quando a lei exigir retenção.
          </p>
        </section>

        <section className="legal__section">
          <h2>7. Seus direitos</h2>
          <p>Nos termos da LGPD, você pode a qualquer momento:</p>
          <ul>
            <li>confirmar a existência de tratamento e acessar seus dados;</li>
            <li>corrigir dados incompletos, inexatos ou desatualizados;</li>
            <li>solicitar anonimização, bloqueio ou eliminação;</li>
            <li>solicitar a portabilidade dos dados;</li>
            <li>revogar o consentimento e cancelar o recebimento de e-mails;</li>
            <li>opor-se a tratamentos baseados em legítimo interesse.</li>
          </ul>
          <p>
            Para exercer qualquer direito, escreva para{" "}
            <a href="mailto:privacidade@olympkus.ai">privacidade@olympkus.ai</a>. Todo
            e-mail que enviamos também traz um link de cancelamento.
          </p>
        </section>

        <section className="legal__section">
          <h2>8. Segurança</h2>
          <p>
            Adotamos medidas técnicas e organizacionais para proteger seus dados, como
            criptografia em trânsito e controle de acesso. Nenhum sistema é
            absolutamente seguro, mas trabalhamos continuamente para reduzir riscos.
          </p>
        </section>

        <section className="legal__section">
          <h2>9. Crianças e adolescentes</h2>
          <p>
            A lista de espera é destinada a maiores de 18 anos. Não coletamos
            intencionalmente dados de menores; se identificarmos, eliminaremos os dados.
          </p>
        </section>

        <section className="legal__section">
          <h2>10. Alterações desta política</h2>
          <p>
            Podemos atualizar esta política. Quando houver mudança relevante,
            avisaremos por e-mail ou aqui nesta página, com a nova data de atualização.
          </p>
        </section>

        <p className="legal__foot mono">
          OLYMPKUS AI · PRIVACIDADE@OLYMPKUS.AI
        </p>
      </article>
    </div>
  );
}
