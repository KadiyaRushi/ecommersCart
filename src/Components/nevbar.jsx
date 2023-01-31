import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Plus, ShoppingCart } from "phosphor-react";
import { Shopcontex } from "../context/shop-contex";
import "./nevbar.css";
export const Nevbar = () => {
  const { getTotalItem } = useContext(Shopcontex);
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/" className="shopLink">
          Shop
        </Link>

        <Link to="/cart" className="cartLink">
          <ShoppingCart />({getTotalItem()})
        </Link>
        <Link to="/form">
          <Plus />
        </Link>
      </div>
    </div>
  );
};
