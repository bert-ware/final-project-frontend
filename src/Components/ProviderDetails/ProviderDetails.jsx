import React, { Component } from "react"
import axios from "axios"
import { Redirect } from 'react-router-dom'
import AddProduct from "../AddProduct/AddProduct"
import FileUploadNew from "../Fileupload/FileUploadNew.js"

import "./ProviderDetails.css"

export class ProviderDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      img: "",
      provider: {},
      redirect: false
    }
    this.handleImgState = this.handleImgState.bind(this)
  }
   //Funcion lifting state up
   handleImgState(input) {
    this.setState({ img: input })
  }
   //Recogida datos API
  componentDidMount() {
    axios
      .get(process.env.REACT_APP_API_URL +"/providers/" + this.state.id, {withCredentials: true})
      .then((response) => {
        this.setState({
          provider: response.data,
          img: response.data.imgUrl
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
          <img className="providerImg" src={this.state.img} alt="Provider Img"></img>
          <h1><b>Nombre:</b> {this.state.provider.name}</h1>
          <br />
          <h2><b> Telephone:</b> {this.state.provider.telephone}</h2>
          <br />
          <h3><b>Adress:</b> {street} {number}</h3>
          <br />
          <p><b>Info:</b> {this.state.provider.info}</p>
          <button className="button is-danger" id="providersDetailsDeleteBtn" onClick={this.handleClick}>Delete provider</button>
          <div>
            <p className="uploadimageProvider">Upload a Provider Image:</p>
            <FileUploadNew {...this.props} item={this.state.provider} section="providers" changeImg={this.handleImgState}/>
          </div>
          <AddProduct Provider={this.state.id} />
        </div>
      </div>
    )
  }
}
export default ProviderDetails
