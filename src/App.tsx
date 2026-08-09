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
import { BlogList } from "./components/BlogList.tsx";
import { BlogPost } from "./components/BlogPost.tsx";
import { PressList } from "./components/PressList.tsx";
import { PressRelease } from "./components/PressRelease.tsx";
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

  if (route === "blog") {
    return (
      <>
        <div className="grain" aria-hidden="true" />
        <Header />
        <main>
          <BlogList />
        </main>
        <Footer />
        <Analytics />
      </>
    );
  }

  if (route.startsWith("blog/")) {
    const slug = route.slice("blog/".length);
    return (
      <>
        <div className="grain" aria-hidden="true" />
        <Header />
        <main>
          <BlogPost slug={slug} />
        </main>
        <Footer />
        <Analytics />
      </>
    );
  }

  if (route === "imprensa") {
    return (
      <>
        <div className="grain" aria-hidden="true" />
        <Header />
        <main>
          <PressList />
        </main>
        <Footer />
        <Analytics />
      </>
    );
  }

  if (route.startsWith("imprensa/")) {
    const slug = route.slice("imprensa/".length);
    return (
      <>
        <div className="grain" aria-hidden="true" />
        <Header />
        <main>
          <PressRelease slug={slug} />
        </main>
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
