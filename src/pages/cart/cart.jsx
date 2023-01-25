import React from "react";
import "./cart.css";
import { useContext } from "react";

import { Shopcontex } from "../../context/shop-contex";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
export const Cart = () => {
  const { cartItem, getTotal } = useContext(Shopcontex);
  let cartitemNo = cartItem.length;

  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {cartItem.map((product) => {
          return <CartItem data={product} />;
        })}
      </div>
      {cartitemNo > 0 ? (
        <div className="checkout">
          <p>Subtotal:$ {getTotal()}</p>
          <button onClick={() => navigate("/")}>Continu Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1>Your Cart Is Empty</h1>
      )}
    </div>
  );
};

{
  /* <CartItem data={product} />; */
}
