import { screen, render, cleanup } from "@testing-library/react";
import Report from "../Report";
import Game from "../../Game";

afterEach(() => {
  cleanup();
});

describe("Report function", () => {
  test("Reports pacman placement if placed is true", () => {
    const state = {
      placement: {
        position: { x: 4, y: 2 },
        direction: "EAST",
      },
      commandHistory: [],
      placed: true,
    };
    render(<Game />);
    const reportElement = screen.getByTestId("report-field");
    Report(state);
    expect(reportElement).toBeInTheDocument();
    expect(reportElement).toContainHTML("4,2,EAST");
  });
  test("does not report placement if placed is false", () => {
    const state = {
      placement: {
        position: { x: 4, y: 2 },
        direction: "EAST",
      },
      commandHistory: [],
      placed: false,
    };
    render(<Game />);
    const reportElement = screen.getByTestId("report-field");
    Report(state);
    expect(reportElement).not.toContainHTML("4,2,EAST");
  });
  test("shows message that pacman is not on the board if placed is false", () => {
    const state = {
      placement: {
        position: { x: 4, y: 2 },
        direction: "EAST",
      },
      commandHistory: [],
      placed: false,
    };
    render(<Game />);
    const reportElement = screen.getByTestId("report-field");
    Report(state);
    expect(reportElement).toContainHTML(
      "Pacman has not been placed on the grid"
    );
  });
});
