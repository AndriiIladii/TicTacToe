import ResultModal from "../ResultModal/ResultModal";

import useTicTacToe from "../../hooks/useTicTacToe";

import { gameLogic } from "../../utils/gameLogic";
import BoardRow from "../../BoardRow";
import styles from "./Board.module.scss";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import BoardHeader from "../BoardHeader/BoardHeader";

function Board({ playerOne, gameMode }) {
  const {
    squares,
    xIsNext,
    scores,
    handleClick,
    handleReset,
    handleQuit,
    winningLine,
  } = useTicTacToe(playerOne, gameMode);
  const winner = gameLogic(squares);

  return (
    <>
      <div className={styles.boardWrapper}>
        {(winner || !squares.includes(null)) && (
          <div className={styles.modal}>
            <ResultModal
              playerOne={playerOne}
              winner={winner}
              squares={squares}
              onQuit={handleQuit}
              onNextRound={handleReset}
            />
          </div>
        )}
        <BoardHeader xIsNext={xIsNext} onReset={handleReset} />

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
        <ScoreBoard playerOne={playerOne} {...scores} />
      </div>
    </>
  );
}

export default Board;
