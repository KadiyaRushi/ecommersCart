import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Shopcontex } from "../../context/shop-contex";
export const Product = (props) => {
  const { title, price, images } = props.data;
  const { addTocart } = useContext(Shopcontex);

  return (
    <div className="product">
      <img src={images[0]} />
      <div className="description">
        <p>{title}</p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addTocart(props.data)}>
        Add To Cart
      </button>
    </div>
  );
};
