import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Button extends Component {
  render() {
    return (
      <Link to={this.props.link}>
        <button className={this.props.className} onClick={this.onButtonClick}>{this.props.text}</button>
      </Link>
    )
  }

  onButtonClick(e) {
    console.log('click', e.target)
  }
}

export default Button;
