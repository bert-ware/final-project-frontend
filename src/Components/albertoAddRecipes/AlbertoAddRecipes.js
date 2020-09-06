import React, { Component } from 'react'
import axios from "axios"
import AlbertoSearch from "../SearchProduct/AlbertoSearch"
import "./AlbertoAddRecipe.css"
import RecipeForm from "./RecipeForm"

export class AlbertoAddRecipes extends Component {
    constructor (props) {
        super (props)
        this.state = {
            products: [],
            filter:"",
            recipeIngredients: [{
                ingredient : "",
                quantity : 0
            }]
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

    render() {
        const searchParam = this.state.filter  

        const handleSearchParam = (event) => {
            event.preventDefault()
          this.setState({
              filter: event.target.value    
            })
        }
        const handleclick = (event) => {
          this.setState({
            recipeIngredients : {
              ingredient: "",
              quantity : this.state.recipeIngredients.quantity
            }
          })
        }
        const handleChange = (event) => {
          event.preventDefault()
          this.setState({
            quantity : event.currentTarget.value
          })
        }
        //Search filter
        const displayIngredients  = this.state.products.filter((product) => {
            console.log(product)
            return product.name.toLowerCase().includes(searchParam.toLocaleLowerCase())
        })
        //Map to render al items passin the filter. With no input on the filter display all of them
        .map((item , index) => 
        
          <div className="box" key={index}>
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img className="productImg" src={item.productImgUrl} alt="img"/>
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{item.name} {item.format}Cl</strong> <br />
                  <small>Price: {item.price}€</small> <br/>
                  <small>{item.info}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input onChange={handleChange} className="input" type="number" placeholder="Select amount" />
                </div>
                <div className="control">
                  <button onClick={handleclick} className="button is-primary">
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
          ) 
      
        return (
            <div> 
            <AlbertoSearch searchParam={this.searchParam}
          handleSearchParam={handleSearchParam}/>
           <div className="ingredientDisplay"> {displayIngredients}</div>
           <RecipeForm ingredients={this.state.recipeIngredients}/>
            </div>
        )
    }
}

export default AlbertoAddRecipes
