import React, { useContext, useState } from "react";
import { Shopcontex } from "../../context/shop-contex";

export const Form = () => {
  const [Name, setName] = useState();
  const [Price, setPrice] = useState();
  const [data, setData] = useState({
    name: null,
    price: null,
  });
  const AddProductToAPI = () => {};
  const nameChnagData = (event) => {
    event.preventdefault();
    const newName = event.target.value;
    setName(newName);
  };
  const priceChnagData = (event) => {
    event.preventdefault();
    const newPrice = event.target.value;
    setName(newPrice);
  };
  const onSubmitHandler = () => {
    setData({
      name: Name,
      price: Price,
    });
    AddProductToAPI(data);
  };
  return (
    <div className="form">
      <form onSubmit={onSubmitHandler}>
        Product name
        <input value={Name} type="text" id="Name" onChange={nameChnagData} />
        Product Price
        <input
          value={Price}
          type="number"
          id="prise"
          onChange={priceChnagData}
        />
      </form>
    </div>
  );
};
