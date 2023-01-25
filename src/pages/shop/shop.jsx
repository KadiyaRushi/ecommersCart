import React, { useContext, useState } from "react";

import { Product } from "./product";
import "./shop.css";
import { Shopcontex } from "../../context/shop-contex";
import { Loder } from "../../Components/fullpageLoder/Loder";

export const Shop = () => {
  const { responseData, Loding } = useContext(Shopcontex);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>PedroTech Shop</h1>
      </div>

      <div className="products">
        <div className="products">
          {responseData ? (
            responseData?.products?.map((element) => (
              <div>
                <Product data={element} />
              </div>
            ))
          ) : (
            <Loder />
          )}
        </div>
      </div>
    </div>
  );
};
