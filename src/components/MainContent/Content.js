import React, { Component } from 'react';
import Input from './Input';


class Content extends Component {
  state = {
      text:[]
  }

  handleInput = (event) => {
      if(event.key == 'Enter'){
          let newInput = this.state.text.slice();
          newInput.push(event.target.value);
          this.setState({
            text: newInput
          })
      }
  }

  render(){
      return(
        <Input onKeyPress={this.handleInput} text={this.state.text} />
      );
  }
}

export default Content;
