import React from 'react';

import './smurfStyle.css';

const Smurf = props => {
    return (
        <div className='col'>
            <div className="Smurf card">
                <div className="card-header">
                    <h3>{props.name}</h3>
                </div>
                <div className="card-body">
                    <p>{props.height}</p>
                    <p>{props.age}</p>
                </div>
            </div>
        </div>
    );
};

Smurf.defaultProps = {
    name: '',
    height: '',
    age: ''
};

export default Smurf;