import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from  'classnames'
import moment from 'moment-timezone'
import { FormGroup, Label, Input } from 'reactstrap'

class DeliveryTime extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isDisabled: false,
      isChecked: false
    }
  }

  handleTimeChange(e) {
    var now = moment().tz("Australia/Sydney")
    var deliveryDate = moment(this.props.deliveryAt)
    var startOfDay = deliveryDate.startOf('day').add(1, 'm')
    var deliveryDateTime = deliveryDate.add(this.props.period, 'h')
  }

  componentWillReceiveProps(nextProps) {
    this.updateUI(nextProps)
  }

  updateUI(props) {
    var now = moment()
    var deliveryDate = moment(props.deliveryAt)
    var startOfDay = deliveryDate.startOf('day').add(1, 'm')
    var selectedDateTime = startOfDay.add(props.start, 'h')

    if(now.isBefore(selectedDateTime)){
      this.setState({isDisabled: false})
    }else{
      this.setState({isDisabled: true})
    }
  }

  componentDidMount() {
    this.updateUI(this.props)
  }

  render() {
    return (
      <FormGroup onClick={this.handleTimeChange.bind(this)} disabled={this.state.isDisabled} check>
        <Label class="text-sm" check={this.state.isChecked} check>
          <Input type="radio" disabled={this.state.isDisabled} />{' '}
  {this.props.value} <span class="text-danger text-xs">{this.state.isDisabled ? " - Not Available. Change date to find availability." : null}</span>
        </Label>
      </FormGroup>
    )
  }
}

export default DeliveryTime
