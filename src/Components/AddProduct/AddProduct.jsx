import React, { Fragment, useState } from "react";
import axios from "axios";

const AddProduct = (props) => {
  const [datos, setDatos] = useState({
    name: "",
    graduation: 0,
    price: 0,
    format: "",
    info: "",
  });

  const handleChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = {
      ...datos,
    };
    console.log("ESTOS SON LOS DATOS", body.name, body.price);

    axios.post("http://localhost:3000/api/products/", body).then(
        () => props.updateData());

    event.target.reset();
  };

  return (
    <Fragment>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Name"
            onChange={handleChange}
            name="name"
          />
        </div>

        <div>
          <input
            type="number"
            placeholder="Graduation"
            onChange={handleChange}
            name="graduation"
          />
        </div>

        <div>
          <input
            type="number"
            placeholder="Price"
            onChange={handleChange}
            name="price"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Format"
            onChange={handleChange}
            name="format"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Info"
            onChange={handleChange}
            name="info"
          />
        </div>

        <button type="submit">Add product</button>
      </form>
    </Fragment>
  );
};

export default AddProduct;
