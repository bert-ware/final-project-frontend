import React, { Component } from "react";
import AuthService from "./AuthService";
import { Link, Redirect } from "react-router-dom";
import Carrousel from "../components/Carrousel/Carrousel";
import "./AuthCSS/SignUp.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      redirect: false,
    };
    this.service = new AuthService();
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
        });
        this.props.callback(response);
        console.log(response);
      })
      .then(() => this.setState({ redirect: true }))
      .catch((error) => console.log(error));
  };
  //Handle Change
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    //Redirect a user-profile
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/user-profile" />;
    }
    return (
      <div className="signUpContainer">
        <div>
          <Carrousel title='We are DrinkApp'/>
        </div>
        <div className="col-lg-7 contact-right mt-lg-0 mt-5 testing-centered">
          <form onSubmit={this.handleFormSubmit}>
            <div className="row">
              <div className="col-lg-6 form-group pr-lg-2">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Username"
                  value={this.state.name}
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              <div className="col-lg-6 form-group pl-lg-2">
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
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                required=""
                value={this.state.password}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <button
              type="submit"
              className="btn submit-contact-main ml-auto"
              value="Signup"
            >
              Submit
            </button>

            {/* Login FB */}
            <div
              className="fb-login-button"
              data-size="medium"
              data-button-type="login_with"
              data-layout="rounded"
              data-auto-logout-link="false"
              data-use-continue-as="false"
              data-width=""
            ></div>

            <br />
            <Link className="password" to={"/login"}>
              Forgot your password?
            </Link>

            <p className="account">Already have account?</p>
            <Link className="password" to={"/login"}>
              {" "}
              Login
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
export default Signup;
