import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gender from './gender';
import Age from './age'
import axios from 'axios';
import Symptoms from './symptoms'; 
import { Link } from 'react-router'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Sublocation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subArea: [],
      specPart: 0, 
    }
    this.grabValue = this.grabValue.bind(this)
    //console.log(this.props.bodyArea)
    axios.get(`http://localhost:8080/bodyarea/${this.props.bodyArea}`, {
      //text: this.props.bodyArea
    })
      .then(res => {
        console.log('postrequest was made and received')
        console.log(res.data)
        this.setState({
          subArea: res.data
        })
        //console.log(this.state.subArea)
      })
  }
 grabValue = (event, index, value) => {
    this.setState({
      specPart: value
    })
  }
  render() {
    console.log(this.props.bodyArea)
    console.log(this.state.specPart)
    var subAreaArray = []

    subAreaArray = this.state.subArea.map((specpart, j) => {
      //  console.log(specpart.Name)
      return (
        <MenuItem key={j} primaryText={specpart.Name} value={specpart.ID}/>
      )
    })
    // console.log(subAreaArray)
    return (
      <div>
        Okay which part specifically? <br/> 
      <SelectField name="subArea" onChange={this.grabValue} id="areaSelect" value={this.state.specPart}>
          {subAreaArray}
        </SelectField>
        <Link to ={`/bodypartsymptoms/${this.state.specPart}`} ><RaisedButton primary={true} onClick={() => { this.props.setSpecBodyPart(this.state.specPart) }}> Next </RaisedButton> </Link> 
      </div>
    )
  }
}

export default Sublocation; 