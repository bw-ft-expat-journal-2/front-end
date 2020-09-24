
import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './App.css';
import Login from './components/Login'
import Home from './components/Home'
import RegistryForm from './components/registryform'
import { PrivateRoute } from './components/PrivateRoute'
import Cards from './components/Cards'

function App() {
  return (
    <Router>
      <Route exact path ='/'>
      <Home component={Home} />
      </Route>

      <Route path='/login'>
        <Login component ={Login}/>

      </Route>
      <Route path="/register"> 
        <RegistryForm/>
      </Route>
      <PrivateRoute exact path="/protected" component = { Cards } />
    </Router>

  );
}

export default App;
