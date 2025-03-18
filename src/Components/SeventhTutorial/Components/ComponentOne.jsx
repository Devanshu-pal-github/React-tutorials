import React from "react";

const ComponentOne = ({ count, onClickHandler }) => {
  return (
    <div>
      <h1>Component one</h1>
      <p>{count}</p>
      <button onClick={onClickHandler}>click me</button>
    </div>
  );
};

export default ComponentOne;
