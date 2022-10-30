export default function TURN(input, currentDirection) {
  const directions = ["NORTH", "EAST", "SOUTH", "WEST"];
  const directionIndex = directions.indexOf(currentDirection);
  let newDirection;

  if (directionIndex === -1) {
    return null;
  }
  if (input === "LEFT") {
    if (directionIndex > 0) {
      newDirection = directions[directionIndex - 1];
    } else {
      newDirection = directions[directions.length - 1];
    }
  } else if (input === "RIGHT") {
    if (directionIndex < 3) {
      newDirection = directions[directionIndex + 1];
    } else {
      newDirection = directions[0];
    }
  }

  return newDirection;
}
