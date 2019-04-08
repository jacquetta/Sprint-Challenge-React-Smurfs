import React from 'react';

import './smurf.css'

const Smurf = props => {
  return (
      <div className="Smurf col-sm-4 card">
        <div className='card-body'>
          <h3 className='card-title'>{props.name}</h3>
          <strong>{props.height} tall</strong>
          <p className='card-text'>{props.age} smurf years old</p>
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

