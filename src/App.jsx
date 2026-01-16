import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import DarkModeToggle from "./components/DarkModeToggle";
import "./App.css";

const App = () => {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  // Cart state
  const [cartItems, setCartItems] = useState([]);

  // Category filter state
  const [category, setCategory] = useState("all");

  // Add to cart handler
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! You can filter products, add to cart, and toggle dark mode.
      </p>

      {/* Dark Mode Toggle */}
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Category Filter */}
      <label>Filter by Category: </label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* Product List */}
      <ProductList addToCart={addToCart} category={category} />

      {/* Cart */}
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;
