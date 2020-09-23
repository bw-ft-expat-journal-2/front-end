
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Login from './components/Login'
import Home from './components/Home'
import RegistryForm from './components/registryform'

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
    </Router>

  );
}

export default App;
