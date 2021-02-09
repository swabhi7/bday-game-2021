import React, { Component } from "react";
import ControlButton from "../../components/controlButton/ControlButton";
import Stage from "../../components/stage/Stage";
import WishText from "../../components/wishText/WishText";
import classes from "./Game.module.css";

class Game extends Component {
  state = {
    row: 0,
    col: Math.floor(Math.random() * 10),
    playerCol: 4,
    cellText: ["H", "A", "P", "Y", "B", "I", "R", "T", "D", "M", "O", "U"][
      Math.floor(Math.random() * 12)
    ],
  };

  componentDidMount() {
    setInterval(() => {
      //console.log(this.state.row);
      if (this.state.row >= 25) {
        this.setState({
          row: 0,
          col: Math.floor(Math.random() * 10),
          cellText: [
            "H",
            "A",
            "P",
            "Y",
            "B",
            "I",
            "R",
            "T",
            "D",
            "M",
            "O",
            "U",
          ][Math.floor(Math.random() * 12)],
        });
        this.setState({ col: Math.floor(Math.random() * 10) });
      } else {
        this.setState({ row: this.state.row + 1 });
      }
    }, 50);
  }

  onControlButtonClick = (direction) => {
    direction === "LEFT"
      ? this.setState({ playerCol: this.state.playerCol - 1 })
      : this.setState({ playerCol: this.state.playerCol + 1 });
  };

  render() {
    console.log(this.state.row);
    return (
      <div className={classes.Game}>
        <WishText />
        <Stage
          currentRow={this.state.row}
          currentCol={this.state.col}
          playerCol={this.state.playerCol}
          cellText={this.state.cellText}
        />
        <div className={classes.ButtonsArea}>
          <div>
            <ControlButton
              clicked={this.onControlButtonClick}
              direction="LEFT"
            />
          </div>
          <div>
            <ControlButton
              clicked={this.onControlButtonClick}
              direction="RIGHT"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
