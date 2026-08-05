import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Pluto } from "./pages/Pluto";
import { Artemis } from "./pages/Artemis";
import { Apolo } from "./pages/Apolo";
import { Hermes } from "./pages/Hermes";
import { Hestia } from "./pages/Hestia";
import { Pricing } from "./pages/Pricing";
import { Tecnologia } from "./pages/Tecnologia";
import { Pesquisa } from "./pages/Pesquisa";
import { Manifesto } from "./pages/Manifesto";
import { Resources } from "./pages/Resources";
import { Article } from "./pages/Article";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/pluto", element: <Pluto /> },
      { path: "/artemis", element: <Artemis /> },
      { path: "/apolo", element: <Apolo /> },
      { path: "/hermes", element: <Hermes /> },
      { path: "/hestia", element: <Hestia /> },
      { path: "/tecnologia", element: <Tecnologia /> },
      { path: "/pesquisa", element: <Pesquisa /> },
      { path: "/precos", element: <Pricing /> },
      { path: "/manifesto", element: <Manifesto /> },
      { path: "/recursos", element: <Resources /> },
      { path: "/recursos/:slug", element: <Article /> },
      { path: "/contato", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
