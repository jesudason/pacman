import { cleanup } from "@testing-library/react";
import Place from "../Place";

afterEach(() => {
  cleanup();
});

describe("Place function", () => {
  test("command returns state object", () => {
    const input = "PLACE 3,4,SOUTH";
    expect(Place(input)).toEqual({
      position: { x: 3, y: 4 },
      direction: "SOUTH",
    });
  });
  test("returns object containing numbers and strings", () => {
    const input = "PLACE 0,0,SOUTH";
    expect(Place(input)).toEqual(
      expect.objectContaining({
        position: { x: expect.any(Number), y: expect.any(Number) },
        direction: expect.any(String),
      })
    );
  });
});
