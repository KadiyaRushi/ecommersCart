import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { Loder } from "../Components/fullpageLoder/Loder";

export const Shopcontex = createContext(null);

export const ShopcontexProvider = (props) => {
  const [cartItem, setCartItems] = useState([]);
  const [responseData, setResponseData] = useState();
  const [Loding, setLoding] = useState(true);

  const addTocart = (data) => {
    if (!cartItem.find((product) => product.id === Number(data.id))) {
      const product = { ...data, number: 1 };
      const NewcartItem = [...cartItem, product];
      setCartItems(NewcartItem);
    } else {
      const productIndex = cartItem.findIndex((obj) => obj.id == data.id);

      const ItemQuentity = cartItem[productIndex].number;
      const NewCartItem = cartItem.map((product) => {
        if (product.id === data.id) {
          return { ...product, number: ItemQuentity + 1 };
        } else {
          return product;
        }
      });

      setCartItems(NewCartItem);
    }
  };

  const removeFromcart = (data) => {
    if (data.number === 0) {
      const NewcartItem = cartItem.filter((item) => item.id !== data.id);

      setCartItems(NewcartItem);
    } else {
      const productIndex = cartItem.findIndex((obj) => obj.id == data.id);

      const ItemQuentity = cartItem[productIndex].number;
      const newCartItem = cartItem.map((product) => {
        if (product.id === data.id) {
          return { ...product, number: ItemQuentity - 1 };
        } else {
          return product;
        }
      });
      setCartItems(newCartItem);
    }
  };

  const adduserInputnumber = (data, number) => {
    const productIndex = cartItem.findIndex((obj) => obj.id == data.id);
    cartItem[productIndex].number = number;
    setCartItems(cartItem);
    return number;
  };

  const getTotal = () => {
    let totalAmount = 0;

    for (let item in cartItem) {
      console.log(cartItem);
      if (cartItem[item].number > 0) {
        console.log(cartItem[item].number);
        totalAmount += cartItem[item].number * cartItem[item].price;
        console.log(cartItem[item]);
      }
    }

    return totalAmount;
  };

  const ProductItem = async () => {
    try {
      setLoding(true);

      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      console.log("data", data);
      setResponseData(data);
      setLoding(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getCartItemValues = (data) => {
    console.log("getCartItemValues", data);
    console.log("CARTITEM", cartItem);

    const product = cartItem.filter((product) => product.id == data.id);
    console.log(product);

    const totalitem = product.number;
    return totalitem;
  };

  useEffect(() => {
    ProductItem();
  }, []);

  const contexvalue = {
    Loding,
    responseData,
    cartItem,
    addTocart,
    removeFromcart,
    adduserInputnumber,
    getTotal,
    ProductItem,
    getCartItemValues,
  };
  return (
    <Shopcontex.Provider value={contexvalue}>
      {props.children}
    </Shopcontex.Provider>
  );
};
