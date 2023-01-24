import React from "react";
import { useContext } from "react";
import { Shopcontex } from "../../context/shop-contex";
export const Product = (props) => {
  const { id, title, price, images } = props.data;
  const { addTocart, cartItem } = useContext(Shopcontex);
  const cartitemnumber = cartItem[id];
  return (
    <div className="product">
      <img src={images[0]} />
      <div className="description">
        <p>{title}</p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addTocart(props.data)}>
        Add To Cart{cartitemnumber > 0 && <>({cartitemnumber})</>}
      </button>
    </div>
  );
};
