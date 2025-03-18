import React from "react";
import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  const HandleClickInc = () => {
    console.log("Button clicked");
    //   alert("Button clicked");
    setCount(count + 1);
  };
  const HandleClickDec = () => {
    console.log("Button clicked");
    //   alert("Button clicked");
    setCount(count - 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={HandleClickInc}>Click me </button>
      <button onClick={HandleClickDec}>Click me </button>
    </div>
  );
};

export default UseState;
