import logo from "./logo.svg";
import "./App.css";

function Command({}) {
  const sectionHeading = <h1 data-testid="command">Command History</h1>;

  return sectionHeading;
}

function App() {
  return (
    <div className="App">
      <Command />
    </div>
  );
}

export default App;
