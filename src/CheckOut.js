import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import NProgress from 'nprogress';
import Stripe from './Stripe';
import CustomInput from './CustomInput';
import ShippingAddress from './ShippingAddress';

class CheckOut extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cart: {},
      errors: [],
      paymentError: ''
    }
  }

  handleSubmit(e){
    e.preventDefault()

    var self = this
    var address = self.refs.shippingAddress.state
    var stripe = self.refs.Stripe.state

    this.setState({paymentError: ''})

    stripe.stripe.createToken(stripe.card, {
    }).then(function(result) {
      if (result.error) {
        self.setState({paymentError: result.error.message})
      } else {
        self.setState({stripeToken: result.token.id})

        NProgress.start()
        this.setState({isSending: true})

        axios.post("/carts/checkout",
          {
            cart: Object.assign({}, {
            stripe_token: self.state.stripeToken,
          }, {
            customer_attributes: {
              country: address.country,
              city: address.city,
              state: address.state,
              postcode: address.postcode,
              suburb: address.suburb,
              address: address.address,
              email: self.state.email,
              fullname: address.fullname}
            })
          })
          .then(function (data) {
            this.setState({isSending: false})
          })
          .catch(function (error) {
            this.setState({isSending: false})
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
            Customer information
          </h4>
          <div class="mb-4 bg-faded p-3 rounded mb-4" id="billing">
            <CustomInput type='email' placeholder='Email' name='email' required />
          </div>

          <h4>
            Shipping Address
          </h4>
          <div class="mb-4 bg-faded p-3 rounded mb-4" id="billing">
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
                <h4 class="font-weight-light">Shipping fee</h4>
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
          <a href="shop-confirmation.html" class="btn btn-primary btn-rounded btn-lg">Make Payment</a> 
        </div>
      </div>
      </div>
    </div>
    )
  }
}

export default CheckOut
