import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (){
    super (); 
    this.state = {
      symptomIDs : undefined, 
      gender: undefined, 
    }
  }
  changeGender(inputedGender) {
    this.setState ({
      gender: inputedGender, 
    })
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
