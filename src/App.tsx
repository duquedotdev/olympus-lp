import { useEffect } from "react";
import { Header } from "./components/Header.tsx";
import { Hero } from "./components/Hero.tsx";
import { Manifesto } from "./components/Manifesto.tsx";
import { WhyPantheon } from "./components/WhyPantheon.tsx";
import { Pantheon } from "./components/Pantheon.tsx";
import { Method } from "./components/Method.tsx";
import { Faq } from "./components/Faq.tsx";
import { CtaBand } from "./components/CtaBand.tsx";
import { Footer } from "./components/Footer.tsx";
import { Privacy } from "./components/Privacy.tsx";
import { Termos } from "./components/Termos.tsx";
import { BlogList } from "./components/BlogList.tsx";
import { BlogPost } from "./components/BlogPost.tsx";
import { PressList } from "./components/PressList.tsx";
import { PressRelease } from "./components/PressRelease.tsx";
import { ProductPage } from "./components/ProductPage.tsx";
import { Panteao } from "./components/Panteao.tsx";
import { Sobre } from "./components/Sobre.tsx";
import { Analytics } from "@vercel/analytics/react";
import { useReveal } from "./hooks/useReveal.ts";
import { usePathRoute } from "./hooks/usePathRoute.ts";
import { NotFound } from "./components/NotFound.tsx";
import { Funcionalidades } from "./components/Funcionalidades.tsx";
import { FuncionalidadeIA } from "./components/FuncionalidadeIA.tsx";
import { FuncionalidadeOrcamentos } from "./components/FuncionalidadeOrcamentos.tsx";
import { FuncionalidadeDividas } from "./components/FuncionalidadeDividas.tsx";
import { FuncionalidadeMetas } from "./components/FuncionalidadeMetas.tsx";
import { FuncionalidadeRecorrencias } from "./components/FuncionalidadeRecorrencias.tsx";
import { Seguranca } from "./components/Seguranca.tsx";
import { Comparativo } from "./components/Comparativo.tsx";
import { Cookies } from "./components/Cookies.tsx";
import { Precos } from "./components/Precos.tsx";
import { Ajuda } from "./components/Ajuda.tsx";
import { Contato } from "./components/Contato.tsx";
import { getInteriorRealm } from "./data/interior-scenes.ts";

function Shell({ children, route, legal = false }: { children: React.ReactNode; route: string; legal?: boolean }) {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      {!legal && <Header />}
      <main className={`olympus-page${legal ? " olympus-page--legal" : ""}`} data-realm={getInteriorRealm(route)} key={route}>{children}</main>
      <Footer />
      <Analytics />
    </>
  );
}

export default function App() {
  const route = usePathRoute();
  useReveal(route);
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [route]);

  if (route === "privacy") return <Shell route={route} legal><Privacy /></Shell>;
  if (route === "terms") return <Shell route={route} legal><Termos /></Shell>;
  if (route === "cookies") return <Shell route={route} legal><Cookies /></Shell>;

  if (route === "pluto") return <Shell route={route}><ProductPage id="pluto" /></Shell>;
  if (route === "aion") return <Shell route={route}><ProductPage id="aion" /></Shell>;
  if (route === "zeus") return <Shell route={route}><ProductPage id="zeus" /></Shell>;
  if (route === "pantheon") return <Shell route={route}><Panteao /></Shell>;
  if (route === "about") return <Shell route={route}><Sobre /></Shell>;
  if (route === "features") return <Shell route={route}><Funcionalidades /></Shell>;
  if (route === "features/ai-metis") return <Shell route={route}><FuncionalidadeIA /></Shell>;
  if (route === "features/budgets") return <Shell route={route}><FuncionalidadeOrcamentos /></Shell>;
  if (route === "features/debts-installments") return <Shell route={route}><FuncionalidadeDividas /></Shell>;
  if (route === "features/goals") return <Shell route={route}><FuncionalidadeMetas /></Shell>;
  if (route === "features/recurring") return <Shell route={route}><FuncionalidadeRecorrencias /></Shell>;
  if (route === "security") return <Shell route={route}><Seguranca /></Shell>;
  if (route === "comparison") return <Shell route={route}><Comparativo /></Shell>;
  if (route === "pricing") return <Shell route={route}><Precos /></Shell>;
  if (route === "help") return <Shell route={route}><Ajuda /></Shell>;
  if (route === "contact") return <Shell route={route}><Contato /></Shell>;

  if (route === "blog") return <Shell route={route}><BlogList /></Shell>;

  if (route.startsWith("blog/")) {
    const slug = route.slice("blog/".length);
    return <Shell route={route}><BlogPost slug={slug} /></Shell>;
  }

  if (route === "press") return <Shell route={route}><PressList /></Shell>;

  if (route.startsWith("press/")) {
    const slug = route.slice("press/".length);
    return <Shell route={route}><PressRelease slug={slug} /></Shell>;
  }

  // Unknown path → custom 404.
  if (route !== "") return <Shell route={route}><NotFound /></Shell>;

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Header />
      <main className="olympus-home" id="main-content">
        <Hero />
        <nav className="domain-index" aria-label="Os três domínios do Panteão">
          <a href="#pluto"><span className="domain-index__number">I</span><span>Pluto<small>Riqueza</small></span><span aria-hidden="true">↗</span></a>
          <a href="#aion"><span className="domain-index__number">II</span><span>Aion<small>Tempo</small></span><span aria-hidden="true">↗</span></a>
          <a href="#zeus"><span className="domain-index__number">III</span><span>Zeus<small>Vontade</small></span><span aria-hidden="true">↗</span></a>
        </nav>
        <Manifesto />
        <WhyPantheon />
        <Pantheon />
        <Method />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}
