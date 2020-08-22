import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './Components//Home/Home.jsx';
import Products from './Components/Products/Products';





function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>

        <Route exact path='/products'>
          <Products/>
        </Route>

      </Switch>
      


    </div>
  );
}

export default App;
