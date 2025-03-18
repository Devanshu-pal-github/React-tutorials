import React from "react";
import { useState } from "react";
const Friends = () => {
  const [Friend, setFriend] = useState([
    { name: "Sara", age: 20 },
    { name: "John", age: 22 },
    { name: "Mike", age: 24 },
    { name: "Tom", age: 26 },
  ]);

  const addFriendHandler = () => {
    setFriend([...Friend, { name: "pajji", age: 30 }]);
  };
  const removeFriendHandler = () => {
    setFriend(Friend.filter((f) => f.name !== "pajji"));
  };
  const updateOneFriendHandler = () => {
    setFriend(
      Friend.map((f) => (f.name === "Tom" ? { ...f, name: "Tom Gates" } : f))
    );
  };
  return (
    <div>
      {Friend.map((f) => {
        return (
          <li key={Math.random()}>
            {f.name}, {f.age}
          </li>
        );
      })}
      <button onClick={addFriendHandler}>Add Friend</button>
      <br />
      <button onClick={removeFriendHandler}>Remove Friend</button>
      <br />
      <button onClick={updateOneFriendHandler}>Update one Friend</button>
    </div>
  );
};

export default Friends;
