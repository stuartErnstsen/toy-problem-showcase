import React, { Component } from 'react';

class Palindrome extends Component {
    constructor() {
        super();

        this.state = {
            isPal: '',
            userInput: '',
        }
    }

    handleChange(str) {
        this.setState({ userInput: str })
    }

    processPal(str) {
        const temp = str.split('')
        const reverse = temp.slice().reverse()
        let neverFalse = true;
        let isPal = temp.reduce((acc, e, index) => {
            if (e === reverse[index] && neverFalse) {
                acc = true;
            }
            else {
                neverFalse = false;
                acc = false
            }
            return acc;
        }, false);
        this.setState({ isPal: `${isPal}` })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Palindrome Component </h4>
                <input className="inputLine" onChange={e => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.processPal(this.state.userInput)}></button>
                <span className="resultsBox">{this.state.isPal}</span>
            </div>
        );
    };
};

export default Palindrome;