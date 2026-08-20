import { useEffect } from "react";
import { Logo } from "./Logo.tsx";

export function Cookies() {
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
        <p className="eyebrow">COOKIES</p>
        <h1 className="legal__title">Política de Cookies</h1>
        <p className="legal__meta mono">ÚLTIMA ATUALIZAÇÃO · 9 DE AGOSTO DE 2026</p>

        <p className="legal__lead">
          Esta política explica como a Olympkus AI usa cookies e tecnologias
          de armazenamento local quando você visita o nosso site. Tratamos seus
          dados em conformidade com a Lei nº 13.709/2018 (LGPD).
        </p>

        <section className="legal__section">
          <h2>1. O que são cookies</h2>
          <p>
            Cookies são pequenos arquivos de texto que um site salva no seu
            navegador. Eles servem para lembrar informações entre as visitas —
            por exemplo, manter você logado ou guardar preferências. Cookies
            não são programas, não executam código e por si só não identificam
            quem você é, apenas o navegador que você usou.
          </p>
          <p>
            Além dos cookies, existem tecnologias similares como o{" "}
            <em>armazenamento local do navegador</em>, que guarda dados
            diretamente no navegador de forma persistente. Esta política vale
            para ambas as abordagens.
          </p>
        </section>

        <section className="legal__section">
          <h2>2. Cookies que usamos</h2>
          <p>
            <strong>Não usamos cookies de publicidade.</strong> Não há
            rastreamento para anúncios, nem nossos, nem de terceiros.
          </p>
          <p>
            Usamos <em>armazenamento local do navegador</em> para guardar dois
            itens estritamente funcionais: o seu código de indicação e a sua
            posição na fila. Esses dados ficam no seu navegador e servem para
            exibir suas informações quando você retorna ao site — sem precisar
            logar de novo.
          </p>
          <p>
            Usamos ainda <strong>medição de audiência sem cookies</strong>,
            que mede o alcance das páginas de forma agregada e anônima, sem
            criar perfis individuais. Não sabemos quem você é — apenas quantas
            pessoas passaram por aqui.
          </p>
        </section>

        <section className="legal__section">
          <h2>3. Cookies de terceiros</h2>
          <p>
            Não usamos cookies de terceiros para rastreamento. Nenhum pixel de
            rede social, nenhuma ferramenta de anúncios, nenhum rastreamento
            oculto do seu aparelho. Se um dia isso mudar, esta página será
            atualizada antes de qualquer implementação — e você terá a opção de
            recusar.
          </p>
        </section>

        <section className="legal__section">
          <h2>4. Como controlar</h2>
          <p>
            Como não usamos cookies de publicidade, não há banner de
            consentimento para aceitar ou recusar. Mas você pode limpar os
            dados que guardamos no seu navegador a qualquer momento:
          </p>
          <ul>
            <li>
              <strong>Limpar o armazenamento local:</strong> abra as ferramentas
              de desenvolvedor do navegador (geralmente F12), vá na aba
              "Application" ou "Armazenamento", selecione o nosso site em
              "Local Storage" e apague as entradas.
            </li>
            <li>
              <strong>Limpar todos os dados do site:</strong> nas configurações
              do navegador, procure por "Dados de sites" ou "Cookies e dados de
              site", encontre olympkus.ai e remova. Isso apaga cookies,
              armazenamento local e cache de uma vez.
            </li>
            <li>
              <strong>Modo anônimo:</strong> ao navegar em uma janela anônima
              ou privada, o navegador descarta todo o armazenamento local ao
              fechar. Nada persiste entre sessões.
            </li>
          </ul>
          <p>
            Limpar esses dados não afeta sua posição na fila — ela está
            associada ao seu e-mail, não ao seu navegador. Você só precisará
            informar o e-mail novamente para ver sua posição.
          </p>
        </section>

        <section className="legal__section">
          <h2>5. Atualizações</h2>
          <p>
            Esta política pode mudar. Se houver qualquer alteração relevante —
            por exemplo, passarmos a usar um novo tipo de armazenamento ou
            medição de audiência — avisaremos aqui nesta página, com a nova data
            de atualização. Quando aplicável, avisaremos também por e-mail.
          </p>
        </section>

        <p className="legal__foot mono">
          OLYMPKUS AI · PRIVACIDADE@OLYMPKUS.AI
        </p>
      </article>
    </div>
  );
}
