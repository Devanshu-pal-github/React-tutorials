import React from "react";
const Button = () => {
  const HandleClick = () => {
    alert("button clicked!!!");
    console.log("you clicked the button");
  };
  return (
    <button
      onClick={() => {
        {
          HandleClick();
        }
      }}
    >
      click me
    </button>
  );
};
const Copy = () => {
  const HandleCopy = () => {
    console.log("text copied");
    alert("text copied");
  };
  return (
    <h1
      onCopy={() => {
        HandleCopy();
      }}
    >
      Copy this text if you dare!!
    </h1>
  );
};
const Move = () => {
  const HandleMove = () => {
    console.log("text moved");
    alert("text moved");
  };
  return (
    <h1
      onMouseMove={() => {
        HandleMove();
      }}
    >
      Move the mouse over me!!
    </h1>
  );
};
const EventHandler = () => {
  return (
    <div>
      {/* <Button /> */}
      {/* <Copy /> */}
      <Move />
    </div>
  );
};

export default EventHandler;
