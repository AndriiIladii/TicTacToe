import { useNavigate } from "react-router-dom";
import LogoIcon from "../icons/LogoIcon";

import styles from "./StartScreen.module.scss";

function StartScreen(props) {
  const { playerOne, setPlayerOne, setGameMode } = props;
  const navigate = useNavigate();

  function handleStart(mode) {
    setGameMode(mode);
    navigate("/game");
  }
  return (
    <>
      <div className={styles.startGameMainBlock}>
        <div className={styles.startGameLogo}>
          <LogoIcon />
        </div>
        <div className={styles.startGameWrapper}>
          <h1>PICK PLAYER 1’S MARK</h1>
          <div className={styles.buttonSwitcher}>
            <div
              className={`${styles.sliderIndicator} ${playerOne === "O" ? styles.slideRight : ""}`}
            />
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

        <div className={styles.startGameBtnsWrapper}>
          <button
            className={`${styles.startGame} ${styles.CPU}`}
            onClick={() => handleStart("CPU")}
          >
            NEW GAME (VS CPU)
          </button>
          <button
            className={styles.startGame}
            onClick={() => handleStart("PLAYER")}
          >
            NEW GAME (VS PLAYER)
          </button>
        </div>
      </div>
    </>
  );
}

export default StartScreen;
