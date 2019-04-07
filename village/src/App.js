import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios
    .get(`http://localhost:3333/smurfs`)
    .then(response => {
      this.setState(() => ({
      smurfs: response.data
    }))  
  })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to = '/'>Home</NavLink>
          <NavLink to= '/smurf-form'>Smurf Form</NavLink>
        </nav>

        <Route path='/' render={props => (<Smurfs {...props} smurfs={this.state.smurfs} /> )} />
        <Route path="/smurf-form" render={props => (<SmurfForm {...props} /> )} />
      </div>
    );
  }
}

export default App;
