import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import NProgress from 'nprogress';

import Products from './Products';

class Plans extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: [],
    }
  }

  componentWillMount() {
    NProgress.start()

    axios.get("/products/")
    .then((response) => {
      NProgress.done()

      this.setState({
        products: response.data
      })
    })
    .catch((error) => {
      NProgress.done()
    })
  }


  render() {
    return (
      <div class="">
        <div id="content" class="py-5">
          <div class="container">
            <Products products={this.state.products} />
          </div>
      </div>
    </div>
    )
  }
}

export default Plans
