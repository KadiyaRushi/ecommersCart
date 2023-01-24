import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { Shopcontex } from "../context/shop-contex";
import "./nevbar.css";
export const Nevbar = () => {
  const { cartItem } = useContext(Shopcontex);
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <div>
            {/* <p>{cartItem}</p> */}
            <ShoppingCart />
          </div>
        </Link>
      </div>
    </div>
  );
};
