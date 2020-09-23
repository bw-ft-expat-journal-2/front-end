import React from "react"; 
import { Link } from "react-router-dom"; 

const Nav = (props) => {
    return (
        <>
            <Link to="/login" className='link'> Login</Link>
            <Link to="/register" className='link'>Signup</Link>
       
        </>
    );
};
export default Nav