import React, { Component } from 'react';
import MaskedInput from 'react-maskedinput';
import classNames from 'classnames';
import validate from 'validate.js';
import PropTypes from 'prop-types';

import './CustomInput.css';

class CustomInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: props.value,
      errors: []
    }
  }

  handleChange(e){
    this.setState({ value: e.target.value })
  }

  handleBlur(e){
    var errors = validate.single(this.state.value, Object.assign({ presence: this.props.required }, this.props.constraints))

    this.setState({ errors: errors === undefined ? [] : errors })
  }

  render() {
    var messages = this.props.errors.map((message, index) => {
      return (
        <div key={index} className="error-message">{ message }</div>
      )
    })
    var label = <label htmlFor={ this.props.name }>{ this.props.label }</label>

    return (
      <div className={classNames('custom-input', 'form-group', { required: this.props.required, error: this.state.errors.length > 0 })}>
        {this.props.label === undefined ? "" : label}
        { this.props.mask ?
        <MaskedInput { ...this.props } className='form-control' value={ this.state.value } onBlur={ this.handleBlur.bind(this) } onChange={ this.handleChange.bind(this) } /> :
        <input value={ this.state.value } { ...this.props } className='form-control' onBlur={ this.handleBlur.bind(this) } onChange={ this.handleChange.bind(this) } />
        }
        <span class="text-danger"><small>{ messages }</small></span>
      </div>
    )
  }
}

CustomInput.propTypes = {
  constraints: PropTypes.object,
  errors: PropTypes.array
}

CustomInput.defaultProps = {
  errors: []
}

export default CustomInput
