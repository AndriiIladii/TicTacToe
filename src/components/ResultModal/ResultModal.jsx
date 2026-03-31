import WinnerXIcon from "../icons/WinnerXIcon";
import WinnerOIcon from "../icons/WinnerOIcon";
import styles from "./ResultModal.module.scss";

function ResultModal(props) {
  const { squares, playerOne, winner, onQuit, onNextRound } = props;

  let status;
  if (winner) {
    status =
      winner.winner === "X" ? (
        <div className={styles.ResultModalWrapper}>
          <p className={styles.ResultModalUpperText}>
            {playerOne === "X" ? "Player 1 Wins" : "Player 2 Wins"}
          </p>
          <p className={styles.ResultModalBlock}>
            <WinnerXIcon />
            <span className={styles.winnerXText}>Takes the round</span>
          </p>
          <div className={styles.ResultModalBtnWrapper}>
            <button className={styles.quit} onClick={onQuit}>
              Quit
            </button>
            <button onClick={onNextRound}>Next Round</button>
          </div>
        </div>
      ) : (
        <div className={styles.ResultModalWrapper}>
          <p className={styles.ResultModalUpperText}>
            {playerOne === "O" ? "Player 1 Wins" : "Player 2 Wins"}
          </p>
          <p className={styles.ResultModalBlock}>
            <WinnerOIcon />
            <span className={styles.winnerOText}>Takes the round</span>
          </p>
          <div className={styles.ResultModalBtnWrapper}>
            <button className={styles.quit} onClick={onQuit}>
              Quit
            </button>
            <button onClick={onNextRound}>Next Round</button>
          </div>
        </div>
      );
  } else if (!squares.includes(null)) {
    status = (
      <div className={styles.ResultModalWrapper}>
        <p className={styles.ResultModalBlock}>
          <span className={styles.winnerText}>Round Tied!</span>
        </p>
        <div className={styles.ResultModalBtnWrapper}>
          <button className={styles.quit} onClick={onQuit}>
            Quit
          </button>
          <button onClick={onNextRound}>Next Round</button>
        </div>
      </div>
    );
  } else {
    status = null;
  }

  return status;
}

export default ResultModal;
