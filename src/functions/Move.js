export default function Move(direction) {
  if (direction === "NORTH") {
    return ["y", 1];
  }
  if (direction === "SOUTH") {
    return ["y", -1];
  }
  if (direction === "EAST") {
    return ["x", 1];
  }
  if (direction === "WEST") {
    return ["x", -1];
  }
  return "error";
}
