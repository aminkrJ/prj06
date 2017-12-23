import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import NProgress from 'nprogress';
import moment from 'moment'
import DatePicker from 'react-datepicker'
import business from 'moment-business'
import Stripe from './Stripe';
import CustomInput from './CustomInput';
import ShippingAddress from './ShippingAddress';

import 'react-datepicker/dist/react-datepicker.css';

class Checkout extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cart: {customer: {}},
      deliveryAt: moment().add(1, 'day'),
      errors: [],
      paymentError: '',
      isSending: false
    }
  }

  isWeekday(date) {
    return business.isWeekDay(date)
  }

  handleDeliveryDateChange(date) {
    this.setState({deliveryAt: date})
  }

  handleSubmit(e){
    e.preventDefault()

    NProgress.start()
    this.setState({isSending: true})

    var self = this
    var address = self.refs.shippingAddress.refs
    var stripe = self.refs.Stripe.state

    this.setState({paymentError: ''})


    stripe.engine.createToken(stripe.card, {
    }).then(function(result) {

      if (result.error) {
        NProgress.done()
        self.setState({
          isSending: false,
          paymentError: result.error.message
        })
      } else {
        self.setState({stripeToken: result.token.id})

        axios.post(`/carts/${self.props.match.params.reference_number}/checkout`,
          {
            cart: Object.assign({}, {
            stripe_token: self.state.stripeToken,
              delivery_at: self.state.deliveryAt
          }, {
            customer_attributes: {
              addresses_attributes: [
                {
                  country: "Australia",
                  city: "Sydney",
                  state: "NSW",
                  zip: address.postcode.state.value,
                  suburb: address.suburb.state.value,
                  street_address: address.street_address.state.value,
                  suite_apt: address.suite_apt.state.value
                }
              ],
              firstname: address.firstname.state.value,
              lastname: address.lastname.state.value,
            }
            })
          })
          .then(function (data) {
            NProgress.done()
            self.setState({isSending: false})

            self.props.history.push('/confirmation/' + self.props.match.params.reference_number)
          })
          .catch(function (error) {
            NProgress.done()
            self.setState({
              isSending: false,
              errors: error.response.data.errors
            })
          })
      }
    })
  }

  componentDidMount() {
    NProgress.start()

    axios.get("/carts/" + this.props.match.params.reference_number)
    .then((response) => {
      NProgress.done()

      this.setState({
        cart: response.data
      })

    })
    .catch((error) => {
      NProgress.done()
    })
  }
  render() {
    return (
    <div id="content" class="py-5">
      <div class="container">
        <div class="row">

        <div class="col-md-8">
          <h4>
            Delivery Date
          </h4>
          <div class="mb-4 bg-faded p-3 rounded mb-4" id="">
        <DatePicker
                selected={this.state.deliveryAt}
                onChange={this.handleDeliveryDateChange.bind(this)}
                locale="en-au"
      class="form-control"
                minDate={moment().add(1, 'day')}
                filterDate={this.isWeekday}
            />
            <p class="text-muted mt-2"> LifeElixir only offers next day deliveries in selected suburbs in NSW.</p>
          </div>
          <h4>
            Customer Information
          </h4>
          <div class="mb-4 bg-faded p-3 rounded mb-4" id="">
            <CustomInput ref='email' type='email' placeholder='Email' name='email' value={this.state.cart.customer.email} disabled/>
          </div>

          <h4>
            Delivery Options
          </h4>
          <div class="mb-4 bg-faded p-3 rounded mb-4" id="">
            <ShippingAddress ref='shippingAddress' errors={this.state.errors}/>
          </div>
          <h4>
            Payment Options
          </h4>
          <div id="payment-options" class="bg-faded p-3 rounded">
            <div class="form-check">
              <label class="form-check-label" data-toggle="radio-collapse" data-target="#credit-card" data-parent="#payment-options">
                <input class="form-check-input" type="radio" value="credit-card" checked />
                Credit Card <i class="fa fa-credit-card-alt"></i>
              </label>
              <div class="collapse show" id="credit-card">
                <div class="bg-white p-3 mt-2 rounded pos-relative">
                  <Stripe ref="Stripe" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="cart-content-totals">
            <div class="row">
              <div class="col-md-6">
                <h4 class="font-weight-light">Subtotal</h4>
              </div>
              <div class="col-md-6 text-right">
                <h4 class="font-weight-light">${this.state.cart.subtotal}</h4>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <h4 class="font-weight-light">Delivery fee</h4>
              </div>
              <div class="col-md-6 text-right">
                <h4 class="font-weight-light">${this.state.cart.shipping_fee}</h4>
              </div>
            </div>
            <hr class="my-3 w-100 ml-0 ml-md-auto mr-md-0" />
            <div class="row">
              <div class="col-md-6">
                <h3 class="">Total</h3>
              </div>
              <div class="col-md-6 text-right">
                <h3 class="text-primary">${this.state.cart.total}</h3>
              </div>
            </div>
            <hr class="my-3 w-100 ml-0 ml-md-auto mr-md-0" />
          </div>
          <input type="button" class="btn btn-primary btn-rounded btn-lg" disabled={this.state.isSending} value="Make Payment" onClick={this.handleSubmit.bind(this)}></input>
        </div>
      </div>
      </div>
    </div>
    )
  }
}

export default Checkout
