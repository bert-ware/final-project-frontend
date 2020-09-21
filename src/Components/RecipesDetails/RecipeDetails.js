import React, { Component } from 'react'
import axios from "axios"
import { Redirect } from 'react-router-dom'
import "./RecipeDetails.css"
import FileUploadRecipes from "../Fileupload/FileUploadRecipes"

export class RecipeDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            recipe: {
                name: "",
                ingredients: [],
                method: ""
            },
            redirect: false,
        }
    }
    //Recogida datos API
    componentDidMount() {
        axios.get(process.env.REACT_APP_API_URL +"/recipes/" + this.state.id, {withCredentials: true})
        .then(response => {
            this.setState({
                recipe: response.data, 
            })
        })
    }
 //Handle borrar
  handleClick = () => {
    axios.delete(process.env.REACT_APP_API_URL +"/recipes/" + this.state.id, {withCredentials: true})
    .then(() => this.setState({ redirect: true }))}

    render() {
        //Map ingredients
       const ingredients = this.state.recipe.ingredients.map((ingredient) =>
            <li key={ingredient.product._id}> {ingredient.product.name} </li>
        )
      
        //Map mesures
        const mesures = this.state.recipe.ingredients.map((ingredient, index) =>
            <li key={index}> {ingredient.quantity} {ingredient.product.typeFormat}</li>
        )
       //Map Cost mesures
       const mesureCostArr = this.state.recipe.ingredients.map((ingredient) => 
          Number((ingredient.product.price / ingredient.product.format * ingredient.quantity).toFixed(2)))  
       
       const mesureCost = mesureCostArr.map((cost, index) =>
            <li key={index}> {cost} </li>
        )
         //Total recipe Cost 
        const totalCost = mesureCostArr.reduce((a, b) => a + b, 0)
        //Suggested sell price
        const suggestedPrice = Math.floor(totalCost *5 +1)
        
    

          //Redirect a providers
      const { redirect } = this.state;
      if (redirect) {
        return <Redirect to='/recipes'/>
      }

        return (
<div>
            <h1>Recipe details</h1>
            <div className="recipeDetailsPage">
            <h1 id="recipeTitle">{this.state.recipe.name}</h1> 
            <h3 id="methodTitle">Method: {this.state.recipe.method}</h3>
            <img className="cocktailImg" src={this.state.recipe.recipeImgUrl} alt="cocktail img"></img>           
            <FileUploadRecipes {...this.props} recipe={this.state.recipe}/>
            <button onClick={this.handleClick} id="recipeDetailsDeleteBtn" className="button is-danger">Delete recipe</button>
            <div className="infoContainer">
            <ul className="ingredients">INGREDIENTS:{ingredients}</ul>
            <ul className="mesures">MESURES:{mesures}</ul>
            <ul className="costMesures">COST:{mesureCost}</ul>
            </div>
            <div className="stats">
            <h1>Info:</h1>
            <p>Total cost: {totalCost.toFixed(2)}</p>
            <p>Suggested sell price: {suggestedPrice}</p>
            </div>
            </div>
</div>
        )
    }
}
export default RecipeDetails