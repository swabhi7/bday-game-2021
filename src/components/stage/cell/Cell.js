import React from "react";
import classes from './Cell.module.css';

const Cell = ({text, player, onCollision}) => {
  let cellClasses = [];
  if (text !== "blank" && player) {
    onCollision(text);
  }
  cellClasses = text !== "blank" ? [...cellClasses, classes.ColoredCell] : cellClasses;
  cellClasses = player === true ? [...cellClasses, classes.PlayerCell] : cellClasses;
  return (
    <div className={classes.Cell}>
      <div className={cellClasses}>
      {text !== "blank" ? text : "\u00A0"}
      </div>
    </div>
  );
}

export default Cell;
