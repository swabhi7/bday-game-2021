import React, { Component } from "react";
import ControlButton from "../../components/controlButton/ControlButton";
import Stage from "../../components/stage/Stage";
import WishText from "../../components/wishText/WishText";
import classes from "./Game.module.css";

class Game extends Component {
  state = {
    row: 0,
    playerCol: 4,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ row: this.state.row + 1 });
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
        <Stage currentRow={this.state.row} playerCol={this.state.playerCol} />
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
