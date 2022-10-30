import { splitPlaceCommand } from "./utils";

export default function Place(input) {
  function getState(input) {
    const inputData = splitPlaceCommand(input);
    // console.log("inputData", inputData);
    const xValue = Number(inputData[0]);
    const yValue = Number(inputData[1]);
    const direction = inputData[2];
    // console.log(typeof xValue + " " + typeof yValue);
    return {
      position: { x: xValue, y: yValue },
      direction: direction,
    };
  }
  return getState(input);
}
