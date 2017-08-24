import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';
import $ from 'jquery';
import { findDomNode } from 'react-dom';
// import {mapster} from './libraries/jquery.imagemapster'; 
//import ImageMapper from 'react-image-mapper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


class Bodyparts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bodyPartValue: 0
        }
        this.grabValue = this.grabValue.bind(this)
        this.props.setStep(2)
    }
    grabValue = (event, index, value) => {
        this.setState({
            bodyPartValue: value
        })
    }
    render() {
        //var bodyPartValue = 0
        console.log(this.state.bodyPartValue)
        return (
            <div className="bodyparts">
                <div className='bodypartstitle' >
                <h2 className='typewriter'> Where are you <br/> experiencing <br/> pain or discomfort?</h2> </div> 
                <br /> 
                <SelectField autoWidth={true} name="bodyArea" value={this.state.bodyPartValue} onChange={this.grabValue} id="areaSelect">
                    <MenuItem value='6' primaryText='Head, Throat and Neck' />
                    <MenuItem value="15" primaryText='Chest and Back' />
                    <MenuItem value="7" primaryText='Arms & Shoulder' />
                    <MenuItem value="16" primaryText='Abdomen, Pelvis & Buttocks' />
                    <MenuItem value="10" primaryText='Legs' />
                </SelectField>
                <br/> 
                <Link to={'/age'}> <RaisedButton backgroundColor= '#E53935' onClick={() => {this.props.previousStep} }> Back </RaisedButton> </Link>
                <Link to={`/sublocation/${this.state.bodyPartValue}`}>
                    <RaisedButton backgroundColor= '#E53935' onClick={() => { this.props.setBodyArea(this.state.bodyPartValue) }}> Next </RaisedButton>
                </Link>
            </div>
        );
    }
}

export default Bodyparts; 