import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button onClick={this.onButtonClick}>Click</button>
    )
  }

  onButtonClick(e) {
    console.log('click', e.target)
  }
}

export default Button;
