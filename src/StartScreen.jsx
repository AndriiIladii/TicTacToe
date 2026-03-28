import styles from "./StartScreen.module.scss";

function StartScreen(props) {
  const { isGameStarted, setIsGameStarted, playerOne, setPlayerOne } = props;

  function handleStart(e) {
    e.preventDefault();
    setIsGameStarted(true);
  }
  return (
    <>
      <div className={styles.startGameWrapper}>
        <h1>PICK PLAYER 1’S MARK</h1>
        <div className={styles.buttonSwitcher}>
          <button
            className={`${styles.buttonX} ${playerOne === "X" ? styles.active : ""}`}
            onClick={() => setPlayerOne("X")}
          ></button>
          <button
            className={`${styles.buttonO} ${playerOne === "O" ? styles.active : ""}`}
            onClick={() => setPlayerOne("O")}
          ></button>
        </div>
        <p className={styles.hint}>REMEMBER : X GOES FIRST</p>
      </div>

      <button className={styles.startGame} onClick={handleStart}>
        NEW GAME (VS PLAYER)
      </button>
    </>
  );
}

export default StartScreen;
