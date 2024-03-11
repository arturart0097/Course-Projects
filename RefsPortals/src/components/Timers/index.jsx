import { useRef, useState } from "react";
import Result from "../Result";

function Timers({ title, targetTimer }) {
  const timer = useRef();
  const dialog = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTimer * 1000);

  const resetHandler = () => {
    setTimeRemaining(targetTimer * 1000);
  };

  const timerActive = timeRemaining > 0 && timeRemaining < targetTimer * 1000;
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    setTimeRemaining(targetTimer * 1000);
    dialog.current.open();
  }

  const startHandler = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 10);
    }, 10);
  };
  const stopHandler = () => {
    dialog.current.open();
    clearInterval(timer.current);
  };

  return (
    <>
      <Result
        ref={dialog}
        targetTimer={targetTimer}
        onReset={resetHandler}
        timeRemaining={timeRemaining}
      />

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTimer} secound{targetTimer > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerActive ? stopHandler : startHandler}>
            {!timerActive ? "Start" : "Stop"} Challenge
          </button>
        </p>
        <p className={timerActive ? "active" : undefined}>
          {timerActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}

export default Timers;
