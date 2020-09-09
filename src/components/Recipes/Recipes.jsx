import React, { Component } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

export class Recipes extends Component {
    constructor(props) {
        super(props)
        this.state = {
          recipes: [],
        };
      }

      componentDidMount() {
        axios
          .get("http://localhost:3000/api/recipes/")
          .then((response) => {
            this.setState({
                recipes: response.data,             
            })
          })
          .catch((err) => console.log( err))
      }
    render() {

      const recipes = this.state.recipes.map((recipe , index) => (
    <div>   
          <div className="box" key={index}>
            <article className="media">
             <div className="media-left">
               <figure className="image is-64x64">
                <img className="productImg" src={recipe.recipeImgUrl} alt="img"/>
               </figure>
             </div>
            <div className="media-content">
             <div className="content">
               <p>
                <strong><Link to={"/recipes/" + recipe._id}>{recipe.name}</Link></strong> <br />
                <small>Method: {recipe.method}</small> <br/>
                
             </p>
            </div>  
           </div>
           <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                <h1>Main ingredient:</h1>
                 <small>{recipe.ingredients[0].product.name}</small>
                </div>
            </div>
          </div>
          </article>
        </div> 
         <hr></hr>
    </div>     
          ))
        
        return (
            <div className="container">
            <div >
              <h1>Recipes List</h1>
              {recipes}
            </div>
            
          </div>
        )
    }
}

export default Recipes
