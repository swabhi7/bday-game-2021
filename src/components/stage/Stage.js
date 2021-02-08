import React from "react";
import Cell from "./cell/Cell";
import classes from "./Stage.module.css";

const Stage = () => {
  let cells = [];
  for (let row = 0; row < 30; row++) {
    cells[row] = [];
    for (let col = 0; col < 10; col++) {
      cells[row].push(<Cell />);
    }
  }

  return <div className={classes.Stage}>{cells}</div>;
};

export default Stage;
