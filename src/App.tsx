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

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Header />
      <main>{children}</main>
      <Footer />
      <Analytics />
    </>
  );
}

export default function App() {
  const route = usePathRoute();
  useReveal(route);

  if (route === "privacy") {
    return (
      <>
        <div className="grain" aria-hidden="true" />
        <Privacy />
        <Footer />
        <Analytics />
      </>
    );
  }

  if (route === "terms") {
    return (
      <>
        <div className="grain" aria-hidden="true" />
        <Termos />
        <Footer />
        <Analytics />
      </>
    );
  }

  if (route === "pluto") return <Shell><ProductPage id="pluto" /></Shell>;
  if (route === "cronos") return <Shell><ProductPage id="cronos" /></Shell>;
  if (route === "zeus") return <Shell><ProductPage id="zeus" /></Shell>;
  if (route === "pantheon") return <Shell><Panteao /></Shell>;
  if (route === "about") return <Shell><Sobre /></Shell>;

  if (route === "blog") return <Shell><BlogList /></Shell>;

  if (route.startsWith("blog/")) {
    const slug = route.slice("blog/".length);
    return <Shell><BlogPost slug={slug} /></Shell>;
  }

  if (route === "press") return <Shell><PressList /></Shell>;

  if (route.startsWith("press/")) {
    const slug = route.slice("press/".length);
    return <Shell><PressRelease slug={slug} /></Shell>;
  }

  // Unknown path → custom 404.
  if (route !== "") return <Shell><NotFound /></Shell>;

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
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
