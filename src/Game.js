import Input from "./components/Input";
import CommandRecord from "./components/CommandRecord";
import { VerifyInput, splitPlaceCommand } from "./Functions";
import React from "react";
import Place from "./functions/Place";

function Report(state) {
  // console.log("state", state);

  const position = state.position;
  const direction = state.direction;
  // console.log(position);
  // return position;
  document.getElementById(
    "report-field"
  ).innerHTML = `${position.x},${position.y},${direction}`;

  return `${position.x},${position.y},${direction}`;
}

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      command: {
        position: { x: null, y: null },
        direction: null,
      },
      commandHistory: [],
      placed: false,
    };
  }

  runCommand = (input) => {
    if (input === "MOVE") {
      return;
    }

    if (input === "REPORT") {
      return;
    }

    if (input === "LEFT") {
      return;
    }

    if (input === "RIGHT") {
      return;
    }

    if (input.startsWith("PLACE")) {
      const place = Place(input);
      return this.handlePlace(place);
    }

    // splitPlaceCommand(input);
    // console.log("runCommand", input);
  };

  handlePlace = (place) => {
    this.setState(
      {
        command: {
          position: { x: place.position.x, y: place.position.y },
          direction: place.direction,
        },
        placed: true,
      },
      () => {
        // console.log(this.state);
      }
    );
  };

  render() {
    const handleInput = (input) => {
      this.setState(
        {
          commandHistory: [
            ...this.state.commandHistory,
            ...[{ input: input, verified: VerifyInput(input, this.state) }],
          ],
        },
        () => {
          if (VerifyInput(input, this.state) === true) {
            this.runCommand(input);
          }
        }
      );
    };
    return (
      <div>
        <Input handleInput={handleInput} />
        <div data-testid="command-history">
          {this.state.commandHistory.map((command, index) => {
            return <CommandRecord key={index} command={command} id={index} />;
          })}
        </div>
      </div>
    );
  }
}
