import { useEffect } from "react";
import { CtaBand } from "./CtaBand.tsx";

type FaqCategory = {
  label: string;
  title: string;
  items: { q: string; a: string }[];
};

const categories: FaqCategory[] = [
  {
    label: "Conta e login",
    title: "Conta e login",
    items: [
      {
        q: "Como ativo a autenticação de dois fatores?",
        a: "O 2FA é obrigatório em toda conta do Pluto. Na primeira vez que você entra, o app te guia pela configuração — geralmente via app autenticador no seu celular.",
      },
      {
        q: "Posso entrar com Google?",
        a: "Sim. O Pluto usa login com Google. Você não precisa criar uma senha nova.",
      },
    ],
  },
  {
    label: "Importação de extratos",
    title: "Importação de extratos",
    items: [
      {
        q: "O Pluto sincroniza com meu banco automaticamente?",
        a: "Não. Hoje o Pluto importa extratos bancários em CSV e OFX — formatos suportados por todos os bancos brasileiros. A integração direta via Open Finance está no roadmap. Esta é uma escolha deliberada de segurança: nunca pedimos nem armazenamos suas credenciais bancárias.",
      },
      {
        q: "Como importo meu extrato?",
        a: "Exporte o extrato do seu banco em formato CSV ou OFX. No Pluto, vá em Importar, selecione o arquivo, e o Pluto lê, categoriza e importa tudo automaticamente.",
      },
      {
        q: "Quais bancos funcionam?",
        a: "Todos os bancos brasileiros que permitem exportar extratos em CSV ou OFX — que é praticamente todos.",
      },
    ],
  },
  {
    label: "Assinatura e cobrança",
    title: "Assinatura e cobrança",
    items: [
      {
        q: "É grátis?",
        a: "Durante o beta, sim. Após o lançamento, há planos Free, Pro (R$29/mês) e Premium (R$49/mês). Veja /precos para detalhes.",
      },
      {
        q: "Como cancelo?",
        a: "Cancele a qualquer momento nas configurações. Sem fidelidade, sem multa.",
      },
    ],
  },
  {
    label: "Privacidade e dados",
    title: "Privacidade e dados",
    items: [
      {
        q: "Meus dados estão seguros?",
        a: "Sim. Dados sensíveis ficam protegidos com a criptografia do próprio sistema. Seus dados de acesso nunca ficam salvos no aparelho. Tudo sempre criptografado. Veja /seguranca para detalhes.",
      },
      {
        q: "Vocês vendem meus dados?",
        a: "Não. Nunca. A receita vem da assinatura, não da sua informação.",
      },
    ],
  },
  {
    label: "Problemas técnicos",
    title: "Problemas técnicos",
    items: [
      {
        q: "O Pluto funciona offline?",
        a: "Sim. O app funciona sem internet — suas ações vão para uma fila local e sincronizam quando a conexão volta.",
      },
      {
        q: "Quais idiomas?",
        a: "Português, inglês, espanhol, francês e chinês. O app inteiro traduzido.",
      },
    ],
  },
];

export function Ajuda() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <section className="page-hero" id="ajuda">
        <div className="page-hero__inner">
          <a href="/" className="blog-back">← Voltar</a>
          <p className="eyebrow"><span className="eyebrow__dot" />AJUDA</p>
          <h1 className="page-hero__title">Perguntas frequentes e suporte.</h1>
          <p className="page-hero__lede">
            Tudo o que você precisa saber sobre o Pluto — da importação de
            extratos à privacidade dos seus dados.
          </p>
        </div>
      </section>

      {categories.map((cat, ci) => (
        <section className="product-faq" key={ci}>
          <div className="section-head">
            <p className="eyebrow" data-reveal>{cat.label}</p>
            <h2 className="section-title" data-reveal>{cat.title}</h2>
          </div>
          <div className="faq__list">
            {cat.items.map((item, i) => (
              <details className="faq__item" key={i} data-reveal>
                <summary className="faq__q">
                  <span>{item.q}</span>
                  <span className="faq__icon" aria-hidden="true">+</span>
                </summary>
                <p className="faq__a">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      ))}

      <section className="prose">
        <div className="prose__inner">
          <h2>Não encontrou sua resposta?</h2>
          <p>
            Escreva para <a href="mailto:[A PREENCHER — email de suporte]">[A PREENCHER — email de suporte]</a>{" "}
            e a gente responde o quanto antes.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
