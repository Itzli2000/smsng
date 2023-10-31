import { render, screen } from "@testing-library/react";
import App from "../App";
import { expect, test } from "vitest";

test("renders the React logo", () => {
  render(<App />);
  const isAuthenticated = screen.getByText(/isAuthenticated:/i);
  const user = screen.getByText(/user:/i);
  
  expect(isAuthenticated).toBeInTheDocument();
  expect(user).toBeInTheDocument();
});

test("match snapshot", () => {
  const tree = render(<App />);
  expect(tree).toMatchSnapshot();
});
