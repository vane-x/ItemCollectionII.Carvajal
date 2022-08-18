import Home from "./views/Home/Home";
import Cart from "./views/Cart/Cart";
import Products from "./views/Products/Products";
import Product from "./views/Product/Product";
import Category from "./views/Category/Category";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { CartProvider } from "./context/CartContext"
import React from "react"

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


function App() {
  return (
  <>
  <BrowserRouter>
    <CartProvider>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/product/:productId" element={<Product/>} />
        <Route exact path="/category/:categoryId" element={<Category/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
      </Routes>
    </CartProvider>
  </BrowserRouter>
  </>
  )
} 

export default App;
