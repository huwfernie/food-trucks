import React, { Component } from 'react';
import '../styles/info.scss';

class Info extends Component {
  render() {
    return (
      <div className='info'>{this.props.text}</div>
    )
  }
}

export default Info;
