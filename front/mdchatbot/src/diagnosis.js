import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; 
import {Link}  from 'react-router'; 
import axios from 'axios';

class Diagnosis extends Component {
  constructor (props) {
    super (props) 
    this.state = {
      diag: []
    }
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
        this.setState ({
          diag: res.data
        })
        //console.log(this.state.subArea)
      })
      .catch(function (error) {
            console.log('Error! in third get' + error)
        })
  }
  render() {
    let theDiagnosis = []
    for (let i=0; i<this.state.diag.length; i++) {
      theDiagnosis.push (
        <div> <h2>  {this.state.diag[i].Issue.Name}</h2>  
        <p> Chance you have it {this.state.diag[i].Issue.Accuracy} </p> 
        </div> 
      )
    } 
    return (
      <div className="gender">
         {theDiagnosis}
      </div>
    );
  }
}
export default Diagnosis; 