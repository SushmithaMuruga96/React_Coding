import React, { useState } from "react";
import "./practise.css";

const SimpleCounter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [timer, setTimer] = useState(0);

  setInterval(() => {
    setTimer(timer + 1);
  }, 1000);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>This is a counter app</h1>
      <div className="mainDiv">
        <button
          className="button"
          onClick={() => setCounterValue(counterValue + 1)}
        >
          Increment
        </button>
        <div className="contentDiv">{counterValue}</div>
        <button
          className="button"
          onClick={() => setCounterValue(counterValue - 1)}
        >
          Decrement
        </button>
      </div>

      <div className="timer">{timer}</div>
    </>
  );
};

export default SimpleCounter;
