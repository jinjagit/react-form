import React, { Component } from 'react';

class Output extends Component {
  doMath = () => {
    return 2 * this.props.vars.utcOffset;
  }

  render() {
    if (this.props.vars.date !== '') {
      return (
        <div className="container">
          <p>Last vars received: {JSON.stringify(this.props.vars)}</p>
          <p>Do some math: 2 * UTC offset = {this.doMath()}</p>
        </div>
      );
    } else {
      return (
        <div className="container">
          <p>No vars received yet.</p>
        </div>
      );
    }
  }
}

export { Output };
