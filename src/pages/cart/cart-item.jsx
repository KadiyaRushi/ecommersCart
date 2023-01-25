import React, { useContext, useState } from "react";
import { Shopcontex } from "../../context/shop-contex";
export const CartItem = (props) => {
  const { id, title, price, images, description } = props.data;
  const { cartItem, addTocart, removeFromcart, adduserInputnumber } =
    useContext(Shopcontex);
  const productIndex = cartItem.findIndex((obj) => obj.id == id);

  return (
    <div className="cartItem">
      <img src={images[0]} />
      <div className="description">
        <p>
          <b>{title}</b>
        </p>
        <p id="desPtag">{description}</p>
        <p>
          <b>${price}</b>
        </p>
        <div>
          <button
            onClick={() => {
              addTocart(props.data);
            }}
          >
            +
          </button>
          <input
            value={cartItem[productIndex].number}
            onChange={(e) => {
              adduserInputnumber(props.data, Number(e.target.value));
            }}
          />
          <button
            onClick={() => {
              removeFromcart(props.data);
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};
