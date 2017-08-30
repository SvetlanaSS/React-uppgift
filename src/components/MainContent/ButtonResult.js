import React, { Component } from 'react';
import Counter from './Counter';

class Result extends Component {
  render() {
    return (
      <div>{this.props.number}</div>
    )
  }
}

export default Result;
