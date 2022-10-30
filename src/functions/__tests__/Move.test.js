import { cleanup } from "@testing-library/react";
import Move from "../Move";

afterEach(() => {
  cleanup();
});

describe("Move function", () => {
  test("returns y value when direction is NORTH", () => {
    const direction = "NORTH";
    expect(Move(direction)).toEqual(["y", 1]);
  });
  test("returns an ", () => {
    const direction = "SOUTH";
    expect(Move(direction)).toEqual(
      expect.arrayContaining([expect.any(String), expect.any(Number)])
    );
  });
});
