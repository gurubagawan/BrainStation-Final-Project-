import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';
import $ from 'jquery';
import { findDomNode } from 'react-dom';
// import {mapster} from './libraries/jquery.imagemapster'; 
import ImageMapper from 'react-image-mapper';

class Bodyparts extends Component {
    constructor() {
        super();
        // $('#body').mapster({
        //     fillColor: 'ff0000',
        //     fillOpacity: 0.3
        // });
    }
    render() {
        return (
            <div className="gender">
                <select name="bodyArea" id="areaSelect">
                    <option value='6'>Head, Throat and Neck</option>
                    <option value="15">Chest and Back</option>
                    <option value="7">Arms & Shoulder </option>
                    <option value="16">Abdomen, Pelvis & Buttocks</option>
                    <option value="10">Legs</option>
                </select>
                <Link to ={'/symptoms'}> <button> Next </button> </Link> 
            </div>
        );
    }
}

export default Bodyparts; 