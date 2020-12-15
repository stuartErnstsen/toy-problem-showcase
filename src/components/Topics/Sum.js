import React, { Component } from 'react';

class Sum extends Component {
    constructor() {
        super();

        this.state = {
            calculated: 0,
            userInput: ''
        }
    }

    handleChange(input) {
        this.setState({ userInput: input })
    }

    sumNums(numStr) {
        const numArr = numStr.split(',');
        this.setState({ calculated: numArr.reduce((acc, e) => { return acc + parseInt(e, 10) }, 0) })
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4> Sum Component </h4>
                <input className="inputLine" onChange={e => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.sumNums(this.state.userInput)}></button>
                <span className="resultsBox">{this.state.calculated}</span>
            </div>
        );
    };
};

export default Sum;