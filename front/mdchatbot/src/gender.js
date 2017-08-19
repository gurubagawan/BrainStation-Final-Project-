import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; 
import {Link}  from 'react-router'; 

class Gender extends Component {
  render() {
    return (
      <div className="gender">
          Please select your Gender
          <button onClick={() => {this.props.changeGender('Man')} }> Man </button>
          <button onClick={() => {this.props.changeGender('Woman')} }> Woman </button>
          <Link to ={'/age'}> <button> Next </button> </Link> 
      </div>
    );
  }
}

export default Gender;