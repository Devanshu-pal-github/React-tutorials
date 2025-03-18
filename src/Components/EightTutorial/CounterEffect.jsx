import { useState, useEffect } from "react";
import React from "react";

const CounterEffect = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("counter render again.");
  }, [counter]);
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
};

export default CounterEffect;
