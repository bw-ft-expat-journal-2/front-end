import React from "react"; 
import { Link } from "react-router-dom"; 

const Nav = (props) => {
    return (
        <>
            <Link to="/register" className='link'> SignUp</Link>
            <Link to="/" className='link'> Login</Link>
            <Link to="/home" className='link'>Home</Link>
       
        </>
    );
};
export default Nav