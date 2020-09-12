import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BottomNavigation.css";

export class BottomNavigation extends Component {
  render() {
    return (
      <div className="FooterNav">
        <div>
          <Link to={"/user-profile"}>
            <div>
              <img src="./img/Profile.svg" alt="profile icon" />
            </div>
            Profile
          </Link>
        </div>

        <div>
          <Link to={"/recipes/"}>
            <div>
              <img src="./img/Recipes.svg" alt="profile icon" />
            </div>
            Recipes
          </Link>
        </div>

        <div>
          <Link to={"/providers/"}>
            <div>
              <img src="./img/Provider.svg" alt="profile icon" />
            </div>
            Providers
          </Link>
        </div>
      </div>
    );
  }
}

export default BottomNavigation;
