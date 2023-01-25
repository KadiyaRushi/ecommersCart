import React from "react";
import { useContext } from "react";
import { Shopcontex } from "../../context/shop-contex";
export const Product = (props) => {
  const { id, title, price, images } = props.data;
  const { addTocart, cartItem, getCartItemValues } = useContext(Shopcontex);

  const cartItemnumber = 0;
  return (
    <div className="product">
      <img src={images[0]} />
      <div className="description">
        <p>{title}</p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addTocart(props.data)}>
        Add To Cart{cartItemnumber > 0 && <>({cartItemnumber})</>}
      </button>
    </div>
  );
};
