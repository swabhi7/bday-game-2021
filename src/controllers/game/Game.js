import React, { Component } from "react";
import ControlButton from "../../components/controlButton/ControlButton";
import Stage from "../../components/stage/Stage";
import WishText from "../../components/wishText/WishText";
import classes from "./Game.module.css";

class Game extends Component {

  state = {
    row: 0
  };

  componentDidMount () {
    setInterval(() => {
      this.setState({row: this.state.row + 1});
    }, 50);
  }

  render() {
    console.log(this.state.row);

    

    return (
      <div className={classes.Game}>
        <WishText />
        <Stage currentRow={this.state.row}/>
        <ControlButton />
        <ControlButton />
      </div>
    );
  }
}

export default Game;
