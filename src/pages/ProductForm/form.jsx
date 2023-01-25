import React, { useState } from "react";

export const Form = () => {
  const [Name, setName] = useState();
  const [Price, setPrice] = useState();
  const [data, setData] = useState({});

  const nameChnagData = (event) => {
    event.preventDefault();
    const newName = event.target.value;

    setName(newName);
  };
  const priceChnagData = (event) => {
    event.preventDefault();
    const newPrice = event.target.value;

    setPrice(newPrice);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newData = {
      name: Name,
      price: Price,
    };

    setData(newData);
  };

  const AddItemTOAPi = (data) => {
    try {
    } catch {}
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
        <button type="submit">Submit</button>
      </form>
      <h1>{data.name}</h1>
      <h1>{data.price}</h1>
    </div>
  );
};
