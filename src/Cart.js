import React, { Component } from 'react';
import { Redirect, Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import NProgress from 'nprogress';
import _ from 'underscore';

import CustomButtonGroup from './CustomButtonGroup'
import CustomInput from './CustomInput';

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: {photo: {}},
      unitPrice: 0,
      quantity: 1,
      shippingFee: 5,
      total: 0,
      isSending: false,
      isVegan: false,
      isActivated: false,
      isOrganic: false,
      errors: []
    }
  }

  componentDidMount() {
    NProgress.start()

    axios.get("/products/" + this.props.match.params.slug)
    .then((response) => {
      NProgress.done()

      this.setState({
        product: response.data,
        unitPrice: parseFloat(response.data.price),
        total: (parseFloat(response.data.price) + this.state.shippingFee).toFixed(2)
      })

    })
    .catch((error) => {
      NProgress.done()
    })
  }

  handleUnitPriceChange(percentages) {
    if(_.contains(percentages, 20)){
      this.setState({isOrganic: true})
    }
    if(_.contains(percentages, 5)){
      this.setState({isVegan: true})
    }
    if(_.contains(percentages, 10)){
      this.setState({isActivated: true})
    }

    var percentage = _.reduce(percentages, function(memo, num){ return memo + num; }, 0)
    var add = this.state.product.price * (percentage/100)
    var unitPrice = this.state.product.price * 1 + add
    this.setState({
      unitPrice: unitPrice,
      total: this.state.shippingFee + unitPrice * this.state.quantity
    })
  }

  handleProceedCheckout(e) {
    e.preventDefault()
    NProgress.start()
    this.setState({isSending: true})

    var $this = this

    axios.post('/carts', {
      cart: {
        cart_products_attributes: [
          {
            product_id: this.state.product.id,
            quantity: this.state.quantity,
            unit_price: this.state.unitPrice,
            total_price: (this.state.quantity * this.state.unitPrice).toFixed(2)
          },
        ],
          customer_attributes: {
            email: $this.refs.email.state.value
          },
        total: this.state.total,
        shipping_fee: this.state.shippingFee,
        subtotal: (this.state.quantity * this.state.unitPrice).toFixed(2),
        vegan: this.state.isVegan,
        activated_nuts: this.state.isActivated,
        organic: this.state.isOrganic
      }
    })
    .then(function (response) {
      NProgress.done()
      $this.props.history.push('/checkout/' + response.data.reference_number)
    })
    .catch(function (error) {
      NProgress.done()
      $this.setState({
        isSending: false,
        errors: error.response.data.errors
      })
    })
  }

  handleDecQuantity() {
    if(this.state.quantity > 1){
      this.setState({
        quantity: this.state.quantity - 1,
      })
    }
  }

  handleIncQuantity() {
    this.setState({
      quantity: this.state.quantity + 1,
    })
  }

  renderProduct() {
    return(
      <tr>
        <td class="text-center align-middle">
        </td>
        <td class="text-center">
          <a href="#">
            <img class="cart-img img-fluid" src={this.state.product.photo.thumb} alt={this.state.product.name} />
          </a>
        </td>
        <td>
          <span class="font-weight-bold">{this.state.product.name}</span>
          <p dangerouslySetInnerHTML={{__html: this.state.product.nutrition_fact}} class="text-muted text-sm" />
        </td>
        <td>${this.state.unitPrice}</td>
        <td>
          <div class="input-group input-group-quantity" data-toggle="quantity">
            <span class="input-group-btn">
              <input type="button" value="-" class="btn btn-secondary quantity-down" field="quantity" onClick={this.handleDecQuantity.bind(this)} />
            </span>
            <input type="text" name="quantity" value={this.state.quantity} class="quantity form-control" />
            <span class="input-group-btn">
              <input type="button" value="+" class="btn btn-secondary quantity-up" field="quantity" onClick={this.handleIncQuantity.bind(this)} />
            </span>
          </div>
        </td>
        <td class="text-md-right"><span class="font-weight-bold">${(this.state.unitPrice * this.state.quantity).toFixed(2)}</span></td>
      </tr>
    )
  }

  render() {
    return (
      <div id="content" class="py-6">
        <div class="container">
          <div class="cart-content">
            <table class="table table-responsive mb-0 cart-table">
              <thead>
                <tr>
                  <th class="w-5"></th>
                  <th class="w-10"></th>
                  <th class="w-20">Item</th>
                  <th class="w-20">Unit Price</th>
                  <th class="w-20">Quantity</th>
                  <th class="w-20 text-md-right">Total</th>
                </tr>
              </thead>
              <tbody >
      {this.renderProduct()}
              </tbody>
            </table>
            <hr class="my-4 hr-lg" />
            <div class="cart-content-footer">
              <div class="row">
                <div class="col-md-4">
          <h5 class="my-3">Customise your order</h5>
          <CustomButtonGroup onUnitPriceChange={this.handleUnitPriceChange.bind(this)} />
                </div>
                <div class="col-md-4">
          <h5 class="my-3">Enter your email address</h5>
                  <CustomInput ref='email' type='email' placeholder='Email' name='email' errors={this.state.errors["customer.email"]} required/>
                </div>
                <div class="col-md-4 text-md-right mt-3 mt-md-0">
                  <div class="cart-content-totals">
                    <h4 class="font-weight-light">
                      Subtotal: ${this.state.unitPrice * this.state.quantity}
                    </h4>
                    <h4 class="font-weight-light">
                      Delivery fee: ${this.state.shippingFee}
                    </h4>
                    <hr class="my-3 w-50 ml-0 ml-md-auto mr-md-0" />
                    <h3>
                      Total: <span class="text-primary">${this.state.total}</span>
                    </h3>
                    <hr class="my-3 w-50 ml-0 ml-md-auto mr-md-0" />
                  </div>
                  <input type="button" disabled={this.state.isSending} class="btn btn-primary btn-rounded btn-lg" onClick={this.handleProceedCheckout.bind(this)} value="Proceed To Checkout"></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Cart
