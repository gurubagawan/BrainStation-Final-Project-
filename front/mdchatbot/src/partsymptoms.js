import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';
import $ from 'jquery';
import { findDomNode } from 'react-dom';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

class PartSymptoms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            symptomsArray: [],
            specPart: 0,
            partIDs: ''
        }
        // this.addToSymptoms = this.addToSymptoms.bind(this)
        this.updatePrescence = this.updatePrescence.bind(this)
        //this.grabValue = this.grabValue.bind(this)
        //console.log(this.props.specBodyPart)
        //console.log(this.props.gender)
        axios.get(`http://localhost:8080/bodypart/${this.props.specBodyPart}/${this.props.gender}`, {
            //text: this.props.bodyArea
        })
            .then(res => {
                console.log('postrequest was made and received')
                //console.log(res.data)
                let sympData= res.data
                this.setState({
                    symptomsArray: sympData.map((thissymp, i) => {
                        return({ID: thissymp.ID, Name: thissymp.Name, key: i, present: false })
                    })
                })
                //console.log(this.state.subArea)
            })
    }
    updatePrescence(num) {
        this.setState({
            symptomsArray: this.state.symptomsArray.map((single, k) => {
                return (num ===k ? {ID: single.ID, Name: single.Name, key: k, present: !single.done} : single)
            })
        })
    }
    // addToSymptoms(array) {
    //     for (let i = 0; i < array.length; i++) {
    //         if (array[i].present) {
    //             this.setState({
    //                 partIDs: this.state.partIDs + array[i].ID + ','
    //             })
    //         }
    //     }
    //     console.log(array)
    //     console.log(this.state.partIDs)
    // }
    render() {
        var listSymptomsArray = []
        listSymptomsArray = this.state.symptomsArray.map((specsymp, j) => {
            return (
                    <Checkbox id={specsymp.ID} label={specsymp.Name} value={specsymp.ID} defaultChecked={false} onClick={() => { this.updatePrescence(j) }} /> 
            )
        })
        console.log(this.state.symptomsArray)
        return (
            <div className="body">
                Please check off which of following symptoms you are experiencing:
                            <form action="/action_page.php" method="get">
                        {listSymptomsArray}
                </form>
                 <Link to={'/diagnosis'}> 
                 <RaisedButton primary={true} onClick={() => { this.props.addToSymptoms(this.state.symptomsArray)}}> Next </RaisedButton>
                </Link> 
            </div>
        );
    }
}

export default PartSymptoms; 