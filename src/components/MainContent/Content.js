import React, { Component } from 'react';


class Content extends Component {
  state = {text:""}

  HandleText(event) {
    let Value = event.taget.value;
    this.setState({text:Value});
  }

  render() {
    return (
      <Input text={this.state.text} HandleText={this.HandleText}/>
    )
  }
}

export default Content;
