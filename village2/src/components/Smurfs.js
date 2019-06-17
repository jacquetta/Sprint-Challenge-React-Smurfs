import React from 'react';

import './smurfStyle.css';
import Smurf from './Smurf';

class Smurfs extends React.Component {
    render(){
        return(
            <div className="Smurfs">
                <h1>Smurf Village</h1>
                <ul className="row">
                    {this.props.smurfs.map(smurf => {
                        return (
                            <Smurf
                                name={smurf.name}
                                id={smurf.id}
                                age={smurf.age}
                                height={smurf.height}
                                key={smurf.id}
                                />
                        );
                    })}
                </ul>
            </div>
        );
    }
}

Smurf.defaultProps ={
    smurfs: [],
};

export default Smurfs;