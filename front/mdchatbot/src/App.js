import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gender from './gender';
import Age from './age'
import axios from 'axios';
import Symptoms from './symptoms'
import { Link } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';


class App extends Component {
  constructor() {
    super();
    this.state = {
      symptomIDs: '',
      gender: '',
      sex: '',
      yearOfBirth: 0,
      symptoms: [],
      bodyArea: 0,
      specBodyPart: 0,
      stepIndex: 0
    }
    this.setBodyArea = this.setBodyArea.bind(this)
    this.setAge = this.setAge.bind(this)
    this.setSpecBodyPart = this.setSpecBodyPart.bind(this)
    this.changeGender = this.changeGender.bind(this)
    this.addToSymptoms = this.addToSymptoms.bind(this)
    this.nextStep = this.nextStep.bind(this)
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
    this.nextStep()
  }
  nextStep() {
    if (this.state.stepIndex < 7) {
      this.setState({
        stepIndex: this.state.stepIndex + 1
      })
    }
  }
  previousStep() {
    if (this.state.stepIndex > 0) {
      this.setState({
        stepIndex: this.state.stepIndex - 1
      })
    }
  }

  setSpecBodyPart(num) {
    this.setState({
      specBodyPart: num,
    })
    this.nextStep()
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
  changeGender(inputedGender, inputedSex) {
    this.setState({
      gender: inputedGender, sex: inputedSex,
    })
  }
  setAge(number) {
    this.setState({
      yearOfBirth: number
    })
    this.nextStep()
  }
  addToSymptoms(array) {
    let thisString = ''
    for (let i = 0; i < array.length; i++) {
      if (array[i].present) {
        thisString += (array[i].ID + ',')
        // this.setState({
        //   symptomIDs: this.state.symptomIDs +','+ array[i].ID
        // })
        // console.log('true')
        // console.log(array[i].ID)
      }
    }
    console.log(thisString)
    this.setState({
      symptomIDs: thisString
    })
  }

  render() {
    // console.log(this.state.specBodyPart)
    console.log(this.state.symptomIDs)
    console.log(this.props.children)
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar title='Dr. Robot' />
          <Stepper activeStep={this.state.stepIndex}>
            <Step>
              <StepLabel>Gender</StepLabel>
            </Step>
            <Step>
              <StepLabel>Age</StepLabel>
            </Step>
            <Step>
              <StepLabel>Body Area</StepLabel>
            </Step>
            <Step>
              <StepLabel>Body Part</StepLabel>
            </Step>
            <Step>
              <StepLabel>Symptoms</StepLabel>
            </Step>
            <Step>
              <StepLabel>Diagnosis</StepLabel>
            </Step>
            <Step>
              <StepLabel>More Info</StepLabel>
            </Step>
          </Stepper>
          {/* <h3> This is some stuff to try this shit out </h3>  */}
          {React.cloneElement(this.props.children, {
            setSpecBodyPart: this.setSpecBodyPart, specBodyPart: this.state.specBodyPart,
            yearOfBirth: this.state.yearOfBirth, setAge: this.setAge,
            changeGender: this.changeGender, gender: this.state.gender, sex: this.state.sex,
            setBodyArea: this.setBodyArea, bodyArea: this.state.bodyArea,
            addToSymptoms: this.addToSymptoms, symptomIDs: this.state.symptomIDs,
            nextStep: this.nextStep, previousStep: this.previousStep, stepIndex: this.state.stepIndex, 
          })}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
