
import React, { Component } from "react"
import axios from "axios"
import "./RecipeDetails.css"
import FileUploadRecipes from "../Fileupload/FileUploadRecipes"
import { Redirect } from 'react-router-dom'
import Carrousel from "../Carrousel/Carrousel"



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


  render () {
    //Map ingredients
    const ingredients = this.state.recipe.ingredients.map((ingredient) =>
    <li key={ingredient.product._id}> {ingredient.product.name} </li>
    )
    //Map mesures
    const mesures = this.state.recipe.ingredients.map((ingredient, index) => (
      <li key={index}>
        {ingredient.quantity} {ingredient.product.typeFormat}
      </li>
    ))
    //Map Cost mesures
    const mesureCostArr = this.state.recipe.ingredients.map((ingredient) =>
      Number(((ingredient.product.price / ingredient.product.format)*ingredient.quantity).toFixed(2)))

    const mesureCost = mesureCostArr.map((cost, index) => (
     <li key={index}> {cost} </li>
        ))
    //Total recipe Cost
    const totalCost = mesureCostArr.reduce((a, b) => a + b, 0)
    //Suggested sell price
    const suggestedPrice = Math.floor(totalCost * 5 + 1)

    //Redirect a providers
    const { redirect } = this.state
    if (redirect) {
      return <Redirect to="/recipes" />
    }

    return (
      <div>
      <Carrousel image={this.state.recipe.recipeImgUrl} title={this.state.recipe.name}/>
        <div className="recipeDetailsPage">
          <h2 className="addRecipesTitle">Method: {this.state.recipe.method}</h2>
          <FileUploadRecipes {...this.props} recipe={this.state.recipe} />
          <button onClick={this.handleClick} id="recipeDetailsDeleteBtn" className="button is-danger">
            Delete recipe
          </button>
          <div className="infoContainer">
          <ul className="ingredients"><b> INGREDIENTS:</b>{ingredients}</ul>
          <ul className="mesures"><b>MESURES:</b>{mesures}</ul>
          <ul className="costMesures"><b>COST:</b>{mesureCost}</ul>
        </div>
  <div className="stats">
            <h1 className="addRecipesTitle">Info:</h1>
            <p><b>Total cost:</b> {totalCost.toFixed(2)}</p>
            <p><b>Suggested sell price*:</b> {suggestedPrice}</p>
          </div>
          <p id="leyenda">* Orientative price ensuring cost price dont exceed 20% beverage cost</p>
        </div>
     </div>   
    )
  }
}
export default RecipeDetails

