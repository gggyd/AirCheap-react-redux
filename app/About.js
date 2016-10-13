import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

class About extends Component {
  render() {
    return (
      <div>
        <h3>About...</h3>
        <a href="index.html">Index</a>
      </div>
    )
  }
}

render(<About />, document.getElementById('root'));