import React from "react";
import Cell from "./cell/Cell";
import classes from "./Stage.module.css";

const Stage = ({ currentRow, currentCol, playerCol, cellText, numberOfRows }) => {
  // console.log(playerCol);
  let cells = [];
  for (let row = 0; row < numberOfRows; row++) {
    cells[row] = [];
    for (let col = 0; col < 10; col++) {
      row === numberOfRows - 1
        ? cells[row].push(
            <Cell
              text={row === currentRow && col === currentCol ? cellText : "blank"}
              player={row === numberOfRows - 1 && col === playerCol ? true : false}
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
