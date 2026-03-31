import styles from "./ScoreBoard.module.scss";

function ScoreBoard({ playerOne, ...scores }) {
  return (
    <div className={styles.ScoreBoardWrapper}>
      <div className={styles.ScoreBoardItem}>
        <p>{playerOne === "X" ? "P1 Wins" : "P2 Wins"}</p>
        <p>{scores.xWins}</p>
      </div>
      <div className={styles.ScoreBoardItem}>
        <p>Ties</p>
        <p>{scores.draws}</p>
      </div>
      <div className={styles.ScoreBoardItem}>
        <p>{playerOne === "O" ? "P1 Wins" : "P2 Wins"}</p>
        <p>{scores.oWins}</p>
      </div>
    </div>
  );
}

export default ScoreBoard;
