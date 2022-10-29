import Input from "./components/Input";
import CommandRecord from "./components/CommandRecord";
import { VerifyInput, splitPlaceCommand } from "./Functions";
import React from "react";

function runCommand(input) {
  console.log("runCommand", input);
}

export default class Game extends React.Component {
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
            ...[{ input: input, verified: VerifyInput(input) }],
          ],
        },
        () => {
          if (VerifyInput(input) === true) {
            runCommand(input);
          }
        }
      );
    };
    return (
      <div>
        <Input handleInput={handleInput} />
        <div data-testid="command-history">
          {this.state.commands.map((command, index) => {
            return <CommandRecord key={index} command={command} id={index} />;
          })}
        </div>
      </div>
    );
  }
}
