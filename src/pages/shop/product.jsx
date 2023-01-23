import React from "react";
import { useContext } from "react";
import { Shopcontex } from "../../context/shop-contex";
export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addTocart, cartItem } = useContext(Shopcontex);
  const cartitemnumber = cartItem[id];
  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>{productName}</p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addTocart(id)}>
        Add To Cart{cartitemnumber > 0 && <>({cartitemnumber})</>}
      </button>
    </div>
  );
};
