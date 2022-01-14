import React, { Component } from 'react';
import Form from './form.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data: ''};
    this.setPageData.bind(this);
  }

  setPageData = (newValue) => {
    this.setState({data: newValue});
  }

  render() {
    return (
      <div className="App">
        <Form setPageData = {this.setPageData}/>
      </div>
    );
  }
}

export default App;
