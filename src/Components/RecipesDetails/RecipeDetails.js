import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./RecipeDetails.css";
import FileUploadRecipes from "../Fileupload/FileUploadRecipes";
import Carrousel from "../Carrousel/Carrousel";


export class RecipeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      recipe: {
        name: "",
        ingredients: [],
        method: "",
      },
      redirect: false,
    };
  }
  //Recogida datos API
  componentDidMount() {
    axios
      .get("http://localhost:3000/api/recipes/" + this.state.id, {
        withCredentials: true,
      })
      .then((response) => {
        this.setState({
          recipe: response.data,
        });
      });
  }
  //Handle borrar
  handleClick = () => {
    axios
      .delete("http://localhost:3000/api/recipes/" + this.state.id, {
        withCredentials: true,
      })
      .then(() => this.setState({ redirect: true }));
  };

  render() {

    //MAP TH
    const ingredientsTH = this.state.recipe.ingredients.map((ingredient,index) => (
      <th key={ingredient.product._id}> Ingredient {index+1} </th>
    ));

    const MesureTH = this.state.recipe.ingredients.map((ingredient,index) => (
      <th key={ingredient.product._id}> Mesure {ingredient.product.name} </th>
    ));
  
    const MesureIngredient = this.state.recipe.ingredients.map((ingredient,index) => (
      <th key={ingredient.product._id}> Cost per {ingredient.product.name}  </th>
    ));


    //Map ingredients
    const ingredients = this.state.recipe.ingredients.map((ingredient) => (
      // <tr>
        <td key={ingredient.product._id}> {ingredient.product.name} </td>
      // {/* </tr> */}
    ));

    //Map mesures
    const mesures = this.state.recipe.ingredients.map((ingredient, index) => (
    // <tr>
              <td key={index}>
        {" "}
        {ingredient.quantity} {ingredient.product.typeFormat}
      </td>
    // {/* </tr> */}

    ));
    //Map Cost mesures
    const mesureCostArr = this.state.recipe.ingredients.map((ingredient) =>
      Number(
        (
          (ingredient.product.price / ingredient.product.format) *
          ingredient.quantity
        ).toFixed(2)
      )
    );

    const mesureCost = mesureCostArr.map((cost, index) => (
      <td key={index}> {cost} </td>
    ));
    //Total recipe Cost
    const totalCost = mesureCostArr.reduce((a, b) => a + b, 0);
    //Suggested sell price
    const suggestedPrice = Math.floor(totalCost * 5 + 1);

    //Redirect a providers
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/recipes" />;
    }

    return (
      <div>
        <Carrousel image={this.state.recipe.recipeImgUrl} title={this.state.recipe.name}/>
        <div className="recipeDetailsPage">
       
          <h2>Method: {this.state.recipe.method}</h2>
          <FileUploadRecipes {...this.props} recipe={this.state.recipe} />
          <button onClick={this.handleClick} className="button is-danger">
            Delete recipe
          </button>
  <div className="stats">
            <h1>Info:</h1>
            <p>Total cost: {totalCost.toFixed(2)}</p>
            <p>Suggested sell price: {suggestedPrice}</p>
          </div>
        </div>

        {/* TABLA */}

        <div className="table-wrapper">
          <table className="fl-table">
            <thead>
              <tr>
              {ingredientsTH}
              </tr>
            </thead>
            <tbody>
              <tr>
              {ingredients}
              </tr>
            </tbody>
          </table>

          <table className="fl-table">
            <thead>
              <tr>
              {MesureTH}
              </tr>
            </thead>
            <tbody>
              <tr>
              {mesures}
              </tr>
            </tbody>
          </table>

          <table className="fl-table">
            <thead>
              <tr>
              {MesureIngredient}
              </tr>
            </thead>
            <tbody>
              <tr>
              {mesureCost}
              </tr>
            </tbody>
          </table>


          
        </div>
      </div>
    );
  }
}
export default RecipeDetails;
