export default function Report(state) {
  const { position, direction } = state.placement;

  let text = "";
  if (state.placed === false) {
    text = "Pacman has not been placed on the grid";
  } else {
    text = `${position.x},${position.y},${direction}`;
  }
  return (document.getElementById("report-field").innerHTML = text);
}
