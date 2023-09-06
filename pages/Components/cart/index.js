"use client";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "@/Redux/CartSlice";
import "../../../app/globals.css";

const Cart = () => {
  const [products, setproducts] = useState([]);
  const dispatch = useDispatch();

  const getproducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setproducts(data);
  };

  const handleadd = (product) => {
    dispatch(add(product));
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
