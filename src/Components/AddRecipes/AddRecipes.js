import React, { Component } from 'react'
import axios from "axios"
import Search from "../SearchProduct/Search"
import "./AddRecipe.css"
import RecipeForm from "./RecipeForm"
import IngredientBox from "./IngredientBox";

export class AddRecipes extends Component {
    constructor (props) {
        super (props)
        this.state = {
            products: [],
            filter:"",
            recipeIngredients: []
          }
        }
        componentDidMount() {
            axios
              .get("http://localhost:3000/api/products/")
              .then((response) => {
                this.setState({
                  products: response.data,    
                })
              })
              .catch((err) => console.log(" ESTE ES EL ERROR", err))
            }

            //ADD PRODUCT
            addProduct = product => { this.setState(state => 
              ({...state,
                 recipeIngredients: [...state.recipeIngredients, product ]}) 
                 )}
          
    render() {
     
        const searchParam = this.state.filter  
      //Handle buscador
        const handleSearchParam = (event) => {
            event.preventDefault()
          this.setState({
              filter: event.target.value    
            })
        }
     
        //Search filter
        const displayIngredients  = this.state.products.filter((product) => {
            return product.name.toLowerCase().includes(searchParam.toLocaleLowerCase())
        })
        //Map to render al items passin the filter. With no input on the filter display all of them
        .map((item , index) => <IngredientBox  key={index} item={item} addProduct={this.addProduct}/> ) 
        return (
            <div> 
            <Search searchParam={this.searchParam}
          handleSearchParam={handleSearchParam}/>
           <div className="ingredientDisplay"> {displayIngredients}</div>
           <RecipeForm ingredients={this.state.recipeIngredients}/>
            </div>
        )
    }
}

export default AddRecipes
