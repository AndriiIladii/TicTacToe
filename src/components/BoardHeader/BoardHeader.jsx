import IconX from "../icons/IconX";
import IconO from "../icons/IconO";
import LogoIcon from "../icons/LogoIcon";
import ResetIcon from "../icons/ResetIcon";

import styles from "./BoardHeader.module.scss";

function BoardHeader({ xIsNext, onReset }) {
  return (
    <div className={styles.boardHeaderWrapper}>
      <div className={styles.boardHeaderLogo}>
        <LogoIcon />
      </div>
      <div className={styles.boardHeaderTurn}>
        {xIsNext ? (
          <span>
            <IconX /> Turn
          </span>
        ) : (
          <span>
            <IconO /> Turn
          </span>
        )}
      </div>
      <div className={styles.boardHeaderResetBtn}>
        <button className={styles.btnReset} onClick={onReset}>
          <ResetIcon />
        </button>
      </div>
    </div>
  );
}

export default BoardHeader;
