import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Plus, ShoppingCart } from "phosphor-react";
import { Shopcontex } from "../context/shop-contex";
import "./nevbar.css";
import { useSelector } from "react-redux";
export const Nevbar = () => {
  const cartItem = useSelector((state) => state.cart.cartItem);
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/" className="shopLink">
          Shop
        </Link>

        <Link to="/cart" className="cartLink">
          <ShoppingCart />({cartItem.length})
        </Link>
        <Link to="/form">
          <Plus />
        </Link>
      </div>
    </div>
  );
};
