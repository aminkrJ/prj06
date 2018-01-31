import React from 'react'
import {render} from 'react-dom'
import CustomInput from './CustomInput'

export default class ShippingAddress extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  componentDidMount(){
  }

  render(){
    return (
      <div className='shipping-address'>
            <div className='row'>
              <div className='col-md-6'>
                <CustomInput type='text'
                      name='firstname'
                      ref="firstname"
                      placeholder='First name'
                      errors={this.props.errors["customer.firstname"]}
                      />
              </div>
              <div className='col-md-6'>
                <CustomInput type='text'
                      name='lastname'
                      ref="lastname"
                      placeholder='Last name'
                      errors={this.props.errors["customer.lastname"]}
                      />
              </div>
            </div>

            <div className='row'>
              <div className='col-md-12'>
                <CustomInput type='text'
                      name='street_address'
                      ref="street_address"
                      placeholder='Address'
                      errors={this.props.errors["customer.addresses.street_address"]}
                      required/>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6 col-sm-6'>
                <CustomInput type='text'
                      name='suburb'
                      ref="suburb"
                      placeholder='Suburb'
                      errors={this.props.errors["customer.addresses.suburb"]}
                      required/>
              </div>
              <div className='col-md-6 col-sm-6'>
                <CustomInput type='text'
                      name='postcode'
                      ref="postcode"
                      placeholder='Postcode'
                      errors={this.props.errors["customer.addresses.zip"]}
                      required/>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-6 col-sm-6'>
                <div className='form-group'>
                  <select ref="state" name="state" className='form-control'>
                    <option value="ACT">Australian Capital Territory</option>
                    <option value="NSW">New South Wales</option>
                    <option value="NT ">Northern Territory</option>
                    <option value="QLD">Queensland</option>
                    <option value="SA ">South Australia</option>
                    <option value="TAS">Tasmania</option>
                    <option value="VIC">Victoria</option>
                    <option value="WA ">Western Australia</option>
                  </select>
                </div>
              </div>
              <div className='col-md-6 col-sm-6'>
                <div className="form-group">
                  <select className="form-control" disabled>
                    <option>Australia</option>
                  </select>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-6 col-sm-6'>
              </div>
              <div className='col-md-6 col-sm-6'>
              </div>
            </div>
          </div>
    );
  }
}

ShippingAddress.defaultProps = {
  errors: {}
}
