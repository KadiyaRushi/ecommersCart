import React, { useEffect } from "react";
import "./cart.css";

import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTotal } from "../../store/cartSclice";
export const Cart = () => {
  const cartItem = useSelector((state) => state.cart.cartItem);
  let totalAmount = 0;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getTotal = () => {
    for (let item in cartItem) {
      if (cartItem[item].number > 0) {
        totalAmount += cartItem[item].number * cartItem[item].price;
      }
    }
    return totalAmount;
  };
  // useEffect(() => {
  //   dispatch(getTotal());
  // }, [totalAmount]);

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

      <div className="checkout">
        <p>
          Subtotal:$
          {getTotal()}
        </p>
        <button onClick={() => navigate("/")}>Continu Shopping</button>
        <button>Checkout</button>
      </div>
    </div>
  );
};

{
  /* <CartItem data={product} />; */
}
