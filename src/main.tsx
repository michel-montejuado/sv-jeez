import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "@/App.tsx";

import "@/l10n/index.ts"

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
