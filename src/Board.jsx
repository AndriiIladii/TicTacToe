import { useState, useEffect } from "react";

import BoardRow from "./BoardRow";
import styles from "./Board.module.scss";

function Board({ playerOne }) {
  const savedGameScore = localStorage.getItem("gameScore");
  const [winningLine, setWinningLine] = useState(null);
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [scores, setScores] = useState(
    savedGameScore
      ? JSON.parse(savedGameScore)
      : { xWins: 0, oWins: 0, draws: 0 },
  );

  useEffect(() => {
    const game = { squares, xIsNext, scores };
    localStorage.setItem("gameScore", JSON.stringify(game));
  }, [squares, xIsNext, scores]);

  const iconX = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.3569 0.276855C15.7261 -0.09225 16.3246 -0.0921972 16.6938 0.276855L19.7231 3.30615C20.0923 3.67535 20.0923 4.27384 19.7231 4.64307L14.3657 9.99951L19.7231 15.3569C20.0923 15.7261 20.0923 16.3246 19.7231 16.6938L16.6938 19.7231C16.3246 20.0923 15.7261 20.0923 15.3569 19.7231L9.99951 14.3657L4.64307 19.7231C4.27384 20.0923 3.67535 20.0923 3.30615 19.7231L0.276855 16.6938C-0.0921972 16.3246 -0.09225 15.7261 0.276855 15.3569L5.6333 9.99951L0.276855 4.64307C-0.0921963 4.27386 -0.0922504 3.67533 0.276855 3.30615L3.30615 0.276855C3.67533 -0.0922504 4.27386 -0.0921963 4.64307 0.276855L9.99951 5.6333L15.3569 0.276855Z"
        fill="#A8BFC9"
      />
    </svg>
  );

  const iconO = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.8701 0C24.635 0 31.7409 7.10525 31.7412 15.8701C31.7412 24.6352 24.6352 31.7412 15.8701 31.7412C7.10525 31.7409 0 24.635 0 15.8701C0.000261299 7.10541 7.10541 0.000261315 15.8701 0ZM15.8701 9.40527C12.2995 9.40553 9.40553 12.2995 9.40527 15.8701C9.40527 19.4409 12.2994 22.3357 15.8701 22.3359C19.4411 22.3359 22.3359 19.4411 22.3359 15.8701C22.3357 12.2994 19.4409 9.40527 15.8701 9.40527Z"
        fill="#A8BFC9"
      />
    </svg>
  );

  const winnerXIcon = (
    <svg
      width="63"
      height="63"
      viewBox="0 0 63 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M47.6079 1.17163C49.17 -0.390385 51.7021 -0.390439 53.2642 1.17163L61.4624 9.3689C63.0244 10.931 63.0244 13.4641 61.4624 15.0261L45.1714 31.3171L61.4624 47.6082C63.024 49.1702 63.0241 51.7024 61.4624 53.2644L53.2642 61.4626C51.7022 63.0243 49.17 63.0243 47.6079 61.4626L31.3169 45.1716L15.0259 61.4626C13.4638 63.0246 10.9307 63.0246 9.36865 61.4626L1.17139 53.2644C-0.390684 51.7023 -0.39063 49.1703 1.17139 47.6082L17.4624 31.3171L1.17139 15.0261C-0.39071 13.464 -0.39071 10.931 1.17139 9.3689L9.36865 1.17163C10.9307 -0.390466 13.4638 -0.390466 15.0259 1.17163L31.3169 17.4626L47.6079 1.17163Z"
        fill="#31C3BD"
      />
    </svg>
  );

  const winnerOIcon = (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 0C49.6731 0 64 14.3269 64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0ZM32 18.9629C24.7998 18.9629 18.9629 24.7998 18.9629 32C18.9629 39.2002 24.7998 45.0371 32 45.0371C39.2002 45.0371 45.0371 39.2002 45.0371 32C45.0371 24.7998 39.2002 18.9629 32 18.9629Z"
        fill="#F2B137"
      />
    </svg>
  );

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
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

    const winnerIs = calculateWinner(nextSquares);

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

  function calculateWinner(squares) {
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
        return {
          winner: squares[a],
          line: lines[i],
        };
      }
    }

    return null;
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status =
      winner.winner === "X" ? (
        <div className={styles.winnerWrapper}>
          <p className={styles.winnerBlock}>
            {winnerXIcon}{" "}
            <span className={styles.winnerText}>Takes the round</span>
          </p>
          <button onClick={handleReset}>New Game</button>
        </div>
      ) : (
        <div className={styles.winnerWrapper}>
          <p className={styles.winnerBlock}>
            {winnerOIcon}{" "}
            <span className={styles.winnerText}>Takes the round</span>
          </p>
          <button onClick={handleReset}>New Game</button>
        </div>
      );
  } else if (!squares.includes(null)) {
    status = (
      <div className={styles.winnerWrapper}>
        <p className={styles.winnerBlock}>
          <span className={styles.winnerText}>Round Tied!</span>
        </p>
        <button onClick={handleReset}>New Game</button>
      </div>
    );
  } else {
    status = null;
  }

  return (
    <>
      <div className={styles.boardWrapper}>
        {status && <div className={styles.modal}>{status}</div>}
        <div className={styles.boardTop}>
          <div className={styles.boardLogo}>
            <svg
              width="71"
              height="32"
              viewBox="0 0 71 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.9756 2.21216C23.5377 0.650062 26.0707 0.650065 27.6328 2.21216L28.9033 3.48267C30.4653 5.04477 30.4654 7.57782 28.9033 9.13989L22.1719 15.8704L28.9033 22.6018C30.4654 24.1639 30.4654 26.6969 28.9033 28.259L27.6328 29.5295C26.0707 31.0916 23.5377 31.0916 21.9756 29.5295L15.2441 22.7981L8.51367 29.5295C6.9516 31.0916 4.41855 31.0916 2.85645 29.5295L1.58594 28.259C0.0238464 26.6969 0.0238424 24.1639 1.58594 22.6018L8.31641 15.8704L1.58594 9.13989C0.0238524 7.57781 0.0238764 5.04477 1.58594 3.48267L2.85645 2.21216C4.41855 0.650099 6.95159 0.650074 8.51367 2.21216L15.2441 8.94263L21.9756 2.21216Z"
                fill="#31C3BD"
              />
              <path
                d="M54.3589 0C63.1238 0 70.2297 7.10525 70.23 15.8701C70.23 24.6352 63.124 31.7412 54.3589 31.7412C45.594 31.7409 38.4888 24.635 38.4888 15.8701C38.489 7.10541 45.5942 0.000261315 54.3589 0ZM54.3589 9.40527C50.7883 9.40553 47.8943 12.2995 47.894 15.8701C47.894 19.4409 50.7881 22.3357 54.3589 22.3359C57.9298 22.3359 60.8247 19.4411 60.8247 15.8701C60.8244 12.2994 57.9297 9.40527 54.3589 9.40527Z"
                fill="#F2B137"
              />
            </svg>
          </div>
          <div className={styles.boardTurn}>
            {xIsNext ? <span>{iconX}Turn</span> : <span>{iconO} Turn</span>}
          </div>
          <div className={styles.boardReset}>
            <button className={styles.btnReset} onClick={handleReset}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5241 2.75843e-07H17.644C17.3812 -0.000279724 17.1679 0.21264 17.1676 0.47564C17.1676 0.48336 17.1678 0.49108 17.1681 0.4988L17.3268 3.78292C15.46 1.58176 12.7198 0.31428 9.83484 0.31744C4.41536 0.31748 -0.00395734 4.74324 2.65924e-06 10.1663C0.00396266 15.598 4.40584 20 9.83484 20C12.2702 20.0034 14.6195 19.0993 16.425 17.4639C16.6208 17.2885 16.6375 16.9874 16.4622 16.7915C16.4563 16.7849 16.4502 16.7785 16.444 16.7722L15.0957 15.423C14.9186 15.2459 14.6346 15.2363 14.4461 15.4012C11.5521 17.949 7.14188 17.6669 4.59564 14.7709C2.0494 11.875 2.3314 7.46188 5.22544 4.914C8.11948 2.36612 12.5297 2.64828 15.0759 5.54424C15.2755 5.77124 15.4601 6.01096 15.6287 6.26188L11.6024 6.06864C11.3398 6.05616 11.1169 6.25896 11.1044 6.52168C11.104 6.5294 11.1038 6.53712 11.1039 6.54484V8.4262C11.1039 8.6892 11.3169 8.9024 11.5798 8.9024H19.5242C19.787 8.9024 20 8.6892 20 8.4262V0.4762C20 0.2132 19.787 2.75843e-07 19.5241 2.75843e-07Z"
                  fill="#1F3641"
                />
              </svg>
            </button>
          </div>
        </div>

        {[0, 3, 6].map((offset) => {
          return (
            <div className={styles.boardRow} key={offset}>
              <BoardRow
                squares={squares.slice(offset, offset + 3)}
                handleClick={handleClick}
                rowOffset={offset}
                xIsNext={xIsNext}
                isWinner={winner?.line}
              />
            </div>
          );
        })}

        <div className={styles.statisticWrapper}>
          <div className={styles.statisticItem}>
            <p>{playerOne === "X" ? "P1 Wins" : "P2 Wins"}</p>
            <p>{scores.xWins}</p>
          </div>
          <div className={styles.statisticItem}>
            <p>Ties</p>
            <p>{scores.draws}</p>
          </div>
          <div className={styles.statisticItem}>
            <p>{playerOne === "O" ? "P1 Wins" : "P2 Wins"}</p>
            <p>{scores.oWins}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Board;
