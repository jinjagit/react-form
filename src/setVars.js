import React, { Component } from 'react';
import { FormErrors } from './formErrors';
import { getPreset } from './presets';
import { Output } from './output.js';

class SetVars extends Component {
  constructor (props) {
    super(props);
    this.state = {
      select: 'default',
      date: '',
      latitude: '',
      longitude: '',
      utcOffset: '',
      formErrors: {
        latitude: '',
        longitude: '',
        date: '',
        utcOffset: ''
      },
      dateValid: false,
      latitudeValid: false,
      longitudeValid: false,
      utcOffsetValid: false,
      formValid: false,
      vars: {
        date: '',
        latitude: '',
        longitude: '',
        utcOffset: '',
      }
    }
  }

  handleSelect = (e) => {
    if (e.target.value !== 'default') {
      this.setState({
        select: e.target.value,
        dateValid: true,
        latitudeValid: true,
        longitudeValid: true,
        utcOffsetValid: true,
        formValid: true,
      });


        this.setState(getPreset(e.target.value));


    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
    this.setState({select: 'default'});
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let latitudeValid = this.state.latitudeValid;
    let longitudeValid = this.state.longitudeValid;
    let dateValid = this.state.dateValid;
    let utcOffsetValid = this.state.utcOffsetValid;

    switch(fieldName) {
      case 'latitude':
        latitudeValid = false;
        
        if (
            value.match(/^[+-]?\d+(\.\d+)?$/)
            && (parseFloat(value) >= -90.0)
            && (parseFloat(value) <= 90.0)
        ) { latitudeValid = true; }

        fieldValidationErrors.latitude = latitudeValid ? '': ' must be a number (degrees) from -90.0 (S) to 90.0 (N)';
        break;
        case 'longitude':
          longitudeValid = false;
          
          if (
              value.match(/^[+-]?\d+(\.\d+)?$/)
              && (parseFloat(value) >= -180.0)
              && (parseFloat(value) <= 180.0)
          ) { longitudeValid = true; }
  
          fieldValidationErrors.longitude = longitudeValid ? '': ' must be a number (degrees) from -180.0 (W) to 180.0 (E)';
        break;
        case 'utcOffset':
          utcOffsetValid = false;
          
          if (
              value.match(/^[+-]?[0-9]+$/)
              && (parseFloat(value) >= -12)
              && (parseFloat(value) <= 13)
          ) { utcOffsetValid = true; }
  
          fieldValidationErrors.utcOffset = utcOffsetValid ? '': ' must be a whole number (hours) from -12 to 13';
        break;
        case 'date':
          let testDate = new Date(value+"T00:00:00");
          let minDate = new Date("2002-01-01T00:00:00");
          let maxDate = new Date("2042-12-31T00:00:00");

          (testDate >= minDate && testDate <= maxDate) ? dateValid = true : dateValid = false;

          fieldValidationErrors.date = dateValid ? '': ' must be a date from 01/01/2002 to 31/12/2042';
        break;
      default:
        break;
    }
    this.setState(
      {formErrors: fieldValidationErrors,
        dateValid: dateValid,
        latitudeValid: latitudeValid,
        longitudeValid: longitudeValid,
        utcOffsetValid: utcOffsetValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.dateValid
      && this.state.latitudeValid
      && this.state.longitudeValid
      && this.state.utcOffsetValid
    });
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  handleSubmit= (evt) => {
    evt.preventDefault();
    this.setState({vars: {
      date: this.state.date,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      utcOffset: this.state.utcOffset
    }});
  }

  render () {
    return (
      <div>
        <div className="container">
          <div className='row g-3'>
            <div className='col-lg-8'>
              <p>Choose a date, location (latitude and longitude), and set the UTC offset (timezone difference to UTC, including seasonal adjustments) - or choose a preset example.</p>
              <p>Click ‘Calculate’ to see details of the sun’s path for your chosen date and place.</p>
            </div>
            <div className='col-lg-4'>
            <select className='form-control' value={this.state.select} onChange={this.handleSelect}>            
              <option value="default" disabled={true}>Choose a preset example</option>
              <option value="b1">Brussels, 21st June, 2022</option>
              <option value="b2">Brussels, 21st December, 2022</option>
              <option value="sp1">São Paulo, 21st June, 2022</option>
              <option value="sp2">São Paulo, 21st December, 2022</option>
            </select>
            </div>
          </div>
        </div>
        <div className="container form">
          <div className="row panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <form className="row g-3" onSubmit={this.handleSubmit}>
            <div className={`col-lg-3 ${this.errorClass(this.state.formErrors.date)}`}>
              <label htmlFor="date" className="form-label">Date</label>
              <input
                className={`form-control ${this.errorClass(this.state.formErrors.date)}`}
                type='date'
                name='date'
                min='2002-01-01'
                max='2042-12-31'
                value={this.state.date}
                onChange={this.handleUserInput}
              />
            </div>
            <div className={`col-lg-3 ${this.errorClass(this.state.formErrors.latitude)}`}>
              <label htmlFor="latitude" className="form-label">Latitude</label>
              <input
                type="number"
                className={`form-control ${this.errorClass(this.state.formErrors.latitude)}`}
                name="latitude"
                placeholder="Degrees (decimal)"
                value={this.state.latitude}
                onChange={this.handleUserInput}
              />
            </div>
            <div className={`col-lg-3 ${this.errorClass(this.state.formErrors.longitude)}`}>
              <label htmlFor="longitude" className="form-label">Longitude</label>
              <input
                type="number"
                className={`form-control ${this.errorClass(this.state.formErrors.longitude)}`}
                name="longitude"
                placeholder="Degrees (decimal)"
                value={this.state.longitude}
                onChange={this.handleUserInput}
              />
            </div>
            <div className={`col-lg-3 ${this.errorClass(this.state.formErrors.utcOffset)}`}>
              <label htmlFor="utcOffset" className="form-label">UTC Offset</label>
              <input
                type="number"
                className={`form-control ${this.errorClass(this.state.formErrors.utcOffset)}`}
                name="utcOffset"
                placeholder="Hours (integer)"
                value={this.state.utcOffset}
                onChange={this.handleUserInput}
              />
            </div>
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-primary submit"
                disabled={!this.state.formValid}
              >Calculate</button>
            </div>
          </form>
        </div>
        <Output vars={this.state.vars}/>
      </div>
    )
  }
}

export {SetVars};
