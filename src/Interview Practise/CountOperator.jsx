import React, { useState } from "react";

const CountOperator = () => {
  const [count, setCount] = useState(0);
  const handleIncrementCount = () => {
    setCount((previous) => previous + 1);
    setCount((previous) => previous + 1);

    setCount((previous) => previous + 1);
  };
  const handleDecrementCount = () => {
    setCount((previous) => previous - 1);
  };
  const centeredDiv = {
    textAlign: "center",
  };

  return (
    <div style={centeredDiv}>
      <h1>Hello World</h1>
      <button onClick={handleIncrementCount}> + </button> &nbsp;
      <span>{count}</span> &nbsp;
      <button onClick={handleDecrementCount}> - </button>
    </div>
  );
};

export default CountOperator;
