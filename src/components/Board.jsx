import React, { useState, useEffect } from "react";
import Square from "./Square";
import Strike from "./Strike";

import * as styles from "./Board.module.css";

const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [strike, setStrike] = useState("");
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  useEffect(() => {
    const calculateWinner = (squares) => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
          squares[a] &&
          squares[a] === squares[b] &&
          squares[a] === squares[c]
        ) {
          let strikeClass = "";
          switch (i) {
            case 0:
              strikeClass = "strikeRow1";
              break;
            case 1:
              strikeClass = "strikeRow2";
              break;
            case 2:
              strikeClass = "strikeRow3";
              break;
            case 3:
              strikeClass = "strikeColumn1";
              break;
            case 4:
              strikeClass = "strikeColumn2";
              break;
            case 5:
              strikeClass = "strikeColumn3";
              break;
            case 6:
              strikeClass = "strikeDiagonal1";
              break;
            case 7:
              strikeClass = "strikeDiagonal2";
              break;
            default:
              break;
          }
          setStrike(strikeClass);
          return squares[a];
        }
      }

      if (squares.every((square) => square !== null)) {
        setIsDraw(true);
      }
      return null;
    };

    setWinner(calculateWinner(squares));
  }, [squares]);

  function handleClick(i) {
    const boardCopy = [...squares];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "X" : "O";
    setSquares(boardCopy);
    setXIsNext(!xIsNext);
  }

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (isDraw) {
    status = "It's a draw!";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function startNewGame() {
    setSquares(Array(9).fill(null));
    setStrike("");
    setWinner("");
    setIsDraw(false);
  }

  return (
    <>
      <div>{status}</div>
      <div className={styles.row}>
        <div className={styles.boardRow}>
          {squares.map((square, index) => (
            <Square
              key={index}
              value={square}
              onSquareClick={() => handleClick(index)}
              className={styles[`square${index}`]}
            />
          ))}
          <>
            <Strike strikeClass={strike} />
          </>
        </div>

        <button className={styles.resetBtn} onClick={startNewGame}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Board;
