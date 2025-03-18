import React from "react";

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "product 1",
      price: 100,
      description: "this is product 1",
    },
    {
      id: 2,
      name: "product 2",
      price: 200,
      description: "this is product 2",
    },
    {
      id: 3,
      name: "product 3",
      price: 300,
      description: "this is product 3",
    },
    {
      id: 4,
      name: "product 4",
      price: 400,
      description: "this is product 4",
    },
    {
      id: 5,
      name: "product 5",
      price: 500,
      description: "this is product 5",
    },
  ];
  return (
    <div>
      {products.map(({ id, name, price, description }) => (
        <div key={id}>
          <h2>{name}</h2>
          <p>{price}</p>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
