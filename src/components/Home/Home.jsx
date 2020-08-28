import React, { Component } from "react";
//import { Link } from "react-router-dom";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header.jsx";


export class Home extends Component {
<<<<<<< HEAD
  render() {
    return (
      <div>
        <Header />

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
              <img className='galerie-2' src="https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="img" />
            </div>

            <div className="box grid_item">
              <img className='galerie-2' src="https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="img" />
            </div>
            
            <div className="box grid_item">
              <img className='galerie-2' src="https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="img" />
            </div>
          </div>
        </section>

        {/* <h1>Este es el Home</h1>
               <h2> <Link to={"/products/" }>Products</Link></h2>
               <h2> <Link to={"/providers/" }>Providers</Link></h2>
               <h2> <Link to={"/recipes/" }>Recipes</Link></h2>
                <BottomNavigation/> */}
      </div>
    );
  }
=======
    render() {
        return (
            <div>   
                <h1>Este es el Home</h1>
               <h2> <Link to={"/products/" }>Products</Link></h2>
               <h2> <Link to={"/providers/" }>Providers</Link></h2>
               <h2> <Link to={"/recipes/" }>Recipes</Link></h2>
               <h2> <Link to={"/user-profile" }>user profile</Link></h2>
                <SimpleBottomNavigation/>

            </div>
        )
    }
>>>>>>> 97959ac4c4b26608c21f84f6e029c3f5aaad158a
}

export default Home;
