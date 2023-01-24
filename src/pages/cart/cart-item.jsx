import React, { useContext } from "react";
import { Shopcontex } from "../../context/shop-contex";
export const CartItem = (props) => {
  const { id, title, price, images } = props.data;
  const { cartItem, addTocart, removeFromcart, adduserInputnumber } =
    useContext(Shopcontex);

  return (
    <div className="cartItem">
      <img src={images[0]} />
      <div className="description">
        <p>
          <b>{title}</b>
        </p>
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
            value={cartItem[id]}
            onChange={(e) => {
              adduserInputnumber(id, Number(e.target.value));
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
