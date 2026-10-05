import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { Introduction } from "./components/Introduction";
import { SocialMedias } from "./components/SocialMedias";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Introduction />
    <SocialMedias />
  </StrictMode>,
);
