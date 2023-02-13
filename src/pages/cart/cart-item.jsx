import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTocart, removeFromcart } from "../../store/cartSclice";
export const CartItem = (props) => {
  const { id, title, price, images, description } = props.data;
  const cartItem = useSelector((state) => state.cart.cartItem);
  const productIndex = cartItem.findIndex((obj) => obj.id == id);

  const dispatch = useDispatch();
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
              dispatch(addTocart(props.data));
            }}
          >
            +
          </button>
          <input value={cartItem[productIndex].number || ""} />
          <button
            onClick={() => {
              dispatch(removeFromcart(props.data));
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};
