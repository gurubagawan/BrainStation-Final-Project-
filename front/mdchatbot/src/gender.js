import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class Gender extends Component {
  render() {
    return (
      <div className="gender">
        <div >
          <h3 className ='typewriter test'> Please select your Gender </h3>
        </div>
        <button onClick={() => { this.props.changeGender('man', 'male') }}> <i className="fa fa-male fa-5x" aria-hidden="true"></i> </button>
        <button onClick={() => { this.props.changeGender('woman', 'female') }}> <i className="fa fa-female fa-5x" aria-hidden="true"></i>  </button>
        <Link to={'/age'}> <RaisedButton onClick={this.props.nextStep} primary={true}> Next </RaisedButton> </Link>
      </div>
    );
  }
}

export default Gender;
