import React from "react";
import List from "./List";

const GroceryList = (groceryItems) => {
  console.log(groceryItems);
  return (
    <div>
      <List items={[groceryItems]} />
    </div>
  );
};
export default GroceryList;
