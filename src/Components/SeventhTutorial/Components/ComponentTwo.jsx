import React from "react";

const ComponentTwo = ({ count, onClickHandler }) => {
  return (
    <div>
      <h1>Component two</h1>
      <p>{count}</p>
      <button onClick={onClickHandler}>click me</button>
    </div>
  );
};

export default ComponentTwo;
