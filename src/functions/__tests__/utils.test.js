import { render, screen, cleanup } from "@testing-library/react";
import Game from "../../Game";
import { VerifyInput } from "../utils";

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
    const state = {
      placement: {
        position: { x: null, y: null },
        direction: null,
      },
      commandHistory: [],
      placed: false,
    };
    expect(VerifyInput(input, state)).toBe(false);
  });

  test("fails lowercase command", () => {
    const input = "place 0,0,north";
    const state = {
      placement: {
        position: { x: null, y: null },
        direction: null,
      },
      commandHistory: [],
      placed: false,
    };
    expect(VerifyInput(input, state)).toBe(false);
    expect(VerifyInput("report")).toBe(false);
  });
  test("REPORT is valid function", () => {
    const input = "REPORT";
    const state = {
      placement: {
        position: { x: null, y: null },
        direction: null,
      },
      commandHistory: [],
      placed: false,
    };
    expect(VerifyInput(input, state)).toBe(true);
  });
  test("LEFT is valid function", () => {
    const input = "LEFT";
    const state = {
      placement: {
        position: { x: null, y: null },
        direction: null,
      },
      commandHistory: [],
      placed: false,
    };
    expect(VerifyInput(input, state)).toBe(true);
  });
  test("RIGHT is valid function", () => {
    const input = "RIGHT";
    const state = {
      placement: {
        position: { x: null, y: null },
        direction: null,
      },
      commandHistory: [],
      placed: false,
    };
    expect(VerifyInput(input, state)).toBe(true);
  });
  test("fails when co-ordinates are outside border constraints", () => {
    const input = "PLACE 10,0,SOUTH";
    const state = {
      placement: {
        position: { x: null, y: null },
        direction: null,
      },
      commandHistory: [],
      placed: false,
    };
    expect(VerifyInput(input, state)).toBe(false);
  });
  test("fails when command is outside border constraints", () => {
    const input = "PLACE 10,0,SOUTH";
    const state = {
      placement: {
        position: { x: null, y: null },
        direction: null,
      },
      commandHistory: [],
      placed: false,
    };
    expect(VerifyInput(input, state)).toBe(false);
  });
  test("fails when direction is left out", () => {
    const input = "PLACE 4,3";
    const state = {
      placement: {
        position: { x: null, y: null },
        direction: null,
      },
      commandHistory: [],
      placed: false,
    };
    expect(VerifyInput(input, state)).toBe(false);
  });
  test("succeeds when co-ordinates are within border constraints and direction is WEST", () => {
    const input = "PLACE 4,3,WEST";
    const state = {
      placement: {
        position: { x: null, y: null },
        direction: null,
      },
      commandHistory: [],
      placed: false,
    };
    expect(VerifyInput(input, state)).toBe(true);
  });
  test("fails if wrong object types are received", () => {
    const input = "PLACE '2','1',EAST";
    const state = {
      placement: {
        position: { x: null, y: null },
        direction: null,
      },
      commandHistory: [],
      placed: false,
    };
    expect(VerifyInput(input, state)).toBe(false);
  });
  test("MOVE is invalid if pacman is not placed", () => {
    const input = "MOVE";
    const state = {
      placement: {
        position: { x: null, y: null },
        direction: null,
      },
      commandHistory: [],
      placed: false,
    };
    expect(VerifyInput(input, state)).toBe(false);
  });
  test("MOVE is invalid if it will send pacman off the board", () => {
    const input = "MOVE";
    const state = {
      placement: {
        position: { x: 3, y: 0 },
        direction: "WEST",
      },
      commandHistory: [],
      placed: true,
    };
    expect(VerifyInput(input, state)).toBe(false);
  });
  test("MOVE is valid function if placed on the board, not on the edge", () => {
    const input = "MOVE";
    const state = {
      placement: {
        position: { x: 1, y: 3 },
        direction: "WEST",
      },
      commandHistory: [],
      placed: true,
    };
    expect(VerifyInput(input, state)).toBe(true);
  });
});
