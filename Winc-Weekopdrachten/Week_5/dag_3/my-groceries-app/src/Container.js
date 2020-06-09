import React from "react";
import GroceryList from "./Components/GroceryList";
import ShoppingCart from "./Components/ShoppingCart";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryItems: [
        { id: 1, title: "Brood" },
        { id: 2, title: "Beleg" },
        { id: 3, title: "Fruit" },
        { id: 4, title: "Bier" },
      ],
      shoppingCartItems: [
        { id: 1, title: "Koenkies" },
        { id: 2, title: "Wasmiddel" },
      ],
    };
  }

  render() {
    return (
      <div className="Container">
        <div className="GroceryList">
          <GroceryList groceryItems={this.state.groceryItems} />
        </div>
        <div className="ShoppingCart">
          <ShoppingCart shoppingCartItems={this.state.shoppingCartItems} />
        </div>
      </div>
    );
  }
}

export default Container;
