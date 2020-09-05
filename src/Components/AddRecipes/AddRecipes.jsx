
import React, { Component } from 'react';
import axios from "axios";





class AddRecipes extends Component {

  state = {
    //Estados para el form
    name:'',
    // ingredients:[
    //   // {
    //   //   product:'Hola',
    //   //   quantity: 0
    //   // }, 
  
    // ],
    //CODE POR TOMAS
    currentIngredients: [],
    ingredientName: "",
    ingredientQuantity: 0,
    //userId:'',

    //Estados para el buscador
    query: "",
    data: [],
    filteredData: []
  };

  // PRUEBA DE HANDLE CHANGE PARA INGREDIENTS

  handleChangeIngredientes = ({ target }) => {
    
    this.setState((state) => ({ ...state, [target.name]: target.value }));
  };

  // PRUEBA DE HANDLE CLICK PARA INGREDIENTS

  // handleClickIngredients = () => {
  //   this.setState((state) => ({
  //     currentIngredients: [
  //       ...state.currentIngredients,
  //       { name: state.ingredientName, quantity: state.ingredientQuantity },
  //     ],
  //     ingredientName: "",
  //     ingredientQuantity: "",
  //   }));
  // };

  //FORMULARIO ADD RECIPES
  handleSubmit = event =>{
    event.preventDefault()

  }

  handleChange = event =>{
    const { name, value } = event.target;
    // this.setState({ [name]: value });

    this.setState((state) => ({
      currentIngredients: [
        ...state.currentIngredients,
        { name: state.ingredientName, quantity: state.ingredientQuantity },
      ],
      ingredientName: "",
      ingredientQuantity: "",
    }));

  }

  //Cambio de estado de ingredients TEST
  // changeIngredient = (event) => {
  //   const { ingredients } = this.state;
  //   const {product} = this.state.ingredients[0]
  //   console.log('ESTE ES EL VALOR DE INGEDIENT', ingredients)
  //   const newIngredients = {
  //     ...ingredients,
  //     product: event.target.value
  //   };
  //   this.setState({ ingredients: newIngredients });
  // }

  // AGREGAR INGREDIENTS
  addIngredients = (event)=>{
     console.log(event.target)
    // const { ingredients } = this.state;
    // this.setState({ingredients: [{}]})
    // console.log('ESTADO DE INGREDIENTES',this.state.ingredients)
   // this.setState({})
  }

  //BUSCADOR

  // Input change para el buscador
  handleInputChange = event => {
    const query = event.target.value;

    this.setState(prevState => {
      const filteredData = prevState.data.filter(element => {
        return element.name.toLowerCase().includes(query.toLowerCase());
      });

      return {
        query,
        filteredData
      };
    });
  };

  // Data para el buscador
  getData = () => {
 
    axios.get("http://localhost:3000/api/products/")
    // Then con axios
    .then(res => {
       
        const { query } = this.state;
        const filteredData = res.data.filter(element => {
          return element.name.toLowerCase().includes(query.toLowerCase());
          
        });
        this.setState({
          data: res.data,
          filteredData: filteredData
        });
      
     })
     
  };

  // FINAL DEL BUSCADOR

  componentWillMount() {
    
    this.getData();
  }

  render() {
    console.log('CURRENT INGREDIENTS', this.state.currentIngredients)
    // const ingredients = this.state.currentIngredients.map((ingredient) => (
    //   <p key={ingredient.name}>{ingredient.name}</p>
    // ));

  
    // Datos del buscador
    const datos = this.state.filteredData.map(i => 
      <p onClick={this.addIngredients} key={i._id} id={i._id}>
          {i.name}
      </p>
    )
    return (
      <div >
        {/* FORM TOMÁS */}

        <form>
        <div>
          <h3>Ingredients</h3>
          {/* {ingredients} */}
        </div>
        <div>
          <h4>Add New Ingredient</h4>
          <label htmlFor="ingredientName">Ingredient Name</label>
          <select
            name="ingredientName"
            defaultValue={this.state.ingredientName}
            onChange={this.handleClickIngredients}
          >
            {/* {this.props.ingredients.map((ingredient) => (
              <option value={ingredient.name}>{ingredient.name}</option>
            ))} */}
          </select>
          <label htmlFor="quantity">Quantity</label>
          <input type="number" name="quantity" onChange={this.handleClickIngredients} />
          <button type="button" onClick={this.handleClickIngredients}>
            Add ingredient
          </button>
        </div>
      </form>


        {/* Formulario Recipes */}
        <h1>Add Recipes</h1>

        {/* <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Name of recipe"
            onChange={this.handleChange}
            name="name"
          />
        </div>
        <div>
          <h4>Ingredients</h4>
          <h6>first ingredient</h6>
          <input
            type="text"
            placeholder="product"
            
            onChange={this.changeIngredient}
            name="product"
            
          /> */}
        
        {/* INPUT DE CANTIDAD */}
          {/* <input
            type="number"
            placeholder="quantity"          
            onChange={this.changeIngredient}
            value={this.state.ingredients[0].quantity}
            name="quantity"
            
          /> */}
          <br/>
          
          {/* <h6>Second ingredient</h6>
          <input
            type="text"
            placeholder="product"
            value={this.state.ingredients[1].product}
            onChange={this.changeIngredient}
            name="product"
            
          />
          <input
            type="number"
            placeholder="quantity"          
            onChange={this.changeIngredient}
            value={this.state.ingredients[1].quantity}
            name="quantity"
            
          />
          <br/>

          <h6>third ingredient</h6>
          <input
            type="text"
            placeholder="product"
            value={this.state.ingredients[2].product}
            onChange={this.changeIngredient}
            name="product"
            
          />
          <input
            type="number"
            placeholder="quantity"          
            onChange={this.changeIngredient}
            value={this.state.ingredients[2].quantity}
            name="quantity"
            
          /> */}

        {/* </div>
        <br/>

        <div>
        <label>
          Pick the method: 
          <select value={this.state.value} onChange={this.handleChange} name='method'>
            <option value={this.state.method['Shake']}>Shake</option>
            <option value={this.state.method['Stir']}>Stir</option>
            <option value={this.state.method['Throw']}>Throw</option>
            <option value={this.state.method['Muddle']}>Muddle</option>
          </select>
          </label>
        </div>
        <button type="submit">Add Recipe</button>
      </form>

<br/>

        {/* Formulario buscador */}
        <h2>Buscador</h2>
        <form>
          <input
            placeholder="Search  ingredients..."
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </form>
        <div>{datos}</div>
        {/* Final de Formulario buscador */}
      </div>
    );
  }
}


export default AddRecipes;



