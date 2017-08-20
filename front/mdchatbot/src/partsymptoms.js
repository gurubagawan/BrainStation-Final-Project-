import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';
import $ from 'jquery';
import { findDomNode } from 'react-dom';
import axios from 'axios';
// import {mapster} from './libraries/jquery.imagemapster'; 
//import ImageMapper from 'react-image-mapper';

class PartSymptoms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            symptomsPart: [],
            specPart: 0,
            partIDs: ''
        }
        this.addToSymptoms = this.addToSymptoms.bind(this)
        //this.grabValue = this.grabValue.bind(this)
        //console.log(this.props.specBodyPart)
        //console.log(this.props.gender)
        axios.get(`http://localhost:8080/bodypart/${this.props.specBodyPart}/${this.props.gender}`, {
            //text: this.props.bodyArea
        })
            .then(res => {
                console.log('postrequest was made and received')
                //console.log(res.data)
                this.setState({
                    symptomsPart: res.data
                })
                //console.log(this.state.subArea)
            })
    }
    updatePrescence(array, ID) {
        array = array.map((single, j) => {
            if (single.ID === ID) {
                single.present = !single.present
            }
        })
    }
    addToSymptoms(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].present) {
                this.setState({
                    partIDs: this.state.partIDs + array[i].ID + ','
                })
            }
        }
        console.log(array)
        console.log(this.state.partIDs)
    }
    render() {
        var prescenceArray = this.state.symptomsPart.map((symp, j) => {
            return (
                { ID: symp.ID, present: false }
            )
        })

        var listSymptomsArray = []

        listSymptomsArray = this.state.symptomsPart.map((specsymp, j) => {
            //  console.log(specpart.Name)
            return (
                // <option key={j} value={specsymp.ID}>{specsymp.Name}</option>
                <li>
                    <input id={specsymp.ID} type="checkbox" value={specsymp.ID} defaultChecked={false} onClick={() => { this.updatePrescence(prescenceArray, specsymp.ID) }} /> {specsymp.Name}
                </li>
            )
        })
        //var bodyPartValue = 0
        //console.log(this.props.yearOfBirth)
        console.log(prescenceArray)
        console.log(this.state.partIDs)
        return (
            <div className="body">
                Please check off which of following symptoms you are experiencing:
                            <form action="/action_page.php" method="get">
                    <ul name="bodyArea" id="areaSelect">
                        {listSymptomsArray}
                    </ul>
                </form>
                {/* <Link to={`/sublocation/${this.state.bodyPartValue}`}> */}
                <button onClick={() => { this.addToSymptoms(prescenceArray) }}> Next </button>
                {/* </Link> */}
            </div>
        );
    }
}

export default PartSymptoms; 