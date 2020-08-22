import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './Components//Home/Home.jsx';
import Products from './Components/Products/Products';
import Providers from "./Components/Providers/Providers"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'><Home/></Route>
        <Route exact path='/products'><Products/></Route>
        <Route path="/products/:id" render={(props) => <COMPONENTEDETALLEPRODUCTOS {...props} />} />
        <Route exact path='/providers'> <Providers/></Route>
        <Route path="/providers/:id" render={(props) => <COMPONENTEDETALLEPROVEEDORES {...props} />} />
      </Switch>
    </div>
  );  
}

export default App;
