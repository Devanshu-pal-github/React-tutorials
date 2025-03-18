import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("object");
    document.title = `increment :${value}`;
  }, [value]);
  return (
    <div>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        click me
      </button>
    </div>
  );
};
// here we demonstrated that , as the value in the function changes, that is in the useState, then the function or the task inside the useEffect rerenders every time. also because we are not providing any dependency array.
// now if we provide it with an empty dependency array, then it will only be fired once initially and now every time we click on the button.so it just ensures that the useEffect's callback function runs only once.
//now we may ask that , what is the difference if we completely no provide the dependency array, and if we provide the value of our useState, so basically we provide it because whenever something is changed in the state, and triggers useEffect then the callback function will rerender, not because of any other state, so we can make a custom useEffect for any specific state.
// also make sure to use conditionals inside the useEffect.

export default UseEffect;
