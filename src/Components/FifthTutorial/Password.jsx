import React from "react";
import IsValidComponent from "./IsValidComponent";
import IsInvalidComponent from "./IsInvalidComponent";

// const ValidPassword = () => <h1>ValidPassword</h1>;
// const InvalidPassword = () => <h1>InValidPassword</h1>;

const Password = ({ isValid }) => {
    // if (isValid) {
    //   return <IsValidComponent />;
    // } else {
    //   return <IsInvalidComponent />;
    // }
  return isValid ? <IsValidComponent /> : <IsInvalidComponent />;
};

export default Password;
