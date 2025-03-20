import React, { useRef } from "react";

const UseRefHook = () => {
  const inputElement = useRef(null);
  console.log(inputElement);
  const focusInput = () => {
    inputElement.current.value = "Devanshu";
    inputElement.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={() => focusInput()}>Focus & write Devanshu</button>
    </div>
  );
};

export default UseRefHook;
