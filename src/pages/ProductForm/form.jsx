import React, { useEffect, useState } from "react";
import "./form.css";
export const Form = () => {
  const [Name, setName] = useState();
  const [Price, setPrice] = useState();
  const [data, setData] = useState({});
  const [arrofNewData, setarrofNewData] = useState([]);

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
      title: Name,
      price: Price,
    };

    setData(newData);
    AddItemTOAPi(newData);
  };

  const AddItemTOAPi = async (newData) => {
    try {
      const res = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData),
      })
        .then((res) => res.json())
        .then(console.log);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const newData = { ...arrofNewData, data };
    setarrofNewData(newData);
    console.log(arrofNewData);
    return () => {};
  }, [data]);

  return (
    <div>
      <form onSubmit={onSubmitHandler} className="form">
        <div className="input">
          <label> Product Name:</label>
          <input value={Name} type="text" id="Name" onChange={nameChnagData} />
        </div>
        <div className="input">
          <label>Product Pric:</label>
          <input
            value={Price}
            type="number"
            id="prise"
            onChange={priceChnagData}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <h1>{data.title}</h1>
      <h1>{data.price}</h1>
    </div>
  );
};
