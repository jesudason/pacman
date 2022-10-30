function VerifyInput(input, state) {
  let validity = false;
  // console.log("state", state);
  if (input && input === "REPORT") {
    validity = true;
  } else if (
    input &&
    input.startsWith("PLACE") === false &&
    state &&
    state.placed === false
  ) {
    validity = false;
  } else if (input === "MOVE" || input === "LEFT" || input === "RIGHT") {
    validity = true;
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
  return validity;
}

function splitPlaceCommand(input) {
  const splitCommand = input.split(" ");

  if (splitCommand.length == 2) {
    return splitCommand[1].split(",");
  } else {
    return null;
  }
}

export { VerifyInput, splitPlaceCommand };
