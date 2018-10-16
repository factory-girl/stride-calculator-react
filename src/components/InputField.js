import React from 'react';
import { calculateLeastAmountOfStrides } from './effortCalculator'


class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {flights: {}, stepsPerStride: 0, leastNumberOfStrides: 0};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.effortCalculator = this.effortCalculator.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        const leastNumberOfStrides = this.effortCalculator();
        this.setState({
            leastNumberOfStrides: leastNumberOfStrides
        });
        event.preventDefault();
    }

    effortCalculator() {
        const stepsPerFlight = this.state.flights.split(",");
        const stepsPerStride = this.state.stepsPerStride;
        const stepsForLanding = 2;
        let stridesTracker = (stepsPerFlight.length - 1)*stepsForLanding;

        stepsPerFlight.forEach(flight => {
            if (flight % stepsPerStride === 0) {
                stridesTracker = stridesTracker + (flight/stepsPerStride);
            } else {
                stridesTracker = stridesTracker + Math.floor(flight/stepsPerStride);
                stridesTracker++;
            }
        });

        return stridesTracker;
    }

    render() {
        return (
            <form>
                <input type="text" name="flights" value={this.state.flights} onChange={this.handleChange} />
                <input type="text" name="stepsPerStride" value={this.state.stepsPerStride} onChange={this.handleChange} />
                <input type="submit" value="Submit" onClick={this.handleSubmit} />
                <h1>{this.state.leastNumberOfStrides}</h1>
            </form>

        );
    }
}

export default InputField;