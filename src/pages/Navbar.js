import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import Login from './Login';


const Navbar = () => {


    return (
        <div>


            <nav>
                <Link to="/">Home</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/about">About</Link>
                <Link to='/usesearch'>Search</Link>

            </nav>

        </div>
    );
};

export default Navbar;