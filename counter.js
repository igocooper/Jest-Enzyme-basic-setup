import React, { Component } from 'react'

export class Counter extends Component {

    state = {
        count: 0,
    };

    makeIncrementer = ( amount ) => () => {
        this.setState( (prevState) => {
            return {
                 count: prevState.count + amount
             }
         });
    }

    increment = this.makeIncrementer(1);
    decrement = this.makeIncrementer(-1);

    render() {
    return (
        <div>
        <p>Current count: {this.state.count}</p>
        <button onClick={this.increment} className='increment'>Increment count</button>
        <button onClick={this.decrement} className='decrement'>Decrement count</button>
        </div>
    )
    }
}

export default Counter
