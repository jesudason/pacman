import { render, screen, cleanup } from "@testing-library/react";
import Command from "./App";

test("renders learn react link", () => {
  render(<Command />);
  const commandElement = screen.getByTestId("command");
  expect(commandElement).toBeInTheDocument();
  expect(commandElement).toHaveTextContent("Command History");
});
