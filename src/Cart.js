import React, { Component } from 'react';
import { Redirect, Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import NProgress from 'nprogress';
import _ from 'underscore';
import { render } from 'react-dom';

import Modal from './Modal';
import DeliverySearch from './DeliverySearch';
import CustomInput from './CustomInput';
import Totals from './Totals';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shippingFee: 8,
      subtotal: 0,
      isSending: false,
      errors: [],
    };
  }

  // we need subtotal to send accurate value to component's children
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

  incQuantity(p) {
    this.props.addToCart(p);

    this.setState({
      subtotal: this.calcSubtotal(),
    });
  }

  decQuantity(p) {
    this.props.removeFromCart(p);

    this.setState({
      subtotal: this.calcSubtotal(),
    });
  }

  openDeliverySearchModal(e) {
    e.preventDefault();

    render(
      <Modal title="Pickup Locations">
        <DeliverySearch />
      </Modal>,
      document.getElementById('modal')
    ).toggle();
  }

  renderCartProducts() {
    return this.props.cart.map(p => {
      return (
        <tr>
          <td class="text-center align-middle">
            <a
              href="#"
              class="close cart-remove"
              onClick={this.props.dropFromCart.bind(this, p)}
            >
              {' '}
              <i class="fa fa-times" />{' '}
            </a>
          </td>
          <td class="text-center">
            <Link to={`/shop/${p.slug}`}>
              <img
                class="cart-img img-fluid"
                src={p.photo.thumb}
                alt={p.name}
              />
            </Link>
          </td>
          <td>
            <Link to={`/shop/${p.slug}`} class="font-weight-bold">
              {p.name}
            </Link>
            <p
              dangerouslySetInnerHTML={{ __html: p.nutrition_fact }}
              class="text-muted text-sm"
            />
          </td>
          <td>${p.price}</td>
          <td>
            <div
              class="input-group input-group-quantity"
              data-toggle="quantity"
            >
              <span class="input-group-btn">
                <input
                  type="button"
                  value="-"
                  class="btn btn-secondary quantity-down"
                  field="quantity"
                  onClick={this.decQuantity.bind(this, p)}
                />
              </span>
              <input
                type="text"
                name="quantity"
                value={p.quantity}
                class="quantity form-control"
              />
              <span class="input-group-btn">
                <input
                  type="button"
                  value="+"
                  class="btn btn-secondary quantity-up"
                  field="quantity"
                  onClick={this.incQuantity.bind(this, p)}
                />
              </span>
            </div>
          </td>
          <td class="text-md-right">
            <span class="font-weight-bold">${p.price * p.quantity}</span>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div id="content" class="py-6">
        <div class="container">
          <div class="cart-content">
            <table class="table table-responsive mb-0 cart-table">
              <thead>
                <tr>
                  <th class="w-5" />
                  <th class="w-10" />
                  <th class="w-20">Item</th>
                  <th class="w-20">Unit Price</th>
                  <th class="w-20">Quantity</th>
                  <th class="w-20 text-md-right">Total</th>
                </tr>
              </thead>
              <tbody>{this.renderCartProducts()}</tbody>
            </table>
            <hr class="mt-4 mb-0 hr-lg" />
            <div class="cart-content-footer">
              <div class="row">
                <div class="col-md-6">
                  <p class="text-sm text-muted" />
                </div>
                <div class="col-md-6 text-md-right mt-3 mt-md-0">
                  <Totals ref="Totals" subtotal={this.state.subtotal} />
                  <Link
                    to="/shop"
                    class="btn btn-outline-primary btn-rounded btn-lg mr-1 mb-sm-1"
                  >
                    Continue Shopping
                  </Link>
                  <Link
                    to="/checkout"
                    class="btn btn-primary btn-rounded btn-lg"
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
