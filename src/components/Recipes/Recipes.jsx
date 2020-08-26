import React, { Component } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

export class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
          recipes: [],
        };
      }

      componentDidMount() {
        axios
          .get("http://localhost:3000/api/recipes/")
          .then((response) => {
    
            this.setState({
                recipes: response.data,
              
            });
          })
          .catch((err) => console.log( err));
      }
    render() {

        const recipes = this.state.recipes.map((recipes) => (
      
            <div key={recipes._id}>
              <h1>
                <Link to={"/products/" + recipes._id}>{recipes.name}</Link>
              </h1>
            </div>
          ));
        
        return (
            <div className="container">
            <div style={{ width: "60%", float: "left" }}>
              <h1>Recipes List</h1>
              {recipes}
            </div>
            {/* <div style={{ width: "40%", float: "right" }}>{add}</div> */}
          </div>
        )
    }
}

export default Recipes
