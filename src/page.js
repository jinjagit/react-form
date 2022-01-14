import React, { Component } from 'react';
import Form from './form.js';

class Page extends Component {
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

export default Page;
