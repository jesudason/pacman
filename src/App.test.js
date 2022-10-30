import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "./App";

afterEach(() => {
  cleanup();
});

test("renders App", () => {
  render(<App />);
});
