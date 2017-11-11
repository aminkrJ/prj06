import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from './PageTitle'
import axios from 'axios';
import NProgress from 'nprogress';
import iziToast from 'izitoast';
import _ from 'underscore';

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
              <Link to={"/elixirs/" + product.slug}>
                <img className="card-img-top img-fluid" src={product.photo.original} alt={product.name} />
              </Link>
            </div>

            <div className="card-body">
              <small className="text-muted text-uppercase">{product.category}</small>
              <Link className="text-grey-dark" to={"/elixirs/" + product.slug}>
                <h4 className="card-title">
                  {product.name}
                </h4>
              </Link>
              <p class="text-muted"><small>{product.short_description}</small></p>
              <p className="card-text">
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
