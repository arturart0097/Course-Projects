import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "./store";

const Counter = () => {
  const dispatch = useDispatch();
  const { counter, showCounter } = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const resetHandler = () => {
    dispatch(counterActions.reset());
  };

  const toggleHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}

      {showCounter && (
        <div>
          <button onClick={incrementHandler}>increment</button>
          <button onClick={increaseHandler}>increase 5</button>
          <button onClick={decrementHandler}>decrement</button>
        </div>
      )}

      {showCounter && (
        <button
          style={{ background: "#ff7474", border: "none" }}
          onClick={resetHandler}
        >
          reset
        </button>
      )}

      <button onClick={toggleHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
