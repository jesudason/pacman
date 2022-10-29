import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Game from "./Game";
import { VerifyInput, splitPlaceCommand } from "./Functions";

afterEach(() => {
  cleanup();
});

describe("Game board", () => {
  test("has a command history section", () => {
    // const input = "place 0,0,north";
    render(<Game />);
    // render(<Game />);
    const commandElement = screen.getByTestId("command-history");
    expect(commandElement).toBeInTheDocument();
    // expect(VerifyInput(input)).toBe(false);
  });
});

describe("Command verification", () => {
  test("undefined input returns false", () => {
    const input = undefined;
    expect(VerifyInput(input)).toBe(false);
  });

  test("fails lowercase command", () => {
    const input = "place 0,0,north";
    expect(VerifyInput(input)).toBe(false);
    expect(VerifyInput("report")).toBe(false);
  });
  test("REPORT is valid function", () => {
    const input = "REPORT";
    expect(VerifyInput(input)).toBe(true);
  });
  test("LEFT is valid function", () => {
    const input = "LEFT";
    expect(VerifyInput(input)).toBe(true);
  });
  test("RIGHT is valid function", () => {
    const input = "RIGHT";
    expect(VerifyInput(input)).toBe(true);
  });
  test("MOVE is valid function", () => {
    const input = "MOVE";
    expect(VerifyInput(input)).toBe(true);
  });
  test("fails when co-ordinates are outside border constraints", () => {
    const input = "PLACE 10,0,SOUTH";
    expect(VerifyInput(input)).toBe(false);
  });
  test("fails when command is outside border constraints", () => {
    const input = "PLACE 10,0,SOUTH";
    expect(VerifyInput(input)).toBe(false);
  });
  test("fails when direction is left out", () => {
    const input = "PLACE 4,3";
    expect(VerifyInput(input)).toBe(false);
  });
  test("succeeds when co-ordinates are within border constraints and direction is WEST", () => {
    const input = "PLACE 4,3,WEST";
    expect(VerifyInput(input)).toBe(true);
  });
});
