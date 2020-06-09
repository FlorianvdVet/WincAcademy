import React from "react";
import List from "./List";

const ShoppingCart = (shoppingCartItems) => {
  console.log(shoppingCartItems);
  return (
    <div>
      <List items={[shoppingCartItems]} />
    </div>
  );
};
export default ShoppingCart;
