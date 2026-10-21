import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "../../src/App";
test("renders the project heading", () => {
  render(<App />);
  expect(screen.getByRole("heading", {name: "__PROJECT_NAME__"})).toBeInTheDocument();
});
