import React, { Component } from 'react';
import { Redirect, Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import NProgress from 'nprogress';
import _ from 'underscore';

import CustomInput from './CustomInput';

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shippingFee: 8,
      total: 0,
      isSending: false,
      errors: []
    }
  }

  componentDidMount() {
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
        total: this.state.total,
        shipping_fee: this.state.shippingFee,
        subtotal: (this.state.quantity * this.state.unitPrice).toFixed(2),
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

  renderCartProducts() {
    return(
      this.props.cart.map((p) => {
        return(
          <tr>
            <td class="text-center align-middle">
              <a href="#" class="close cart-remove" onClick={this.props.dropFromCart.bind(this, p)}> <i class="fa fa-times"></i> </a>
            </td>
            <td class="text-center">
              <Link to={`/menu/${p.slug}`}>
                <img class="cart-img img-fluid" src={p.photo.thumb} alt={p.name} />
              </Link>
            </td>
            <td>
              <Link to={`/menu/${p.slug}`} class="font-weight-bold">{p.name}</Link>
              <p dangerouslySetInnerHTML={{__html: p.nutrition_fact}} class="text-muted text-sm" />
            </td>
            <td>${p.price}</td>
            <td>
              <div class="input-group input-group-quantity" data-toggle="quantity">
                <span class="input-group-btn">
                  <input type="button" value="-" class="btn btn-secondary quantity-down" field="quantity" onClick={this.props.removeFromCart.bind(this, p, null)} />
                </span>
                <input type="text" name="quantity" value={p.quantity} class="quantity form-control" />
                <span class="input-group-btn">
                  <input type="button" value="+" class="btn btn-secondary quantity-up" field="quantity" onClick={this.props.addToCart.bind(this, p, null)} />
                </span>
              </div>
            </td>
            <td class="text-md-right"><span class="font-weight-bold">${p.price * p.quantity}</span></td>
          </tr>
        )
      })
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
      {this.renderCartProducts()}
              </tbody>
            </table>
            <hr class="my-4 hr-lg" />
            <div class="cart-content-footer">
              <div class="row">
                <div class="col-md-4">
                </div>
                <div class="col-md-8 text-md-right mt-3 mt-md-0">
                  <div class="cart-content-totals">
                    <h4 class="font-weight-light">
                      Subtotal: ${0}
                    </h4>
                    <h4 class="font-weight-light">
                      Delivery fee: ${this.state.shippingFee}
                    </h4>
                    <hr class="my-3 w-50 ml-0 ml-md-auto mr-md-0" />
                    <h3>
                      Total: <span class="text-primary">${0}</span>
                    </h3>
                    <hr class="my-3 w-50 ml-0 ml-md-auto mr-md-0" />
                  </div>
                  <a href="/menu" class="btn btn-outline-primary btn-rounded btn-lg">Continue Shopping</a> <a href="#" disabled={this.state.isSending} class="btn btn-primary btn-rounded btn-lg" onClick={this.handleProceedCheckout.bind(this)}>Proceed to Checkout</a>
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
