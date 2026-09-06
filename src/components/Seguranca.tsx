import { useEffect } from "react";
import { CtaBand } from "./CtaBand.tsx";
import { InteriorHero } from "./interior-hero.tsx";

export function Seguranca() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <InteriorHero id="seguranca">
        <div className="page-hero__inner">
          <a href="/" className="blog-back">← Voltar</a>
          <h1 className="page-hero__title">Seus dados financeiros, protegidos por padrão.</h1>
          <p className="page-hero__lede">
            Um app financeiro vive ou morre de confiança. Esta página é onde o
            cético e a imprensa procuram antes de confiar seus dados ao Pluto.
            Sem marketing, sem promessa vazia — só o que realmente fazemos.
          </p>
        </div>
      </InteriorHero>

      <section className="prose">
        <div className="prose__inner">
          <h2>Autenticação de dois fatores (2FA) obrigatória</h2>
          <p>
            Toda conta do Pluto exige verificação em dois passos. Mesmo que
            alguém descubra sua senha, não entra sem o segundo fator —
            geralmente seu celular. Não é opcional, não é um recurso premium:
            é a porta de entrada. Se a senha vaza num vazamento de outro site,
            sua conta no Pluto continua intacta.
          </p>

          <h2>Onde seus dados ficam</h2>
          <p>
            No celular, os dados sensíveis ficam protegidos com a criptografia
            do próprio sistema. Seus dados de acesso nunca ficam salvos no
            aparelho. No servidor, tudo fica sempre criptografado — durante o
            envio e depois de guardado. Nada fica solto, nada fica em texto
            puro.
          </p>

          <h2>Login com Google</h2>
          <p>
            Você entra com login do Google, sem precisar criar uma senha nova.
            Nunca pedimos nem armazenamos sua senha do banco — você importa
            extratos em CSV/OFX. A Olympkus não tem acesso às suas credenciais
            bancárias em nenhum momento. Você é quem decide o que entra e o que
            não entra.
          </p>

          <h2>Tela de auditoria</h2>
          <p>
            Cada ação tomada no app é registrada. Você vê o histórico completo
            de tudo que aconteceu — transparência total. Nada acontece
            silenciosamente nas costas do usuário. Se a IA sugeriu algo, se você
            aprovou, se uma transação foi editada: está tudo lá, com data e hora.
          </p>

          <h2>Política de dados</h2>
          <p>
            <strong>O que coletamos:</strong> nome, e-mail, transações financeiras
            que você cadastra ou importa, categorias, orçamentos, metas, dívidas,
            recorrências e conversas com o assistente de IA. Também coletamos dados
            de uso anônimos (quais telas você abre, quanto tempo usa o app) para
            melhorar o produto.
          </p>
          <p>
            <strong>Para que serve:</strong> exclusivamente para fazer o Pluto
            funcionar para você. Categorizar transações, gerar insights, responder
            perguntas no assistente, sincronizar entre dispositivos. Nada além disso.
          </p>
          <p>
            <strong>Por quanto tempo:</strong> enquanto sua conta estiver ativa.
            Se você excluir a conta, seus dados são removidos em até 30 dias. O
            histórico de conversas com a IA fica disponível enquanto você mantiver
            a conta — você pode apagar conversas individuais a qualquer momento.
          </p>
          <p>
            <strong>Vendemos seus dados?</strong> Não. Nunca. A receita da Olympkus
            vem da assinatura, não da sua informação. Seus dados não são
            compartilhados, vendidos, alugados ou trocados com terceiros. Ponto.
          </p>
          <p>
            <strong>Onde ficam:</strong> em servidores com criptografia em trânsito
            (TLS) e em repouso. O acesso é restrito — só eu, fundador, tenho acesso
            à infraestrutura, e mesmo assim não acesso ao conteúdo das suas
            transações sem motivo técnico justificado.
          </p>
          <p>
            <strong>Seus direitos (LGPD):</strong> você pode solicitar acesso,
            correção, portabilidade ou exclusão dos seus dados a qualquer momento
            escrevendo para{" "}
            <a href="mailto:privacy@olympkusai.com">privacy@olympkusai.com</a>.
          </p>

          <h2>Certificações</h2>
          <p>
            Estamos em processo de avaliação de certificações. Não inventamos
            selos que não temos. Quando conquistarmos uma certificação real,
            ela aparece aqui — com o documento e a data. Até lá, preferimos a
            honestidade a um badge decorativo.
          </p>

          <p>
            <a href="/privacy">Veja a Política de Privacidade completa.</a>
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
