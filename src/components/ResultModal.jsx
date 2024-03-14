import React from "react";
import { forwardRef } from "react";
import { createPortal } from "react-dom";
const ResultModal = forwardRef(function ResultModal(
  { remainingTime, targetTime, onReset },
  ref
) {
  const userLost = remainingTime <= 0;
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  const formatedRemainingTime = (remainingTime / 1000).toFixed(2);
  return createPortal(
    <dialog ref={ref} className="result-modal">
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your Score : {score}</h2>}
      <p>
        The target time was <strong>{targetTime} second</strong>
      </p>
      <p>
        You stopped the time with{" "}
        <strong>{formatedRemainingTime} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
