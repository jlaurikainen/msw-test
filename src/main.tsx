import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { AppProviders } from "./AppProviders.tsx";

async function enableMocking() {
  if (import.meta.env.MODE !== "development") return;

  const { devServerWorker } = await import("./mocks/browser");

  return devServerWorker.start();
}

enableMocking().then(() =>
  createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <AppProviders>
        <App />
      </AppProviders>
    </React.StrictMode>
  )
);
