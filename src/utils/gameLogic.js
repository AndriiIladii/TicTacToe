const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function getSmartMove(squares, symbol) {
  for (let i = 0; i < WINNING_LINES.length; i++) {
    const [a, b, c] = WINNING_LINES[i];

    if (squares[a] === symbol && squares[b] === symbol && squares[c] === null) {
      return c;
    } else if (
      squares[a] === symbol &&
      squares[c] === symbol &&
      squares[b] === null
    ) {
      return b;
    } else if (
      squares[b] === symbol &&
      squares[c] === symbol &&
      squares[a] === null
    ) {
      return a;
    }
  }

  return null;
}

export function gameLogic(squares) {
  for (let i = 0; i < WINNING_LINES.length; i++) {
    const [a, b, c] = WINNING_LINES[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        line: WINNING_LINES[i],
      };
    }
  }

  return null;
}
