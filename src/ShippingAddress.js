import React from 'react'
import {render} from 'react-dom'
import CustomInput from './CustomInput'

export default class ShippingAddress extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      address: '',
      suburb: '',
      state: 'nsw',
      postcode: '',
      city: '',
      country: 'Australia'
    }
  }

  componentDidMount(){
  }

  handleAddressChange(newAddress){
    this.setState({address: newAddress})
  }

  handleCityChange(newCity){
    this.setState({city: newCity})
  }

  handleSuburbChange(newSuburb){
    this.setState({suburb: newSuburb})
  }

  handleStateChange(e){
    this.setState({state: e.target.options[e.target.selectedIndex].getAttribute("name")})
  }

  handlePostcodeChange(newPostcode){
    this.setState({postcode: newPostcode})
  }

  render(){
    return (
      <div className='shipping-address'>
            <div className="form-group">
              <select className="form-control" disabled>
                <option>Australia</option>
              </select>
            </div>
            <CustomInput type='address'
                  name='address'
                  label=''
                  placeholder='Address'
                  value={this.state.address}
                  validationMessage={this.props.errors["customer.address"] != undefined ? this.props.errors["customer.address"].toString() : ''}
                  onChange={this.handleAddressChange.bind(this)} />
            <div className='row'>
              <div className='col-md-6 col-sm-6'>
                <CustomInput type='suburb'
                      name='suburb'
                      label=''
                      placeholder='Suburb'
                      validationMessage={this.props.errors["customer.suburb"] != undefined ? this.props.errors["customer.suburb"].toString() : ''}
                      value={this.state.suburb}
                      onChange={this.handleSuburbChange.bind(this)} />
              </div>
              <div className='col-md-6 col-sm-6'>
                <div className='form-group'>
                  <select name="state" className='form-control' onChange={this.handleStateChange.bind(this)}>
                    <option name="nsw">New South Wales</option>
                    <option name="vic">Victoria</option>
                    <option name="qld">Queensland</option>
                    <option name="wa">Western Australia</option>
                    <option name="sa">South Australia</option>
                    <option name="tas">Tasmania</option>
                    <option name="act">Australian Capital Territory</option>
                    <option name="nt">Northern Territory</option>
                  </select>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-6 col-sm-6'>
                <CustomInput type='city'
                      name='city'
                      label=''
                      placeholder='City'
                      value={this.state.city}
                      validationMessage={this.props.errors["customer.city"] != undefined ? this.props.errors["customer.city"].toString() : ''}
                      onChange={this.handleCityChange.bind(this)} />
              </div>
              <div className='col-md-6 col-sm-6'>
                <CustomInput type='postcode'
                      name='postcode'
                      label=''
                      placeholder='Postcode'
                      value={this.state.postcode}
                      validationMessage={this.props.errors["customer.postcode"] != undefined ? this.props.errors["customer.postcode"].toString() : ''}
                      onChange={this.handlePostcodeChange.bind(this)} />
              </div>
            </div>
          </div>
    );
  }
}

ShippingAddress.defaultProps = {
}
