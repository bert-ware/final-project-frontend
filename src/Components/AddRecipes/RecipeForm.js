import React, { Component } from 'react';
import "./RecipeForm.css"
import axios from "axios"

export class RecipeForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name : "",
            method: "",

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
        console.log(body)
        event.target.reset();
    
        axios.post("http://localhost:3000/api/recipes/", body, {withCredentials : true})
        .then( () => console.log("receta creada con exito"));
           
      }

    handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value})
      }

    render() {
        const ingredients = this.props.ingredients.map((ingredient, index) => (
            <div key={index}>
                <h1>{ingredient.product.name}</h1>
                <h2>{ingredient.quantity}</h2>
                <button>delete</button>
            </div>
        ))
        return (
            <div className="recipeForm">
            <form  onSubmit={this.handleSubmit}>
             <label>Name:</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
                <select value={this.state.method} onChange={this.handleChange} name='method'>
                  <option value="Shake">Shake</option>
                  <option value="Stir">Stir</option>
                 <option value="Throw">Throw</option>
                 <option value="Muddle">Muddle</option>
                </select>

                <div>{ingredients}</div>
                <button type="submit" className="button is-info">Submit</button>
            </form>    
            </div>
        )
    }
}

export default RecipeForm
