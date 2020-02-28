import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <div>
            <Link to='/dashboard'>
                <a>Dashboard</a>
            </Link>
            <Link to='/'>
                <a>Login</a>
            </Link>
            <Link to='/register'>
                <a>Register</a>
            </Link>
        </div>
    )
}

export default NavBar