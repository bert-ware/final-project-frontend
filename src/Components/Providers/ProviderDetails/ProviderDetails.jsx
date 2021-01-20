import React, { Component } from "react"
import axios from "axios"
import { Redirect } from 'react-router-dom'
import AddProduct from "../../Products/AddProduct/AddProduct"
import ModalPrueba from "../../Modal/ModalPrueba.js"

import "./ProviderDetails.css"

export class ProviderDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      img: "",
      provider: {},
      redirect: false,
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
      .get(process.env.REACT_APP_API_URL + "/providers/" + this.state.id, { withCredentials: true })
      .then((response) => {
        this.setState({
          provider: response.data,
          img: response.data.imgUrl,
          item: response.data
        })
      })
  }
  //Handle borrar
  handleClick = () => {
    axios.delete(process.env.REACT_APP_API_URL + "/providers/" + this.state.id, { withCredentials: true })
      .then(() => this.setState({ redirect: true }))
  }

  render() {
    let street = ''
    let number = ""
    if (this.state.provider.adress) {
      street = this.state.provider.adress.street
    }
    if (this.state.provider.adress) {
      number = this.state.provider.adress.number
    }
    //Redirect a providers
    const { redirect } = this.state
    if (redirect) {
      return <Redirect to='/providers' />
    }

    return (
      <div >
        <h1>Provider Details</h1>
        <div className="providerDetailsPage">

          <h3>{this.state.provider.name}</h3>
          <br />
          <img className="providerImg" src={this.state.img} alt="Provider Img"></img>
          <div className="btnContainer">
            <div>
              <button className="button is-danger" id="providersDetailsDeleteBtn" onClick={this.handleClick}>Delete provider</button>
            </div>
            <ModalPrueba {...this.props} item={this.state.provider} section="providers" changeImg={this.handleImgState} />
          </div>
          <br />
          <hr />
          <h4><b> Telephone:</b></h4> {this.state.provider.telephone}
          <hr />
          <h4><b>Adress:</b></h4> {street} {number}
          <hr />
          <h4><b>Info:</b></h4> {this.state.provider.info}
          <hr />
          <AddProduct Provider={this.state.id} />
        </div>
      </div>
    )
  }
}
export default ProviderDetails
