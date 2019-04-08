import React from 'react';
import { NavLink } from 'react-router-dom';


function Nav(){
    return (
        <nav className='nav nav-tabs'>
            <NavLink className='nav-link active' to="/smurfs">
              Smurfs
            </NavLink>
            <NavLink className='nav-link' to="/form">
              Form
            </NavLink>
        </nav>
    );
}

export default Nav;