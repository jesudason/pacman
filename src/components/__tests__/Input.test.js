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
});
