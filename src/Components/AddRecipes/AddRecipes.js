import React, { Component } from 'react'
import axios from "axios"
import Search from "../Search/Search"
 import "./AddRecipes.css"
import RecipeForm from "./RecipeForm"
import IngredientBox from "./IngredientBox"
import { Link } from "react-router-dom"

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
              .get(process.env.REACT_APP_API_URL + "/products/", {withCredentials: true})
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
            //DELETE PRODUCT
            deleteProduct = ( product, index) => { this.setState(state =>
              ({...state,
                 recipeIngredients: [...state.recipeIngredients ].splice(index, product)}) 
                 )}
            //EMPTY FORM
            emptyForm = () => { this.setState({
              recipeIngredients: []
            })}     
          
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
        let displayIngredients 
        if (!this.state.products.length) {
          displayIngredients = <div>
            <p>No products yet, lets add some!</p>
            <Link to="/providers">Go to your provider list and start adding ingredients</Link>
          </div>
          } else {
        displayIngredients = this.state.products.filter((product) => {
            return product.name.toLowerCase().includes(searchParam.toLocaleLowerCase())
        })
        //Map to render al items passin the filter. With no input on the filter display all of them
        .map((item , index) => <IngredientBox  key={index} item={item} addProduct={this.addProduct}/> ) 
      }
        return (
            <div>
            <h1>Products</h1>
            <div id="addRecipePage"> 
            <Search searchParam={this.searchParam}
          handleSearchParam={handleSearchParam}/>
           <div className="ingredientDisplay"> {displayIngredients}</div>
           <RecipeForm emptyForm={this.emptyForm} ingredients={this.state.recipeIngredients} user={this.props.loggedInUser.loggedInUser._id}/>
            </div>
            </div>
        )
    }
}

export default AddRecipes
