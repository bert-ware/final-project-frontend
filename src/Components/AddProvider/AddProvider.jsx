import React, { Fragment, useState } from "react";
import axios from 'axios'
import "./AddProvider.css"

const AddProvider = (props) => {
  const [datos, setDatos] = useState({
    name: "",
    adress: {
        street:'',
        number: 0,
    },
    telephone: 0,
    info: '',
    
  })
  const handleChange = (event) => {
        let adress = datos.adress
        let key = event.target.name
        let value = event.target.value
        adress[key] = value
        datos.adress = adress;
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const body = {
        ...datos
    }
    axios.post(process.env.REACT_APP_API_URL + "/providers/", body, {withCredentials : true})
    /* .then(() => props.updateData()) */ 
    event.target.reset()
  }
  return (
    <Fragment>
      <h1 id="addProviderTitle">Add a new Provider</h1>
      <form onSubmit={handleSubmit} id="providerForm">
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
          <input
            type="text"
            placeholder="Street"
            //onChange={event => { handleChange(event, datos.address  ,'address'); }}
            onChange={handleChange}
            name="street"
            // value={datos.adress.street}
        />
        </div>
        <div>
        <br/>
          <input
            type="number"
            placeholder="Number"
            // onChange={handleChange}
            onChange={handleChange}
            name="number"
            // value={datos.adress.number}
          />
        </div>
        <br/>

        <div>
          <input
            type="number"
            placeholder="Telephone"
            onChange={handleChange}
            name="telephone"
          />
        </div>
        <br/>

        <div>
          <input
            type="text"
            placeholder="Info"
            onChange={handleChange}
            name="info"/>
        </div>
        <br/>
        <div>
        </div>
        <button  className="button is-info" type="submit">Add providers</button>
      </form>
    </Fragment>
  )
}

export default AddProvider
