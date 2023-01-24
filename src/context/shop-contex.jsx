import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { PRODUCTS } from "../products";

export const Shopcontex = createContext(null);

export const ShopcontexProvider = (props) => {
  const [cartItem, setCartItems] = useState([]);
  const [responseData, setResponseData] = useState({});

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
    if (data.number === 0) {
      // const productIndex = cartItem.findIndex((obj) => obj.id == data.id);
      const NewcartItem = cartItem.filter((item) => item.id !== data.id);

      setCartItems(NewcartItem);
    } else {
      const productIndex = cartItem.findIndex((obj) => obj.id == data.id);
      console.log("productIndex", productIndex);
      console.log(
        "rtItem[productIndex].number -= 1",
        (cartItem[productIndex].number -= 1)
      );

      console.log("Data from remove", data);
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

  const ProductItem = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      console.log("data", data);
      setResponseData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    ProductItem();
  }, []);

  const contexvalue = {
    responseData,
    cartItem,
    addTocart,
    removeFromcart,
    adduserInputnumber,
    getTotal,
    ProductItem,
  };
  return (
    <Shopcontex.Provider value={contexvalue}>
      {props.children}
    </Shopcontex.Provider>
  );
};
