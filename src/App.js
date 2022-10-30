import "./App.scss";
import Game from "./Game";
import Pacman from "./assets/pacman_PNG5.png";

function App() {
  return (
    <div className="App">
      <div className="App__header">
        <img src={Pacman} alt="Logo" className="App__header--logo" />
        <h1>Pacman Simulator</h1>
      </div>

      <Game />
    </div>
  );
}

export default App;
