import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; 
import {Link}  from 'react-router'; 
import axios from 'axios';

class Diagnosis extends Component {
  constructor (props) {
    super (props) 
    console.log(this.props.symptomIDs)
    console.log(this.props.sex)
    console.log(this.props.yearOfBirth)
    ///diagnosis/:gender/:birthYear/:IDS'
    axios.get(`http://localhost:8080/diagnosis/${this.props.sex}/${this.props.yearOfBirth}/${this.props.symptomIDs}`, {
      //text: this.props.bodyArea
    })
      .then(res => {
        console.log('postrequest was made and received')
        console.log(res.data)
        var diag = res.data
        //console.log(this.state.subArea)
      })
      .catch(function (error) {
            console.log('Error! in third get' + error)
        })
  }
  render() {
    return (
      <div className="gender">
         Some shit
      </div>
    );
  }
}
export default Diagnosis; 