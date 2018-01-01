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
      cart: {customer: {}, coupon: {}},
      deliveryAt: moment(),
      errors: [],
      paymentError: '',
      coupon: {},
      couponCode: "",
      hasCoupon: false,
      couponError: "",
      isSending: false
    }
  }

  isWeekday(date) {
    return business.isWeekDay(date)
  }

  handleDeliveryDateChange(date) {
    this.setState({deliveryAt: date})
  }

  renderDiscount() {
    if(this.state.hasCoupon) {
      return (
        <div class="row">
        <div class="col-md-6">
          <h4 class="font-weight-light text-danger">Discount</h4>
        </div>
        <div class="col-md-6 text-right">
          <h4 class="font-weight-light text-danger">-${this.state.coupon.discount}</h4>
        </div>
        </div>
      )
    }
  }

  handleCouponChange(e) {
    this.setState({couponCode: e.target.value})
  }

  handleRemoveCoupon(e){
    this.setState({hasCoupon: false})
  }

  renderCoupon() {
    if(this.state.hasCoupon){
      return (
          <div class="text-sm alert alert-info">
          <button class="close text-danger" aria-label="Close" onClick={this.handleRemoveCoupon.bind(this)}>
              <span aria-hidden="true">&times;</span>
          </button>
            <b>{this.state.coupon.code}</b> has been applied. <br/> {this.state.coupon.description}.
          </div>
      )
    } else {
      return (
      <form>
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Coupon code" onChange={this.handleCouponChange.bind(this)}/>
          <span class="input-group-btn">
            <button class="btn btn-primary" onClick={this.handleCouponApply.bind(this)} type="button">Apply</button>
          </span>
        </div>
        <p class="text-sm text-danger">{this.state.couponError}</p>
      </form>
      )
    }
  }

  handleCouponApply(e) {
    e.preventDefault()
    var self = this

    NProgress.start()
    axios.post(`/carts/${self.props.match.params.reference_number}/coupon`, {
     cart: {coupon_attributes: {
       code: this.state.couponCode
     }}
    }).then(function(response){
      NProgress.done()
      self.setState({
        coupon: response.data.coupon,
        hasCoupon: true,
        couponError: ""
      })
    }).catch(function(error){
      NProgress.done()
      self.setState({
        couponError: error.response.data.errors
      })
    })
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
              delivery_at: self.state.deliveryAt,
              discount: self.state.hasCoupon ? self.state.coupon.discount : 0,
              total: self.state.hasCoupon ? self.state.coupon.total : self.state.cart.total,
              coupon_id: self.state.hasCoupon ? self.state.coupon.id : null

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
              email: self.refs.email.state.value,
              firstname: address.firstname.state.value,
              lastname: address.lastname.state.value,
            }
            })
          })
          .then(function (data) {
            NProgress.done()
            self.setState({isSending: false})

            // clear cache for store
            self.props.reset()

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
        cart: response.data,
        coupon: response.data.coupon
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
  //minTime={moment().hours(9).minutes(0)}
  //maxTime={moment().hours(17).minutes(0)}
                //showTimeSelect
                //timeIntervals={60}
                className="form-control"
                dateFormat="LL"
                minDate={moment()}
                filterDate={this.isWeekday}
            />
            <p class="text-muted mt-2"> We only deliver to selected suburbs in NSW.</p>
          </div>
          <h4>
            Customer Information
          </h4>
          <div class="mb-4 bg-faded p-3 rounded mb-4" id="">
            <CustomInput ref='email' type='email' placeholder='Email' name='email' />
          </div>

          <h4>
            Delivery Address
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
                <div class="stripe-container form-control bg-white mt-2 pos-relative">
                  <Stripe ref="Stripe" />
                  <small class='text-danger'>{this.state.errors ? this.state.errors['stripe'] : null}</small>
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
            {this.renderDiscount()}
            <div class="row">
              <div class="col-12 mt-3">
                {this.renderCoupon()}
              </div>
            </div>
            <hr class="my-3 w-100 ml-0 ml-md-auto mr-md-0" />
            <div class="row">
              <div class="col-md-6">
                <h3 class="">Total</h3>
              </div>
              <div class="col-md-6 text-right">
                <h3 class="text-primary">${this.state.hasCoupon ? this.state.coupon.total : this.state.cart.total}</h3>
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
