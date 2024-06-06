// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductListing from "./components/ProductListing";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import NotFound from "./components/NotFound";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prevCart, product];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <div className="App">
        <Navbar cart={cart} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <ProductListing addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            render={() => <Cart cart={cart} removeFromCart={removeFromCart} />}
          />
          <Route
            path="/checkout"
            render={() => (
              <Checkout cart={cart} removeFromCart={removeFromCart} />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
