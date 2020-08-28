import React, { Fragment, useState } from "react";
import axios from 'axios'


const AddProvider = (props) => {
  const [datos, setDatos] = useState({
    name: "",
    adress: {
        street:'',
        number: 0,
    },
    telephone: 0,
    info: '',

  });

  const handleChange = (event) => {

        console.log(event.target.name)
        console.log(event.target.value)

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
    console.log('ESTOS SON LOS DATOS', body.name, body.telephone)

    event.target.reset();

    axios.post("http://localhost:3000/api/providers/", body).then(
        () => props.updateData());

  };
  

  return (
    <Fragment>
      <h1>Add Providers</h1>
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
          <h4>adress</h4>
          <input
            type="text"
            placeholder="street"
            //onChange={event => { handleChange(event, datos.address  ,'address'); }}
            onChange={handleChange}
            name="street"
            // value={datos.adress.street}
          />
          <input
            type="number"
            placeholder="number"
            // onChange={handleChange}
            onChange={handleChange}
            name="number"
            // value={datos.adress.number}
          />
        </div>

        <div>
          <input
            type="number"
            placeholder="Telephone"
            onChange={handleChange}
            name="telephone"
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

        <button type="submit">Add providers</button>
      </form>
    </Fragment>
  );
};

export default AddProvider;
