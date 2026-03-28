import Square from "./Square";

function BoardRow({ squares, handleClick, rowOffset, xIsNext, isWinner }) {
  return (
    <>
      {squares.map((item, index) => {
        const isWinningSquare =
          isWinner && isWinner.includes(index + rowOffset);
        return (
          <Square
            key={index}
            value={item}
            onSquareClick={() => handleClick(index + rowOffset)}
            xIsNext={xIsNext}
            isWinningSquare={isWinningSquare}
          />
        );
      })}
    </>
  );
}

export default BoardRow;
