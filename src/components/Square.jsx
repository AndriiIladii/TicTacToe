import React from "react";
import * as styles from "./Square.module.css";

function Square({ value, onSquareClick, className }) {
  return (
    <button className={`${styles.square} ${className}`} onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
