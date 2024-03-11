import "./style.css";
import { useRef, useState } from "react";

function Player() {
  const playerName = useRef();
  const [name, setName] = useState("");

  const clickHandler = () => {
    setName(playerName.current.value);
    playerName.current.value = "";
  };

  return (
    <section id="player">
      <h2>Welcome {name || "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={() => clickHandler()}>Set Name</button>
      </p>
    </section>
  );
}

export default Player;
