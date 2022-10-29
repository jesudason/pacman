import logo from "./logo.svg";
import "./App.css";

function Command({ command }) {
  const { input, verified } = command;

  const text = verified ? input : `!error ${input}`;
  console.log("text", text);
  console.log("verified", verified);
  const commandItem = `<p data-testid="command">${text}</p>`;

  return commandItem;
}

function App() {
  const commands = [
    { input: "PLACE 0,0,NORTH", verified: true },
    { input: "PLACE 1,2,EAST", verified: true },
    { input: "PLACE 10,0,SOUTH", verified: false },
    { input: "LEFT", verified: true },
    { input: "REPORT", verified: true },
    { input: "PLACE 0,0,NOdRTH", verified: false },
    { input: "PLACE 0,3,east", verified: false },
    { input: "MOVE", verified: true },
    { input: "MOdsfnklsVE", verified: false },
    { input: "RIGHT", verified: true },
  ];

  return (
    <div className="App">
      {commands.map((command, index) => {
        return <Command command={command} key={index} />;
      })}
    </div>
  );
}

export default App;
