import styles from "./Square.module.scss";

function Square({ value, onSquareClick, xIsNext, isWinningSquare }) {
  return (
    <button
      className={`${styles.square} ${
        !value
          ? xIsNext
            ? styles.xTurn
            : styles.oTurn
          : value === "X"
            ? styles.isX
            : styles.isO
      } ${isWinningSquare ? (value === "X" ? styles.winnerX : styles.winnerO) : ""}`}
      onClick={onSquareClick}
    ></button>
  );
}

export default Square;
