import React, { useReducer } from "react";

const initialState = {
  count: 0,
};
//here the reducer take state , as what thing we are updating, and action as , how are we updating.
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    default:
      return state;
  }
};
const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>
      <br />
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </button>
      <br />
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
      <br />
      Count: {state.count}
    </div>
  );
};

export default UseReducerHook;
