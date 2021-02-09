import React from "react";
import classes from "./WishLetter.module.css";

const WishLetter = ({letter, done}) => {
    return (
        <div className={done ? classes.Done : classes.NotDone}>
            {letter === "space" ? "\u00A0" : letter}
        </div>
    );
};

export default WishLetter;