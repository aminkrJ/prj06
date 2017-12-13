import React, { Component } from 'react';
import { Redirect, Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import NProgress from 'nprogress';

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: {photo: {}},
      unitPrice: 0,
      quantity: 1,
      shippingFee: 8,
      total: 0,
      isSending: false,
      errors: {}
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
            quantity: this.state.quantity
          }
        ],
        total: this.state.total,
        shipping_fee: this.state.shippingFee,
        subtotal: (this.state.quantity * this.state.unitPrice).toFixed(2)
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
        <td> <span class="font-weight-bold">{this.state.product.name}</span> </td>
        <td>${this.state.product.price}</td>
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
        <td class="text-md-right"><span class="font-weight-bold">${(this.state.product.price * this.state.quantity).toFixed(2)}</span></td>
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
                  <form action="#" role="form">
                    <div class="input-group">
                    </div>
                  </form>
                </div>
                <div class="col-md-8 text-md-right mt-3 mt-md-0">
                  <div class="cart-content-totals">
                    <h4 class="font-weight-light">
                      Subtotal: ${this.state.unitPrice * this.state.quantity}
                    </h4>
                    <h4 class="font-weight-light">
                      Delivery fee: ${this.state.shippingFee}
                    </h4>
                    <hr class="my-3 w-50 ml-0 ml-md-auto mr-md-0" />
                    <h3>
                      Total: <span class="text-primary">${(this.state.shippingFee + this.state.unitPrice * this.state.quantity)}</span>
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
