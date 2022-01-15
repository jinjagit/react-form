import React, { Component } from 'react';

class Output extends Component {
  render() {
    return (
      <div className="container">
        <p>{JSON.stringify(this.props.data)}</p>
      </div>
    );
  }
}

export { Output };
