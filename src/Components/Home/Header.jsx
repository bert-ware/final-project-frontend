import React, { Component } from "react";
import './Home.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom"


export class Header extends Component {
  render() {
    return (
        <header id="home">
        <div className="header_text">
          <h1>We are DrinkApp!</h1>
          
          <Link id="header_button" to={"/signup/" }>JOIN US</Link>
              
        </div>
      </header>
    );
  }
}

export default Header;
