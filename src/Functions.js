function VerifyInput(input) {
  let validity = false;
  if (
    input === "MOVE" ||
    input === "REPORT" ||
    input === "LEFT" ||
    input === "RIGHT"
  ) {
    validity = true;
  } else if (input && input.startsWith("PLACE")) {
    validity = splitPlaceCommand(input);
  }
  return validity;
}

function splitPlaceCommand(input) {
  const splitCommand = input.split(" ");

  if (splitCommand.length == 2) {
    const inputData = splitCommand[1].split(",");
    if (inputData.length !== 3) {
      return false;
    }
    if (!["NORTH", "SOUTH", "WEST", "EAST"].includes(inputData[2])) {
      return false;
    }

    if (
      inputData.length === 3 &&
      ["NORTH", "SOUTH", "WEST", "EAST"].includes(inputData[2]) &&
      inputData[0] < 5 &&
      inputData[0] > -1 &&
      inputData[1] < 5 &&
      inputData[1] > -1
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

export { VerifyInput, splitPlaceCommand };
