import { splitPlaceCommand } from "./utils";

export default function Place(input) {
  function getState(input) {
    const inputData = splitPlaceCommand(input);
    const xValue = Number(inputData[0]);
    const yValue = Number(inputData[1]);
    const direction = inputData[2];
    return {
      position: { x: xValue, y: yValue },
      direction: direction,
    };
  }
  return getState(input);
}
