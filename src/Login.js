import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
    } from "react-router-dom";





const Login = (props) => {
    const {values, update, submit, disabled, errors} = props

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
                    name='user'
                    type='text'
                    placeholder='Username'
                    value={values.user}
                    onChange={onChange}
                    />
                    <input 
                    name='pass'
                    type='password'
                    placeholder='Password'
                    value={values.pass  }
                    onChange={onChange}
                    />
                    <button disabled={disabled}>Log In</button>
                    <div>
                        <span style={{color:'red'}}>{errors.user}</span>
                        <span style={{color:'red'}}>{errors.pass}</span>
                        <span style={{color:'red'}}>{errors.request}</span>
                    </div>
                </form>
            </div>
        </div>
    )
}




export default Login