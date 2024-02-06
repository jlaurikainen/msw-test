import { HttpResponse, http } from "msw";
import { setupWorker } from "msw/browser";

export const devServerWorker = setupWorker(
  http.get("/api/test", () => HttpResponse.json({ message: "test" }))
);
