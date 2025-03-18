import React from "react";

const ProductDetails = () => {
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
      <h1>Info About Products.</h1>
      {/* {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div> */}
      {/* //Another way to do the same thing is: */}
      {products.map(({ id, name, price, description }) => (
        <div key={id}>
          <h2>{name}</h2>
          <p>{price}</p>
          <p>{description}</p>
        </div>
      ))}
      <p>
        To individually grab info of a product, use: for name:{" "}
        {products[0].name},
        <br />
        for price: {products[0].price},
        <br />
        for Description: {products[0].description}
        <br />
        use: for name: {products[1].name},
        <br />
        for price: {products[1].price},
        <br />
        for Description: {products[1].description}
        <br />
        use: for name: {products[2].name},
        <br />
        for price: {products[2].price},
        <br />
        for Description: {products[2].description}
      </p>
    </div>
  );
};

export default ProductDetails;
