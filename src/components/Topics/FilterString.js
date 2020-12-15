import React, { Component } from 'react';

class FilterString extends Component {
    constructor() {
        super();

        this.state = {
            unfilteredArr: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredArr: [],
        }
    }

    handleChange(string) {
        this.setState({ userInput: string });
    }

    processFilter(string) {
        this.setState({ filteredArr: this.state.unfilteredArr.filter(e => e.includes(string)) });
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Filter String Component </h4>
                <span className="puzzleText">{JSON.stringify(this.state.unfilteredArr, null, 10)}</span>
                <input className="inputLine" onChange={e => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.processFilter(this.state.userInput)}></button>
                <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArr, null, 10)}</span>
            </div>
        );
    };
};

export default FilterString;