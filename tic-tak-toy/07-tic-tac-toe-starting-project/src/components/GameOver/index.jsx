import { useClickOutside } from "../../hooks/useClickOutside";

function GameOver({ winner, onRestart }) {
  const { ref } = useClickOutside(onRestart);

  return (
    <div id="game-over" ref={ref}>
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a drow</p>}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
}

export default GameOver;
