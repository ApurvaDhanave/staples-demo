"use client";
import React, { useState, useEffect, useContext } from "react";
import "../../../app/globals.css";
import { CartContext } from "../../../context/CartContext";
import { ToastContainer, toast } from "react-toastify";

const ShoppingCart = () => {
  const [products, setproducts] = useState([]);
  const cartContext = useContext(CartContext);

  //   console.log(state);
  const getproducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setproducts(data);
  };
  const handleAddToCart = (product) => {
    console.log(product);
    toast.success("Product added to the cart");
    cartContext.dispatch({ type: "ADD_TO_CART", payload: product });
  };
  useEffect(() => {
    getproducts();
  }, []);
  return (
    <>
      <div className="productsWrapper">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img className="imageClass" src={product.image} alt="img" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button
              className="btn"
              onClick={() => {
                handleAddToCart(product);
              }}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
export default ShoppingCart;
