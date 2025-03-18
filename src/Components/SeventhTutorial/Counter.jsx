import React from "react";
import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const onClickHandler = () => {
    setCount(count + 1);
  };
  return (
    <div>
      {" "}
      <h1>Your count: {count}</h1>
      <button onClick={onClickHandler}>click me</button>
    </div>
  );
};

export default Counter;
