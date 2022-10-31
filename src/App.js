import "./App.scss";
import Game from "./Game";
import Pacman from "./assets/pacman_PNG5.png";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Footer />
      <div className="App__container">
        <div className="App__header">
          <img src={Pacman} alt="Logo" className="App__header--logo" />
          <h1>Pacman Simulator</h1>
        </div>

        <Game />
      </div>
    </div>
  );
}

export default App;
