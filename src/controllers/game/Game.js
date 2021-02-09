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
    numberOfLettersHit: 0,
    target: [
      ["H", false],
      ["A", false],
      ["P", false],
      ["P", false],
      ["Y", false],
      ["B", false],
      ["I", false],
      ["R", false],
      ["T", false],
      ["H", false],
      ["D", false],
      ["A", false],
      ["Y", false],
      ["M", false],
      ["O", false],
      ["T", false],
      ["U", false],
    ]
  };

  numberOfRows = 20;

  componentDidMount() {
    setInterval(() => {
      //console.log(this.state.row);
      if (this.state.row > this.numberOfRows) {
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

  onCollision = (letter) => {
    const targetCopy = [...this.state.target];
    if (letter !== targetCopy[this.state.numberOfLettersHit][0]) {
      // alert("Game Over!", letter, targetCopy[this.state.numberOfLettersHit][0]);
    }
    else {
      targetCopy[this.state.numberOfLettersHit][1] = true;
      this.setState({target: targetCopy, numberOfLettersHit: this.state.numberOfLettersHit + 1});
    }
  };

  render() {
    console.log(this.state.row);
    return (
      <div className={classes.Game}>
        <WishText target={this.state.target} />
        <Stage
          onCollision={this.onCollision}
          currentRow={this.state.row}
          currentCol={this.state.col}
          playerCol={this.state.playerCol}
          cellText={this.state.cellText}
          numberOfRows={this.numberOfRows}
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
