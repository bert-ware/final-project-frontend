//REFACTOR A FUNCTIONAL
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import AddProvider from "./AddProvider/AddProvider"
import "./Providers.css"

 class Providers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      providers: [],
      isloggedin: this.props.loggedInUser._id
    }
  }
  componentDidMount() {
    axios
      .get(process.env.REACT_APP_API_URL +"/providers/", {withCredentials: true})
      .then((response) => {
        this.setState({
          providers: response.data,
        })
      })
      .catch((error) => console.log(" ESTE ES EL ERROR", error))

      
  }
  render() {

    let providers 
    if (!this.state.providers.length) {
      providers = 
        <div>
        <p>No providers yet, lets add some!</p>
        </div>
    } else {
      providers =   this.state.providers.map((provider, index) => (
      <div className="box" key={index}>
      <article className="media">
        <div className="media-left">
          <figure className="image is-128x128">
            <img className="productImg" src={provider.imgUrl} alt="productImg"/>
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong id="linkTitle"><Link to={"/providers/" + provider._id}>{provider.name}</Link></strong> <br />
              <small>Adress: {provider.adress.street} Nº: {provider.adress.number}</small> <br/>
              <small>{provider.info}</small>
            </p>
          </div>  
        </div>
      </article>
      
      </div>
    ))
 }
      
    return (
      <div className="container">
      <h1>Provider List</h1>
        <div  id="providersPage">
           {providers}
        </div>
        <AddProvider userID={this.props} {...this.props}/>
      </div>
    )
  }
}

export default Providers
