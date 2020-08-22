import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Products from './components/Products/Products';





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
