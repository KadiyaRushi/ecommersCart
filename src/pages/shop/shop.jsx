import React from "react";
import { ProductList } from "../../productList";

import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>PedroTech Shop</h1>
      </div>

      <div className="products">
        <ProductList />
      </div>
    </div>
  );
};
