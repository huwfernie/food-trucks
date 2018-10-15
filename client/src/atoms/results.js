import React, { Component } from 'react';

import skinnyResult from './skinnyResult';

class Results extends Component {
 render() {
    return (
      <div className='results'>
        <div>{this.props.number}: results</div>
        <skinnyResult />
      </div>
    )
  }
}

export default Results;
