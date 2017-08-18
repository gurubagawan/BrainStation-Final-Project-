import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gender from './gender';
import Age from './age'
import axios from 'axios';
import Symptoms from './symptoms'
import { Link } from 'react-router'

class Sublocation extends Component {
    constructor() {
    super();
    var subArea =[]
    axios.post('https://localhost:8080/bodyArea', {
      text: this.props.bodyarea
    })
      .then(res => {
            subArea = res.data
      })
  }
}