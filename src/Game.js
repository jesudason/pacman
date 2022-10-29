import Input from "./components/Input";
import Command from "./components/Command";
import { VerifyInput, splitPlaceCommand } from "./Functions";
import React from "react";

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
          console.log("state", this.state.commands);
        }
      );
    };
    return (
      <div>
        <Input handleInput={handleInput} />
        <div data-testid="command-history">
          {this.state.commands.map((command, index) => {
            return <Command key={index} command={command} id={index} />;
          })}
        </div>
      </div>
    );
  }
}
