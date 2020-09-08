import React, { Component } from 'react'
import AuthService from './AuthService'
import { Link, Redirect } from 'react-router-dom'

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
 /*    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/user-profile'/>
    } */
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Email:</label>
          <input type="email" name="email" value={this.state.email} onChange={ e => this.handleChange(e)}/>
          <label>Password:</label>
          <input name="password" type="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          <input type="submit" value="Login" />
        </form>
        <p>Don't have account? 
            <Link to={"/signup"}> Signup</Link>
        </p>
      </div>
    )
  }
}
export default Login;