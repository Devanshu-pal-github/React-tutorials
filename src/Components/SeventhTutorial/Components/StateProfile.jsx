import React from "react";
import { useState } from "react";
const StateProfile = () => {
  const [profile, setProfile] = useState([
    {
      name: "john",
      age: 23,
    },
    {
      name: "bhola",
      age: 22,
    },
  ]);
  const onChangeHandler = () => {
    const inputValue = document.querySelector("input").value;
    setProfile(
      profile.map((f) => (f.name === "john" ? { ...f, name: inputValue } : f))
    );
  };
  return (
    <div>
      {profile.map((person, index) => (
        <li key={index}>
          {person.name}, {person.age}
        </li>
      ))}
      <input type="text" />
      <button onClick={onChangeHandler}>Change name for the first entry</button>
    </div>
  );
};

export default StateProfile;
