import React, { useState } from "react"
import { Switch, Route } from "react-router-dom"

import "./App.css"
import "bulma/css/bulma.css"

import ProductDetails from "./components/Products/ProductDetails/ProductDetails.jsx"
import Providers from "./components/Providers/Providers"
import ProviderDetails from "./components/Providers/ProviderDetails/ProviderDetails"
import Home from "./components/Home/Home"
import Recipes from "./components/Recipes/Recipes"
import RecipeDetails from "./components/Recipes/RecipesDetails/RecipeDetails"
import Signup from "./Auth/Signup"
import Logout from "./Auth/Logout"
import Login from "./Auth/Login"
import UserProfile from "./components/UserProfile/UserProfile"
import BottomNavigation from "./components/BottomNavigation/BottomNavigation"
import AddRecipes from "./components/Products/AddRecipes/AddRecipes"
import ProtectedRoute from "./Auth/ProtectedRoute"
import Navbar from "./components/Navbar/Navbar"

function App(props) {
  //Hook log
  const [userState, setLogIn] = useState({ loggedInUser: null })
  const setTheUser = (userObj) =>
    setLogIn({
      loggedInUser: userObj,
    })

  return (
    <div className="App">
      <Navbar user={userState} key={userState} />
      <Switch>

        <Route exact path="/">
          <Home user={userState} />
        </Route>

        <ProtectedRoute 
          exact path="/recipes"
          component={Recipes} user={userState} />

        <ProtectedRoute
          path="/recipes/:id"
          component={RecipeDetails} user={userState} />
          
        <ProtectedRoute 
          exact path="/products"
          component={AddRecipes} user={userState} />
         
        <ProtectedRoute
          path="/products/:id"
          component={ProductDetails} user={userState} />
          
        <ProtectedRoute 
          exact path="/providers"
          component={Providers} user={userState} />
          
        <ProtectedRoute
          path="/providers/:id"
          component={ProviderDetails} {...props} user={userState} />
          
        <Route
          path="/signup"
          render={(props) => <Signup {...props} callback={setTheUser} />}
        />
        <Route
          path="/login"
          render={(props) => <Login {...props} callback={setTheUser} />}
        />
        <Route
          exact path="/logout"
          render={(props) => <Logout {...props} getUser={setTheUser} />}
        />
        <ProtectedRoute 
          exact path="/user-profile" 
          key={userState.name}
          component={UserProfile} user={userState} callback={setTheUser} />
          
      </Switch>
      <BottomNavigation />
    </div>
  )
}
export default App
