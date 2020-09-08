import React, { Fragment, useState } from "react";
import axios from "axios";

const AddProduct = (props) => {
  const [datos, setDatos] = useState({
    name: "",
    typeFormat: "",
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

    axios.post("http://localhost:3000/api/products/", body,  {withCredentials : true}).then(
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
        <label>
          Product unit of mesure: 
          <select value="typeFormat" onChange={handleChange} name='method'>
            <option value={['Kilograms']}>Kilograms</option>
            <option value={['Mililiters']}>Mililiters</option>
          </select>
          </label>
        </div>
        
        <div>
          <input
            type="number"
            placeholder="Unitary Cost"
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
