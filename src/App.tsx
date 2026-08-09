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
import { Analytics } from "@vercel/analytics/react";
import { useReveal } from "./hooks/useReveal.ts";
import { useHashRoute } from "./hooks/useHashRoute.ts";

export default function App() {
  const route = useHashRoute();
  useReveal(route);

  if (route === "privacidade") {
    return (
      <>
        <div className="grain" aria-hidden="true" />
        <Privacy />
        <Footer />
        <Analytics />
      </>
    );
  }

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
