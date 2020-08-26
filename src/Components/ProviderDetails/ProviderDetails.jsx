import React, { Component } from "react"
import axios from "axios"
import { Redirect } from 'react-router-dom'

export class ProviderDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      provider: {},
      redirect: false
    }
  }
   //Recogida datos API
  componentDidMount() {
    axios
      .get("http://localhost:3000/api/providers/" + this.state.id)
      .then((response) => {
        this.setState({
          provider: response.data,
        })
        console.log('Respuesta del proveedor',response.data)
        console.log(
          "Dirección DEL PROVEEDOR",
          this.state.provider.adress.street,
          this.state.provider.adress.number
        )
      })
  }
  //Handle borrar
  handleClick = () => {
    axios.delete("http://localhost:3000/api/providers/" + this.state.id)
    .then(() => this.setState({ redirect: true }))
}

  render() {
      let street='';
      if(this.state.provider.adress){
          street = this.state.provider.adress.street
      }
    //Redirect a providers
      const { redirect } = this.state;
      if (redirect) {
        return <Redirect to='/providers'/>
      }

    return (
      <div>
        <h1>Nombre: {this.state.provider.name}</h1>
        <h2>Telephone: {this.state.provider.telephone}</h2>
        <h3>CALLE {street}</h3>
        <p>{this.state.provider.info}</p>
        <button onClick={this.handleClick} className="delete">Delete</button>
      </div>
    );
  }
}
export default ProviderDetails;
