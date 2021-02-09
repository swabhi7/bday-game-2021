import React from "react";
import WishLetter from "./wishLetter/WishLetter";
import classes from './WishText.module.css';


const WishText = ({target}) => {
  return (
    <div className={classes.WishText}>
      <WishLetter letter="H" done={target[0][1]} />
      <WishLetter letter="A" done={target[1][1]} />
      <WishLetter letter="P" done={target[2][1]} />
      <WishLetter letter="P" done={target[3][1]} />
      <WishLetter letter="Y" done={target[4][1]} />
      <WishLetter letter="space" />
      <WishLetter letter="B" done={target[5][1]} />
      <WishLetter letter="I" done={target[6][1]} />
      <WishLetter letter="R" done={target[7][1]} />
      <WishLetter letter="T" done={target[8][1]} />
      <WishLetter letter="H" done={target[9][1]} />
      <WishLetter letter="D" done={target[10][1]} />
      <WishLetter letter="A" done={target[11][1]} />
      <WishLetter letter="Y" done={target[12][1]} />
      <WishLetter letter="space" />
      <WishLetter letter="M" done={target[13][1]} />
      <WishLetter letter="O" done={target[14][1]} />
      <WishLetter letter="T" done={target[15][1]} />
      <WishLetter letter="U" done={target[16][1]} />
    </div>
  );
}

export default WishText;
