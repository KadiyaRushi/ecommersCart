import React, { useContext } from "react";

import { ProductList } from "../../productList";
import { Product } from "./product";
import "./shop.css";
import { Shopcontex } from "../../context/shop-contex";
export const Shop = () => {
  const { responseData } = useContext(Shopcontex);
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>PedroTech Shop</h1>
      </div>

      <div className="products">
        <div>
          {/* {console.log("responsedata", responseData)} */}
          {responseData?.products?.map((element) => (
            <div>
              <Product data={element} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
