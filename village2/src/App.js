import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import Nav from './components/Nav';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      smurfs: []
    };
  }

  updateSmurfs = newSmurf => {
    this.setState({
      smurfs: newSmurf
    });
  };

  componentDidMount(){
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(res => {
        this.setState(() => ({smurfs: res.data}))
      })
      .catch(err => console.log('Server Error', err))
  }

  render(){
    return (
      <div className="App">
        <Route path="/" component={Nav} />
        <Route path="/smurfs" exact render={props => (<Smurfs {...props}  smurfs={this.state.smurfs} />) }/>
        <Route path='/smurf-form' render={props => (<SmurfForm {...props} updateSmurfs={this.updateSmurfs}/> )} />
      </div>
    );
  }
}

export default App;