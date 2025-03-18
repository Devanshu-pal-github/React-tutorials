import React from "react";
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";
import { useState } from "react";

const MainComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <ComponentOne count={count} onClickHandler={() => setCount(count + 1)} />
      <ComponentTwo count={count} onClickHandler={() => setCount(count + 1)} />
    </div>
  );
};

export default MainComponent;
