import React, { Component } from 'react'
import axios from "axios";
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
          .get(process.env.REACT_APP_API_URL +"/recipes/", {withCredentials: true})
          .then((response) => {
            this.setState({
                recipes: response.data,             
            })
          })
          .catch((err) => console.log( err))
      }
    render() {


      let recipes
      if (!this.state.recipes.length) {
       recipes = 
        <div>
          <p>No recipes yet, go to <Link to={"/products/"}>Producst page </Link>and do your magic!</p>
        </div>
      } else {  
       recipes = this.state.recipes.map((recipe , index) => (
          <div key={index} className="box" id="recipesPage" >
            <article className="media">
             <div className="media-left">
               <figure className="image is-64x64">
                <img className="productImg" src={recipe.imgUrl} alt="img"/>
               </figure>
             </div>
            <div className="media-content">
             <div className="content">
               <p>
                <strong><Link to={"/recipes/" + recipe._id}>{recipe.name}</Link></strong> <br/>
                <small>Method: {recipe.method}</small> <br/>     
             </p>
            </div>  
           </div>
           <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                <p>Main ingredient:</p>
                 <small>{recipe.ingredients[0].product.name}</small>
                </div>
            </div>
          </div>
          </article>
        </div> 
          ))}
        
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
