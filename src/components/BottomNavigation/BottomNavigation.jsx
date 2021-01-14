import React, { Component } from "react"
import { Link } from "react-router-dom"

import "./BottomNavigation.css"

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
      products: "/img/Products.svg",
      productsActive: "/img/Products2.svg",
      productsInactive: "/img/Products.svg",
      textProfile: "white",
      textRecipes: "white",
      textProducts: "white",
      textProviders: "white",
    };
  }

  //Color changes
  handleClick = (event) => {
    if (event.target.name === "profile") {
      this.setState({
        profile: this.state.profileActive,
        recipes: this.state.recipesInactive,
        providers: this.state.providersInactive,
        products: this.state.productsInactive,
        textProfile: "#15540e",
        textRecipes: "white",
        textProducts: "white",
        textProviders: "white",
      });
    } else if (event.target.name === "providers") {
      this.setState({
        profile: this.state.profileInactive,
        recipes: this.state.recipesInactive,
        providers: this.state.providersActive,
        products: this.state.productsInactive,
        textProviders: "#15540e",
        textProfile: "white",
        textRecipes: "white",
        textProducts: "white",
      });
    } else if (event.target.name === "recipes") {
      this.setState({
        profile: this.state.profileInactive,
        recipes: this.state.recipesActive,
        providers: this.state.providersInactive,
        products: this.state.productsInactive,
        textRecipes: "#15540e",
        textProfile: "white",
        textProducts: "white",
        textProviders: "white",
      });
    } else if (event.target.name === "products") {
      this.setState({
        profile: this.state.profileInactive,
        recipes: this.state.recipesInactive,
        providers: this.state.providersInactive,
        products: this.state.productsActive,
        textProducts: "#15540e",
        textProfile: "white",
        textRecipes: "white",
        textProviders: "white",
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
            <p
              style={{
                color: `${this.state.textProfile}`,
                marginTop: "5px",
                fontSize: "8px",
                textDecoration: 'none'
              }}
            >
              PROFILE
            </p>
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
                key={"recipes" + this.state.recipes}
                alt="recipes icon"
              />
            </div>
            <p
              style={{
                color: `${this.state.textRecipes}`,
                marginTop: "5px",
                fontSize: "8px",
                textDecoration: 'none'
              }}
            >
              RECIPES
            </p>
          </Link>
        </div>

        <div>
          <Link to={"/products/"}>
            <div>
              <img
                onClick={this.handleClick}
                id="products"
                name="products"
                src={this.state.products}
                key={"products" + this.state.products}
                alt="product icon"
              />
            </div>
            <p
              style={{
                color: `${this.state.textProducts}`,
                marginTop: "5px",
                fontSize: "8px",
                textDecoration: 'none'
              }}
            >
              PRODUCTS
            </p>
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
                key={"providers" + this.state.providers}
                alt="profile icon"
              />
            </div>
            <p
              style={{
                color: `${this.state.textProviders}`,
                marginTop: "5px",
                fontSize: "8px",
                textDecoration: 'none'
              }}
            >
              PROVIDERS
            </p>
          </Link>
        </div>
      </div>
    );
  }
}

export default BottomNavigation;
