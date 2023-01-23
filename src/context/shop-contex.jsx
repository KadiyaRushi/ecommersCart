import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { PRODUCTS } from "../products";

export const Shopcontex = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart;
};
export const ShopcontexProvider = (props) => {
  const [cartItem, setCartItems] = useState(getDefaultCart());

  const addTocart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromcart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const adduserInputnumber = (itemId, number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: number }));
  };
  const contexvalue = {
    cartItem,
    addTocart,
    removeFromcart,
    adduserInputnumber,
  };
  return (
    <Shopcontex.Provider value={contexvalue}>
      {props.children}
    </Shopcontex.Provider>
  );
};
