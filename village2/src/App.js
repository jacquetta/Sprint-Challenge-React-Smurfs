import React from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  render(){
    return (
      <div>
        <SmurfForm />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;