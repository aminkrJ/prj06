import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import _ from 'underscore';
import iziToast from 'izitoast';

class AddToCartButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isInCart: this.props.cart
        .map(p => {
          return p.id;
        })
        .includes(this.props.product.id),
      product: this.props.product,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.product !== this.state.product) {
      this.setState({
        product: nextProps.product,
        isInCart: this.props.cart
          .map(p => {
            return p.id;
          })
          .includes(nextProps.product.id),
      });
    }
  }

  handleClick(e) {
    e.preventDefault();

    if (this.state.isInCart) {
      this.props.dropFromCart(this.props.product);
      iziToast.success({
        position: 'topRight',
        color: 'yellow',
        title: this.state.product.name,
        message: 'has been removed from your cart.',
      });
    } else {
      this.props.addToCart(this.props.product);
      iziToast.success({
        position: 'topRight',
        title: this.state.product.name,
        message: 'has been added to your cart.',
      });
    }
  }

  render() {
    if (this.state.isInCart) {
      return (
        <a
          href="#"
          onClick={this.handleClick.bind(this)}
          class={classnames(this.props.class, 'btn-danger btn-link')}
        >
          <i class="fa fa-minus mr-2" />
          {this.state.isInCart ? 'Remove from Cart' : 'Add to Cart'}
        </a>
      );
    } else {
      return (
        <a
          href="#"
          onClick={this.handleClick.bind(this)}
          class={classnames(this.props.class)}
        >
          <i class="fa fa-plus mr-2" />
          {this.state.isInCart ? 'Remove from Cart' : 'Add to Cart'}
        </a>
      );
    }
  }
}

export default AddToCartButton;
