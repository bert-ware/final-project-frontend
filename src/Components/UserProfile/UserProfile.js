import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import ModalPrueba from "../Modal/ModalPrueba"
import axios from "axios"

// import "bootstrap/dist/css/bootstrap.css"

import "./UserProfile.css"

export class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: this.props.loggedInUser,
      img: this.props.loggedInUser.loggedInUser.imgUrl,
      recipes: 0,
      providers: 0,
      products: 0
    }
    this.handleImgState = this.handleImgState.bind(this)
  }
  //Funcion lifting state up
  handleImgState(input) {
    this.setState({ img: input })
  }

  componentDidMount() {
    // Estado de recetas
    axios
      .get(process.env.REACT_APP_API_URL + "/recipes/", { withCredentials: true })
      .then((response) => {
        this.setState({
          recipes: response.data.length,
        })
      })
      .catch((err) => console.log(err))

    // Estado de productos

    axios
      .get(process.env.REACT_APP_API_URL + "/products/", { withCredentials: true })
      .then((response) => {
        this.setState({
          products: response.data.length,
        })
      })

    // Estado de providers
    axios
      .get(process.env.REACT_APP_API_URL + "/providers/", { withCredentials: true })
      .then((response) => {
        this.setState({
          providers: response.data.length,
        })
      })
  }


  render() {
    if (!this.state.loggedInUser) {
      return <Redirect to="/login" />;
    }

    if (this.state.loggedInUser) {
      return (

        <main className="container">
          <div className="card">
            <img src={this.state.img} alt="User" className="card__image" />
            <div className="card__text">
              <h2>Welcome {this.state.loggedInUser.loggedInUser.name}!</h2>
              <p>{this.state.loggedInUser.loggedInUser.email}{" "}</p>
            </div>
            <ul className="card__info">
              <li>
                <span className="card__info__stats">{this.state.recipes}</span>
                <span>Recipes</span>
              </li>
              <li>
                <span className="card__info__stats">{this.state.products}</span>
                <span>Products</span>
              </li>
              <li>
                <span className="card__info__stats">{this.state.providers}</span>
                <span>Providers</span>
              </li>
            </ul>
            <div className="card__action">
              <ModalPrueba {...this.props} item={this.state.loggedInUser.loggedInUser} section="user" changeImg={this.handleImgState} />
            </div>
          </div>
        </main>
      )
    }

    return (
      <div>
        <h1>Profile</h1>
      </div>
    )
  }
}

export default UserProfile;
