import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gender from './gender';
import Age from './age'
import axios from 'axios';
import Symptoms from './symptoms'
import { Link } from 'react-router'

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
  grabValue(event) {
    this.setState({
      specPart: event.target.value
    })
  }
  render() {
    console.log(this.props.bodyArea)
    console.log(this.state.specPart)
    var subAreaArray = []

    subAreaArray = this.state.subArea.map((specpart, j) => {
      //  console.log(specpart.Name)
      return (
        <option key={j} value={specpart.ID}>{specpart.Name}</option>
      )
    })
    // console.log(subAreaArray)
    return (
      <div>
        Okay which part specifically?
      <select name="subArea" onChange={this.grabValue} id="areaSelect">
          <option> --- </option>
          {subAreaArray}
        </select>
        <Link to ={`/bodypartsymptoms/${this.state.specPart}`} ><button onClick={() => { this.props.setSpecBodyPart(this.state.specPart) }}> Next </button> </Link> 
      </div>
    )
  }
}

export default Sublocation; 