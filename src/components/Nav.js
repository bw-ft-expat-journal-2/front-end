import React from "react"; 
import { Link } from "react-router-dom"; 

const Nav = (props) => {
    return (
        <>

            <Link to="/register" className='link'> SignUp</Link>
            <Link to="/login" className='link'> Login</Link>
            <a href='https://expat-journal-2-bw.netlify.app/' className='link'>Home</a>
            <Link to="/protected" className='link'>Posts</Link>

       
        </>
    );
};
export default Nav