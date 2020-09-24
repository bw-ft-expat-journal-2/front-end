import React, { useState, useEffect } from 'react'
import {
    Link,
    useRouteMatch,
    useHistory
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

    let history = useHistory();

    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState(initialErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const validate = (name, value) => {
        yup
            .reach(schema, name)
            .validate(value)
            .then(valid => {
                // console.log(valid)
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
                console.log('From login!', res.data) //need to put res.(something) to tell it where the data is
                // ----------do something here to send you to the next page--------
                window.localStorage.setItem('token', res.data.token)
                history.push('/protected')
            })
            .catch(err => {
                console.log(err.message)
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
        <div className= 'allcontainer'>
        <div className='formcontainer'>
            <div className='left'>
            <div className='formimg'>
            <img src={require('../images/login.jpeg')} alt ='mountains'/><br></br>
            </div>
            <Link to='/register'>create an account</Link>
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
                    /><br></br>
                    <input 
                    name='password'
                    type='password'
                    placeholder='Password'
                    value={values.password  }
                    onChange={onChange}

                    /><br></br>
                    <button disabled={disabled} type="submit">Log In</button>

                    <div>
                        <span style={{color:'red'}}>{errors.username}</span>
                            <br/>
                        <span style={{color:'red'}}>{errors.password}</span>
                            <br/>
                        <span style={{color:'red'}}>{errors.request}</span>
                    </div>
                    <Link to='/register'className='onlywhensmall'>Create an account</Link>
                </form>
            </div>
        </div>
        </div>
    )
}




export default Login