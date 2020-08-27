import React, { Component } from 'react'
import AuthService from './AuthService'
import { Link } from "react-router-dom"


class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { name: "",email:"", password: "" };
    this.service = new AuthService();
  }
  // handleChange() and handleSubmit() will be added here
  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name
    const email = this.state.email
    const password = this.state.password
    this.service.signup(name, email, password)
    .then( response => {
        this.setState({
            name: "", 
            email: "",
            password: "",
        });
         this.props.callback(response)
    })
    .catch( error => console.log(error) )
  }
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>
          <label>Email:</label>
          <input type="email" name="email" value={this.state.email} onChange={ e => this.handleChange(e)}/>
          <label>Password:</label>
          <input name="password" type="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          <input type="submit" value="Signup" />
        </form>
        <p>Already have account? 
            <Link to={"/login"}> Login</Link>
        </p>
      </div>
    )
  }
}
export default Signup;