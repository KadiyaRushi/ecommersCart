import React from "react";
import "./cart.css";
import { useContext } from "react";
import { PRODUCTS } from "../../products";
import { Shopcontex } from "../../context/shop-contex";
import { CartItem } from "./cart-item";
export const Cart = () => {
  const { cartItem } = useContext(Shopcontex);
  const getTotal = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount = totalAmount + cartItem[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItem[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      <div className="checkout">
        <p>Subtotal:$ {getTotal()}</p>
        <button>Continu Shopping</button>
        <button>Checkout</button>
      </div>
    </div>
  );
};
