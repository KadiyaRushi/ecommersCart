import React, { useContext, useEffect, useState } from "react";

import { Product } from "./product";
import "./shop.css";
import { Shopcontex } from "../../context/shop-contex";
import { Loder } from "../../Components/fullpageLoder/Loder";

export const Shop = () => {
  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [name, setName] = useState("");
  const [number, setNumber] = useState(1);
  const { responseData, searchItem, splitpage } = useContext(Shopcontex);
  const handalChange = (event) => {
    setName(event.target.value);
    searchItem(name);
  };

  const numberSetter = (event) => {
    const num = event.currentTarget.id;
    setNumber(num);
  };
  const numberDecriser = (e) => {
    console.log();
    const num = e.currentTarget.id - 1;
    setNumber(num);
  };
  const numberInecriser = (e) => {
    console.log(Number(e.currentTarget.id) + 1);

    const num = Number(e.currentTarget.id) + 1;
    setNumber(num);
  };
  const pagechangeHandler = () => {
    if (number == 1) {
      splitpage(0);
    } else {
      const num = number * 10;
      splitpage(num);
    }
  };

  useEffect(() => {
    pagechangeHandler();
  }, [number]);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>PedroTech Shop</h1>
      </div>
      <div>
        <input
          placeholder="search product hear"
          className="searchOfMainPage"
          onChange={handalChange}
        />
      </div>
      {/* page Buttons*/}
      <div className="pageButton">
        {number <= 1 ? null : (
          <button
            onClick={numberDecriser}
            id={number}
            className="decrymentButton"
          >
            &larr;
          </button>
        )}
        {numberArray.map((num) => (
          <button
            onClick={numberSetter}
            id={num}
            style={
              number == num
                ? { backgroundColor: "#eeeebd", border: "0.5px solid #fcfc82" }
                : null
            }
          >
            {num}
          </button>
        ))}
        {number >= 9 ? null : (
          <button
            onClick={numberInecriser}
            id={number}
            className="increamentButton"
          >
            &rarr;
          </button>
        )}
      </div>

      <div className="pageIndicater">
        <p>Page {number} of 9</p>
      </div>
      {/* products */}
      <div className="products">
        {responseData ? (
          responseData?.products?.map((element) => (
            <div>
              <Product data={element} />
            </div>
          ))
        ) : (
          <Loder />
        )}
      </div>
      {/* pageNumber showr */}
      <div className="pageIndicater">
        <h2>Page {number} of 9</h2>
      </div>
      {/* page Buttons*/}
      <div className="pageButton">
        {number <= 1 ? null : (
          <button
            onClick={numberDecriser}
            id={number}
            className="decrymentButton"
          >
            &larr;
          </button>
        )}
        {numberArray.map((num) => (
          <button
            onClick={numberSetter}
            id={num}
            style={
              number == num
                ? { backgroundColor: "#eeeebd", border: "0.5px solid #fcfc82" }
                : null
            }
          >
            {num}
          </button>
        ))}
        {number >= 9 ? null : (
          <button
            onClick={numberInecriser}
            id={number}
            className="increamentButton"
          >
            &rarr;
          </button>
        )}
      </div>
    </div>
  );
};
