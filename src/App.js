import logo from "./logo.svg";
import "./App.css";

function Command({ commands }) {
  const { command, verified } = commands;
  const sectionHeading = <h1 data-testid="command">Command History</h1>;
  const text = verified ? sectionHeading : "!error" + sectionHeading;
  return sectionHeading;
}

function App() {
  const commands = [
    { command: "PLACE 0,0,NORTH", verified: true },
    { command: "PLACE 1,2,EAST", verified: true },
    { command: "PLACE 10,0,SOUTH", verified: false },
    { command: "LEFT", verified: true },
    { command: "REPORT", verified: true },
    { command: "PLACE 0,0,NOdRTH", verified: false },
    { command: "PLACE 0,3,east", verified: false },
    { command: "MOVE", verified: true },
    { command: "MOdsfnklsVE", verified: false },
    { command: "RIGHT", verified: true },
  ];
  return (
    <div className="App">
      <Command commands={commands} />
    </div>
  );
}

export default App;
