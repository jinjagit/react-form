import React, { Component } from 'react';
import { SetVars } from './setVars.js';

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      one: 'One',
      two: 'Two',
      three: 'Three'
    };
  }

  render() {
    return (
      <div className="intro">
        <div className="container">
          <div className='row g-3'>
            <div className='col-lg-8'>
              <p>Choose a date, location (latitude and longitude), and set the UTC offset (timezone difference to UTC, including seasonal adjustments) - or choose a preset example.</p>
              <p>Click ‘Calculate’ to see details of the sun’s path for your chosen date and place.</p>
            </div>
            <div className='col-lg-4'>
              <select className="form-select" aria-label="Default select example">
                <option selected>Choose an example</option>
                <option value={this.state.one}/>
                <option value={this.state.two}/>
                <option value={this.state.three}/>
              </select>
            </div>
          </div>
        </div>
        <SetVars />
      </div>
    );
  }
}

export { Intro };
