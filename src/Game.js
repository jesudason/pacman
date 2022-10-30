import Input from "./components/Input";
import CommandRecord from "./components/CommandRecord";
import { VerifyInput } from "./functions/utils";
import React from "react";
import Place from "./functions/Place";
import Report from "./functions/Report";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placement: {
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
      return Report(this.state);
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
        placement: {
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
        <div data-testid="report-field" id="report-field"></div>
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
