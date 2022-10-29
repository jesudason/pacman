import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "../Input";

afterEach(() => {
  cleanup();
});

describe("Command input", () => {
  test("runs handle input function", () => {
    const handleInput = jest.fn();
    render(<Input handleInput={handleInput} />);
    userEvent.click(screen.getByTestId("submit"));
    expect(handleInput).toHaveBeenCalled();
  });

  //   test("adds error className to unverifed commands", () => {
  //     const command = { input: "PLACE 0,0,NOdRTH", verified: false };
  //     render(<Command command={command} id={6} />);
  //     const commandElement = screen.getByTestId("command-6");
  //     expect(commandElement).toBeInTheDocument();
  //     expect(commandElement).toHaveClass("command-history command-error");
  //   });

  //   test("adds error text to unverifed commands", () => {
  //     const command = { input: "PLACE 0,0,NOdRTH", verified: false };
  //     render(<Command command={command} id={6} />);
  //     const commandElement = screen.getByTestId("command-6");
  //     expect(commandElement).toBeInTheDocument();
  //     expect(commandElement).toContainHTML("!error");
  //   });

  //   test("matches snapshot", () => {
  //     const command = { input: "MOVE", verified: true };
  //     const tree = renderer.create(<Command command={command} id={8} />).toJSON();
  //     expect(tree).toMatchSnapshot();
  //   });
});
