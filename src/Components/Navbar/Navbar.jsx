import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <label htmlFor="togglericon" className="toggler" checked></label>
          <input type="checkbox" id="togglericon" className="toggler" />

          <div className="brand">
            <span className="brand-icon"></span>
            <span className="brand-name">DrinkApp</span>
          </div>

          <div className="nav">
            <Link to={"/signup/"}>Signup</Link>
            <Link to={"/login/"}>Login</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;
