import React from "react";
import classes from './Cell.module.css';

const Cell = ({text}) => {
  return (
    <div className={classes.Cell}>
      <div className={text !== "blank" ? classes.ColoredCell : null}>
      {text !== "blank" ? text : "\u00A0"}
      </div>
    </div>
  );
}

export default Cell;
