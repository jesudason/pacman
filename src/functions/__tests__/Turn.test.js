import { cleanup } from "@testing-library/react";
import Turn from "../Turn";

afterEach(() => {
  cleanup();
});

describe("Turn function", () => {
  test("if current direction is EAST and input is RIGHT, return SOUTH", () => {
    const currentDirection = "EAST";
    const input = "RIGHT";
    expect(Turn(input, currentDirection)).toBe("SOUTH");
  });
  test("if current direction is EAST and input is LEFT, return NORTH", () => {
    const currentDirection = "EAST";
    const input = "LEFT";
    expect(Turn(input, currentDirection)).toBe("NORTH");
  });
  test("turn LEFT four times to return to current direction", () => {
    const currentDirection = "EAST";
    const input = "LEFT";
    expect(
      Turn(input, Turn(input, Turn(input, Turn(input, currentDirection))))
    ).toBe(currentDirection);
  });
});
