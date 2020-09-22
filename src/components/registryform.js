import React, {useState, useEffect} from 'react';
import * as yup from 'yup';
import schema from '../registrationschema'
import axios from 'axios';
import { useHistory } from 'react-router-dom'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
  } from "react-router-dom";

const intitialformvalues = {
    // strings
    name:'',
    email:'',
    password:'',
    // check box
    terms: false,
  }
  const initialFormErrors = {
    name:'',
    email:'',
    password:'',
    terms: '',
  } 

export default function RegistryForm(props){
    const [Users, setUsers] = useState({});
    const [formValues, setFormValues]= useState(intitialformvalues);
    const [formErrors, setFormErrors]= useState(initialFormErrors);
    const [disabled, setDisabled]= useState(true);
    const history = useHistory();

    const addNewUser = newuser => {
          // Added CORS anywhere because I was getting blocked by CORS
        axios.post('https://expatjournal-backend.herokuapp.com/api/auth/register', newuser)
          .then(res=>{
            localStorage.setItem('token', res.data.payload)
            history.push('/')
            setUsers(res.data)
            setFormValues(intitialformvalues)
            console.log(Users)
          })
          .catch(err => {
            
          })
          .finally(()=>{
    
          })
        console.log(newuser);
        setFormValues(intitialformvalues)
    
      }

      const validate = (name, value) => {
        yup
          .reach(schema, name)
    
          .validate(value)
    
          .then(valid =>{
            setFormErrors({
              ...formErrors,
              [name]: "",
            })
          })
          .catch(err => {
            setFormErrors({
              ...formErrors,
              [name]: err.errors[0]
            });
          });
      }

      const inputChange = (name, value) => {
        validate(name, value)
        setFormValues({
          ...formValues,
          [name]: value
        })
      }

      const formSubmit = () => {
        const newuser = {
          username: formValues.name.trim(),
          email: formValues.email.trim(),
          password: formValues.password.trim(),
          // id: //add code to generate id for user
          admin: false,
          location: '',
          favorites: [],
          posts: [],
          friends:[],
        }
        addNewUser(newuser)
      }
      useEffect(() => {
        schema.isValid(formValues)
          .then(valid => {
            setDisabled(!valid)
          })
      }, [formValues])

const Submit = evt =>{
    evt.preventDefault()
    formSubmit()
}
const onChange = evt =>{
    const {name, value, type, checked}= evt.target
    const valueToUse = type === 'checkbox' ? checked : value
    inputChange(name, valueToUse)
}
return(
  <div>
    <Link to='/'>Already have an account?</Link>
    <form className = 'registryform' onSubmit={Submit}>
        <h2>Register</h2>
        <div className = 'inputs'>
        <label>User Name{<br></br>}
        <input 
            value= {formValues.username}
            onChange={onChange}
            name='name'
            type='text'/>
            </label>{<br></br>}
        <label>Email:{<br></br>}
          <input
            value={formValues.email}
            onChange={onChange}
            name='email'
            type='text'
          />
        </label>{<br></br>}
        <label>Password:{<br></br>}
        <input 
            value= {formValues.password}
            onChange={onChange}
            name='password'
            type='text'/>
            </label>{<br></br>}

            <label> I agree to the Terms and conditions
          <input
            type="checkbox"
            name='terms'
            checked={formValues.terms}
            onChange={onChange}
          />
        </label>
    </div>
        <div className = 'submitarea'>
        <div className='errors'>
            <div>{formErrors.name}</div>
            <div>{formErrors.email}</div>
            <div>{formErrors.password}</div>
            <div>{formErrors.terms}</div>
        </div>
        <button id='submitbutton' disabled={disabled}>Submit</button>
        </div>
    </form>
    </div>
)
}