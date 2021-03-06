import React, { Component } from "react";
import ControlButton from "../../components/controlButton/ControlButton";
import Stage from "../../components/stage/Stage";
import WishText from "../../components/wishText/WishText";
import classes from "./Game.module.css";
import motuImage from "../../images/motu.jpg";

class Game extends Component {
  state = {
    won: false,
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
    ],
  };

  numberOfRows = Math.floor(window.innerHeight * 24 / 717);

  getRandomNumberBetween(numberOfLettersHit) {
    console.log(numberOfLettersHit);
    if (numberOfLettersHit === 0) {
      return Math.floor(Math.random() * 3); // 0 to 3
    }
    if (numberOfLettersHit === 1) {
      return Math.floor(Math.random() * 3); // 0 to 3
    }
    if (numberOfLettersHit === 2) {
      return Math.floor(Math.random() * 3 + 1); // 1 to 4
    }
    if (numberOfLettersHit === 3) {
      return Math.floor(Math.random() * 3 + 1); // 1 to 4
    }
    if (numberOfLettersHit === 4) {
      return Math.floor(Math.random() * 3 + 2);
    }
    if (numberOfLettersHit === 5) {
      return Math.floor(Math.random() * 3 + 3);
    }
    if (numberOfLettersHit === 6) {
      return Math.floor(Math.random() * 3 + 5);
    }
    if (numberOfLettersHit === 7) {
      return Math.floor(Math.random() * 3 + 5);
    }
    if (numberOfLettersHit === 8) {
      return Math.floor(Math.random() * 3 + 6);
    }
    if (numberOfLettersHit === 9) {
      return Math.floor(Math.random() * 3);
    }
    if (numberOfLettersHit === 10) {
      return Math.floor(Math.random() * 3 + 7);
    }
    if (numberOfLettersHit === 11) {
      return Math.floor(Math.random() * 3);
    }
    if (numberOfLettersHit === 12) {
      return Math.floor(Math.random() * 3 + 2);
    }
    if (numberOfLettersHit === 13) {
      return Math.floor(Math.random() * 3 + 7);
    }
    if (numberOfLettersHit === 14) {
      return Math.floor(Math.random() * 3 + 8);
    }
    if (numberOfLettersHit === 15) {
      return Math.floor(Math.random() * 3 + 6);
    }
    if (numberOfLettersHit === 16) {
      return Math.floor(Math.random() * 3 + 9);
    }
  }

  componentDidMount() {
    if (this.state.numberOfLettersHit >= 16) {
      alert("You Win! Happy Birthday Motu!");
    }
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
          ][this.getRandomNumberBetween(this.state.numberOfLettersHit)],
        });
        this.setState({ col: Math.floor(Math.random() * 10) });
      } else {
        this.setState({ row: this.state.row + 1 });
      }
    }, 80);
  }

  onControlButtonClick = (direction) => {
    direction === "LEFT"
      ? (this.state.playerCol > 0 ? this.setState({ playerCol: this.state.playerCol - 1 }) : this.setState({playerCol: 0}))
      : (this.state.playerCol < 9 ? this.setState({ playerCol: this.state.playerCol + 1 }) : this.setState({playerCol: 9}));
  };

  onCollision = (letter) => {
    const targetCopy = [...this.state.target];
    this.setState({ row: 100 });
    if (letter !== targetCopy[this.state.numberOfLettersHit][0]) {
      console.log(letter, targetCopy[this.state.numberOfLettersHit][0]);
      alert("Game Over! Retry?");
      window.location.reload();
    } else {
      targetCopy[this.state.numberOfLettersHit][1] = true;
      this.setState({
        target: targetCopy,
        numberOfLettersHit: this.state.numberOfLettersHit + 1,
      });
      if (this.state.numberOfLettersHit >= 16) {
        this.setState({won: true});
      }
    }

  };

  render() {
    // console.log(this.state.row);
    return (
      <div className={classes.Game}>
        <WishText target={this.state.target} />
        {this.state.won ? <img className={classes.MotuImage} src={motuImage} alt="Motu's img" /> : <Stage
          onCollision={this.onCollision}
          currentRow={this.state.row}
          currentCol={this.state.col}
          playerCol={this.state.playerCol}
          cellText={this.state.cellText}
          numberOfRows={this.numberOfRows}
        />}
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
