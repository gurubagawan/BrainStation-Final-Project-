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


class Diagnosis extends Component {
  constructor(props) {
    super(props)
    this.state = {
      diag: []
    }
    this.props.setStep(5)
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
        this.setState({
          diag: res.data
        })
        //console.log(this.state.subArea)
      })
      .catch(function (error) {
        console.log('Error! in diagnosis' + error)
      })
  }
  render() {
    let theDiagnosis = []
    for (let i = 0; i < this.state.diag.length; i++) {
      theDiagnosis.push(
        <div> 
          <h2>  {this.state.diag[i].Issue.Name}</h2>
          <div className="meter">
            <LinearProgress style={{height: '10px', width: '75%', 
            borderRadius: '10px', margin:'auto', 
            marginBottom: '10px'
            }} 
            color='#E53935' mode="determinate" value={this.state.diag[i].Issue.Accuracy} />
          </div> 
          <Link to={`/moreInfo/${this.state.diag[i].Issue.ID}`}>
          <RaisedButton style={{marginBottom: '20px'}} backgroundColor='#E53935' onClick={() => { this.props.setDiagnosis(this.state.diag[i].Issue.ID) }} > More Info </RaisedButton>
        </Link> 
        <br/>
        </div>
      )
    }
    return (
      <div className="gender">
        <h3> These issues have been associated with your symptoms. </h3>
        <p> If you would like any more info on any of these, please click more info </p>
        {theDiagnosis}
      </div>
    );
  }
}
export default Diagnosis; 