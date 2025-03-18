import React, { useState, useEffect } from "react";

const Name = () => {
  const [name, setName] = useState(() => {
    const FetchedName = localStorage.getItem("name");
    return FetchedName ? FetchedName : "";
  });
  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);
  const onChangeHandler = (e) => {
    setName(e.target.value);
  };
  const onClickHandler = () => {
    setName("");
  };
  return (
    <div>
      <h1>Your name is : {name}</h1>
      <input
        type="text"
        placeholder="Enter your name:"
        value={name}
        onChange={onChangeHandler}
      />
      <br />
      <button onClick={onClickHandler}>Clear</button>
    </div>
  );
};

export default Name;
