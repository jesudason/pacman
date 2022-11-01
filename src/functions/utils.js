import { useEffect } from "react";

function VerifyInput(input, state) {
  let validity = false;
  if (!input || !state) {
    validity = false;
  } else {
    const placement = state.placement;
    const position = placement.position;
    const direction = placement.direction;
    if (input === "REPORT") {
      validity = true;
    } else if (input === "LEFT" || input === "RIGHT") {
      if (state.placed === false) {
        validity = false;
      } else {
        validity = true;
      }
    } else if (input === "MOVE") {
      if (
        (direction === "NORTH" && position.x < 4) ||
        (direction === "SOUTH" && position.x > 0) ||
        (direction === "EAST" && position.y < 4) ||
        (direction === "WEST" && position.y > 0)
      ) {
        validity = true;
      } else {
        validity = false;
      }
    } else if (input.startsWith("PLACE") === false && state.placed === false) {
      validity = false;
    } else if (input && input.startsWith("PLACE")) {
      const inputData = splitPlaceCommand(input);

      if (
        inputData.length === 3 &&
        ["NORTH", "SOUTH", "WEST", "EAST"].includes(inputData[2]) &&
        inputData[0] < 5 &&
        inputData[0] > -1 &&
        inputData[1] < 5 &&
        inputData[1] > -1
      ) {
        validity = true;
      } else {
        validity = false;
      }
    }
  }
  return validity;
}

function splitPlaceCommand(input) {
  const splitCommand = input.split(" ");

  if (splitCommand.length === 2) {
    return splitCommand[1].split(",");
  } else {
    return null;
  }
}

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export { VerifyInput, splitPlaceCommand, useOnClickOutside };
