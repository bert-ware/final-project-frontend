import React, { Component } from "react"
import axios from "axios"
import { Redirect } from 'react-router-dom'
import "./ProviderDetails.css"
import AddProduct from "../AddProduct/AddProduct"
import FileUploadProviders from "../Fileupload/FileUploadProvider"


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
      .get(process.env.REACT_APP_API_URL +"/providers/" + this.state.id, {withCredentials: true})
      .then((response) => {
        this.setState({
          provider: response.data,
        })
      })
  }
  //Handle borrar
  handleClick = () => {
    axios.delete(process.env.REACT_APP_API_URL + "/providers/" + this.state.id, {withCredentials: true})
    .then(() => this.setState({ redirect: true }))
}

  render() {
      let street=''
      let number= ""
      if(this.state.provider.adress){
          street = this.state.provider.adress.street
      }
      if(this.state.provider.adress){
        number = this.state.provider.adress.number
    }
    //Redirect a providers
      const { redirect } = this.state
      if (redirect) {
        return <Redirect to='/providers'/>
      }

    return (
      <div >
      <h1>Provider Details</h1>
        <div className="providerDetailsPage">
        <img className="providerImg" src={this.state.provider.providerImgUrl} alt="Provider Img"></img>
        <h1>Nombre: {this.state.provider.name}</h1>
        <h2>Telephone: {this.state.provider.telephone}</h2>
        <h3>Adress: {street} {number}</h3>
        <p>{this.state.provider.info}</p>
        <button className="button is-danger" onClick={this.handleClick}>Delete provider</button>
        <div>
        <p>Upload a Provider Image:</p>
        <FileUploadProviders {...this.props} Provider={this.state.provider}/>
        </div>
        <AddProduct Provider={this.state.id}/>
      </div>
    </div>
    )
  }
}
export default ProviderDetails;
