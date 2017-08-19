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
    }
    console.log(this.props.bodyArea)
    axios.post('http://localhost:8080/bodyarea', {
      text: this.props.bodyArea
    })
      .then(res => {
        console.log('postrequest was made and received')
        console.log(res.data)
        this.setState ({
            subArea : res.data
      })
          //console.log(this.state.subArea)
      })
  }
  render () {
    console.log(this.state.subArea[0])
     var subAreaArray = []
    //  for (let i=0; i < this.state.subArea.length; i++){
    //    subAreaArray.push(this.state.subArea[i])
    //  }

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
            {subAreaArray}    
      </select> 
      </div> 
    )
  }
}

export default Sublocation; 