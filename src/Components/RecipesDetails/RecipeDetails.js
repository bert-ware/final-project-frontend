import React, { Component } from 'react'
import axios from "axios"
import { Redirect } from 'react-router-dom'
import "./RecipeDetails.css"

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
            productsData: [],

        }
    }
    //Recogida datos API
    componentDidMount() {
        axios.get("http://localhost:3000/api/recipes/" + this.state.id)
        .then(response => {
            this.setState({
                recipe: response.data, 
            })
        })
        axios.get("http://localhost:3000/api/products/" + this.state.recipe.ingredients)
        .then(response => {
            this.setState({
                productsData : response.data
            })
        })

    }
 //Handle borrar
  handleClick = () => {
    axios.delete("http://localhost:3000/api/recipes/" + this.state.id)
    .then(() => this.setState({ redirect: true }))
}
    render() {
        //Map ingredients
       const ingredients = this.state.productsData.map((ingredient) =>
            <li key={ingredient._id}> {ingredient.name} </li>
        )
        //Map mesures
        const mesures = this.state.recipe.ingredients.map((ingredient, index) =>
            <li key={index}> {ingredient.quantity} Centiliters</li>
        )
        //Cost mesures
        const recipeMesures = this.state.recipe.ingredients.map((ingredient) => ingredient.quantity)
        const mesureCost = this.state.productsData.map((item, index) =>
        (item.price/item.format* recipeMesures[index]).toFixed(2))
        const displayMesureCost = mesureCost.map((item, index) =>
            <li key={index}>{item}</li>
        ) 
        //Total recipe Cost 
        const totalCost = mesureCost.reduce((a, b) => a + b, 0)
        
        console.log("mesurecost", mesureCost)
        console.log("total cost:", totalCost)
    

          //Redirect a providers
      const { redirect } = this.state;
      if (redirect) {
        return <Redirect to='/recipes'/>
      }

        return (
            <div>
            <h1>{this.state.recipe.name}</h1> 
            <img className="cocktailImg" src="https://static2.bigstockphoto.com/3/7/1/large2/173870551.jpg" alt="cocktail"></img>
            <div className="infoContainer">
            <ul className="ingredients">INGREDIENTS:{ingredients}</ul>
            <ul className="mesures">MESURES:{mesures}</ul>
            <ul className="costMesures">COST:{displayMesureCost}</ul>
            </div>
            <h1>Total cost: {totalCost}</h1>
            <h3>Method:{this.state.recipe.method}</h3>
            <button onClick={this.handleClick} className="delete">Delete</button>
            </div>
        )
    }
}
export default RecipeDetails