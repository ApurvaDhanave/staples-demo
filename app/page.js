"use client";
import DashboardGrid from "@/pages/Components/Dashboard/DashboardCards";
import Image from "next/image";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Cart from "@/pages/Components/cart";
import Navbar from "@/pages/Components/Navbar/Navbar";
const customTheme = createTheme({
  palette: {
    primary: {
      main: "#c00", // Replace this with your desired primary color
    },
  },
});
const Home = (props) => {
  return (
    <ThemeProvider theme={customTheme}>
      <Navbar></Navbar>
      <DashboardGrid></DashboardGrid>
      {/* <Cart></Cart> */}
    </ThemeProvider>
  );
};
export default Home;
