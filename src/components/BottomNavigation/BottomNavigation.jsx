import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BottomNavigation.css";

export class BottomNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: "/img/Profile.svg",
      providers: "/img/Providers.svg",
      recipes: "/img/Recipes.svg",
      profileActive: "/img/Profile2.svg",
      providersActive: "/img/Providers2.svg",
      recipesActive: "/img/Recipes2.svg",
      profileInactive: "/img/Profile.svg",
      providersInactive: "/img/Providers.svg",
      recipesInactive: "/img/Recipes.svg",
    };
  }
  handleClick = (event) => {
    console.log("CLICK!!", event.target.name);
    if (event.target.name === "profile") {
      this.setState({
        profile: this.state.profileActive,
        recipes: this.state.recipesInactive,
        providers: this.state.providersInactive,
      });
    } else if (event.target.name === "providers") {
      this.setState({
        profile: this.state.profileInactive,
        recipes: this.state.recipesInactive,
        providers: this.state.providersActive,
      });
    } else if (event.target.name === "recipes") {
      this.setState({
        profile: this.state.profileInactive,
        recipes: this.state.recipesActive,
        providers: this.state.providersInactive,
      });
    }
  };
  render() {
    return (
      <div className="FooterNav">
        <div>
          <Link to={"/user-profile"}>
            <div>
              <img
                onClick={this.handleClick}
                id="profile"
                name="profile"
                src={this.state.profile}
                alt="profile icon"
              />
            </div>
            Profile
          </Link>
        </div>

        <div>
          <Link to={"/recipes/"}>
            <div>
              <img
                onClick={this.handleClick}
                id="recipes"
                name="recipes"
                src={this.state.recipes}
                key={'recipes'+this.state.recipes}
                alt="profile icon"
              />
            </div>
            Recipes
          </Link>
        </div>

        <div>
          <Link to={"/providers/"}>
            <div>
              <img
                onClick={this.handleClick}
                id="providers"
                name="providers"
                src={this.state.providers}
                key={'providers'+this.state.providers}
                alt="profile icon"
              />
            </div>
            Providers
          </Link>
        </div>
      </div>
    );
  }
}

export default BottomNavigation;
