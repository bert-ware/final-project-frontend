
import React, { Component } from "react";
import { Link } from "react-router-dom";
import './BottomNavigation.css'

export class BottomNavigation extends Component {
  render() {
    return (
      <div className='fondo'>
        <div className="bottomNav">
        <Link to={"/user-profile"}> Profile</Link>
        <Link to={"/products/"}> Products</Link>
        <Link to={"/providers/"}> Providers</Link>
        <Link to={"/recipes/"}> Recipes</Link>
        <Link to={"/"}> Home</Link>
        </div>
        {/* <h1>
          <Link to={'#'}> Icon 1</Link>
          <Link to={'#'}> Icon 2</Link>
          <Link to={'#'}> Icon 3</Link>
        </h1> */}
      </div>
    )
  }
}
export default BottomNavigation;
