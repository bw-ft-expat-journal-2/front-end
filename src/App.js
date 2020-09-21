import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import axios from 'axios'
import Login from './Login'
import * as yup from 'yup'
import schema from './loginSchema'

const initialLoginValues = {
  user: '',
  pass: ''
}

const initialLoginErrors =  {
  user: '',
  pass: '',
  request: ''
}

const initialLoginDiabled = true








function App() {
  const [loginValues, setLoginValues] = useState(initialLoginValues)
  const [loginErrors, setLoginErrors] = useState(initialLoginErrors)
  const [loginDisabled, setLoginDisabled] = useState(initialLoginDiabled)

  const validate = (name, value) => {
    yup
      .reach(schema)
      .validate(value)
      .then(valid => {
        console.log(valid)
        setLoginErrors({...loginErrors, [name]: ''})
      })
      .catch(err => {
        console.log(err)
        setLoginErrors({...loginErrors, [name]: err.errors[0]})
      })
  }

  const update = (name, value) => {
    validate(name, value)
    setLoginValues({ ...loginValues, [name]: value })
  }

  const attemptLogin = (userInfo) => {
    axios.post('',userInfo)
      .then(res => {
        console.log(res)
        // ----------do something here to send you to the next page--------
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setLoginValues(initialLoginValues)
      })
  }

  const submit = () => {
    const userInfo = {
      user: loginValues.user.trim(),
      pass: loginValues.pass.trim()
    }
    attemptLogin(userInfo)
  }

  useEffect(() => {
    schema.isValid(loginValues)
      .then(valid => {
        setLoginDisabled(!valid)
      })
  }, [loginValues])


  return (
    <Router>
      <Route exact={true} path='/'>
        <h1>Hello</h1>
        <Link to='/login'>login</Link>
      </Route>
      <Route path='/login'>
        <Login values={loginValues} update={update} submit={submit} disabled={loginDisabled} errors={loginErrors}/>
      </Route>
    </Router>
  );
}

export default App;
