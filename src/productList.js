import React, { useEffect, useState } from "react";
import { Product } from "./pages/shop/product";

export const ProductList = () => {
  const [responseData, setResponseData] = useState();

  const API = "https://dummyjson.com/products";

  const ProductItem = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("data", data);
      setResponseData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    ProductItem(API);
  }, []);

  return (
    <div>
      {console.log(responseData)}
      {responseData?.products?.map((element) => (
        <div>
          <Product data={element} />
        </div>
      ))}
    </div>
  );
};
