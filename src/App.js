import "./App.css";
import Command from "./components/Command";
import { useState } from "react";
import React from "react";

function Input(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleInput(input);
    return;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your command:
        <input
          id="command-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commands: [],
    };
  }

  render() {
    const handleInput = (input) => {
      this.setState(
        {
          commands: [
            ...this.state.commands,
            ...[{ input: input, verified: true }],
          ],
        },
        () => {
          console.log("state", this.state);
        }
      );
    };
    return (
      <div>
        <Input handleInput={handleInput} />
        <div id="command-history">
          {this.state.commands.map((command, index) => {
            return <Command key={index} command={command} id={index} />;
          })}
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
