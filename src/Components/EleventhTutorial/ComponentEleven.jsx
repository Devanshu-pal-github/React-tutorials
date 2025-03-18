import React, { use } from "react";
import { useContext } from "react";
import { UserContext, UserContextTwo } from "./UseContextHook";
const ComponentEleven = () => {
  const UserName = useContext(UserContext);
  const UserAge = useContext(UserContextTwo);
  return (
    <h1>
      My name is {UserName}, and I am {UserAge} old
    </h1>
  );
};

export default ComponentEleven;
