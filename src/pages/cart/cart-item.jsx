import React, { useContext } from "react";
import { Shopcontex } from "../../context/shop-contex";
export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItem, addTocart, removeFromcart, adduserInputnumber } =
    useContext(Shopcontex);

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>
          <b>${price}</b>
        </p>
        <div>
          <button
            onClick={() => {
              addTocart(id);
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
              removeFromcart(id);
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};
