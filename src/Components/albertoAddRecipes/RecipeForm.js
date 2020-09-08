import React, { Component } from 'react'
import "./RecipeForm.css"

export class RecipeForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recipe : ""
        }
    }

    render() {
console.log("props form" , this.props.ingredients)
        return (
            <div className="recipeForm">
                <h1>{this.props.ingredients.product}</h1>
                <h1>{this.props.ingredients.quantity}</h1>
                
                <button type="submit" className="button is-info">Submit</button>
            </div>
        )
    }
}

export default RecipeForm
