import logo from "./logo.svg";
import "./App.css";
import Command from "./components/Command";

function App() {
  const commands = [
    { id: 1, input: "PLACE 0,0,NORTH", verified: true },
    { id: 2, input: "PLACE 1,2,EAST", verified: true },
    { id: 3, input: "PLACE 10,0,SOUTH", verified: false },
    { id: 4, input: "LEFT", verified: true },
    { id: 5, input: "REPORT", verified: true },
    { id: 6, input: "PLACE 0,0,NOdRTH", verified: false },
    { id: 7, input: "PLACE 0,3,east", verified: false },
    { id: 8, input: "MOVE", verified: true },
    { id: 9, input: "MOdsfnklsVE", verified: false },
    { id: 10, input: "RIGHT", verified: true },
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
