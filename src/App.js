
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Login from './components/Login'

function App() {
  return (
    <Router>
      <Route exact={true} path='/'>
        <h1>Hello</h1>
        <Link to='/login'>login</Link>
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
    </Router>

  );
}

export default App;
