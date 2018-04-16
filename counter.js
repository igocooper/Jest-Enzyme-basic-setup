import React, { Component } from 'react'

export class Counter extends Component {

    state = {
        count: 0,
    };

    increment = (prevState) => {
        this.setState({
            count: prevState.count + 1
        });
    };

    render() {
    return (
        <div>
        <p>Current count: {this.state.count}</p>
        <button onClick={this.increment}>Increment count</button>
        </div>
    )
    }
}

export default Counter
