"use client";
import React, { useState, useEffect } from "react";
import "../../../app/globals.css";
import { useCart } from "../../../context/CartContext";

const Cart = () => {
  const [products, setproducts] = useState([]);

  const getproducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setproducts(data);
  };
  const { state, dispatch } = useCart();

  // Example function to add an item to the cart
  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  // Example function to remove an item from the cart
  const removeFromCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  useEffect(() => {
    getproducts();
  }, []);

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img className="imageClass" src={product.image} alt="img" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn">Add to cart</button>
        </div>
      ))}
    </div>
  );
};
export default Cart;
