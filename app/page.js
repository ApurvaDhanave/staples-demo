"use client";
import DashboardGrid from "@/pages/Components/Dashboard/DashboardCards";
import Image from "next/image";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "@/pages/Components/Navbar/Navbar";
import { CartProvider } from "../context/CartContext.js";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#c00", // Replace this with your desired primary color
    },
  },
});
const Home = (props) => {
  return (
    <CartProvider>
      <ThemeProvider theme={customTheme}>
        <Navbar></Navbar>
        <DashboardGrid></DashboardGrid>
        {/* <Cart></Cart> */}
      </ThemeProvider>
    </CartProvider>
  );
};
export default Home;
