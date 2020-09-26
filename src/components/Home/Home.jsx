import React, { Component } from "react"
import "./Home.css"
import "bootstrap/dist/css/bootstrap.css"
import BottomNavigation from "../BottomNavigation/BottomNavigation"
import Carrousel from "../Carrousel/Carrousel"


export class Home extends Component {
  render() {
    return (
      <div>
        <Carrousel
          title="We are DrinkApp"
          image="./img/drinks/homeslider.png"/>

        <section id="about" className="page-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4" >
                <div className="service-item first-service" id="column1">
                  <div >
                    <img id="logoDrink" src="/img/logo-white.svg" alt="" />
                  </div>
                  <h4>What is Drinkapp?</h4>
                  <p>
                    Drinkapp is a new tool to calculate cost breakdown of your
                    drinks and have a track of your providers and recipes!
                    <br />
                    New cocktail menu? No time for excel? Want to know your cost
                    breakdown in a simple way? This is why Drinkapp is for you!
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-item second-service" id="column2">
                  <div className="icon">
                    <img className="bottomIcon" src="/img/Profile.svg" alt="" />
                    <p>
                      <b>1.-</b> Signup and create your <b>PROFILE</b>
                    </p>
                  </div>
                  <div className="icon">
                    <img
                      className="bottomIcon"
                      src="/img/Providers.svg"
                      alt=""
                    />
                    <p>
                      <b>2.-</b> Introduce your <b>PROVIDERS</b> In 
                      each of them you can introduce their
                      products and the playground will be set!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-item third-service" id="column3">
                  <div className="icon">
                    <img className="bottomIcon" src="/img/Products.svg" alt="" />
                    <p>
                      <b>3.-</b> In <b>PRODUCTS</b> page you can search for
                      ingredients, compare prices from different providers 
                       and create a new recipe
                    </p>
                  </div>
               
                  <div className="icon">
                    <img className="bottomIcon" src="/img/Recipes.svg" alt="" />
                    <p>
                      <b>4.-</b>In <b>RECIPES</b> page  select a  recipe and
                      access  to a detail of ingredients  and total
                       cost break down!
                    </p>
                  </div>                
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="gallerie">
          <div className="grid_container">
            <div className="box grid_item">
              <img
                className="galerie-2"
                src="https://scontent-mad1-1.xx.fbcdn.net/v/t31.0-8/28514692_1157581404377630_2337639456659598352_o.jpg?_nc_cat=110&_nc_sid=730e14&_nc_ohc=K3FxEP37DMIAX-Igpsi&_nc_ht=scontent-mad1-1.xx&oh=a3725101897dbca0e1d3f9eeca962925&oe=5F6D2D21"
                alt="img"
              />
            </div>

            <div className="box grid_item">
              <img
                className="galerie-2"
                src="https://scontent-mad1-1.xx.fbcdn.net/v/t31.0-8/15591630_10154805871668498_593361105097038447_o.jpg?_nc_cat=107&_nc_sid=9267fe&_nc_ohc=3aypFyyGPNoAX_rRlHm&_nc_ht=scontent-mad1-1.xx&oh=a1a032eb578d6a3cc2d3c6bd211a703f&oe=5F6F0BFF"
                alt="img"
              />
            </div>

            <div className="box grid_item">
              <img
                className="galerie-2"
                src="https://scontent-mad1-1.xx.fbcdn.net/v/t31.0-8/28619423_1158161937652910_2273450483933074375_o.jpg?_nc_cat=103&_nc_sid=730e14&_nc_ohc=heFaEG0tb-EAX88ys8Z&_nc_ht=scontent-mad1-1.xx&oh=447919e385123fb8e381805d9658510a&oe=5F6D5EF5"
                alt="img"
              />
            </div>
          </div>
        </section> */}
        <BottomNavigation />
      </div>
    )
  }
}

export default Home
