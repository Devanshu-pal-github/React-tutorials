import React from "react";
import { createContext } from "react";
import ComponentOne from "./Components/ComponentOne";

export const UserContext = createContext();
export const UserContextTwo = createContext();
const name = "Devanshu pal";
const age = 20;

const ContextApi = () => {
  return (
    <UserContext.Provider value={name}>
      <UserContextTwo.Provider value={age}>
        <ComponentOne />
      </UserContextTwo.Provider>
    </UserContext.Provider>
  );
};

export default ContextApi;
