import React, { Component } from 'react'
import axios from "axios"

import '../../../Auth/AuthCSS/SignUp.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "./RecipeForm.css"

export class RecipeForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            method: "",
            errorMessage: ""
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.props.user)
        const body = {
            name: this.state.name,
            method: this.state.method,
            user: this.props.user,
            ingredients: this.props.ingredients.map((ingredient) =>
            ({
                quantity: ingredient.quantity,
                product: ingredient.product.id
            })
            )
        }
        axios.post(process.env.REACT_APP_API_URL + "/recipes/", body, { withCredentials: true })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log("catch handle submit", error.response.data.message)
                this.setState({
                    errorMessage: error.response.data.message
                })
            })
        event.target.reset()
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    handleDeleteRecipe = (event) => {
        this.setState({
            name: "",
            method: ""
        })
        this.props.emptyForm()
    }

    render() {
        const ingredients = this.props.ingredients.map((ingredient, index) => (
            <div key={index}>
                <h4><b>Ingredient:</b> {ingredient.product.name}</h4>
                <h4><b>Recipe quantity:</b> {ingredient.quantity} {ingredient.product.typeFormat}</h4>
                <hr />
            </div>
        ))
        return (
            <div>
                <div className="recipeForm">
                    <h1 className='titleAdd'>Add a new Recipe</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label><b>Cocktail name:</b></label>
                        <br />
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className='form-control inputReducido' />
                        <br />
                        <label><b>Cocktail technique:</b></label>
                        <br />
                        <select value={this.state.method} onChange={this.handleChange} name='method' className='form-control inputReducido'>
                            <option value=""> </option>
                            <option value="Shake">Shake</option>
                            <option value="Stir">Stir</option>
                            <option value="Throw">Throw</option>
                            <option value="Muddle">Muddle</option>
                        </select>

                        <div id="recipeIngredients-container">{ingredients}</div>
                        <div className="btnGroup">
                            <button type="submit" className="btn submit-contact-main ml-auto">Submit</button>
                            <button type="reset" onClick={this.handleDeleteRecipe} className="btn submit-contact-main ml-auto deleteBtn">Delete</button>
                        </div>
                        <p className="errorMessage">{this.state.errorMessage}</p>
                    </form>
                </div>
            </div>
        )
    }
}

export default RecipeForm
