//REFACTOR A FUNCTIONAL
import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom"
import AddProvider from "../AddProvider/AddProvider"

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
      .get("http://localhost:3000/api/providers/", {withCredentials: true})
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
      providers = <div>
        <p>No providers yet, lets add some!</p>
        
      </div>
    } else {
      providers =   this.state.providers.map((provider, index) => (
      <div className="box" key={index}>
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img className="productImg" src={provider.providerImgUrl} alt="img"/>
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong><Link to={"/providers/" + provider._id}>{provider.name}</Link></strong> <br />
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
        <div>
           {providers}
        </div>
        <AddProvider userID={this.props}/>
      </div>
    )
  }
}

export default Providers
