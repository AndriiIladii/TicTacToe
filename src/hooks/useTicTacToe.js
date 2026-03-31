import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gameLogic, getSmartMove } from "../utils/gameLogic";

const useTicTacToe = (playerOne, gameMode) => {
  const savedGameScore = localStorage.getItem("gameScore");
  const parsedGame = savedGameScore
    ? JSON.parse(savedGameScore)
    : { xWins: 0, oWins: 0, draws: 0 };

  const [winningLine, setWinningLine] = useState(null);
  const [xIsNext, setXIsNext] = useState(parsedGame.xIsNext ?? true);
  const [squares, setSquares] = useState(
    parsedGame.squares ?? Array(9).fill(null),
  );
  const [scores, setScores] = useState(
    parsedGame.scores ?? { xWins: 0, oWins: 0, draws: 0 },
  );
  const isCpuTurn =
    gameMode === "CPU" &&
    ((playerOne === "X" && !xIsNext) || (playerOne === "O" && xIsNext));
  const navigate = useNavigate();

  useEffect(() => {
    if (isCpuTurn && !gameLogic(squares)) {
      const botSymbol = playerOne === "X" ? "O" : "X";
      let finalMove = null;

      const winningMove = getSmartMove(squares, botSymbol);

      const blockingMove = getSmartMove(squares, playerOne);

      if (winningMove !== null) {
        finalMove = winningMove;
      } else if (blockingMove !== null) {
        finalMove = blockingMove;
      } else {
        const emptyIndices = [];
        for (let i = 0; i < squares.length; i++) {
          if (squares[i] === null) emptyIndices.push(i);
        }

        if (emptyIndices.length > 0) {
          const randomIndex = Math.floor(Math.random() * emptyIndices.length);
          finalMove = emptyIndices[randomIndex];
        }
      }
      if (finalMove !== null) {
        const timer = setTimeout(() => {
          handleClick(finalMove);
        }, 500);
        return () => clearTimeout(timer);
      }
    }
  }, [isCpuTurn, squares, playerOne, handleClick]);

  function handleClick(i) {
    if (squares[i] || gameLogic(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);

    const winnerIs = gameLogic(nextSquares);

    if (winnerIs?.winner === "X") {
      setWinningLine(winnerIs.line);
      setScores({ ...scores, xWins: scores.xWins + 1 });
    } else if (winnerIs?.winner === "O") {
      setWinningLine(winnerIs.line);
      setScores({ ...scores, oWins: scores.oWins + 1 });
    } else if (!nextSquares.includes(null)) {
      setScores({ ...scores, draws: scores.draws + 1 });
    }
  }

  const handleReset = (e) => {
    e.preventDefault();
    setSquares(Array(9).fill(null));
    setWinningLine(null);
    setXIsNext(true);
  };

  function handleQuit(e) {
    e.preventDefault();
    localStorage.removeItem("gameScore");
    navigate("/");
  }

  return {
    squares,
    scores,
    setScores,
    parsedGame,
    xIsNext,
    setXIsNext,
    winningLine,
    setWinningLine,
    handleClick,
    handleQuit,
    handleReset,
  };
};

export default useTicTacToe;
