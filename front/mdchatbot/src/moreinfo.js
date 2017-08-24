import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import LinearProgress from 'material-ui/LinearProgress';


class Info extends Component {
  constructor(props) {
    super(props)
    this.state = {
      DisInfo: []
    }
    this.props.setStep(6)
    ///diagnosis/:gender/:birthYear/:IDS'
    axios.get(`http://localhost:8080/moreInfo/${this.props.sex}/${this.props.yearOfBirth}/${this.props.DiagnosisID}`, {
      //text: this.props.bodyArea
    })
      .then(res => {
        console.log('postrequest was made and received')
        console.log(res.data)
        this.setState({
          DisInfo: res.data
        })
        //console.log(this.state.subArea)
      })
      .catch(function (error) {
        console.log('Error! in info' + error)
      })
  }
  render() {
    let theDisease = []
      theDisease.push(
          <div> 
        <div> 
          <h2>  {this.state.DisInfo.Name}</h2>
        <h3>Description</h3> 
        <p>{this.state.DisInfo.Description}</p> 
        </div>
        <div> 
        <h3>Recommended Treatment</h3> 
        <p>{this.state.DisInfo.TreatmentDescription}</p> 
        </div>
        </div> 
      )
    return (
      <div className="diseaseinfo">
        {theDisease}
      </div>
    );
  }
}
export default Info; 