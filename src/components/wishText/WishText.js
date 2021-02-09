import React from "react";
import WishLetter from "./wishLetter/WishLetter";
import classes from './WishText.module.css';


const WishText = () => {
  return (
    <div className={classes.WishText}>
      <WishLetter letter="H" />
      <WishLetter letter="A" />
      <WishLetter letter="P" />
      <WishLetter letter="P" />
      <WishLetter letter="Y" />
      <WishLetter letter="space" />
      <WishLetter letter="B" />
      <WishLetter letter="I" />
      <WishLetter letter="R" />
      <WishLetter letter="T" />
      <WishLetter letter="H" />
      <WishLetter letter="D" />
      <WishLetter letter="A" />
      <WishLetter letter="Y" />
      <WishLetter letter="space" />
      <WishLetter letter="M" />
      <WishLetter letter="O" />
      <WishLetter letter="T" />
      <WishLetter letter="U" />
    </div>
  );
}

export default WishText;
