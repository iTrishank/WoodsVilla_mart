import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import React from "react";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/WoodsVilla_mart" element={<Home />} />
        <Route path="/WoodsVilla_mart/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/ProductList" element={<ProductList />} />
      </Routes>
    </>
  );
};

export default App;
