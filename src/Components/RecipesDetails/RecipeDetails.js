import React, { Component } from 'react'
import axios from "axios"


export class RecipeDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            recipe: {
                name: "",
                ingredients: [],
                method: ""
            }
        }
    }
    componentDidMount() {
        axios.get("http://localhost:3000/api/recipes/" + this.state.id)
        .then(response => {
            this.setState({
                recipe: response.data
            })
            console.log(response.data)
        })
    }
    render() {
        const ingredients = this.state.recipe.ingredients.map((ingredient) => (
            <div key={this.state.recipe.ingredients.name}>
              <h1> {ingredient} </h1>
            </div>
          ))
        return (
            <div>
            <h1>{this.state.recipe.name}</h1>
            <h4>{ingredients}</h4>
            <h3>{this.state.recipe.method}</h3>
            </div>
        )
    }
}
export default RecipeDetails