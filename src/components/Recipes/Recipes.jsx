import React, { Component } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import "./Recipes.css"

export class Recipes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: [],
    };
  }

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_API_URL + "/recipes/", { withCredentials: true })
      .then((response) => {
        this.setState({
          recipes: response.data,
        })
        console.log(this.state.recipes)
      })
      .catch((err) => console.log(err))
  }
  render() {


    let recipes
    if (!this.state.recipes.length) {
      recipes =
        <div>
          <p>No recipes yet, go to <Link to={"/products/"}>Products page </Link>and do your magic!</p>
        </div>
    } else {
      recipes = this.state.recipes.map((recipe) => (
        <div key={recipe._id} className="box" id="recipesPage" >
          <article className="media">
            <div className="media-left">
              <figure className="image is-128x128">
                <img className="productImg" src={recipe.imgUrl} alt="img" />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <strong id="linkTitle"><Link to={"/recipes/" + recipe._id}>{recipe.name}</Link></strong> <br />
                {/* <p><b>Main ingredient:</b> {recipe.ingredients[0].product.name}</p> */}
              </div>
            </div>
          </article>
        </div>
        
      ))
      
    }

    return (
      <div className="container">
        <div >

          {recipes}
        </div>

      </div>
    )
  }
}

export default Recipes
