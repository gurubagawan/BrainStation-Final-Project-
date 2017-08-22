import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';
import {Button, Icon} from 'react-materialize'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';


class Age extends Component {
    constructor() {
        super();
        this.state = {
            birthYear: 0
        }
        this.grabValue = this.grabValue.bind(this)
    }
    grabValue = (event, index, value) => {
        this.setState({
           birthYear: value
        })
    }
    render() {
        let ageArray = []
        for (let i = 1940; i < 2018; i++) {
            ageArray.push(i)
        }
        var ageDropDown = ageArray.map((curAge, j) => {
            return (
                <MenuItem key={j} value={curAge} primaryText={curAge}/> 
            )
        })
        return (
            <div className="App">
                <form>
                    What year were you born? <br/> 
                    <SelectField autoWidth={true} floatingLabelText='Birth year' value={this.state.birthYear} onChange={this.grabValue}>
                        {ageDropDown}
                    </SelectField>
                    <Link to={'/bodyparts'}> <RaisedButton primary={true} onClick={() => {this.props.setAge(this.state.birthYear)} }> Next </RaisedButton> </Link>
                </form>
            </div>
        );
    }
}

export default Age