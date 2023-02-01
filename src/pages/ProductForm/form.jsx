import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./form.css";
export const Form = () => {
  const [Name, setName] = useState();
  const [Price, setPrice] = useState();
  const [data, setData] = useState({});
  const [arrofNewData, setarrofNewData] = useState([]);
  const navigate = useNavigate();
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
        .then(
          toast.success("Data has added Successfully", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        )
        .then(console.log);
    } catch (error) {
      toast.error("🦄 Wow so easy!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  useEffect(() => {
    const newData = { ...arrofNewData, data };
    setarrofNewData(newData);
    console.log(arrofNewData);
    return () => {};
  }, [data]);

  return (
    <>
      <div>
        <form onSubmit={onSubmitHandler} className="form">
          <div className="input">
            <label> Product Name:</label>
            <input
              value={Name}
              type="text"
              id="Name"
              required
              onChange={nameChnagData}
            />
          </div>
          <div className="input">
            <label>Product Pric:</label>
            <input
              value={Price}
              type="number"
              id="prise"
              required
              onChange={priceChnagData}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
