import React, { Component } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export class Navbar extends Component {

  handleClick =() =>(     
    this.ReactDOM.render()
  )
  
  render() {

    //USER COMO EJEMPLO
    let authLink = (
      <>
        <li>
          <NavLink className="linkInicial" to="/signup">
            Signup
          </NavLink>
        </li>

        <li>
          <NavLink className="linkInicial" to="/login">
            Login
          </NavLink>
        </li>
      </>
    )

    if (this.props.user.loggedInUser) {
      authLink = (
        <li className="nav-item">
          <NavLink to="/logout" className="linkInicial">
            Hola {this.props.user.loggedInUser.name}, Logout
          </NavLink>
        </li>
      );
    }

    return (
      <div className="header">

        <NavLink to="/" className="logo">
        <img className='img-logo' src="/img/logo-nav.svg" alt="DRINKAPP"/>
        </NavLink>

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon"  htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">{authLink}</ul>
      </div>
    )
  }
}

export default Navbar;
