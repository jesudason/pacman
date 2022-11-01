import Input from "./components/Input";
import CommandRecord from "./components/CommandRecord";
import { VerifyInput } from "./functions/utils";
import React from "react";
import Place from "./functions/Place";
import Report from "./functions/Report";
import Move from "./functions/Move";
import Turn from "./functions/Turn";
import "./Game.scss";

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
      const move = Move(this.state.placement.direction);
      return this.handleMove(move);
    }

    if (input === "REPORT") {
      return Report(this.state);
    }

    if (input === "LEFT" || input === "RIGHT") {
      let placement = { ...this.state.placement };
      const newDirection = Turn(input, this.state.placement.direction);
      placement.direction = newDirection;
      this.setState({ placement });
    }

    if (input.startsWith("PLACE")) {
      const place = Place(input);
      return this.handlePlace(place);
    }
  };

  handleMove = (move) => {
    const currentPosition = this.state.placement.position;

    function getKey() {
      return move[0];
    }

    function getNewPosition() {
      return currentPosition[move[0]] + move[1];
    }

    currentPosition[getKey()] = getNewPosition();

    this.setState({ currentPosition });
  };

  handlePlace = (place) => {
    this.setState({
      placement: {
        position: { x: place.position.x, y: place.position.y },
        direction: place.direction,
      },
      placed: true,
    });
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
      <div className="Game">
        <Input handleInput={handleInput} />
        <div className="Game__report">
          <h3 className="Game__heading">Game Report</h3>
          <p data-testid="report-field" id="report-field"></p>
        </div>

        <div data-testid="command-history" className="Game__list">
          <h3 className="Game__heading">Command History</h3>
          <div className="Game__list--content">
            {this.state.commandHistory.map((command, index) => {
              return <CommandRecord key={index} command={command} id={index} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
