export default function LightboxContent() {
  return (
    <div className="Instructions">
      <h2>Pacman Simulator</h2>
      <p>
        This application is a simulation of Pacman moving in a 5x5 unit grid.
        Enter commands to move Pacman around the grid, and report its new
        location.
      </p>

      <p>Rules:</p>
      <ul>
        <li>
          The first valid command is a PLACE command, after that, any sequence
          of commands may be issued, in any order, including another PLACE
          command. All commands prior to an initial PLACE command are ignored.
        </li>
        <li>
          This application is case sensitive. Pacman will only respond to
          uppercase commands, writted in the correct format.
        </li>
        <li>
          Acceptible command formats:
          <ul>
            <li>
              PLACE X,Y,F (Where F is "NORTH", "SOUTH", "EAST", or "WEST")
            </li>
            <li>MOVE</li>
            <li>LEFT</li>
            <li>RIGHT</li>
            <li>REPORT</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
