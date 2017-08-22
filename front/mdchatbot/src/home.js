import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';
import $ from 'jquery';
import { findDomNode } from 'react-dom';
import Gender from './gender'; 
// import {mapster} from './libraries/jquery.imagemapster'; 
//import ImageMapper from 'react-image-mapper';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            bodyPartValue: 0
        }
        this.grabValue = this.grabValue.bind(this)
    }
    grabValue(event) {
        this.setState ({
            bodyPartValue: event.target.value
        })
    }
    render() {
        //var bodyPartValue = 0
        console.log(this.props.yearOfBirth)
        return (
            <div className="typewriter">
                <h4> 
                Hi there! Welcome to Dr. Robot, your online medical assistant. <br/> 
                If you're feeling sick, I will ask you a series of questions to evalute what the problem could be! 
                When you're ready, please hit begin. 
                </h4> 
                 <Link to ={'/gender'}> Begin
                  </Link>  
            </div>
        );
    }
}

export default Home; 