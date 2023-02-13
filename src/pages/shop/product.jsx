import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { Shopcontex } from "../../context/shop-contex";
import { addTocart } from "../../store/cartSclice";
export const Product = (props) => {
  const { title, price, thumbnail } = props.data;

  const dispatch = useDispatch();
  return (
    <div className="product">
      <img src={thumbnail} />
      <div className="description">
        <p>{title}</p>
        <p>${price}</p>
      </div>
      <button
        className="addToCartBttn"
        onClick={() => dispatch(addTocart(props.data))}
      >
        Add To Cart
      </button>
    </div>
  );
};
