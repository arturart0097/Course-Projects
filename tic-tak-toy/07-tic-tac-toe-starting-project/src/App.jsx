import { useState } from "react";
import { WINNING_COMBINATIONS } from "./components/WINNING_COMBINATIONS.js";
import GameBar from "./components/GameBar";
import Header from "./components/Header";
import Player from "./components/Player";
import Log from "./components/Log";
import GameOver from "./components/GameOver";

const PLAYERS = {
  X: "Player 1",
  0: "Player 2",
};

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function devireActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "0";
  }
  return currentPlayer;
}

function deriveWinner(players, gameBoard) {
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstCombSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secoundCombSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdCombSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstCombSymbol &&
      firstCombSymbol === secoundCombSymbol &&
      firstCombSymbol === thirdCombSymbol
    ) {
      winner = players[firstCombSymbol];
    }
  }
  return winner;
}

function devireGameBoard(gameTurns) {
  let gameBoard = [...initialGameBoard.map((el) => [...el])];
  for (let turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);
  // const [activePlayer, setActivePlayer] = useState("X");

  const activePlayer = devireActivePlayer(gameTurns);
  const gameBoard = devireGameBoard(gameTurns);
  const winner = deriveWinner(players, gameBoard);

  const hasDraw = gameTurns.length === 9 && !winner;
  const switchSymbol = (rowIndex, colIndex) => {
    // setActivePlayer((curPlayer) => (curPlayer === "X" ? "0" : "X"));
    setGameTurns((prev) => {
      let currentPlayer = devireActivePlayer(prev);
      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prev,
      ];
      return updateTurns;
    });
  };
  const handlerRestart = () => {
    setGameTurns([]);
  };
  const handlerNamePlayer = (symbol, newName) => {
    setPlayers((prev) => {
      return {
        ...prev,
        [symbol]: newName,
      };
    });
  };

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              name={players.X}
              symbol="X"
              isActive={activePlayer === "X"}
              onHandlerNamePlayer={handlerNamePlayer}
            />
            <Player
              name={players["0"]}
              symbol="0"
              isActive={activePlayer === "0"}
              onHandlerNamePlayer={handlerNamePlayer}
            />
          </ol>
          {(winner || hasDraw) && (
            <GameOver winner={winner} onRestart={() => handlerRestart()} />
          )}
          <GameBar onSwitchSymbol={switchSymbol} board={gameBoard} />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
}

export default App;
