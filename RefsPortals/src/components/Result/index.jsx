import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ModalDialog = forwardRef(function Result(
  { targetTimer, timeRemaining, onReset },
  ref
) {
  const windowDialog = useRef();

  const formatted = (timeRemaining / 1000).toFixed(2);
  const score = Math.round((1 - timeRemaining / (targetTimer * 1000)) * 100);
  const playerLost = score === 0;

  useImperativeHandle(ref, () => {
    return {
      open() {
        windowDialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={windowDialog} className="result-modal">
      {playerLost && <h2>You lost</h2>}
      {!playerLost && <h2>Your score: {score}</h2>}
      <p>
        The target time was <strong>{targetTimer} secounds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{formatted} secounds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ModalDialog;
