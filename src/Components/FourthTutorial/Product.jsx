import React from "react";

// const Product = (props) => {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <p>{props.price}</p>
//     </div>
//   );
// };

// Destructuring props
const Product = ({ name, price }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  );
};
export default Product;
