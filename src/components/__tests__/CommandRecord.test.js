import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import CommandRecord from "../CommandRecord";

afterEach(() => {
  cleanup();
});

describe("Command history", () => {
  test("records command history", () => {
    const command = { input: "PLACE 0,0,NORTH", verified: true };
    render(<CommandRecord command={command} id={1} />);
    const commandElement = screen.getByTestId("command-1");
    expect(commandElement).toBeInTheDocument();
    expect(commandElement).toHaveTextContent("PLACE 0,0,NORTH");
    expect(commandElement).toHaveClass("command-history");
    expect(commandElement).not.toContainHTML("!error");
  });

  test("adds error className to unverifed commands", () => {
    const command = { input: "PLACE 0,0,NOdRTH", verified: false };
    render(<CommandRecord command={command} id={6} />);
    const commandElement = screen.getByTestId("command-6");
    expect(commandElement).toBeInTheDocument();
    expect(commandElement).toHaveClass("command-history command-error");
  });

  test("adds error text to unverifed commands", () => {
    const command = { input: "PLACE 0,0,NOdRTH", verified: false };
    render(<CommandRecord command={command} id={6} />);
    const commandElement = screen.getByTestId("command-6");
    expect(commandElement).toBeInTheDocument();
    expect(commandElement).toContainHTML("!error");
  });

  test("matches snapshot", () => {
    const command = { input: "MOVE", verified: true };
    const tree = renderer
      .create(<CommandRecord command={command} id={8} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
