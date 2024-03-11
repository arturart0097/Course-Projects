import Header from "./components/Header/index.jsx";
import Player from "./components/Player/index.jsx";
import Timers from "./components/Timers/index.jsx";
import { gameLevels } from "./utils/gameLevels.js";

function App() {
  const gameBoard = gameLevels.map((el, i) => (
    <Timers key={i} title={el.title} targetTimer={el.targetTimer} />
  ));

  return (
    <>
      <Header />
      <Player />
      <div id="challenges">{gameBoard}</div>
    </>
  );
}

export default App;
