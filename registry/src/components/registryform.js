import React from 'react';


export default function RegistryForm(props){
const{
    values,
    submit,
    change,
    disabled,
    errors,
}= props;

const Submit = evt =>{
    evt.preventDefault()
    submit()
}
const onChange = evt =>{
    const {name, value, type, checked}= evt.target
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse)
}
return(
    <form className = 'registryform' onSubmit={Submit}>
        <h2>Register</h2>;
        <div className = 'inputs'>
        <label>User Name
        <input 
            value= {values.name}
            onChange={onChange}
            name='name'
            type='text'/>
            </label>
        <label>Email
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='text'
          />
        </label>
        <label>Password
        <input 
            value= {values.password}
            onChange={onChange}
            name='password'
            type='text'/>
            </label>

            <label> I agree to the Terms and conditions
          <input
            type="checkbox"
            name='terms'
            checked={values.terms}
            onChange={onChange}
          />
        </label>
    </div>
        <div className = 'submitarea'>
        <div className='errors'>
            <div>{errors.name}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.terms}</div>
        </div>
        <button id='submitbutton' disabled={disabled}>Submit</button>;
        </div>
    </form>
)
}