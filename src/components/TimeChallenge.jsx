import React from "react";
import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

const TimeChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.showModal();
  }
  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 10);
    }, 10);
  };

  console.log(timeRemaining)

  const handleStop = () => {
    dialog.current.showModal();
    clearInterval(timer.current);
   
  };
  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  };
  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset ={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeIsActive ? handleStop : handleStart}>
            {timeIsActive ? "Stop Challange" : "Start Challange"}
          </button>
        </p>
        <p className={timeIsActive ? "active" : undefined}>
          {timeIsActive ? "Time is running ..." : "Time inactive"}
        </p>
      </section>
    </>
  );
};

export default TimeChallenge;
