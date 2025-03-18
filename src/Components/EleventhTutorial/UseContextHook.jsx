import React from "react";
import { createContext } from "react";
import ComponentEleven from "./ComponentEleven";

export const UserContext = createContext();
export const UserContextTwo = createContext();
const name = "Devanshu pal";
const age = 20;

const UseContextHook = () => {
  return (
    <UserContext.Provider value={name}>
      <UserContextTwo.Provider value={age}>
        <ComponentEleven />
      </UserContextTwo.Provider>
    </UserContext.Provider>
  );
};

export default UseContextHook;
