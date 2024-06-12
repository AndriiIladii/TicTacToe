import React from "react";
import Board from "./components/Board";
import * as styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.heading}>
      TicTacToe
      <div className={styles.container}>
        <Board />
      </div>
    </div>
  );
};

export default App;
