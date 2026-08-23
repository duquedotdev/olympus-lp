import { useEffect } from "react";
import { CtaBand } from "./CtaBand.tsx";

export function Seguranca() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="page-hero" id="seguranca">
        <div className="page-hero__inner">
          <a href="/" className="blog-back">← Voltar</a>
          <h1 className="page-hero__title">Seus dados financeiros, protegidos por padrão.</h1>
          <p className="page-hero__lede">
            Um app financeiro vive ou morre de confiança. Esta página é onde o
            cético e a imprensa procuram antes de confiar seus dados ao Pluto.
            Sem marketing, sem promessa vazia — só o que realmente fazemos.
          </p>
        </div>
      </section>

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
            <span className="fill">[A PREENCHER pela Olympkus/jurídico]</span> —
            o que é coletado, por quanto tempo, se é vendido a terceiros (a
            resposta deve ser <em>não</em>). Esta seção será preenchida com a
            descrição exata de quais dados o Pluto coleta, a finalidade de cada
            um, o prazo de retenção e a confirmação de que nenhum dado é
            comercializado.
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
