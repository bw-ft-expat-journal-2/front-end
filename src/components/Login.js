import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
    } from "react-router-dom";
import * as yup from 'yup'
import schema from '../loginSchema'
import axios from 'axios'

const initialValues = {
    username: '',
    password: ''
}

const initialErrors =  {
    username: '',
    password: '',
    request: ''
}
  
    const initialDisabled = true

const Login = () => {
    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState(initialErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const validate = (name, value) => {
        yup
            .reach(schema, name)
            .validate(value)
            .then(valid => {
                console.log(valid)
                setErrors({...errors, [name]: ''})
            })
            .catch(err => {
                console.log(err)
                setErrors({...errors, [name]: err.errors[0]})
        })
    }

    const update = (name, value) => {
        validate(name, value)
        setValues({ ...values, [name]: value })
    }

    const attemptLogin = (userInfo) => {
        axios.post('https://expatjournal-backend.herokuapp.com/api/auth/login', userInfo)
            .then(res => {
                console.log(res) //need to put res.(something) to tell it where the data is
                // ----------do something here to send you to the next page--------
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setValues(initialValues)
        })
    }

    const submit = () => {
        const userInfo = {
            username: values.username.trim(),
            password: values.password.trim()
        }
        attemptLogin(userInfo)
    }

    useEffect(() => {
        schema.isValid(values)
            .then(valid => {
                setDisabled(!valid)
            })
    }, [values])

    const { url, path } = useRouteMatch()

    const onChange = evt => {
        const { name, value } = evt.target
        update( name, value )
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }


    return(
        <div>
            <div className='left'>
                <img src='#'/>
                <Link to='/create'>create an account</Link>
            </div>
            <div className='right'>
                <h2>Log In</h2>
                <form onSubmit={onSubmit}>
                    <input 
                    name='username'
                    type='text'
                    placeholder='username'
                    value={values.username}
                    onChange={onChange}
                    />
                    <input 
                    name='password'
                    type='password'
                    placeholder='Password'
                    value={values.password  }
                    onChange={onChange}
                    />
                    <button disabled={disabled}>Log In</button>
                    <div>
                        <span style={{color:'red'}}>{errors.username}</span>
                            <br/>
                        <span style={{color:'red'}}>{errors.password}</span>
                            <br/>
                        <span style={{color:'red'}}>{errors.request}</span>
                    </div>
                </form>
            </div>
        </div>
    )
}




export default Login