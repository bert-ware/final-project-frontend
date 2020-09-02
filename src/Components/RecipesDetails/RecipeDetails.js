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
        }
    }
    //Recogida datos API
    componentDidMount() {
        axios.get("http://localhost:3000/api/recipes/" + this.state.id)
        .then(response => {
            this.setState({
                recipe: response.data,
            })
            console.log("Esto es el response",response.data)
        })

    }
 //Handle borrar
  handleClick = () => {
    axios.delete("http://localhost:3000/api/recipes/" + this.state.id)
    .then(() => this.setState({ redirect: true }))
}
    render() {
        //Map ingredients
       const ingredients = this.state.recipe.ingredients.map((ingredient) =>
            <li key={ingredient._id}> {ingredient.product}</li>
        )
      
          //Redirect a providers
      const { redirect } = this.state;
      if (redirect) {
        return <Redirect to='/recipes'/>
      }
     
        return (
            <div>
            <h1>{this.state.recipe.name}</h1> 
            <img className="cocktailImg" src="https://static2.bigstockphoto.com/3/7/1/large2/173870551.jpg" alt="cocktail"></img>
            <ul className="ingredients">INGREDIENTS{ingredients}</ul>
            <h3>{this.state.recipe.method}</h3>
            <button onClick={this.handleClick} className="delete">Delete</button>
            </div>
        )
    }
}
export default RecipeDetails