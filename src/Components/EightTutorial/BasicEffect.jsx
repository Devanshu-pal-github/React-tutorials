import React, { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("Basic component mounted");
  }, []);
  // here due to providing empty dependecy array , we can see that the useEffect fires only initially.
  return <div>BasicEffect</div>;
};

export default BasicEffect;
