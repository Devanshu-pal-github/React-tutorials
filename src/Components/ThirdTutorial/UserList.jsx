import React from "react";

const UserList = () => {
  const users = [
    {
      id: 1,
      name: "John",
      age: 25,
      email: "john@gmail.com",
    },
    {
      id: 2,
      name: "Bob",
      age: 30,
      email: "bob@gmail.com",
    },
    {
      id: 3,
      name: "Alice",
      age: 35,
      email: "alice@gmail.com",
    },
    {
      id: 4,
      name: "Doe",
      age: 40,
      email: "doe@gmail.com",
    },
  ];
  return (
    <div>
      {/* {users.map(({ id, name, age, email }) => (
        <div key={id}>
          <h2>{name}</h2>
          <p>{age}</p>
          <p>{email}</p>
        </div>
      ))} */}

      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.age}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
