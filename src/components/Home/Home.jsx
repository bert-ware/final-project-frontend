import React, { Component } from "react"
//import { Link } from "react-router-dom"
import "./Home.css"
import "bootstrap/dist/css/bootstrap.css"
import Header from "./Header.jsx"
import Navbar from "../Navbar/Navbar"
import BottomNavigation from "../BottomNavigation/BottomNavigation"


export class Home extends Component {
  render() {
    return (
      <div>
        {/* <Navbar user={this.state.loggedInUser} key={this.state.loggedInUser}/> */}
        <Header/>
        <section id="intro">
          <h2>Lorem ipsum dolor</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </section>

        <section id="gallerie">
          <h2>Lorem ipsum dolor</h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>

          <div className="grid_container">
            <div className="box grid_item">
              <img className='galerie-2' src="https://scontent-mad1-1.xx.fbcdn.net/v/t31.0-8/28514692_1157581404377630_2337639456659598352_o.jpg?_nc_cat=110&_nc_sid=730e14&_nc_ohc=K3FxEP37DMIAX-Igpsi&_nc_ht=scontent-mad1-1.xx&oh=a3725101897dbca0e1d3f9eeca962925&oe=5F6D2D21" alt="img" />
            </div>

            <div className="box grid_item">
              <img className='galerie-2' src="https://scontent-mad1-1.xx.fbcdn.net/v/t31.0-8/15591630_10154805871668498_593361105097038447_o.jpg?_nc_cat=107&_nc_sid=9267fe&_nc_ohc=3aypFyyGPNoAX_rRlHm&_nc_ht=scontent-mad1-1.xx&oh=a1a032eb578d6a3cc2d3c6bd211a703f&oe=5F6F0BFF" alt="img" />
            </div>
            
            <div className="box grid_item">
              <img className='galerie-2' src="https://scontent-mad1-1.xx.fbcdn.net/v/t31.0-8/28619423_1158161937652910_2273450483933074375_o.jpg?_nc_cat=103&_nc_sid=730e14&_nc_ohc=heFaEG0tb-EAX88ys8Z&_nc_ht=scontent-mad1-1.xx&oh=447919e385123fb8e381805d9658510a&oe=5F6D5EF5" alt="img" />
            </div>
          </div>
        </section>
        <BottomNavigation/>
      </div>
    )
  }
}

export default Home
