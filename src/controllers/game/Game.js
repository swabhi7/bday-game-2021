import React, { Component } from "react";
import ControlButton from "../../components/controlButton/ControlButton";
import Stage from "../../components/stage/Stage";
import WishText from "../../components/wishText/WishText";
import classes from "./Game.module.css";

class Game extends Component {
  render() {
    return (
      <div className={classes.Game}>
        <WishText />
        <Stage />
        <ControlButton />
        <ControlButton />
      </div>
    );
  }
}

export default Game;
