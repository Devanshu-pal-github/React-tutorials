import React from "react";

const Cart = () => {
  const cartItems = [
    { id: 1, name: "Laptop", price: 1000, qty: 2 },
    { id: 2, name: "Mobile", price: 500, qty: 3 },
    { id: 3, name: "Headphone", price: 100, qty: 5 },
  ];
  return (
    <div>
      {cartItems.length > 0 && (
        <h2> You have {cartItems.length} items in your cart.</h2>
      )}
      <br />
      {cartItems.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <h4>{item.price}</h4>
          <h4>{item.qty}</h4>
        </div>
      ))}
    </div>
  );
};

export default Cart;
