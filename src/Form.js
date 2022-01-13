import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import './Form.css';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: 'example@mail.com',
      latitude: '12.8709',
      formErrors: {email: '', latitude: ''},
      emailValid: ['example@mail.com', 'example', 'mail.', 'com'],
      latitudeValid: true,
      formValid: true,
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let latitudeValid = this.state.latitudeValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'latitude':
        console.log(value);

        latitudeValid = false;
        if ((value.match(/^[+-]?\d+(\.\d+)?$/)) && (parseFloat(value) >= -90.0) && (parseFloat(value) <= 90.0)) {
          latitudeValid = true;
        }

        fieldValidationErrors.latitude = latitudeValid ? '': ' must be a number (degrees) from -90.0 (S) to 90.0 (N)';
        break;
      default:
        break;
    }
    this.setState(
      {formErrors: fieldValidationErrors,
       emailValid: emailValid,
       latitudeValid: latitudeValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.latitudeValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
      <form className="demoForm">
        <h2>Sign up</h2>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email">Email address</label>
          <input type="email" required className={`form-control ${this.errorClass(this.state.formErrors.email)}`} name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.latitude)}`}>
          <label htmlFor="latitude">Latitude</label>
          <input type="number" className={`form-control ${this.errorClass(this.state.formErrors.latitude)}`} name="latitude"
            placeholder="Degrees (decimal)"
            value={this.state.latitude}
            onChange={this.handleUserInput}  />
        </div>
        <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Sign up</button>
      </form>
    )
  }
}

export default Form;
