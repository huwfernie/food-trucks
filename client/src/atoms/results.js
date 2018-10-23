import React, { Component } from 'react';

import SkinnyResult from './skinnyResult';

class Results extends Component {
 render() {
    return (
      <div className='results'>
        <div>{this.props.number}: results</div>
        <SkinnyResult />
      </div>
    )
  }
}

export default Results;
