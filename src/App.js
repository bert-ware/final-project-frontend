import React, { useState } from 'react'
import './App.css'
import {Switch, Route} from 'react-router-dom'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Products from './components/Products/Products'
import Providers from "./components/Providers/Providers"
import ProviderDetails from "./components/ProviderDetails/ProviderDetails"
import Home from './components/Home/Home'
import Recipes from './components/Recipes/Recipes'
import RecipeDetails from "./components/RecipesDetails/RecipeDetails"
import Signup from "./Auth/Signup"
import Logout from "./Auth/Logout"
import Login from "./Auth/Login"
import UserProfile from "./components/UserProfile/UserProfile"
import BottomNavigation from './components/BottomNavigation/BottomNavigation'
import AddRecipes from './components/AddRecipes/AddRecipes'
//import AddProduct from './components/AddProduct/AddProduct'

import 'bulma/css/bulma.css'


function App(props) {
   //Hook log
  const [userState, setLogIn] = useState({ loggedInUser: null })
  const setTheUser = (userObj) => setLogIn ({ 
    loggedInUser: userObj
  })
  
  return (
    <div className="App">
    
      <Switch>     
        <Route exact path='/'><Home user={userState}/></Route>
        <Route exact path='/recipes'><Recipes user={userState}/></Route>
        <Route exact path='/addrecipes'><AddRecipes user={userState}/></Route>
        <Route path="/recipes/:id" render={(props) => <RecipeDetails user={userState} {...props} />} />
        <Route exact path='/products'><Products user={userState}/></Route>
        <Route path="/products/:id" render={(props) => <ProductDetails user={userState} {...props} />} />
        <Route path="/products/:id" render={(props) => <ProductDetails user={userState}  {...props}/>} />
        <Route exact path='/providers'> <Providers user={userState}/></Route>
        <Route path="/providers/:id" render={(props) => <ProviderDetails user={userState} {...props} />} />,
        <Route path="/signup" render={props => <Signup {...props} callback={setTheUser}  />} />
        <Route path="/login" render={props => <Login {...props} callback={setTheUser}  />} />
        <Route exact path="/logout" render={(props) => <Logout {...props} getUser={setTheUser} />}/>
        <Route exact path="/user-profile"><UserProfile {...props} user={userState} getUser={setTheUser}/></Route>
      </Switch>
      <BottomNavigation/>
    </div>
  )  
}
export default App