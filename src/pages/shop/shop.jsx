import React, { useContext, useEffect, useState } from "react";

import { Product } from "./product";
import "./shop.css";
import { Shopcontex } from "../../context/shop-contex";
import { Loder } from "../../Components/fullpageLoder/Loder";
import { Form } from "../ProductForm/form";

export const Shop = () => {
  const [name, setName] = useState('');
  const { responseData, searchItem } = useContext(Shopcontex);
  const handalChange = (event) => {
 
    setName(event.target.value)
      searchItem(name)
  }
 
  

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>PedroTech Shop</h1>
      </div>
      <div>
        <input placeholder="search" onChange={handalChange} />
   
</div>
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
  );
};
