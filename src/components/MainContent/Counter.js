import React, { Component } from 'react';
import Result from './ButtonResult';

class Counter extends Component {
  state = {number:0};

  Increase = () => {
    this.setState({number:this.state.number + 1})
  }

  Decrease = () => {
    this.setState({number:this.state.number - 1})
  }

  render() {
    return(
      <div>
        <Result number={this.state.number}/>
        <button onClick={this.Increase}>Increase</button>
        <button onClick={this.Decrease}>Decrease</button>
      </div>
    )
  }
}

export default Counter;
