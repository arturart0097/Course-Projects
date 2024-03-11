import { useEffect, useState } from "react";

const TIMER = 5000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [progressBar, setProgressBar] = useState(TIMER);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressBar((prev) => prev - 5);
    }, 5);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      onCancel();
    }, TIMER);

    return () => {
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={progressBar} max={TIMER} />
    </div>
  );
}
