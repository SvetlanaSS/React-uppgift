import React, { Component } from 'react';

class Input extends Component {
  render() {
      let text = this.props.text;
      let inputList =
          text.map((item, index)=> <li key={index}>{item}</li>)
    return (
      <div>
        <input onKeyPress={this.props.onKeyPress} />
        <ul>{inputList}</ul>
      </div>
    );
  }
}

export default Input;
