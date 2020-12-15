import React, { Component } from 'react';

class FilterObject extends Component {
    constructor() {
        super();

        this.state = {
            unfiltered: [
                {
                    name: 'Jimmy Joe',
                    title: 'Hack0r',
                    age: 12,
                },
                {
                    name: 'Jeremy Schrader',
                    age: 24,
                    hairColor: 'brown'
                },
                {
                    name: 'Carly Armstrong',
                    title: 'CEO',
                }
            ],
            userInput: '',
            filtered: []
        }
    }

    handleChange(input) {
        this.setState({ userInput: input })
    }

    processFilter(property) {
        const filt = this.state.unfiltered
        this.setState({ filtered: filt.filter(e => e.hasOwnProperty(property)) })
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Objects Component</h4>
                <span className="puzzleText"> Starting Array: {JSON.stringify(this.state.unfiltered, null, 10)}</span>
                <input className="inputLine" onChange={e => this.handleChange(e.target.value)}></input>

                <button className="confirmationButton" onClick={() => this.processFilter(this.state.userInput)}></button>
                <span className="resultsBox filterObjectRB">Filtered Array: {JSON.stringify(this.state.filtered, null, 10)}</span>
            </div>
        );
    };
};

export default FilterObject;