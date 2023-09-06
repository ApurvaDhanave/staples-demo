"use client";
import React, { useState } from "react";
import DrawerComponent from "./drawer";
import ToolbarComponent from "./toolbar";
import { SessionProvider } from "next-auth/react";

const Navbar = ({ pageProps }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
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
