import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';
import $ from 'jquery';
import { findDomNode } from 'react-dom';
// import {mapster} from './libraries/jquery.imagemapster'; 
//import ImageMapper from 'react-image-mapper';

class Bodyparts extends Component {
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
            <div className="body">
                Where are you experiencing pain or discomfort? 
                <select name="bodyArea" onChange={this.grabValue} id="areaSelect">
                    <option> --- </option>
                    <option value='6'>Head, Throat and Neck</option>
                    <option value="15">Chest and Back</option>
                    <option value="7">Arms & Shoulder </option>
                    <option value="16">Abdomen, Pelvis & Buttocks</option>
                    <option value="10">Legs</option>
                </select>
                 <Link to ={`/sublocation/${this.state.bodyPartValue}`}>  
                <button onClick={() => {this.props.setBodyArea(this.state.bodyPartValue)}}> Next </button>
                  </Link>  
            </div>
        );
    }
}

export default Bodyparts; 