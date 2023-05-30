import React, { createContext, useContext, useReducer, useEffect } from "react";
import products from "../data/products";
import cartReducer from "../reducer/cartReducer";

const CartContext = createContext();

const initState = {
  products: products,
  total: 0,
  amount: 0,
};

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initState);
  useEffect(() => {
    dispatch({ type: "CALCULATE_TOTAL" });
  }, [state.products]);

  function formatMoney(money) {
    return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  /////////// removeitem กำหนด id เพื่อจัดการสินค้าตัวนั้นๆโดยใช้ id อ้างอิง payload เงื่อไขในการลบข้อมูลเอามาจากพารามิเตอid
  function removeItem(id) {
    dispatch({ type: "REMOVE", payload: id });
  }

  function add(id) {
    dispatch({ type: "ADD", payload: id });
  }

  function subtract(id) {
    dispatch({type: "SUB", payload: id})
  }


  return (
    <CartContext.Provider value={{ ...state, formatMoney, removeItem, add, subtract }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  return useContext(CartContext);
}

export { CartProvider, useCart };
