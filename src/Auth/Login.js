import React, { Component } from 'react'
import AuthService from './AuthService'
import { Link, Redirect } from 'react-router-dom'
import "./AuthCSS/SignUp.css";
import Carrousel from '../components/Carrousel/Carrousel';


class Login extends Component {
  constructor(props){
    super(props);
    this.state = { 
    email: '',
    password: '',
    redirect: false 
  }
    this.service = new AuthService();
  }
  //Handle Submit
  handleFormSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    this.service.login(email, password)
    .then( response => {
        console.log(response)
        this.setState({ email: "", password: "" });
        this.props.callback(response) 
    })
    .then(() => this.setState({ redirect: true }))
    .catch( error => console.log(error) )
  }
  //Handle Change
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value})
  }
  render(){
    //Redirect a user-profile
    const { redirect } = this.state
    if (redirect) {
      return <Redirect to='/user-profile'/>
    }
    return(
      // <div>
      //   <form onSubmit={this.handleFormSubmit}>
      //     <label>Email:</label>
      //     <input type="email" name="email" value={this.state.email} onChange={ e => this.handleChange(e)}/>
      //     <label>Password:</label>
      //     <input name="password" type="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
      //     <input type="submit" value="Login" />
      //   </form>
      //   <p>Don't have account? 
      //       <Link to={"/signup"}> Signup</Link>
      //   </p>
      // </div>

      //Return con clase

      <div className='signUpContainer'>
      <div>
        <Carrousel />
      </div>

      <div className="col-lg-7 contact-right mt-lg-0 mt-5 testing-centered">
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
          <input
              placeholder="Email"
                type="email" className="form-control" name="email" value={this.state.email} onChange={ e => this.handleChange(e)}
              />
            
           
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              required=""
              value={this.state.password} onChange={ e => this.handleChange(e)}
            />
          </div>
          <button
            type="submit"
            className="btn submit-contact-main ml-auto"
            value="Login"
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

          <p className="account">Don't have account?</p>
          <Link className="password" to={"/signup"}> Signup</Link>

        </form>
      </div>
    </div>
    )
  }
}
export default Login;