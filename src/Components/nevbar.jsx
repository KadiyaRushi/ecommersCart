import React from "react";
import { Link } from "react-router-dom";

export const Nevbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
};
