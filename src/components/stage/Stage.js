import React from "react";
import Cell from "./cell/Cell";
import classes from "./Stage.module.css";

const Stage = ({ currentRow, currentCol, playerCol, cellText }) => {
  // console.log(playerCol);
  let cells = [];
  for (let row = 0; row < 30; row++) {
    cells[row] = [];
    for (let col = 0; col < 10; col++) {
      row === 29
        ? cells[row].push(
            <Cell
              text={row === currentRow && col === currentCol ? cellText : "blank"}
              player={row === 29 && col === playerCol ? true : false}
            />
          )
        : cells[row].push(
            <Cell text={row === currentRow && col === currentCol ? cellText : "blank"} />
          );
    }
  }

  return <div className={classes.Stage}>{cells}</div>;
};

export default Stage;
