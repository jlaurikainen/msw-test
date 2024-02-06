import { render, screen } from "@testing-library/react";
import { HttpResponse, http } from "msw";
import { expect, test } from "vitest";
import { App } from "./App";
import { AppProviders } from "./AppProviders";
import { testServer } from "./mocks/node";

testServer.use(
  http.get("/api/test", () => HttpResponse.json({ message: "test" }))
);

test("renders", () => {
  render(
    <AppProviders>
      <App />
    </AppProviders>
  );

  expect(screen.findByText("test"));
});
