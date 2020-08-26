import React, { Component } from "react";
import axios from "axios";
export class ProviderDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      provider: {},
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/api/providers/" + this.state.id)
      .then((response) => {
        this.setState({
          provider: response.data,
        });
        console.log('Respuesta del proveedor',response.data)
        console.log(
          "Dirección DEL PROVEEDOR",
          this.state.provider.adress.street,
          this.state.provider.adress.number
        );
      });
  }
  render() {
      let street='';
      if(this.state.provider.adress){
          street = this.state.provider.adress.street
      }
      console.log(this.state.provider)
    return (
      <div>
        <h1>Nombre: {this.state.provider.name}</h1>
        <h2>Telephone: {this.state.provider.telephone}</h2>
        <h3>CALLE {street}</h3>
        <p>{this.state.provider.info}</p>
     
      </div>
    );
  }
}
export default ProviderDetails;
