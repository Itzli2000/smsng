import { render, screen } from "@testing-library/react";
import App from "../App";
import { expect, test } from "vitest";

test("renders the Vite logo", () => {
  render(<App />);
  const logo = screen.getByAltText("Vite logo");
  expect(logo).toBeInTheDocument();
});

test("renders the React logo", () => {
  render(<App />);
  const logo = screen.getByAltText("React logo");
  expect(logo).toBeInTheDocument();
});

test("match snapshot", () => {
  const tree = render(<App />);
  expect(tree).toMatchSnapshot();
});
