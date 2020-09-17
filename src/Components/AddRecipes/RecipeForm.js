import React, { Component } from 'react';
import "./RecipeForm.css"
import axios from "axios"
import '../../Auth/AuthCSS/SignUp.css'
import "bootstrap/dist/css/bootstrap.min.css";


export class RecipeForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name : "",
            method: "",
            errorMessage: ""
        }
    }
     handleSubmit = (event) => {
        event.preventDefault()
        const body = {
            name: this.state.name,
            method: this.state.method,
            userID : this.props.user,
            ingredients: this.props.ingredients.map((ingredient) => 
               ({
                   quantity: ingredient.quantity,
                   product: ingredient.product.id
               })          
            )              
        }
        event.target.reset();
        axios.post(process.env.REACT_APP_API_URL + "/recipes/", body, {withCredentials : true})
        .then( response => {
            console.log(response) 
        })
        .catch( error => {
            console.log("catch handle submit" ,error.response.data.message)
          this.setState({
            errorMessage: error.response.data.message
          })})   
      }

    handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value})
      }

    render() {
        const ingredients = this.props.ingredients.map((ingredient, index) => (
            <div key={index}>
                <h1>Ingredient: {ingredient.product.name}</h1>
                <h2>Recipe quantity: {ingredient.quantity}</h2>
                <hr/>
            </div>
        ))
        return (
            <div>
            <div className="recipeForm">
                <h1 className='titleAdd'>Add a new Recipe</h1>
            <form  onSubmit={this.handleSubmit}>
             <label>Cocktail name:</label>
                <br />
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className='form-control inputReducido' />
                <br/>
                <label>Cocktail technique:</label>
                <br/>
                <select value={this.state.method} onChange={this.handleChange} name='method' className='form-control inputReducido'>
                  <option value="Shake">Shake</option>
                  <option value="Stir">Stir</option>
                 <option value="Throw">Throw</option>
                 <option value="Muddle">Muddle</option>
                </select>

                <div>{ingredients}</div>
                <button type="submit"   className="btn submit-contact-main ml-auto">Submit</button>
                <button onClick={this.props.deleteProduct} className="btn submit-contact-main ml-auto deleteBtn">Delete</button>
                <p className="errorMessage">{this.state.errorMessage}</p>
            </form>    
            </div>
        </div>
        )
    }
}

export default RecipeForm
