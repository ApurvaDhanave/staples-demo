
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
export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <ThemeProvider theme={customTheme}>
        <Navbar></Navbar>

        <Component {...pageProps} />
      </ThemeProvider>
    </CartProvider>
  );
}
