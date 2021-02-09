import React from "react";
import classes from "./WishLetter.module.css";

const WishLetter = ({letter}) => {
    return (
        <div className={classes.WishLetter}>
            {letter === "space" ? "\u00A0" : letter}
        </div>
    );
};

export default WishLetter;