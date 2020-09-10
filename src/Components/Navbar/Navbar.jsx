import React, { Component } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom"



export class Navbar extends Component {
  
  render() {


    // USER COMO EJEMPLO

    let authLink = (
      <>
          <li className="nav-item">
              <NavLink to="/signup" >Signup</NavLink>
          </li>
          <li className="nav-item">
              <NavLink to="/login" >Login</NavLink>
          </li>
      </>
  )

  if (this.props.user.loggedInUser) {
      console.log("Hay usuario logueado!", this.props.user.loggedInUser.name)
      authLink = (
          <li className="nav-item">
              <NavLink to="/logout" className="nav-link">Hola {this.props.user.loggedInUser.name}, Logout</NavLink>
          </li>
      )
  } else{
    console.log('USUARIO NO LOGEUADO')
  }

    return (
      <div>
        <div className="navbar">
          <label htmlFor="togglericon" className="toggler" checked></label>
          <input type="checkbox" id="togglericon" className="toggler" />

          <div className="brand">
            <span className="brand-icon"></span>
            <span className="brand-name"><NavLink to="/" className="nav-link"></NavLink> DrinkApp</span>
          </div>

          <div className="nav">
            {authLink}
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

