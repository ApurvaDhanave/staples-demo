"use client";
import Navbar from "@/pages/Components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { CartProvider } from "../context/CartContext.js";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
// "use client";
// import React from "react";
// import { Provider } from "react-redux";
// import store from "./Store";

// const ReduxProvider = ({children}) => {
//     return(<Provider store={store}> {children}</Provider>)
// };
// export default ReduxProvider
