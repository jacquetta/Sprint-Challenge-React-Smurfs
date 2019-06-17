import React from 'react';
import axios from 'axios';

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

  componentDidMount(){
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState(() => ({smurfs: res.data}))
      })
      .catch(err => console.log('Server Error', err))
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