import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import NProgress from 'nprogress';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import business from 'moment-business';
import { render } from 'react-dom';
import _ from 'underscore';

import Stripe from './Stripe';
import CustomInput from './CustomInput';
import Modal from './Modal';
import ShippingAddress from './ShippingAddress';
import DeliveryTime from './DeliveryTime';
import DeliverySearch from './DeliverySearch';
import Totals from './Totals';

import 'react-datepicker/dist/react-datepicker.css';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: { customer: {}, coupon: {} },
      deliveryAt: moment(),
      deliveryTime: '',
      errors: [],
      cardError: '',
      shippingFee: 8,
      subtotal: 0,
      coupon: {},
      couponCode: '',
      hasCoupon: false,
      couponError: '',
      isSending: false,
    };
  }

  openDeliverySearchModal(e) {
    e.preventDefault();

    render(
      <Modal
        description="Now service is available for selected suburbs in Sydney. Enter your postcode below to see if we have service in your area."
        title="Pickup Locations"
      >
        <DeliverySearch />
      </Modal>,
      document.getElementById('modal')
    ).toggle();
  }

  onDeliveryTimeChange(deliveryTime) {
    this.setState({
      deliveryTime: deliveryTime,
    });
  }

  isWeekday(date) {
    return business.isWeekDay(date);
  }

  handleDeliveryDateChange(date) {
    this.setState({ deliveryAt: date });
  }

  handleCouponChange(e) {
    this.setState({ couponCode: e.target.value });
  }

  handleRemoveCoupon(e) {
    this.setState({ hasCoupon: false });
  }

  renderCoupon() {
    if (this.state.hasCoupon) {
      return (
        <div class="text-sm alert alert-info">
          <button
            class="close text-danger"
            aria-label="Close"
            onClick={this.handleRemoveCoupon.bind(this)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <b>{this.state.coupon.code}</b> has been applied. <br />{' '}
          {this.state.coupon.description}
        </div>
      );
    } else {
      return (
        <form>
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Coupon code"
              onChange={this.handleCouponChange.bind(this)}
            />
            <span class="input-group-btn">
              <button
                class="btn btn-primary"
                onClick={this.handleCouponApply.bind(this)}
                type="button"
              >
                Apply
              </button>
            </span>
          </div>
          <p class="text-sm text-danger">{this.state.couponError}</p>
        </form>
      );
    }
  }

  handleCouponApply(e) {
    e.preventDefault();
    var self = this;

    NProgress.start();
    axios
      .post('/carts/coupon', {
        cart: {
          subtotal: this.state.subtotal,
          total: self.refs.totals.state.total,
          shipping_fee: this.state.shippingFee,
          coupon_attributes: {
            code: this.state.couponCode,
          },
        },
      })
      .then(function(response) {
        NProgress.done();
        self.setState({
          coupon: response.data.coupon,
          hasCoupon: true,
          couponError: '',
        });
      })
      .catch(function(error) {
        NProgress.done();
        self.setState({
          couponError: error.response.data.errors,
        });
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    NProgress.start();
    this.setState({ isSending: true });

    var self = this;
    var address = self.refs.shippingAddress.refs;
    var stripe = self.refs.Stripe.state;

    var cart_products = this.props.cart.map(p => {
      return {
        product_id: p.id,
        quantity: p.quantity,
        unit_price: p.price,
        total_price: p.price * p.quantity,
      };
    });

    this.setState({
      cardError: '',
      errors: [],
    });

    stripe.engine.createToken(stripe.card, {}).then(function(result) {
      if (result.error) {
        NProgress.done();
        self.setState({
          isSending: false,
          cardError: result.error.message,
        });
      } else {
        self.setState({ stripeToken: result.token.id });

        axios
          .post('/carts/checkout', {
            cart: Object.assign(
              {},
              {
                stripe_token: self.state.stripeToken,
                delivery_at: self.state.deliveryAt,
                subtotal: self.state.subtotal,
                shipping_fee: self.refs.totals.state.shippingFee,
                //delivery_time: self.state.deliveryTime,
                discount: self.state.hasCoupon ? self.state.coupon.discount : 0,
                total: self.refs.totals.state.total,
                coupon_id: self.state.hasCoupon ? self.state.coupon.id : null,
              },
              {
                cart_products_attributes: cart_products,
                customer_attributes: {
                  addresses_attributes: [
                    {
                      country: 'Australia',
                      city: 'Sydney',
                      state:
                        address.state.options[address.state.selectedIndex]
                          .value,
                      zip: address.postcode.state.value,
                      suburb: address.suburb.state.value,
                      street_address: address.street_address.state.value,
                      //suite_apt: address.suite_apt.state.value
                    },
                  ],
                  email: self.refs.email.state.value,
                  firstname: address.firstname.state.value,
                  lastname: address.lastname.state.value,
                },
              }
            ),
          })
          .then(function(response) {
            NProgress.done();
            self.setState({ isSending: false });

            // clear cache for store
            self.props.reset();

            self.props.history.push(
              '/confirmation/' + response.data.reference_number
            );
          })
          .catch(function(error) {
            NProgress.done();
            self.setState({
              isSending: false,
              errors: error.response.data.errors,
            });
          });
      }
    });
  }

  componentWillMount() {
    this.setState({
      subtotal: this.calcSubtotal(),
    });
  }

  calcSubtotal() {
    return _.reduce(
      this.props.cart,
      (memo, p) => {
        return memo + p.quantity * p.price;
      },
      0
    );
  }

  render() {
    return (
      <div id="content" class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <h4 class="text-uppercase">Customer Information</h4>
              <div class="mb-2 bg-faded p-3 rounded" id="">
                <CustomInput
                  ref="email"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <h4 class="text-uppercase">Delivery Address</h4>
              <div class="mb-2 bg-faded p-3 rounded" id="">
                <ShippingAddress
                  ref="shippingAddress"
                  errors={this.state.errors}
                />
              </div>
              <h4 class="text-uppercase">Payment Options</h4>
              <div id="payment-options" class="bg-faded p-3 rounded">
                <div class="form-check">
                  <label
                    class="form-check-label"
                    data-toggle="radio-collapse"
                    data-target="#credit-card"
                    data-parent="#payment-options"
                  >
                    <input
                      class="form-check-input"
                      type="radio"
                      value="credit-card"
                      checked
                    />
                    Credit Card <i class="fa fa-credit-card-alt" />
                  </label>
                  <div class="collapse show" id="credit-card">
                    <div class="stripe-container form-control bg-white mt-2 pos-relative">
                      <Stripe ref="Stripe" />
                      <small class="text-danger">
                        {this.state.cardError}
                        {this.state.errors ? this.state.errors['stripe'] : null}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="row">
                <div class="col-12 mt-3">{this.renderCoupon()}</div>
              </div>
              <Totals
                ref="totals"
                hasCoupon={this.state.hasCoupon}
                coupon={this.state.coupon}
                subtotal={this.state.subtotal}
              />
              <input
                type="button"
                class="btn btn-primary btn-rounded btn-lg"
                disabled={this.state.isSending}
                value="Make Payment"
                onClick={this.handleSubmit.bind(this)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
