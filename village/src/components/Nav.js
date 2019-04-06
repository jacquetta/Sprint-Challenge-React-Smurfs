import React from 'react';
import { NavLink } from 'react-router-dom';


function Nav(){
    return (
        <div>
        <section class='hero is-info'>
            <div class='hero-body'>
                    <nav>
                        <NavLink to='/smurfs'>Home</NavLink>
                        <NavLink to='/smurf-form'>Smurf Form</NavLink>
                    </nav>
                <div class='container'>
                    <h1 class='title'>Smurf Village</h1>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Nav;