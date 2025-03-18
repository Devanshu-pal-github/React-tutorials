import React from "react";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";

const PropDrilling = () => {
  const name = "Devanshu";
  return (
    <div className="prop-drilling">
      <h1>PropDrilling</h1>
      <ComponentA name={name} />
      <ComponentB />
      <ComponentC />
    </div>
  );
};

export default PropDrilling;
