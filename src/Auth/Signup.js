import React, { Component } from "react"
import AuthService from "./AuthService"
import { Link, Redirect } from "react-router-dom"
import Carrousel from "../components/Carrousel/Carrousel"

import "./AuthCSS/SignUp.css"
import "bootstrap/dist/css/bootstrap.min.css"

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      errorMessage : "",
      redirect: false,
    }
    this.service = new AuthService()
  }
  //Handle Submit
  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const email = this.state.email;
    const password = this.state.password;
    this.service
      .signup(name, email, password)
      .then((response) => {
        this.setState({
          name: "",
          email: "",
          password: "",
        })
        this.props.callback(response)
        console.log(response);
      })
      .then(() => this.setState({ redirect: true }))
      .catch( error => {
        console.log("catch handle submit" ,error.response.data.message)
      this.setState({
        errorMessage: error.response.data.message
      })})
  }
  //Handle Change
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  render() {
    //Redirect a user-profile
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/user-profile" />
    }
    return (
      <div className="signUpContainer">
        <div>
          <Carrousel title='Welcome to DrinkApp' image="./img/drinks/cocktail3.jpg"/>
        </div>
        
        <div  className="col-lg-7 contact-right mt-lg-0 mt-5 testing-centered">
          <form id="divForm" onSubmit={this.handleFormSubmit}>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Username"
                  value={this.state.name}
                  onChange={(e) => this.handleChange(e)}/>
              </div>
            
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  required=""
                  value={this.state.email}
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
            
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="password"
                autoComplete="on"
                placeholder="Password"
                required=""
                value={this.state.password}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <button
              id="authSubmit"
              type="submit"
              className="btn submit-contact-main ml-auto"
              value="Signup">
              Submit
            </button>

            <p className="errorMessage">{this.state.errorMessage}</p>

            <p className="account">Already have an account?</p>
            <Link className="password" to={"/login"}>
              Login
            </Link>
          </form>
        </div>
      </div>
    )
  }
}
export default Signup;
