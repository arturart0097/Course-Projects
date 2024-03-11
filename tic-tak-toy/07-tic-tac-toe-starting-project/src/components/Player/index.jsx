import { useState } from "react";

function Player({ name, symbol, isActive, onHandlerNamePlayer }) {
  const [playerName, setPlayerName] = useState(name);
  const [edit, setEdit] = useState(false);
  const editNameHandler = () => {
    setEdit((edit) => !edit);
    if (edit) {
      onHandlerNamePlayer(symbol, playerName);
    }
  };
  const newPlayerName = (event) => {
    const etv = event.target.value;
    setPlayerName(etv);
  };

  const initialPlayerName = edit ? (
    <input
      type="text"
      maxLength={12}
      required
      onChange={newPlayerName}
      value={playerName}
    />
  ) : (
    <span className="player-name">{playerName < 1 ? name : playerName}</span>
  );

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {initialPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editNameHandler}>{!edit ? "Edit" : "Save"}</button>
    </li>
  );
}

export default Player;
