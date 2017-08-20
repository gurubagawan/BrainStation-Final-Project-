import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gender from './gender';
import Age from './age'
import axios from 'axios';
import Symptoms from './symptoms'
import { Link } from 'react-router'

class App extends Component {
  constructor() {
    super();
    this.state = {
      symptomIDs: '',
      gender: '',
      yearOfBirth: 0,
      symptoms: [],
      bodyArea: 0,
      specBodyPart: 0,
    }
    this.setBodyArea = this.setBodyArea.bind(this)
    this.setAge = this.setAge.bind(this)
    this.setSpecBodyPart = this.setSpecBodyPart.bind(this)
    this.changeGender = this.changeGender.bind(this)
    this.addToSymptoms = this.addToSymptoms.bind(this)
    // axios.get('http://localhost:8080/symptoms',)
    //   .then(res => {
    //     this.setState({
    //       symptoms: res.data,
    //     })
    //     console.log('get request was made ')
    //   })
  }
  setBodyArea(num) {
    this.setState({
      bodyArea: num
    });
  }

  setSpecBodyPart(num) {
    this.setState({
      specBodyPart: num,
    })
  }
  getSymptoms(event) {
    event.preventDefault(); //stops page reload 
    axios.post('https://localhost:8080/symptoms', {
      text: this.state.symptoms
    })
      .then(res => {
        this.setState({
          data: res.data
        })
      })
  }
  changeGender(inputedGender) {
    this.setState({
      gender: inputedGender,
    })
  }
  setAge(number) {
    this.setState({
      yearOfBirth: number
    })
  }
  addToSymptoms(array) {
    for (let i = 0; i < array.length; i++)
      if (array[i].present ) {
        this.setState({
          symptomsIDs:
          `${this.state.symptomsIDs},${array[i].id}`
        })
      }
  }

  render() {
    console.log(this.state.specBodyPart)
    console.log(this.state.symptomIDs)
    return (
      <div className="App">
        This
        {React.cloneElement(this.props.children, {
          setSpecBodyPart: this.setSpecBodyPart, specBodyPart: this.state.specBodyPart,
          yearOfBirth: this.state.yearOfBirth, setAge: this.setAge,
          bodyArea: this.state.bodyArea,
          changeGender: this.changeGender, gender: this.state.gender,
          setBodyArea: this.setBodyArea, bodyArea: this.state.bodyArea,
          addToSymptoms: this.addToSymptoms, symptomsIDs: this.state.symptomsIDs
        })}
      </div>
    );
  }
}

export default App;
