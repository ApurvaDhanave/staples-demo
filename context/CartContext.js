import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";

const initialState = {
  cart: [],
};
export const CartContext = createContext();
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      localStorage.setItem(
        "cart",
        JSON.stringify([...state.cart, action.payload])
      );
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      localStorage.setItem(
        "cart",
        JSON.stringify(state.cart.filter((f) => f.id !== action.payload.id))
      );
      return {
        ...state,
        cart: state.cart.filter((f) => f.id !== action.payload.id),
      };
    case "SET_CART":
      return {
        ...state,
        cart: [action.payload],
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const getCartFromLocalStorage = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : null;
    dispatch({ type: "SET_CART", payload: getCartFromLocalStorage });
  }, []);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to access the cart context
