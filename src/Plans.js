import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import NProgress from 'nprogress';

import Products from './Products';

class Plans extends Component {

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
            <Products products={this.props.products} />
          </div>
      </div>
    </div>
    )
  }
}

Plans.defaultProps = {
  products: [],
}

export default Plans
