import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './Components//Home/Home.jsx';
import Products from './Components/Products/Products';
import Providers from "./Components/Providers/Providers"
import ProviderDetails from "./Components/ProviderDetails/ProviderDetails"
import ProductDetails from "./Components/ProductDetails/ProductDetails"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'><Home/></Route>
        <Route exact path='/products'><Products/></Route>
        <Route path="/products/:id" render={(props) => <ProductDetails {...props} />} />
        <Route exact path='/providers'> <Providers/></Route>
        <Route path="/providers/:id" render={(props) => <ProviderDetails {...props} />} />
      </Switch>
    </div>
  );  
}

export default App;
