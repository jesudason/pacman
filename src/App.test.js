import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "./App";

afterEach(() => {
  cleanup();
});

test("renders App", () => {
  // const command = { id: 1, input: "PLACE 0,0,NORTH", verified: true };
  render(<App />);
  // const commandElement = screen.getByTestId("command-1");
  // expect(commandElement).toBeInTheDocument();
  // expect(commandElement).toHaveTextContent("PLACE 0,0,NORTH");
  // expect(commandElement).toHaveClass("command-history");
  // expect(commandElement).not.toContainHTML("!error");
});

// test("adds error className to unverifed commands", () => {
//   const command = { id: 6, input: "PLACE 0,0,NOdRTH", verified: false };
//   render(<Command command={command} />);
//   const commandElement = screen.getByTestId("command-6");
//   expect(commandElement).toBeInTheDocument();
//   expect(commandElement).toHaveClass("command-history command-error");
// });

// test("adds error text to unverifed commands", () => {
//   const command = { id: 6, input: "PLACE 0,0,NOdRTH", verified: false };
//   render(<Command command={command} />);
//   const commandElement = screen.getByTestId("command-6");
//   expect(commandElement).toBeInTheDocument();
//   expect(commandElement).toContainHTML("!error");
// });

// test("matches snapshot", () => {
//   const command = { id: 8, input: "MOVE", verified: true };
//   const tree = renderer.create(<Command command={command} />).toJSON();
//   console.log(tree);
// });
