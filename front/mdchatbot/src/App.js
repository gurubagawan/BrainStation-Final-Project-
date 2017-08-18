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
      yearOfBirth: '',
      symptoms: [], 
      bodyArea: '', 
    }
    // axios.get('http://localhost:8080/symptoms',)
    //   .then(res => {
    //     this.setState({
    //       symptoms: res.data,
    //     })
    //     console.log('get request was made ')
    //   })
  }
  setBodyArea(num) {
      this.setState ({
        bodyArea: num
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

  render() {
    //console.log (typeof(this.state.symptoms))
    return (
      <div className="App">
        This
        {React.cloneElement(this.props.children, {changeGender: this.props.changeGender})}
      </div>
    );
  }
}

export default App;
