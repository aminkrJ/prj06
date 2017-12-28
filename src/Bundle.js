import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import NProgress from 'nprogress';

import Products from './Products';

class Bundle extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentWillMount() {
  }

  render() {
    return (
      <div class="">
        <div id="content" class="py-5">
          <div class="container">
            <Products products={this.props.products} dropFromCart={this.props.dropFromCart} cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} />
          </div>
      </div>
    </div>
    )
  }
}

Bundle.defaultProps = {
  products: [],
}

export default Bundle
