import React, { Fragment, useState } from "react";
import axios from "axios";
import "./AddProduct.css"

const AddProduct = (props) => {
  const [datos, setDatos] = useState({
    name: "",
    typeFormat: "",
    price: 0,
    format: "",
    info: "",
    Provider: props.Provider
  })

  const handleChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    })
  }
  const handleClick = (click) => {
    setDatos({
      ...datos,
       [click.target.name] : click.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = {
      ...datos,
    }
    axios.post(process.env.REACT_APP_API_URL + "/products/", body,  {withCredentials : true})
    event.target.reset()
  }

  return (
    <Fragment>
      <h1 className="addProductTitle">Add a new Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Name"
            onChange={handleChange}
            name="name"
          />
        </div>
        <br/>
        <div>
        <label>
          Unit of mesure: 
        </label>
        <br/>
          <select value="typeFormat" onChange={handleClick} name='typeFormat'>
            <option value="">Choose one </option>
            <option value={['Grams']}>Grams</option>
            <option value={['Centiliters']}>Centiliters</option>
          </select>
         
        </div>
        <br/>
        <div>
          <input
            type="number"
            placeholder="Unitary Cost"
            step='0.01'
            onChange={handleChange}
            name="price"
          />
        </div>
        <br/>
        <div>
          <input
            type="text"
            placeholder="Format"
            onChange={handleChange}
            name="format"
          />
        </div>
        <br/>
        <div>
          <input
            type="text"
            placeholder="Info"
            onChange={handleChange}
            name="info"
          />
        </div>
        <br/>
        <button className="button is-success" type="submit">Add product</button>
      </form>
    </Fragment>
  )
}

export default AddProduct
