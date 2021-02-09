import React from "react";
import classes from "./ControlButton.module.css";

const ControlButton = ({ clicked, direction }) => {
  return (
    <div className={classes.ControlButton} onClick={() => clicked(direction)}>
      {direction}
    </div>
  );
};

export default ControlButton;
