import React, { Component } from "react"
import Carrousel from "../Carrousel/Carrousel"

import "bootstrap/dist/css/bootstrap.css"
import "./Home.css";

export class Home extends Component {
  render() {
    return (
      <div>
        <Carrousel
          title="We are DrinkApp"
          image="./img/drinks/cocktail8.jpg"
          
        />

        <section id="about" className="page-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <div className="service-item first-service">
                  <img id="logoDrink" src="/img/logo-white.svg" alt="Logo" />

                  <div id="explanationHome">
                    <h4>What is Drinkapp?</h4>
                    <p>
                      Drinkapp is a new tool to calculate cost breakdown of your
                      drinks and have a track of your providers and recipes!
                      <br />
                      New cocktail menu? No time for excel? Want to know your
                      cost breakdown in a simple way? This is why Drinkapp is
                      for you!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-item second-service" id="column2">
                  <div className="effectBox">
                    <div className="box-front1">
                      <img
                        className="bottomIcon"
                        src="/img/Profile.svg"
                        alt=""
                      />
                    </div>
                    <div className="box-back1">
                      <p id="centered">
                        <b>1.-</b> Signup and create your <b>PROFILE</b> for
                        FREE!
                      </p>
                    </div>
                  </div>
                  <div className="effectBox">
                    <div className="box-front1">
                      <img
                        className="bottomIcon"
                        src="/img/Providers.svg"
                        alt=""
                      />
                    </div>
                    <div className="box-back1">
                      <p>
                        <b>2.-</b> Introduce your <b>PROVIDERS.</b> In each of
                        them you can introduce their products and the playground
                        will be set!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-item third-service" id="column3">
                  <div className="effectBox">
                    <div className="box-front2">
                      <img
                        className="bottomIcon"
                        src="/img/Products.svg"
                        alt=""
                      />
                    </div>
                    <div className="box-back2">
                      <p>
                        <b>3.-</b> In <b>PRODUCTS</b> page you can search for
                        ingredients, compare prices and
                        create a new recipe
                      </p>
                    </div>
                  </div>
                  <div className="effectBox">
                    <div className="box-front2">
                      <img
                        className="bottomIcon"
                        src="/img/Recipes.svg"
                        alt=""
                      />
                    </div>
                    <div className="box-back2">
                      <p>
                        <b>4.-</b>In <b>RECIPES</b> page select a recipe and
                        access to a detail of ingredients and total cost break
                        down!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    ) 
  }
}

export default Home
