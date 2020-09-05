import React, { Component } from 'react'
import axios from "axios"
import AlbertoSearch from "../SearchProduct/AlbertoSearch"

export class AlbertoAddRecipes extends Component {
    constructor (props) {
        super (props)
        this.state = {
            products: [],
            filter:""
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

        const displayIngredients  = this.state.products.filter((product) => {
            console.log(product)
            return product.name.toLowerCase().includes(searchParam.toLocaleLowerCase())
        })
        .map((item , index) => 
        
          <div className="box" key={index}>
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={item.productImgUrl} alt="img"/>
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{item.name} {item.format}</strong> <br />
                  <small>{item.price}</small> <br/>
                  <small>{item.info}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" value="1" />
                </div>
                <div className="control">
                  <button className="button is-info">
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
           <div> {displayIngredients}</div>
        
            </div>
        )
    }
}

export default AlbertoAddRecipes
