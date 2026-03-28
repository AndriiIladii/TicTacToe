import { useState } from "react";

import Board from "./Board";
import StartScreen from "./StartScreen";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [playerOneMark, setPlayerOneMark] = useState("X");
  return (
    <>
      {!isGameStarted ? (
        <StartScreen
          isGameStarted={isGameStarted}
          setIsGameStarted={setIsGameStarted}
          playerOne={playerOneMark}
          setPlayerOne={setPlayerOneMark}
        />
      ) : (
        <Board playerOne={playerOneMark} />
      )}
    </>
  );
}

export default App;
