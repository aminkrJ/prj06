import React, { Component } from 'react';
import PageTitle from './PageTitle'
import axios from 'axios';
import NProgress from 'nprogress';
import iziToast from 'izitoast';
import _ from 'underscore';

import ThumbImg from './img/thumb.png';

class Elixirs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    NProgress.start()

    axios.get("/products")
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

  renderProducts() {
    return this.state.products.map((product, index) => {
      return(
        <div key={index} className="col-lg-4">
          <div className="card product-card overlay-hover mb-4">
            <div className="pos-relative">
              <img className="card-img-top img-fluid" src={product.photo.medium} alt={product.name} />
            </div>

            <div className="card-body">
              <small className="text-muted text-uppercase">{product.category}</small>
              <h4 className="card-title">
                {product.name}
              </h4>
              <p class="text-muted"><small>{product.short_description}</small></p>
              <p className="card-text"> <i className="fa fa-star text-primary"></i> <i className="fa fa-star text-primary"></i> <i className="fa fa-star text-primary"></i> <i className="fa fa-star text-primary"></i> <i className="fa fa-star text-primary"></i>
              </p>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="">
        <PageTitle title="Smoothies & Elixirs" location={ {title: "Smoothies & Elixirs", path:"/elixirs"} } />
        <div id="content" className="py-3 py-lg-6">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 order-lg-2">
                <div className="row">
                  {this.renderProducts()}
                </div>
              </div>
              <div className="col-lg-3 order-lg-1">
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Elixirs
