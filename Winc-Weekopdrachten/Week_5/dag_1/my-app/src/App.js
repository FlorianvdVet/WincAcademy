import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import MainContent from "./Components/MainContent";
import Navbar from "./Components/Navbar";
import ToDoItem from "./Components/ToDoItem";
import ContactCard from "./Components/ContactCard";
import Joke from "./Components/Jokes";
import products from "./Components/ProductList";
import Product from "./Components/Product";

function App() {
  const productComponents = products.map((item) => (
    <Product key={item.id} product={item} />
  ));

  return <div className="JokeList">{productComponents};</div>;
}

export default App;
