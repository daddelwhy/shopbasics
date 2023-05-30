import React from "react";
import "./Header.css";
import { useCart } from "../context/CartContext";

function Header() {
  const { total,formatMoney,amout } = useCart();
  return (
    <>
      <header>
        <p>dadelshop</p>
        <p>buying : {amout}</p>
        <p>ยอดรวม : {formatMoney(total)}</p>
      </header>
    </>
  );
}

export default Header;
