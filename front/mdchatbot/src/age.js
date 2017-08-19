import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';

class Age extends Component {
    constructor() {
        super();
        this.state = {
            birthYear: 0
        }
        this.grabValue = this.grabValue.bind(this)
    }
    grabValue(event) {
        this.setState({
            birthYear: event.target.value
        })
    }
    render() {
        let ageArray = []
        for (let i = 1940; i < 2018; i++) {
            ageArray.push(i)
        }
        var ageDropDown = ageArray.map((curAge, j) => {
            return (
                <option key={j} value={curAge}>{curAge}</option>
            )
        })
        console.log(this.props.bodyArea)
        return (
            <div className="App">
                <form>
                    What year were you born?
                    <select onChange={this.grabValue}>
                        {ageDropDown}
                    </select>
                    <Link to={'/bodyparts'}> <button onClick={() => {this.props.setAge(this.state.birthYear)} }> Next </button> </Link>
                </form>
            </div>
        );
    }
}

export default Age