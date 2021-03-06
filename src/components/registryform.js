import React, {useState, useEffect} from 'react';
import * as yup from 'yup';
import schema from '../registrationschema'
import axios from 'axios';
import { useHistory } from 'react-router-dom'

import {
  Link
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
        axios.post('https://expatjournal-backend.herokuapp.com/api/auth/register', newuser)
          .then(res=>{
            history.push('/')
            setUsers(res.data)
            setFormValues(intitialformvalues)
            console.log(Users)
          })
          .catch(err => {
            console.log(err.message)
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
  <div className='allcontainer'>
  <div className = 'formcontainer'>
    <div className='left'>
      <div className='formimg'>
    <img src={require('../images/formimage.jpg')} alt ='mountains'/><br></br>
    </div>
    <Link to='/login'>Already have an account?</Link>
    </div>
    <div className='right'>
    <form className = 'registryform' onSubmit={Submit}>
        <h2>Register</h2>
        <div className = 'inputs'>
        <label>User Name{<br></br>}
        <input 
            value= {formValues.username}
            onChange={onChange}
            placeholder='username'
            name='name'
            type='text'/>
            </label>{<br></br>}
        <label>Email:{<br></br>}
          <input
            value={formValues.email}
            onChange={onChange}
            placeholder='Email'
            name='email'
            type='text'
          />
        </label>{<br></br>}
        <label>Password:{<br></br>}
        <input 
            value= {formValues.password}
            onChange={onChange}
            name='password'
            placeholder='Password'
            type='text'/>
            </label>{<br></br>}
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
        <Link to='/login'className='onlywhensmall'>Already have an account?</Link>
    </form>
    </div>
    </div>
    </div>
)
}