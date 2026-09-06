import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/sections.css";
import "./styles/legal.css";
import "./styles/blog.css";
import "./styles/pages.css";
import "./styles/olympus.css";
import "./styles/olympus-scene.css";
import "./styles/interior-scene.css";
import "./styles/interior-content.css";
import "./styles/interior-reading.css";
import App from "./App.tsx";
import { setupLinkInterceptor } from "./lib/router.ts";

setupLinkInterceptor();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
