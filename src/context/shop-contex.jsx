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
  const [cartItem, setCartItems] = useState([]);

  const addTocart = (data) => {
    if (!cartItem.find((product) => product.id === Number(data.id))) {
      const product = { ...data, number: 1 };
      cartItem.push(product);
      console.log(cartItem);
    } else {
      const productIndex = cartItem.findIndex((obj) => obj.id == data.id);
      console.log("productIndex", productIndex);
      console.log(
        "rtItem[productIndex].number += 1",
        (cartItem[productIndex].number += 1)
      );

      console.log(cartItem);
      setCartItems(cartItem);
    }
  };
  const removeFromcart = (data) => {
    if (!cartItem.find((product) => product.id === Number(data.id))) {
      const product = { ...data, number: 1 };
      cartItem.push(product);
      console.log(cartItem);
    } else {
      const productIndex = cartItem.findIndex((obj) => obj.id == data.id);
      console.log("productIndex", productIndex);
      console.log(
        "rtItem[productIndex].number += 1",
        (cartItem[productIndex].number -= 1)
      );

      console.log(cartItem);
      setCartItems(cartItem);
    }
  };
  const adduserInputnumber = (itemId, number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: number }));
  };
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
  const contexvalue = {
    cartItem,
    addTocart,
    removeFromcart,
    adduserInputnumber,
    getTotal,
  };
  return (
    <Shopcontex.Provider value={contexvalue}>
      {props.children}
    </Shopcontex.Provider>
  );
};
