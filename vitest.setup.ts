import "@testing-library/jest-dom";
import matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { afterAll, afterEach, beforeAll, expect } from "vitest";
import { testServer } from "./src/mocks/node";

expect.extend(matchers);

beforeAll(() => testServer.listen());
afterEach(() => {
  cleanup();
  testServer.resetHandlers();
});
afterAll(() => testServer.close());
