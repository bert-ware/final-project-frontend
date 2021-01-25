import React, { useState } from "react"
import { Switch, Route } from "react-router-dom"

import "./App.css"
import "bulma/css/bulma.css"
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Login from "./Auth/Login"
import Signup from "./Auth/Signup"
import Logout from "./Auth/Logout"
import UserProfile from "./components/UserProfile/UserProfile"
import ProductDetails from "./components/Products/ProductDetails/ProductDetails.jsx"
import Recipes from "./components/Recipes/Recipes"
import RecipeDetails from "./components/Recipes/RecipesDetails/RecipeDetails"
import AddRecipes from "./components/Products/AddRecipes/AddRecipes"
import Providers from "./components/Providers/Providers"
import ProtectedRoute from "./Auth/ProtectedRoute"
import ProviderDetails from "./components/Providers/ProviderDetails/ProviderDetails"
import BottomNavigation from "./components/BottomNavigation/BottomNavigation"


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
