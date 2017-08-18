import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; 

class Gender extends Component {
  render() {
    return (
      <div className="App">
          First off are you a Man or a Woman? 
          <button onClick={() => {this.props.changeGender('Man')} }> Man </button>
          <button onClick={() => {this.props.changeGender('Woman')} }> Woman </button>
      </div>
    );
  }
}

export default Gender;
