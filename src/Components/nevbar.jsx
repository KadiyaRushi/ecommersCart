import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Plus, ShoppingCart } from "phosphor-react";
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
            <p>
              {" "}
              <ShoppingCart /> {cartItem.length}
            </p>
          </div>
        </Link>
        <Link to="/form">
          <Plus />
        </Link>
      </div>
    </div>
  );
};
