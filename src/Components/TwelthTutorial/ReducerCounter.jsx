import { useState } from "react";
import React, { useReducer } from "react";
import { CounterReducer, initialState } from "./CounterReducer";

const ReducerCounter = () => {
  const [state, dispatch] = useReducer(CounterReducer, initialState);
  const [inputValue, setInputValue] = React.useState(0);
  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };
  const handleIncrementByAmount = () => {
    dispatch({ type: "incrementByAmount", payload: Number(inputValue) }); // Number Constructor is used to convert into number.
    setInputValue(0);
  };
  const handleDecrementByAmount = () => {
    dispatch({ type: "decrementByAmount", payload: Number(inputValue) });
    setInputValue(0);
  };
  const handleReset = () => {
    dispatch({ type: "reset" });
  };
  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleIncrementByAmount}>Add</button>
      <button onClick={handleDecrementByAmount}>Subtract</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default ReducerCounter;
