import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Age extends Component {
    render() {
        let ageArray =[] 
        for (let i=1940; i<2018; i++) {
            ageArray.push(i)
        }
        var ageDropDown = ageArray.map((curAge, j) =>{
            return (
             <option key={j} value={curAge} onClick={() => { this.props.setAge(curAge) }}>{curAge}</option>
            )
        })
        return (
            <div className="App">
                <form>
                    What year were you born?
                    <select> 
                    {ageDropDown}
                    </select> 
                </form>
            </div>
        );
    }
}

export default Age