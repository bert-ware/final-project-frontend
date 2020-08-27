import React, { useState } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Products from './components/Products/Products';
import Providers from "./components/Providers/Providers"
import ProviderDetails from "./components/ProviderDetails/ProviderDetails"
import Home from './components/Home/Home';
import AddProduct from './components/AddProduct/AddProduct'
import Recipes from './components/Recipes/Recipes';
import RecipeDetails from "./components/RecipesDetails/RecipeDetails"
import Signup from "./Auth/Signup"
import Logout from "./Auth/Logout"
import Login from "./Auth/Login"


function App() {
  const [setDatos] = useState({
    loggedInUser: null
  })
  const getTheUser = (userObj) => {
    setDatos({
      loggedInUser: userObj
    })
  }
  
  return (
    <div className="App">
      <Switch> <Route exact path='/'><Home/></Route>
        <Route exact path='/recipes'><Recipes/></Route>
        <Route path="/recipes/:id" render={(props) => <RecipeDetails {...props} />} />
        <Route exact path='/products'><Products/></Route>
        <Route path="/products/:id" render={(props) => <ProductDetails {...props} />} />
        <Route exact path='/addproduct'><AddProduct /></Route>
        <Route path="/products/:id" render={(props) => <ProductDetails  {...props}/>} />
        <Route exact path='/providers'> <Providers/></Route>
        <Route path="/providers/:id" render={(props) => <ProviderDetails {...props} />} />
        <Route path="/signup" render={props => <Signup {...props} callback={getTheUser}  />} />
        <Route path="/login" render={props => <Login {...props} callback={getTheUser}  />} />
        <Route exact path="/logout" render={(props) => <Logout {...props} getUser={getTheUser} />}/>
      </Switch>
    </div>
  );  
}
export default App;