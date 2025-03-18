import React from "react";

const Greetings = () => {
  const greet = "Hello there";
  const date = new Date();
  const hours = date.getHours();

  return (
    <div>
      <h1>{greet}</h1>
      <h2>
        {hours < 12
          ? "Good Morning"
          : hours < 18
          ? "Good Afternoon"
          : "Good Night"}
      </h2>
      <br />
      <div>
        Date: {date.toDateString()}
        <br />
        Hour: {date.getHours()}
        <br />
        Minute: {date.getMinutes()}
        <br />
        Second: {date.getSeconds()}
      </div>
    </div>
  );
};

export default Greetings;
