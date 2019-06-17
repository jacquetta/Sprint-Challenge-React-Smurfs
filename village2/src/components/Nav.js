import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav.css';

function Nav() {
    return (
        <nav className='navbar navbar-expand-lg'>
            <span className='navbar-brand'>The Smurfs</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                <div className='navbar-nav ml-auto'>
                    <NavLink className='nav-item nav-link active' to="/smurfs">
                        Smurfs
                    </NavLink>
                    <NavLink className='nav-item nav-link' to="/smurf-form">
                        Add a Smurf
                 </NavLink>
                </div>
            </div>

        </nav>
    );
}

export default Nav;