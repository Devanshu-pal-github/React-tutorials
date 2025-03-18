import React from "react";
import { UserContext, UserContextTwo } from "../ContextApi";
const ComponentOne = () => {
  return (
    <UserContext.Consumer>
      {(name) => {
        // return <h1>{name}</h1>;
        return (
          <UserContextTwo.Consumer>
            {(age) => {
              return (
                <h1>
                  My name is :{name}.
                  <br />
                  My age is: {age}
                </h1>
              );
            }}
          </UserContextTwo.Consumer>
        );
      }}
    </UserContext.Consumer>
  );
};

export default ComponentOne;
