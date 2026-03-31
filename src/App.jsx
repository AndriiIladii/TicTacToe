import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Board from "./components/Board/Board";
import StartScreen from "./components/StartScreen/StartScreen";

function App() {
  const [playerOneMark, setPlayerOneMark] = useState("X");
  const [gameMode, setGameMode] = useState("PLAYER");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <StartScreen
              playerOne={playerOneMark}
              setPlayerOne={setPlayerOneMark}
              setGameMode={setGameMode}
            />
          }
        />
        <Route
          path="/game"
          element={<Board playerOne={playerOneMark} gameMode={gameMode} />}
        />
        <Route path="*" element={`404`} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
