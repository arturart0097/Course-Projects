function GameBar({ onSwitchSymbol, board }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // const gameBoardHandler = (colIndex, rowIndex) => {
  //   setGameBoard((prev) => {
  //     const updateBoard = [...prev.map((el) => [...el])];
  //     updateBoard[rowIndex][colIndex] = symbol;
  //     return updateBoard;
  //   });
  //   onSwitchSymbol();
  // };

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSwitchSymbol(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBar;
