"use client";
import React, { useState, useContext } from "react";
import { CartContext } from "@/context/CartContext";
import DrawerComponent from "./drawer";
import ToolbarComponent from "./toolbar";
import { SessionProvider } from "next-auth/react";

const Navbar = ({ pageProps }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const cartContext = useContext(CartContext);
  
  const toggleDrawer = () => {
    setDrawerOpen(false);
  };
  const openDrawer = () => {
    setDrawerOpen(true);
  };

  return (
    <div className="App">
      <SessionProvider session={pageProps?.session}>
        <ToolbarComponent openDrawerHandler={openDrawer} {...pageProps} />
        <DrawerComponent
          {...pageProps}
          open={isDrawerOpen}
          toggleDrawerHandler={toggleDrawer}
        />
      </SessionProvider>
    </div>
  );
};

export default Navbar;
