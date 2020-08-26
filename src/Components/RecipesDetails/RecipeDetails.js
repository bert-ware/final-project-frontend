import React, { Component } from 'react'
import axios from "axios"
import { Redirect } from 'react-router-dom'

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
            redirect: false
        }
    }
    //Recogida datos API
    componentDidMount() {
        axios.get("http://localhost:3000/api/recipes/" + this.state.id)
        .then(response => {
            this.setState({
                recipe: response.data
            })
            console.log(response.data)
        })
    }
 //Handle borrar
  handleClick = () => {
    axios.delete("http://localhost:3000/api/recipes/" + this.state.id)
    .then(() => this.setState({ redirect: true }))
}
    render() {
        //Map ingredients
        const ingredients = this.state.recipe.ingredients.map((ingredient) => (
            <div key={this.state.recipe.ingredients.name}>
              <h1> {ingredient} </h1>
            </div>
          ))
          //Redirect a providers
      const { redirect } = this.state;
      if (redirect) {
        return <Redirect to='/recipes'/>
      }
        return (
            <div>
            <h1>{this.state.recipe.name}</h1>
            <h4>{ingredients}</h4>
            <h3>{this.state.recipe.method}</h3>
            <button onClick={this.handleClick} className="delete">Delete</button>
            </div>
        )
    }
}
export default RecipeDetails