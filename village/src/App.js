import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Nav from './components/Nav';

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
        <Route path='/' component={Nav} />
        <Route path='/smurfs'  exact render={props => (<Smurfs {...props} smurfs={this.state.smurfs} /> )} />
        <Route path="/smurf-form" render={props => (<SmurfForm {...props} /> )} />
      </div>
    );
  }
}

export default App;
