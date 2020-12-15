import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(input) {
        this.setState({ userInput: input });
    }

    assignOddsEvens(input) {
        const arr = input.split(',');
        const even = [];
        const odd = [];

        arr.map(e => parseInt(e, 10) % 2 === 0 ? even.push(parseInt(e, 10)) : odd.push(parseInt(e, 10)))

        this.setState({ evenArray: even, oddArray: odd });
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={e => this.handleChange(e.target.value)}>
                </input>
                <button className="confirmationButton" onClick={() => { this.assignOddsEvens(this.state.userInput) }}></button>
                <span className="resultsBox"> EVENS: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox"> ODDS: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        );
    };
};

export default EvenAndOdd;