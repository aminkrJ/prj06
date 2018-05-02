import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

class Totals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shippingFee: 0,
      total: 0,
      coupon: {},
      subtotal: props.subtotal,
      freeDelivery: false,
    };
  }

  calcShippingFee(props) {
    return props.subtotal > 100 ? 0 : 8;
  }

  calcTotal(props) {
    if (props.hasCoupon) {
      return (
        props.subtotal + this.calcShippingFee(props) - props.coupon.discount
      );
    } else {
      return props.subtotal + this.calcShippingFee(props);
    }
  }

  renderDiscount() {
    if (this.props.hasCoupon) {
      return (
        <div class="row">
          <div class="col-md-6">
            <h4 class="font-weight-light text-danger">Discount</h4>
          </div>
          <div class="col-md-6 text-right">
            <h4 class="font-weight-light text-danger">
              -${this.props.coupon.discount}
            </h4>
          </div>
        </div>
      );
    }
  }

  componentDidMount() {
    this.setState({
      subtotal: this.props.subtotal,
      shippingFee: this.calcShippingFee(this.props),
      total: this.calcTotal(this.props),
      coupon: this.props.coupon,
      hasCoupon: this.props.hasCoupon,
    });
  }

  render() {
    return (
      <div class="cart-content-totals">
        <div class="row">
          <div class="col-md-8">
            <h4 class="font-weight-light">Subtotal</h4>
          </div>
          <div class="col-md-4 text-right">
            <h4 class="font-weight-light">${this.state.subtotal}</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8">
            <h4 class="font-weight-light mb-0">Delivery fee</h4>
            {this.state.subtotal > 100 ? (
              <div class="mb-2 font-weight-light text-xs">
                Free delivery on orders over $100
              </div>
            ) : null}
          </div>
          <div class="col-md-4 text-right">
            <h4 class="font-weight-light">${this.state.shippingFee}</h4>
          </div>
        </div>
        {this.renderDiscount()}
        <hr class="my-3 ml-0 ml-md-auto mr-md-0" />
        <div class="row">
          <div class="col-md-8">
            <h3 class="">Total</h3>
          </div>
          <div class="col-md-4 text-right">
            <h3 class="text-primary">${this.state.total}</h3>
          </div>
        </div>
        <hr class="my-3 ml-0 ml-md-auto mr-md-0" />
      </div>
    );
  }
}

Totals.defaultProps = {
  subtotal: 0,
  coupon: {},
  shippingFee: 0,
  hasCoupon: false,
};

export default Totals;
